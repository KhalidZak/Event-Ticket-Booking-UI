import "../styles/ticketReady.css";
import Input from "../assets/images/Input.svg";
// import { ControlButtons } from "../components/ControlButtons";
import { Header } from "../components/Header";

export const DownloadTicPage = () => {
  return (
    <div>
      <Header />
      <div className="ticket-ready">
        <div className="heading">
          <h1>Your Ticket is booked</h1>
          <div className="text">Check your email for a copy or you can download</div>
        </div>
        <img src={Input} alt="ticket" />
        {/* <ControlButtons nextRoute="/FinalPage" cancelRoute="/" /> */}
      </div>
    </div>
  )
}
