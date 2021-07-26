import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";

function EmailRow({ title, subject, description, time }) {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
