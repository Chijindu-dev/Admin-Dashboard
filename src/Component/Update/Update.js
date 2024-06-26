import React from "react";
import "./Update.css";
import { UpdatesData } from "../../Data/Data";

const Update = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time.toLocaleTimeString()}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Update;
