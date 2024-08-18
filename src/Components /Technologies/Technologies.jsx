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
import socket from "../../assets/technologiesImages/socketio.png";
import firebase from "../../assets/technologiesImages/firebase.png"
import postman from "../../assets/technologiesImages/postman.png"
import express from "../../assets/technologiesImages/express.png"
import figma from "../../assets/technologiesImages/figma.png"
import React_Query from "../../assets/technologiesImages/query.png"
import linux from "../../assets/technologiesImages/linux.png"
import docker from "../../assets/technologiesImages/docker.png"
import python from "../../assets/technologiesImages/python.png"




function AboutUs() {
  let technologies = [
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
    {
      name: "GitHub",
      image: github,
    },
    {
      name: "Git",
      image: git,
    },
    {
      name:"socket.io",
      image:socket
    },
    {
      name:"firebase",
      image: firebase
    },
    {
      name: "postman",
      image: postman
    },
    {
      name: "express",
      image: express
    },
    {
      name: "figma",
      image: figma
    },
    {
      name: "React_Query",
      image: React_Query
    },
    {
      name:"linux",
      image:linux
    },
    {
      name:"docker",
      image:docker
    },
    {
      name:"python",
      image:python
    }

  ];

  return (
    <>
      <section className="technologies_view_container" id="technologies_view">
        <h2>Technologies</h2>
        <div className="technologies_content">
          {technologies.map((ele, index) => {
            return (
              <div className="image_box" key={index}>
                <span>{ele.name}</span>
                <img src={ele.image} alt={ele.name} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
