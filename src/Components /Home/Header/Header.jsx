import { useState } from "react";
import "./header.css";
import DropdownMenu from "./DropdownMenu/DropdownMenu.jsx";

function Header() {
  let [showMenuItems, setShowMenuItems] = useState(false);

  let iconsArray = [
    {
      category: "Home",
      icon: <i className="ri-home-2-line"></i>,
    },
    {
      category: "About",
      icon: <i className="ri-user-3-line"></i>,
    },
    {
      category: "Services",
      icon: <i className="ri-customer-service-2-line"></i>,
    },
    {
      category: "Work",
      icon: <i className="ri-suitcase-line"></i>,
    },
    {
      category: "Contact_Me",
      icon: <i className="ri-phone-line"></i>,
    },
  ];

  return (
    <>
      <header className="header_container">
        <span className="header_logo">MY_PORTFOLIO</span>
        {/* Hidden section for screens less than 1000px */}
        <section className="menu_list_container">
          <button
            className={`small_screens_list menu_items_clicked_${showMenuItems}`}
            onClick={() => setShowMenuItems(!showMenuItems)}
          >
            <i className="ri-list-check"></i>
          </button>
          <DropdownMenu
            iconsArray={iconsArray}
            showMenuItems={showMenuItems}
            className="menu_items"
          />
        </section>
        {/* Section for screens more than 1000px */}
        <nav>
          <ul>
            {iconsArray.map((element, index) => {
              return (
                <li key={index}>
                  <a href="#">
                    <span className="header_navbar_icons">{element.icon}</span>
                    <span className="header_navbar_text">
                      {element.category}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
