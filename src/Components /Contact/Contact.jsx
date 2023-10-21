import { useState } from "react";
import "./contact.css";
import { Howl } from "howler";
import Swal from "sweetalert2";
import mail_sent from "../../assets/sounds/mail_sent.wav";

function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    message: "",
  });
  const [server, setServer] = useState("http://localhost:3001/send-email");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(server, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire(
          "Email Sent!",
          "Your Email has been Sent Successfully.",
          "success"
        );
        let success_mail_sent_sound = new Howl({
          src: [mail_sent],
        });
        success_mail_sent_sound.play();
      } else {
        Swal.fire(
          "An Error Occurred!",
          "Your Email was not sent.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error:", error);
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
            action="kztahat96@gmail.com"
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
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
