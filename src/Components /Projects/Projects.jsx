import "./projects.css";
import react_animation from "../../assets/my_projects/react_animation.png";
import restaurant_chain from "../../assets/my_projects/restaurant_chain.png";
import Bassma from "../../assets/my_projects/Bassma.png";

function Projects() {
  let projects = [

    {
      project_name: "Bassma store",
      project_image: Bassma,
      description:
        "An Mern stack web application to CRUD products, Auth, and CRUD item to cart using css module",
      github_link: "https://github.com/oqla-alrefai/basmeh",
      live_url: "https://basmeh-git-main-oqlaalrefais-projects-5a2c86d0.vercel.app/",
    },
    {
      project_name: "Restaurant Chain Manager",
      project_image: restaurant_chain,
      description:
        "A React single page application to display, create, delete and update (CRUD ops) a chain of restaurants with a complete setup to a backend server APIs to handle data exchange as a bridge to mySQL DB.",
      github_link: "https://github.com/oqla-alrefai/Restauant-chain",
      live_url: "https://restauant-chain.vercel.app/",
    },

    {
      project_name: "React Animation",
      project_image: react_animation,
      description:
        "A collection of stylish and customizable CSS3 animations and React components to enhance the visual appeal of your web applications. Whether you're building a dynamic website or a sleek web app.",
      github_link: "https://github.com/oqla-alrefai/React-Animtion",
      live_url: "https://react-animtion.vercel.app/",
    },

  ];

  return (
    <>
      <section className="projects_view_container" id="projects_view">
        <h2>My Projects</h2>
        <p className="projects_heading_paragraph">
          I engineer transformative digital experiences, bringing ideas to life
          through elegant code and innovative design solutions.
        </p>
        <div className="projects_boxes">
          {projects.map((element, index) => {
            return (
              <div className="one_project_box" key={index}>
                <img src={element.project_image} alt={element.project_name} />
                <div className="project_text_content">
                  <h4>{element.project_name}</h4>
                  <p>{element.description}</p>
                  <div className="project_links">
                    {element.github_link ? (
                      <a href={element.github_link} target="_blank">
                        <span>Repo Link</span>
                        <i class="ri-github-fill"></i>
                      </a>
                    ) : (
                      <></>
                    )}
                    {element.live_url ? (
                      <a href={element.live_url} target="_blank">
                        <span>Live URL</span>
                        <i class="ri-links-line"></i>
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
