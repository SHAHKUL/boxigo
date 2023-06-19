import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faHome,
  faDirections,
  faLocation,
  faCalendar,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import View from "./View";

function Content() {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [index, setIndex] = useState();

  const clickEvent = (ind) => {
    setShow(!show);
    setIndex(ind);
  };

  useEffect(() => {
    axios.get("http://test.api.boxigo.in/sample-data/").then((res) => {
      setDatas(res.data.Customer_Estimate_Flow);
    });
  }, []);
  return (
    <>
      {console.log(index)}
      {datas?.map((value, idx) => {
        return (
          <div className="content" key={idx}>
            <h5 style={{ fontWeight: "bolder" }}>My Moves</h5>
            <div className="row1">
              <div>
                <h3 style={{ fontWeight: "bolder" }}>From</h3>
                <p style={{ width: "200px" }}>{value.moving_from}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} className="font" />
                <div className="circle"></div>
              </div>
              <div>
                <h3 style={{ fontWeight: "bolder" }}>To</h3>
                <p style={{ width: "200px" }}>{value.moving_to}</p>
              </div>
              <div>
                <h3 style={{ fontWeight: "bolder" }}>Request</h3>
                <p style={{ color: "#f6600f", fontWeight: "bold" }}>
                  {value.estimate_id}
                </p>
              </div>
            </div>
            <div className="row2">
              <div>
                <span>
                  <FontAwesomeIcon icon={faHome} className="font" />
                  <p>{value.property_size}</p>
                </span>{" "}
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faDirections} className="font" />
                  <p>32</p>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faLocation} className="font" />
                  <p>{value.distance}</p>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faCalendar} className="font" />
                  <p>{value.moving_on}</p>
                </span>
              </div>
              <div>
                <span>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    className="check"
                  />

                  <p>is Flexible</p>
                </span>
              </div>
              <div>
                <button
                  onClick={() => {
                    clickEvent(idx);
                  }}
                >
                  View More details
                </button>
              </div>
              <div>
                <button>Quotes Awaiting</button>
              </div>
            </div>
            <div className="row3">
              <span>
                <FontAwesomeIcon icon={faInfo} className="font" />
              </span>
              <h5 style={{ marginLeft: "5px" }}>Dislaimer </h5>
              <p>: Please Update your move date before two days of shifting</p>
            </div>
            <div className="show">
              {show && <View value={value} idx={index} />}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Content;
