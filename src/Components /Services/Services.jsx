import "./services.css";
import webDesign from "../../assets/servicesImages/webDesign-rb.png";
import responsiveWD from "../../assets/servicesImages/responsiveWD-rb.png";
import user_friendly from "../../assets/servicesImages/user_friendly-rb.png";
import performance_optimization from "../../assets/servicesImages/performance_optimization-rb.png";
import searchEngineOptimization from "../../assets/servicesImages/SEO-rb.png";
import training_support from "../../assets/servicesImages/T_S-rb.png";

function services() {
  let services = [
    {
      serviceName: "Custom Website Design",
      servicePitch:
        "I'll create a unique and visually appealing website that reflects your brand and engages your target audience.",
      serviceIcon: webDesign,
    },
    {
      serviceName: "Responsive Web Development",
      servicePitch:
        "Your website will look and function flawlessly on all devices, ensuring a seamless experience for your visitors.",
      serviceIcon: responsiveWD,
    },
    {
      serviceName: "User-Friendly Interface",
      servicePitch:
        "I'll design an intuitive and easy-to-navigate interface, making it simple for users to find what they need on your site.",
      serviceIcon: user_friendly,
    },
    {
      serviceName: "Performance Optimization",
      servicePitch:
        "I'll optimize your website for speed, ensuring that your visitors don't experience delays and can access information quickly.",
      serviceIcon: searchEngineOptimization,
    },
    {
      serviceName: "Search Engine Optimization (SEO)",
      servicePitch:
        "By implementing SEO best practices, I'll help your website rank higher on search engines, making it easier for potential customers to find you.",
      serviceIcon: performance_optimization,
    },
    {
      serviceName: "Training and Support",
      servicePitch:
        "I'll provide training so that your team can confidently manage and update the website. Plus, ongoing support to address any questions or issues.",
      serviceIcon: training_support,
    },
  ];

  return (
    <>
      <section className="services_view_container" id="services_view">
        <h2>My Services</h2>
        <p className="services_heading_paragraph">I craft visually stunning and user-friendly websites that elevate your brand, ensuring a seamless online experience for your audience.</p>
        <div className="servicers_boxes">
          {services.map((element) => {
            return (
              <div className="one_service_box">
                <img src={element.serviceIcon} alt={element.serviceName} />
                <h4>{element.serviceName}</h4>
                <p>{element.servicePitch}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default services;
