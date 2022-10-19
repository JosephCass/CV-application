import { useState } from "react";
import deleteIcon from "../assets/square-minus-regular.svg";
import editIcon from "../assets/pencil-solid.svg";

export default function EducationInfoEdit(props) {
  function displayData() {
    let dataArr = props.education.map((curr, indx) => {
      return (
        <div className="data-container" key={`${indx} ${curr.school}`}>
          <div className="data-text-container">
            <p>
              <span className="data-field">School - </span>
              {curr.school}
            </p>
            <p>
              <span className="data-field">Subject - </span>
              {curr.subject}
            </p>
            <p>
              <span className="data-field">Degree - </span>
              {curr.degree}
            </p>
            <p>
              <span className="data-field">Date of study - </span>
              {curr.date}
            </p>
          </div>
          <img
            onClick={() => {
              props.deleteEducation(indx);
            }}
            className="data-delete-img"
            src={deleteIcon}
            alt="Delete education data icon"
          />
        </div>
      );
    });
    return dataArr;
  }

  let educationTemplate = (
    <div className="input-section">
      <input
        name="school"
        value={props.educationData.school}
        className="input-bar"
        placeholder="School"
        type="text"
        onChange={props.updateEducationData}
      />
      <input
        name="subject"
        value={props.educationData.subject}
        className="input-bar"
        placeholder="Subject"
        type="text"
        onChange={props.updateEducationData}
      />
      <input
        name="degree"
        value={props.educationData.degree}
        className="input-bar"
        placeholder="Degree"
        type="text"
        onChange={props.updateEducationData}
      />
      <div className="date-input-container">
        <label className="date-input-label-education" htmlFor="end-date">
          Date of study
        </label>
        <input
          name="date"
          value={props.educationData.date}
          className="input-bar"
          placeholder="Date of study"
          type="date"
          onChange={props.updateEducationData}
        />
      </div>
    </div>
  );

  return (
    <div className="section">
      <h2 className="section-heading">Education</h2>
      {displayData()}
      {props.educationEditMode.editingMode ? educationTemplate : ""}
      <button
        className="add-data-btn"
        onClick={() =>
          props.educationEditMode.editingMode
            ? props.confirmEducationData()
            : props.changeModeEducationEdit()
        }
      >
        {props.educationEditMode.editingMode ? "Confirm" : "Add"}
      </button>
    </div>
  );
}
