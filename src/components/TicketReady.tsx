import "../styles/ticketReady.css";
import Input from "../assets/images/Input.svg";
import { ControlButtons } from "./ControlButtons";
import { Header } from "./Header";
export const TicketReady = () => {
  return (
    <div>
        <Header />
  <div className="ticket-ready">
        <div className="heading">
        <h1>Your Ticket is booked</h1>
         <div className="text">Check your email for a copy or you can download</div>
        </div>
        <img src={Input} alt="ticket" />
        <ControlButtons />
    </div>
    </div>
  )
}
