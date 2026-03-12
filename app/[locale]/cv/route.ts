import { createResumePdf } from "@/lib/cv";
import { isLocale } from "@/lib/i18n";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return new Response("Not found", { status: 404 });
  }

  const pdf = createResumePdf(locale);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="javier-resume-${locale}.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
