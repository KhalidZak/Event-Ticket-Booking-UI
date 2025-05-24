import "../styles/formPage.css";
import { useRef, useState } from "react";
import { Header } from "../components/Header";
import cloudDownload from "../assets/icons/cloudDownload.svg";
import { ControlButtons } from "../components/ControlButtons";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export const FormPage: React.FC = () => {
  const location = useLocation();
  const { selectedCard, tickNum } = location.state || {};
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<{ image?: string; form?: string }>({});
  const navigate = useNavigate();

  const cloudName = "dauw5x4uy";
  const uploadPreset = "Candidate";

  //handle file selection for image
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setError((prev) => ({ ...prev, image: undefined })); //clear image error 
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  }

  //input change handler for form
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    //only clear form error if all fields are now filled
    if (
      updatedForm.name.trim() &&
      updatedForm.email.trim() &&
      updatedForm.message.trim()
    ){
      setError((prev)=>({...prev, form:undefined}));
    }
  };

  //handle upload for all
  const handleUpload = async () => {
    const { name, email, message } = formData;
    let hasError = false;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError((prev) => ({ ...prev, form: "Please fill in all form fields!" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, form: undefined }));
    }

    if (!image) {
      setError((prev) => ({ ...prev, image: "please select an image!" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, image: undefined }));
    }

    //stop if any error exist
    if (hasError) {
      return
    }

    const data = new FormData();
    data.append('file', image!);
    data.append('upload_preset', uploadPreset);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      );
      const imageUrl = res.data.secure_url;

      navigate("/DownloadTicPage", {
        state: {
          formData,
          imageUrl,
          selectedCard,
          tickNum,
        },
      });
    } catch (err: unknown) {
      setError((prev) => ({ ...prev, image: "upload failed." }));
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <div className="form-page">
        <div className="form">
          <header className="form__header">
            <div className="form__header-title">Attendee Details</div>
            <div className="form__header-process">Step 2/3</div>
          </header>

          <div className="form__upload-section">
            <div className="img-container">
              <div className="picture-instruct">Upload Profile Photo</div>
              <div className="picture-back"></div>
              <div className="picture" onClick={triggerFileSelect} style={{ cursor: "pointer" }}>
                <img src={cloudDownload} alt="upload icon" />
                {image ? (<div>{image.name}</div>) : (<>
                  <div>Drag & drop or click to</div>
                  <div>upload</div>
                </>
                )}
                <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} style={{ display: "none" }} />
              </div>
            </div>
            {error.image && <p style={{color: "red", marginTop: "1rem"}}>{error.image}</p>}

            <div className="separation"></div>

            <form className="form__inputs">
              <div>
                <label htmlFor="name">Enter your name</label><br />
                <input id="name" type="text" name="name" required autoComplete="off" onChange={handleInputChange} />
              </div><br />
              <div>
                <label htmlFor="email">Enter Email*</label><br />
                <input id="email" type="email" name="email" required autoComplete="off" onChange={handleInputChange} />
              </div><br />
              <div>
                <label htmlFor="message">Special request?</label><br />
                <textarea id="message" name="message" required placeholder="Textarea" onChange={handleInputChange}></textarea>
              </div><br />
            </form>
            {error.form && <p className="error" style={{color: "red"}}>{error.form}</p>}
            <div className="control-buttons">
              <ControlButtons onNext={handleUpload} onCancel={() => navigate("/")} nextRoute="Next" cancelRoute="Cancel" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

