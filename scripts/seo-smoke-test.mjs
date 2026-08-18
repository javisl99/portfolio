import assert from "node:assert/strict";

const baseUrl = (process.env.SEO_BASE_URL ?? "http://localhost:3001").replace(/\/$/, "");
const failures = [];
let sitemapUrls = [];

async function check(name, callback) {
  try {
    await callback();
    console.log(`✓ ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.error(`✗ ${name}`);
  }
}

async function fetchWithoutRedirect(pathname) {
  return fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
}

function getMetaContent(html, property) {
  const escapedProperty = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta[^>]+(?:property|name)=["']${escapedProperty}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    "i",
  );

  return html.match(pattern)?.[1];
}

await check("the root permanently redirects to the Spanish homepage", async () => {
  const response = await fetchWithoutRedirect("/");

  assert.equal(response.status, 308);
  assert.equal(new URL(response.headers.get("location"), baseUrl).pathname, "/es");
});

for (const locale of ["es", "en"]) {
  await check(`/${locale} exposes Javier Sánchez Lancha as the page author`, async () => {
    const response = await fetch(`${baseUrl}/${locale}`);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /Javier Sánchez Lancha/);
    assert.equal(getMetaContent(html, "author"), "Javier Sánchez Lancha");
    assert.match(html, /"@type":"Person"/);
  });

  await check(`/${locale}/about declares a profile page for Javier Sánchez Lancha`, async () => {
    const response = await fetch(`${baseUrl}/${locale}/about`);
    const html = await response.text();

    assert.equal(response.status, 200);
    assert.match(html, /"@type":"ProfilePage"/);
    assert.match(html, /"mainEntity":\{"@type":"Person"/);
    assert.match(html, /Javier Sánchez Lancha/);
  });

  await check(`/${locale}/cv permanently redirects to its PDF`, async () => {
    const response = await fetchWithoutRedirect(`/${locale}/cv`);

    assert.equal(response.status, 308);
    assert.match(response.headers.get("location") ?? "", /\.pdf$/);
  });

  await check(`/${locale} exposes reachable social images`, async () => {
    const pageResponse = await fetch(`${baseUrl}/${locale}`);
    const html = await pageResponse.text();
    const imageUrls = [
      getMetaContent(html, "og:image"),
      getMetaContent(html, "twitter:image"),
    ];

    assert.equal(pageResponse.status, 200);
    assert.ok(imageUrls.every(Boolean), "missing Open Graph or Twitter image metadata");

    for (const imageUrl of imageUrls) {
      const imageResponse = await fetch(new URL(imageUrl, baseUrl));

      assert.equal(imageResponse.status, 200, `${imageUrl} returned ${imageResponse.status}`);
      assert.match(imageResponse.headers.get("content-type") ?? "", /^image\//);
    }
  });
}

await check("the sitemap declares language alternates without unreliable lastmod values", async () => {
  const response = await fetch(`${baseUrl}/sitemap.xml`);
  const sitemap = await response.text();

  assert.equal(response.status, 200);
  assert.match(sitemap, /xmlns:xhtml=/);
  assert.match(sitemap, /hreflang="es"/);
  assert.match(sitemap, /hreflang="en"/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.doesNotMatch(sitemap, /<lastmod>/);

  sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(sitemapUrls.length, 16);
});

await check("every sitemap page is indexable and self-canonical", async () => {
  for (const url of sitemapUrls) {
    const response = await fetch(url);
    const html = await response.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];

    assert.equal(response.status, 200, `${url} returned ${response.status}`);
    assert.equal(canonical, url, `${url} declares ${canonical ?? "no canonical"}`);
    assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/i);
  }
});

if (failures.length > 0) {
  console.error("\nSEO smoke test failures:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`\nSEO smoke tests passed against ${baseUrl}`);
