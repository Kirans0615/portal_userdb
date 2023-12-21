import React from "react";
import { Outlet } from "react-router-dom";
import ObjectNavBar from "./ObjectNavBar";
import ObjectSideBar from "./objectSideBar";
import "../App.css";
import SaveDraftButton from "../components/builder/SaveDraftButton";

// export default function ObjectLayout ()  {
//   const [domain, setDomain] = React.useState(0);
//   return (
//     <div className="outlet-root">
//       <ObjectNavBar />
//       <div className="outlet-container">
//         <ObjectSideBar
//           className="object-sidebar"
//           domain={domain}
//           setDomain={setDomain}
//         />
//         <SaveDraftButton/>
//         <div className="outlet-content">
//           <Outlet context={{domain, setDomain}}/>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function ObjectLayout() {
  const [domain, setDomain] = React.useState(0);

  return (
    <div className="outlet-root">
      <ObjectNavBar />
      <div className="outlet-container">
        <div className="sidebar-and-button">
          <div className="object-sidebar-container">
            <ObjectSideBar
              className="object-sidebar"
              domain={domain}
              setDomain={setDomain}
            />
          </div>
          <div className="save-draft-button-container">
            <SaveDraftButton />
          </div>
        </div>
        <div className="outlet-content">
          <Outlet context={{ domain, setDomain }} />
        </div>
      </div>
    </div>
  );
}
