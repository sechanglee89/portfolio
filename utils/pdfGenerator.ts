import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function generatePDF(
  element: HTMLElement,
  filename: string = "portfolio.pdf"
) {
  try {
    // A4 사이즈 (mm)
    const a4Width = 210;
    const a4Height = 297;

    // 고해상도로 캡처
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    const imgWidth = a4Width;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // PDF 생성
    const pdf = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: imgHeight > a4Height ? "portrait" : "portrait",
    });

    let heightLeft = imgHeight;
    let position = 0;

    // 첫 페이지
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= a4Height;

    // 여러 페이지가 필요한 경우
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= a4Height;
    }

    // PDF 다운로드
    pdf.save(filename);
  } catch (error) {
    console.error("PDF 생성 중 오류:", error);
    throw error;
  }
}
