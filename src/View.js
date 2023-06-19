import React from "react";
import "./View.css";


function View({ value }) {
  return (
    <>
      <div className="view">
        <div className="row1">
          <h3 style={{ fontWeight: "bolder" }}>Additional Information</h3>
          <button>Edit Additional Info</button>
        </div>
        <div className="row2">
          <input placeholder="Test Data" />
        </div>
        <div className="row3">
          <h3 style={{ fontWeight: "bolder" }}>House Details</h3>
          <button>Edit House Details</button>
        </div>
        <div className="row4">
          <div>
            <h3 style={{ color: "#f6600f" }}>Existing House Details</h3>
            <div className="box1">
              <span>
                <h5 style={{ fontWeight: "bolder" }}>Floor No.</h5>
                <p>{value.old_floor_no}</p>
              </span>
              <span>
                <h5 style={{ fontWeight: "bolder" }}>Elevator Available</h5>
                <p>{value.old_elevator_availability}</p>
              </span>
              <span>
                <h5 style={{ fontWeight: "bolder" }}>
                  Distance from Elevator / Staircase to truck
                </h5>
                <p>{value.old_parking_distance}</p>
              </span>
            </div>
          </div>
          <div className="boxnew">
            <h3 style={{ color: "#f6600f" }}>New House Details</h3>
            <div className="box2">
              <span>
                <h5 style={{ fontWeight: "bolder" }}>Floor No.</h5>
                <p>{value.new_floor_no}</p>
              </span>
              <span>
                <h5 style={{ fontWeight: "bolder" }}>Elevator Available</h5>
                <p>{value.new_elevator_availability}</p>
              </span>
              <span>
                <h5 style={{ fontWeight: "bolder" }}>
                  Distance from Elevator / Staircase to truck
                </h5>
                <p>{value.new_parking_distance}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
