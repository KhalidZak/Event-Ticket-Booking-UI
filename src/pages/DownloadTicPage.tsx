import "../styles/downloadTicPage.css";
import { ControlButtons } from "../components/ControlButtons";
import { Header } from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import subtract from "../assets/images/Subtract.svg";
import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import html2canvas from "html2canvas";

export const DownloadTicPage: React.FC = () => {
  const location = useLocation();
  const { formData, imageUrl, selectedCard, tickNum } = location.state || {};
  const navigate = useNavigate();
  const barcodeRef = useRef<SVGSVGElement | null>(null);
  const ticketRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (barcodeRef.current && formData?.email) {
      //you can customize this input - e.g., include name + email + ticketNum
      const barcodeValue = `${formData.email} - ${tickNum}`;
      JsBarcode(barcodeRef.current, barcodeValue, {
        format: "CODE128",
        lineColor: "#ffffff",
        background: "transparent",
        width: .9,
        height: 60,
        displayValue: true,
      });
    }
  }, [formData, tickNum]);

  //handle download
  const handleDownload = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, {
      useCORS: true, //allows cross-origin image loading
      scale: 2, //better quality
      backgroundColor: "transparent",
    });
    const link = document.createElement("a");
    link.download = `Techember_Ticket_${formData.name}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return ( 
    <div>
      <Header />
      <div className="ticket-ready">
        <div className="heading">
          <h1>Your Ticket is booked!</h1>
          <div className="text">Check your email for a copy or you can download</div>
        </div>
        {/* TICKET CONTENT TO DOWNLOAD */}
        <div className="e-tick" ref={ticketRef}>
          <img src={subtract} alt="ticket" className="pic-frame" />
          <div className="tic-info">
            <div className="header">
              <h1>Techember Fest ”25</h1>
              <div>📍 04 Rumens road, Ikoyi, Lagos</div>
              <div>📅 March 15, 2025 | 7:00 PM</div>
            </div>
            <img src={imageUrl} alt="ticket picture" className="tic-picture" />
            <div className="table">
              <div className="user-info">
                <div className="user-info_name">
                  <div className="title">Enter your name</div>
                  <div className="name">{formData.name}</div>
                </div>
                <div className="user-info_contact">
                  <div className="title">Enter your email*</div>
                  <div className="mail">{formData.email}</div>
                </div>
              </div>

              <div className="table_tic-info">
                <div className="tic-info_type">
                  <div className="title">Ticket Type</div>
                  <div className="the-type">{selectedCard?.toUpperCase()}</div>
                </div>
                <div className="tic-info_numb">
                  <div className="title">Ticket for:</div>
                  <div className="the-numb">{tickNum}</div>
                </div>
              </div>
              <div className="special-request">
                <div>Special request?</div>
                <div>{formData.message}</div>
              </div>
            </div>
          </div>
          <div className="barcode">
            <svg ref={barcodeRef}></svg>  
          </div>
        </div>
        <ControlButtons onNext={() => navigate("/")} onCancel={handleDownload} nextRoute="Book Another Ticket" cancelRoute="Download" />
      </div>
    </div>
  )
}
