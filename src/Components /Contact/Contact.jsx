import "./contact.css";

function Contact() {
  function handleSubmit() {}

  return (
    <>
      <section className="contact_view_container" id="contact_view">
        <div className="contact_content">
          <h2>Contact Me</h2>
          <p>
            Thank you for visiting my portfolio! If you have any inquiries or
            would like to discuss potential collaborations,
            please use the contact form below.
          </p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" placeholder="First Name" />
            <input type="text" name="last_name" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="mobile_no" placeholder="Mobile No." />
            <textarea name="message" placeholder="Message" />
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
