import { useState } from "react";
import deleteIcon from "../assets/square-minus-regular.svg";

export default function ExperienceInfoEdit(props) {
  function displayData() {
    let dataArr = props.experience.map((curr, indx) => {
      return (
        <div className="data-container" key={`${indx} ${curr.companyName}`}>
          <div className="data-text-container">
            <p>
              <span className="data-field">Company Name - </span>
              {curr.companyName}
            </p>
            <p>
              <span className="data-field">Position - </span>
              {curr.position}
            </p>
            <p>
              <span className="data-field">Job Role - </span>
              {curr.role}
            </p>
            <p>
              <span className="data-field">Started Date - </span>
              {curr.start}
            </p>
            <p>
              <span className="data-field">Ended Date - </span>
              {curr.end}
            </p>
          </div>
          <img
            onClick={() => {
              props.deleteExperience(indx);
            }}
            className="data-delete-img"
            src={deleteIcon}
            alt="Delete Experience Data Icon"
          />
        </div>
      );
    });
    return dataArr;
  }
  let experienceTemplate = (
    <div className="input-section">
      <input
        name="companyName"
        value={props.experienceData.companyName}
        className="input-bar"
        placeholder="Company name"
        type="text"
        onChange={props.updateExperienceData}
      />
      <input
        name="position"
        value={props.experienceData.position}
        className="input-bar"
        placeholder="Position"
        type="text"
        onChange={props.updateExperienceData}
      />
      <input
        name="role"
        value={props.experienceData.role}
        className="input-bar"
        placeholder="Job Role"
        type="text"
        onChange={props.updateExperienceData}
      />
      <div className="date-input-container">
        <label className="date-input-label" htmlFor="start-date">
          Start
        </label>
        <input
          id="start-date"
          name="start"
          value={props.experienceData.time}
          className="input-bar"
          placeholder="Date Started"
          type="date"
          onChange={props.updateExperienceData}
        />
      </div>
      <div className="date-input-container">
        <label className="date-input-label" htmlFor="end-date">
          End
        </label>
        <input
          id="end-date"
          name="end"
          value={props.experienceData.time}
          className="input-bar"
          placeholder="Date Ended"
          type="date"
          onChange={props.updateExperienceData}
        />
      </div>
    </div>
  );
  return (
    <div className="section">
      <h2 className="section-heading">Experience</h2>
      {displayData()}
      {props.experienceEditMode.editingMode ? experienceTemplate : ""}
      <button
        className="add-data-btn"
        onClick={() =>
          props.experienceEditMode.editingMode
            ? props.confirmExperienceData()
            : props.changeModeExperienceEdit()
        }
      >
        {props.experienceEditMode.editingMode ? "Confirm" : "Add"}
      </button>
      <div className="profile-image-container-inputs">
        {props.profileImg ? (
          <img className="profile-image-pre-display" src={props.profileImg} />
        ) : (
          ""
        )}

        <input
          accept="image/*"
          onChange={(e) => {
            props.profileImg && URL.revokeObjectURL(props.profileImg);
            props.setProfileImg(URL.createObjectURL(e.target.files[0]));
          }}
          // onLoad={URL.revokeObjectURL(profileImg)}
          type="file"
        />
      </div>
    </div>
  );
}
