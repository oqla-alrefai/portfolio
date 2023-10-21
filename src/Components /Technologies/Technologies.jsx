import "./technologies.css";
import HTML5 from "../../assets/technologiesImages/HTML5-rb.png";
import CSS3 from "../../assets/technologiesImages/CCS3-rb.png";
import Javascript from "../../assets/technologiesImages/javascript-Y-rb.png";
import REACT from "../../assets/technologiesImages/REACT-rb.png";
import redux from "../../assets/technologiesImages/redux-rb.png";
import materialUI from "../../assets/technologiesImages/materialUI-rb.png";
import bootstrap from "../../assets/technologiesImages/bootstrap-rb.png";

import NodeJS from "../../assets/technologiesImages/NodeJS-rb.png";
import sql_database from "../../assets/technologiesImages/sql_database-rb.png";
import mongo_logo from "../../assets/technologiesImages/mongo_logo-rb.png";

import github from "../../assets/technologiesImages/github-rb.png";
import git from "../../assets/technologiesImages/git-rb.png";
import jira from "../../assets/technologiesImages/jira-rb.png";

function AboutUs() {
  let technologies = [
    {
      category: "Front-End",
      className: "front_end_section",
      images: [
        {
          name: "HTML 5",
          image: HTML5,
        },
        {
          name: "CSS 3",
          image: CSS3,
        },
        {
          name: "JavaScript",
          image: Javascript,
        },
        {
          name: "React.js",
          image: REACT,
        },
        {
          name: "redux.js",
          image: redux,
        },
        {
          name: "Material UI",
          image: materialUI,
        },
        {
          name: "bootstrap",
          image: bootstrap,
        },
      ],
    },
    {
      category: "Back-End",
      className: "back_end_section",
      images: [
        {
          name: "Node JS",
          image: NodeJS,
        },
        {
          name: "SQL_database",
          image: sql_database,
        },
        {
          name: "Mongo DB",
          image: mongo_logo,
        },
      ],
    },
    {
      category: "Project Management Tools",
      className: "project_management_section",
      images: [
        {
          name: "GitHub",
          image: github,
        },
        {
          name: "Git",
          image: git,
        },
        {
          name: "Jira",
          image: jira,
        },
      ],
    },
  ];

  return (
    <>
      <section className="technologies_view_container" id="technologies_view">
        <h2>Technologies</h2>
        <div className="technologies_content">
          {technologies.map((element, idx) => {
            return (
              <div
                className={`${element.className} all_images_categories`}
                key={idx}
              >
                <h3>{element.category}</h3>
                <div className="images_category">
                  {element.images.map((ele, index) => {
                    return (
                      <div className="image_box" key={index}>
                        <span>{ele.name}</span>
                        <img src={ele.image} alt={ele.name} />
                      </div>
                    );
                  })}
                </div> 
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
