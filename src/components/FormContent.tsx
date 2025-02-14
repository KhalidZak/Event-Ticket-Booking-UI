import "../styles/formContent.css";

export const FormContent = () => {
  return (
    <div className="form-content">
      <header>
        <div className="title">Ticket Selection</div>
        <div className="process">Step 1/3</div>
      </header>   
        <div className="section-container">
          <div className="tech-fest-card">
            <h1>Techember Fest ''25</h1>
            <p className="first-p">Join us for an unforgettable experience at<br/>[Event Name]! Secure your spot now.</p>
            <p className="second-p">📍 [Event Location] | | March 15, 2025 | 7:00 PM</p>
          </div>
          <div className="seperation"></div>
          <div className="tech-fest-card-group">
            <div className="option">Select Ticket Type:</div><br/>
            <div className="sub-container">
              <div className="first-card">
                <h2>Free</h2><br/>
                <span>REGULAR ACCESS</span>
                <div className="">20/52</div>
              </div>
              <div className="second-card">
                <h2>$150</h2><br/>
                <span>VIP ACCESS</span>
                <div className="">20/52</div>
              </div>
              <div className="third-card">
                <h2>$150</h2><br/>
                <span>VVIP ACCESS</span>
                <div className="">20/52</div>
              </div>
            </div>
          </div>
          <div className="selection-container">
          <label htmlFor="number-of-tickets">Number of Tickets</label><br/>
          <select className="select" id="tickets-number">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">6</option>
           <option value="5">7</option>
           <option value="5">8</option>
           <option value="5">9</option>
           <option value="5">10</option>
           </select>
          </div>
          <div className="control-buttons">
            <button className="cancel">Cancel</button>
            <button className="next">Next</button>
          </div>
        </div>
    </div>
  )
}
