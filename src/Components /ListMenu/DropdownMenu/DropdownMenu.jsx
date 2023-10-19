import "./dropdownMenu.css";

function DropdownMenu(props) {
  return (
    <>
      {props.iconsArray.map((element, index) => {
        return (
          <li
            key={index}
            className={`sidebar_list_ showSidebar${props.showMenuItems}`}
            style={{ "--i": index + 1 }}
          >
            <a href={`#${element.destination}`}>
              <span className="header_navbar_text">{element.category}</span>
              <span className="header_navbar_icons">{element.icon}</span>
            </a>
          </li>
        );
      })}
    </>
  );
}

export default DropdownMenu;
