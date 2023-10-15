import "./header.css";

function Header() {
  let iconsArray = [
    {
      category: "Home",
      icon: <i class="ri-home-2-line"></i>,
    },
    {
      category: "Profile",
      icon: <i class="ri-user-3-line"></i>,
    },
    {
      category: "Services",
      icon: <i class="ri-customer-service-2-line"></i>,
    },
    {
      category: "Work",
      icon: <i class="ri-suitcase-line"></i>,
    },
    {
      category: "Contact_Me",
      icon: <i class="ri-phone-line"></i>,
    },
  ];

  return (
    <>
      <header className="header_container">
        <span className="header_logo">MY_PORTFOLIO</span>
        <nav>
          <ul>
            {iconsArray.map((element, index) => {
              return (
                <li key={index}>
                  <a href="#">
                    <span className="header_navbar_icons">
                      {element.icon}
                    </span>
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
