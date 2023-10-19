// import "./header.css";

// function Header() {

//   let iconsArray = [
//     {
//       category: "Home",
//       icon: <i className="ri-home-2-line"></i>,
//       destination: "home_view",
//     },
//     {
//       category: "Technologies",
//       icon: <i className="ri-computer-line"></i>,
//       destination: "technologies_view",
//     },
//     {
//       category: "Services",
//       icon: <i className="ri-customer-service-2-line"></i>,
//     },
//     {
//       category: "Work",
//       icon: <i className="ri-suitcase-line"></i>,
//     },
//     {
//       category: "Contact_Me",
//       icon: <i className="ri-phone-line"></i>,
//       destination: "contact_view",
//     },
//   ];

//   return (
//     <> 
//       <header className="header_container">
//         {/* Section for screens more than 1000px */}
//         <nav>
//           <ul>
//             {iconsArray.map((element, index) => {
//               return (
//                 <li key={index}>
//                   <a href={`#${element.destination}`}>
//                     <span className="header_navbar_icons">{element.icon}</span>
//                     <span className="header_navbar_text">
//                       {element.category}
//                     </span>
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// }

// export default Header;
