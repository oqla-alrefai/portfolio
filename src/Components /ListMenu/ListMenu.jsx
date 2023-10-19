import { useState } from "react";
import "./listMenu.css";
import DropdownMenu from "./DropdownMenu/DropdownMenu.jsx";

function ListMenu() {
  let [showMenuItems, setShowMenuItems] = useState(false);

  let iconsArray = [
    {
      category: "Home",
      icon: <i className="ri-home-2-line"></i>,
      destination: "home_view",
    },
    {
      category: "Technologies",
      icon: <i className="ri-computer-line"></i>,
      destination: "technologies_view",
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
      destination: "contact_view",
    },
  ];

  return (
    <>
      {/* Hidden section for screens less than 1000px */}
      <section className="menu_list_container" id="list_menu">
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
    </>
  );
}

export default ListMenu;
