import "./main.css";
import { Howl } from "howler";
import download from "../../../assets/sounds/download.wav";
import myResume3 from "../../../assets/resumes/oqlaAlrefai.pdf";

function Main() {
  let handleDownload = () => {
    let sound = new Howl({
      src: [download],
    });
    sound.play();
  };

  return (
    <>
      <section className="home_text_area">
        <span className="home_greetings">
          <span>Hello, </span>I'm
        </span>
        <h1>Okleh Alrefai</h1>
        <span className="job_title">I'm a Ful-stack Web Developer </span>
        <p>
          I am a dedicated web developer (MERN STACK) instructor with a solid foundation in
          Computer Science, holding a bachelor's degree in the
          field. Following my graduation, I undertook a transformative journey
          by enrolling in an intensive six-month web development course at the
          ASAC department in Luminous Technical University College. The course
          covered a comprehensive range of front-end technologies, including
          JavaScript, HTML, CSS, React.js, ContextAPI, Redux, and various tools and
          libraries such as Bootstrap and MUI. Exploring the back-end, I gained
          proficiency in Node.js, RESTful APIs, SQL, and noSQL databases.
          Alongside technical skills, I refined my collaboration abilities by
          navigating Git and GitHub.
          <br />
          <div className="middle_image_container"></div>
          <br />
          After completing the course, I assumed the role of a full-stack
          developer and an instructor at ASAC. Over the course of two
          rewarding years, I actively contributed to diverse projects utilizing
          GitHub Projects.
          Simultaneously, I took on the role of a mentor, guiding students
          through the same web development course I had successfully completed.
          This dual role allowed me to seamlessly blend practical experience
          with educational support, creating an environment of continuous
          learning and growth.
        </p>
        <a href={myResume3} download="Okleh Alrefai" onClick={handleDownload}>
          <button>Download Resume</button>
        </a>
      </section>
    </>
  );
}

export default Main;