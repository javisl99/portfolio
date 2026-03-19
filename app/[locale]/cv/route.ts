import { isLocale } from "@/lib/i18n";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return new Response("Not found", { status: 404 });
  }

  return Response.redirect(new URL("/CV_javierSanchezLancha.pdf", request.url), 307);
}
