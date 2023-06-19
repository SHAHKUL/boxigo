import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTractor,
  faRightFromBracket,
  faReceipt,
  faHomeUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav>
      <div>
        <h4>
          <span>
            <FontAwesomeIcon icon={faTractor} beatFade className="font-nav" />
          </span>
          My moves
        </h4>
      </div>
      <div>
        <h4>
          <span>
            <FontAwesomeIcon icon={faHomeUser} className="font-nav" />
          </span>
          My Profile
        </h4>
      </div>
      <div>
        <h4>
          <span>
            <FontAwesomeIcon icon={faReceipt} className="font-nav" />
          </span>
          Get Quote
        </h4>
      </div>
      <div>
        <h4>
          <span>
            <FontAwesomeIcon icon={faRightFromBracket} className="font-nav" />
          </span>
          Logout
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
