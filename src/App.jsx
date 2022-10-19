import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import ApplicationCreation from "./components/ApplicationCreation";
import ApplicationPreview from "./components/ApplicationPreview.jsx";

function App() {
  const [state, changeState] = useState({ editMode: true });

  const [generalInfo, setGeneral] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  let [education, setEducation] = useState([]);

  let [educationData, setEducationData] = useState({
    school: "",
    subject: "",
    degree: "",
    date: "",
  });

  let [educationEditMode, setEducationMode] = useState({ editingMode: false });

  let [experienceEditMode, setExperienceMode] = useState({
    editingMode: false,
  });
  let [experience, setExperience] = useState([]);
  let [experienceData, setExperienceData] = useState({
    companyName: "",
    position: "",
    role: "",
    start: "",
    end: "",
  });

  let [profileImg, setProfileImg] = useState("");

  function changeModeEducationEdit() {
    setEducationMode((oldState) => ({
      editingMode: true,
    }));
  }

  function updateEducationData(e) {
    let { name, value } = e.target;
    setEducationData((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  function checkEducationDataLength() {
    let valid = false;
    if (
      educationData.subject.length > 0 &&
      educationData.school.length > 0 &&
      educationData.date.length &&
      educationData.degree.length
    ) {
      valid = true;
    }
    return valid;
  }

  function confirmEducationData() {
    let obj = { ...educationData };

    checkEducationDataLength()
      ? setEducation((oldState) => [...education, obj])
      : "";
    setEducationMode({ editingMode: false });
    setEducationData({ school: "", subject: "", degree: "", date: "" });
  }

  function deleteEducation(key) {
    let newArr = education.filter((curr, indx) => {
      if (indx !== key) {
        return true;
      }
    });
    setEducation(newArr);
  }

  function changeMode(bool) {
    changeState({ editMode: bool });
  }

  function updateGeneralInfo(e) {
    let { name, value } = e.target;
    setGeneral((oldState) => ({ ...oldState, [name]: value }));
    console.log(generalInfo);
  }

  function changeModeExperienceEdit() {
    setExperienceMode((oldState) => ({
      editingMode: true,
    }));
  }
  function updateExperienceData(e) {
    let { name, value } = e.target;
    setExperienceData((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }
  function checkExperienceDataLength() {
    let valid = false;
    if (
      experienceData.companyName.length > 0 &&
      experienceData.position.length > 0 &&
      experienceData.role.length &&
      experienceData.start &&
      experienceData.end
    ) {
      valid = true;
    }
    return valid;
  }
  function confirmExperienceData() {
    let obj = { ...experienceData };
    checkExperienceDataLength()
      ? setExperience((oldState) => [...experience, obj])
      : "";
    setExperienceMode({ editingMode: false });
    setExperienceData({
      companyName: "",
      position: "",
      role: "",
      start: "",
      end: "",
    });
  }
  function deleteExperience(key) {
    let newArr = experience.filter((curr, indx) => {
      if (indx !== key) {
        return true;
      }
    });
    setExperience(newArr);
  }

  return (
    <div className="App">
      <Header changeMode={changeMode} stateData={state} />
      {state.editMode ? (
        <ApplicationCreation
          educationEditMode={educationEditMode}
          changeModeEducationEdit={changeModeEducationEdit}
          education={education}
          educationData={educationData}
          deleteEducation={deleteEducation}
          confirmEducationData={confirmEducationData}
          updateEducationData={updateEducationData}
          experienceEditMode={experienceEditMode}
          changeModeExperienceEdit={changeModeExperienceEdit}
          experience={experience}
          experienceData={experienceData}
          deleteExperience={deleteExperience}
          confirmExperienceData={confirmExperienceData}
          updateExperienceData={updateExperienceData}
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
          profileImg={profileImg}
          setProfileImg={setProfileImg}
        />
      ) : (
        <ApplicationPreview
          education={education}
          experience={experience}
          generalInfo={generalInfo}
          profileImg={profileImg}
        />
      )}
    </div>
  );
}

export default App;
