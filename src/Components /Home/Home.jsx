import "./home.css";
import Main from "./MainContent/Main.jsx";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      <section className="home_view_container" id="home_view">
        <div className="left_side_image"></div>
        <section className="home_content">
          <span className="header_logo">MY_PORTFOLIO</span>
          <Main />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default Home;
