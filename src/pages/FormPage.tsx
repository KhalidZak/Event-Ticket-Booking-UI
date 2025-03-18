import { useState } from "react";
// import "../styles/formPage.css";
import { Header } from "../components/Header";
// import { ControlButtons } from "../components/ControlButtons";
import cloudDownload from "../assets/icons/cloudDownload.svg";

export const FormPage: React.FC = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form Data:", formData);
    };
  
  return (
  <div className="form-page">
    <Header />
    <div className="form-page--content">
    <header>
        <div className="title">Ticket Selection</div>
        <div className="process">Step 2/3</div>
    </header>   
    
      <div className="form-page-section--container">
        <div className="img-container">
          <div className="picture-instruct">Upload Profile Picture  </div>
          <div className="picture-back">  </div>
          <div className="picture">
            <img src={cloudDownload} alt="" />
            Drag & drop or click to<br/>upload
          </div>
      </div>

      <div className="seperation"></div>

      <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Enter your name</label><br/>
          <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required /><br/>
        <label htmlFor="email">Enter Email*</label><br/>
          <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required /><br/>
        <label htmlFor="message">Special request?</label><br/>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Textarea"></textarea><br/>
      </form>
    </div>
    {/* <ControlButtons nextRoute="TicketReady" cancelRoute="/"/> */}
    </div>
  </div>
  </div>
  )
}

