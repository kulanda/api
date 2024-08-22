const puppeteer = require("puppeteer");

export async function generatePDFfromHTML(htmlContent, format = "a4") {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setContent(htmlContent);

  const pdfBuffer = await page.pdf({ format });

  const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

  return `data:application/pdf;base64,${pdfBase64}`;
}
