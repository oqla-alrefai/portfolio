import { useState } from "react";
import "./contact.css";
import { Howl } from "howler";
import Swal from "sweetalert2";
import mail_sent from "../../assets/sounds/mail_sent.wav";
import mail_error from "../../assets/sounds/error.wav";

function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    message: "",
  });
  const [server, setServer] = useState(
    "https://email-47ta.onrender.com/"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) return;
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      fetch(server, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      Swal.fire(
        "Email Sent!",
        "Your Message has been Sent Successfully.",
        "success"
      );
      let success_mail_sent_sound = new Howl({
        src: [mail_sent],
      });
      success_mail_sent_sound.play();
    } catch (error) {
      Swal.fire("An Error Occurred!", "Your Message was not sent.", "error");
      let error_mail_sent_sound = new Howl({
        src: [mail_error],
      });
      error_mail_sent_sound.play();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className="contact_view_container" id="contact_view">
        <div className="contact_content">
          <h2>Contact Me</h2>
          <p>
            Thank you for visiting my portfolio! If you have any inquiries or
            would like to discuss potential collaborations, please use the
            contact form below.
          </p>
          <form
            action="realrefai.rr@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="mobile_no"
              placeholder="Mobile No."
              value={formData.mobile_no}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="button_container">
              <button type="submit">
                {isLoading ? <div className="form_loader"></div> : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
