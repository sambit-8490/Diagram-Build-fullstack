import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import { toast } from "react-toastify";

export const ExportButton = ({ elementId }) => {
  const exportToPdf = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    try {
      const canvas = await htmlToImage.toCanvas(element);
      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      pdf.save("ER_Diagram.pdf");
      toast.success("PDF export Successfully")
    } catch (error) {

      console.log("Error in PDF Generating", error);
      toast.error("Error in PDF Generating")
    }
  };

  const exportToImage = async () => {
    const element = document.getElementById(elementId);
    if (!element) return;

    htmlToImage
      .toPng(element)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "ER_Diagram.png";
        link.href = dataUrl;
        link.click();
        toast.success("Image export Successfully")
      })
      .catch((error) => {
        toast.error("oops, something went wrong!")
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-5 z-10 items-center justify-center">
      <button
        onClick={exportToPdf}
        className="flex items-center justify-center bg-[#7c294f] hover:bg-[#6a2343] text-white px-4 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
        aria-label="Export as PDF"
      >
        <i className="fas fa-file-pdf mr-2 text-center md:hidden"></i>
        <span className="hidden md:inline">Export as PDF</span>
      </button>
      <button
        onClick={exportToImage}
        className="flex items-center justify-center bg-[#7c294f] hover:bg-[#6a2343] text-white px-4 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
        aria-label="Export as Image"
      >
        <i className="fas fa-image mr-2 text-center md:hidden"></i>
        <span className="hidden md:inline">Export as Image</span>
      </button>
    </div>
  );
};
