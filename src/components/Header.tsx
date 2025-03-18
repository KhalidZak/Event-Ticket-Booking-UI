import "../styles/header.css";
import thumb from "../assets/icons/thumb.svg";
import ticz from "../assets/icons/ticz.svg";
import  Link from "../assets/icons/Link.svg";

export const Header = () => {
return (
    <div className="nav">
      <div className="nav-icons">
      <img src={thumb} alt="icon" />
      <img src={ticz} alt="icon" />
      </div>
     <div className="nav-texts">
      <div className="event">Event</div>
      <div className="my-ticket">My Tickets</div>
      <div className="about-project">About Project</div>
     </div>
     <div className="nav-ticket-button">
     <img src={Link} alt="ticket-button" />
     </div>
    </div>
  )
}
