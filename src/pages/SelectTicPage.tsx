import { useState } from "react";
import "../styles/selectTicPage.css";
import "../styles/header.css"
import { ControlButtons } from "../components/ControlButtons";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const SelectTicPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [tickNum, setTickNum] = useState<string | number | readonly string[] | undefined>(undefined);
  const [tickTypeErro, setTickTypeError] = useState<string>('');
  const [tickNumError, setTickNumError] = useState<string>('');
  const navigate = useNavigate();

  const handleNext = () => {
    let hasError = false;
    if (!selectedCard) {
      setTickTypeError('You have not selected the card type!');
      hasError = true;
    } else {
      setTickTypeError('');
    }

    if (!tickNum || tickNum === '') {
      setTickNumError('You have not selected the number of cards!');
      hasError = true;
    } else {
      setTickNumError('');
    }

    if (hasError) {
      return;
    }
    navigate("/FormPage", {
      state: {
        selectedCard, tickNum
      },
    });
  }

  const handleCancel = () => {
    navigate("/");
  }

  const handleClick = (cardType: string) => {
    setSelectedCard(cardType);
  }
  //
  const handleFirstCard = () => {
    handleClick("REGULAR ACCESS");
  }
  const firstCardChange = {
    backgroundColor: selectedCard === "REGULAR ACCESS" ? "rgba(255, 255, 255, 0.192)" : ''
  }
  //
  const handleSecCard = () => {
    handleClick("VIP ACCESS");
  }
  const secCardChange = {
    backgroundColor: selectedCard === "VIP ACCESS" ? "rgba(255, 255, 255, 0.192)" : ''
  }
  //
  const handleThirdCard = () => {
    handleClick("VVIP ACCESS");
  }
  const thirdCardChange = {
    backgroundColor: selectedCard === "VVIP ACCESS" ? "rgba(255, 255, 255, 0.192)" : ''
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
                <h2>$300</h2><br />
                <span>VVIP ACCESS</span>
                <div className="number">20/52</div>
              </div>
            </div>
            {tickTypeErro && <p style={{ color: "red", margin: ".3rem 0 0 7.3rem" }}>{tickTypeErro}</p>}
          </div>
          <div className="selection-container">
            <label htmlFor="number-of-tickets">Number of Tickets</label><br />
            <select className="select" id="tickets-number" value={tickNum} onChange={(e) => setTickNum(e.target.value)}>
              <option value={""} disabled selected>select number of tickets</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {tickNumError && <p style={{ color: "red", margin: ".3rem 0 0 0" }}>{tickNumError}</p>}
            <ControlButtons onNext={handleNext} onCancel={handleCancel} nextRoute="Next" cancelRoute="Cancel" />
          </div>
        </div>
      </div>
    </>
  )
}
