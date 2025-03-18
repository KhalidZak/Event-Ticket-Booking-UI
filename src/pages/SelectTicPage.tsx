import { useState } from "react";
import "../styles/selectTicPage.css";
import "../styles/header.css"
import { ControlButtons } from "../components/ControlButtons";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const SelectTicPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selectedCard) {
      setError("You have not selected the ticket type!");
      return;
    }
    setError('');
    navigate("/FormPage");
  }

  const handleCancel = () => {
    navigate("/");
  }

  const handleClick = (cardType: string) => {
    setSelectedCard(cardType);
  }
  //
  const handleFirstCard = () => {
    handleClick("firstCard");
  }
  const firstCardChange = {
    backgroundColor: selectedCard === "firstCard" ? "rgba(255, 255, 255, 0.192)" : ''
  }
  //
  const handleSecCard = () => {
    handleClick("sectCard");
  }
  const secCardChange = {
    backgroundColor: selectedCard === "sectCard" ? "rgba(255, 255, 255, 0.192)" : ''
  }
  //
  const handleThirdCard = () => {
    handleClick("thirdCard");
  }
  const thirdCardChange = {
    backgroundColor: selectedCard === "thirdCard" ? "rgba(255, 255, 255, 0.192)" : ''
  }

  return (
    <>
    <Header />
      <div className="form-content">
        <header>
          <div className="title">Ticket Selection</div>
          <div className="process">Step 1/3</div>
        </header>
        <div className="section-container">
          <div className="tech-fest-card">
            <h1>Techember Fest ''25</h1>
            <p className="first-p">Join us for an unforgettable experience at<br />[Event Name]! Secure your spot now.</p>
            <p className="second-p">📍 [Event Location] | | March 15, 2025 | 7:00 PM</p>
          </div>
          <div className="seperation"></div>
          <div className="tech-fest-card-group">
            <div className="option">Select Ticket Type:</div><br />
            <div className="sub-container">
              <div className="first-card" onClick={handleFirstCard} style={firstCardChange}>
                <h2>Free</h2><br />
                <span>REGULAR ACCESS</span>
                <div className="number">20/52</div>
              </div>
              <div className="second-card" onClick={handleSecCard} style={secCardChange}>
                <h2>$150</h2><br />
                <span>VIP ACCESS</span>
                <div className="number">20/52</div>
              </div>
              <div className="third-card" onClick={handleThirdCard} style={thirdCardChange}>
                <h2>$150</h2><br />
                <span>VVIP ACCESS</span>
                <div className="number">20/52</div>
              </div>
            </div>
          </div>
          <div className="selection-container">
            <label htmlFor="number-of-tickets">Number of Tickets</label><br />
            <select className="select" id="tickets-number">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <ControlButtons onNext={handleNext} onCancel={handleCancel} nextRoute="Next" cancelRoute="Cancel" />
            {error && <p style={{ color: "red", marginBottom: "1rem"}}>{error}</p>}
          </div>
        </div>
      </div>
    </>
  )
}
