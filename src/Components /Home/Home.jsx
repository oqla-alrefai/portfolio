import "./Home.css";
import main_photo from "../../assets/home_photo.jpg";
import Header from "./Header/Header.jsx";
import Main from "./MainContent/Main.jsx";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      <section className="home_view_container">
        <img src={main_photo} alt="my personal image" />
        <section className="home_content">
          <Header />
          <Main />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default Home;
