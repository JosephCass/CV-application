import GeneralInfoEdit from "./GeneralInfoEdit";
import EducationInfoEdit from "./EducationInfoEdit";
import ExperienceInfoEdit from "./ExperienceInfoEdit";

export default function ApplicationCreation(props) {
  return (
    <div className="application-container">
      <GeneralInfoEdit
        generalInfo={props.generalInfo}
        updateGeneralInfo={props.updateGeneralInfo}
      />
      <EducationInfoEdit
        educationEditMode={props.educationEditMode}
        changeModeEducationEdit={props.changeModeEducationEdit}
        education={props.education}
        educationData={props.educationData}
        deleteEducation={props.deleteEducation}
        confirmEducationData={props.confirmEducationData}
        updateEducationData={props.updateEducationData}
      />
      <ExperienceInfoEdit
        experienceEditMode={props.experienceEditMode}
        changeModeExperienceEdit={props.changeModeExperienceEdit}
        experience={props.experience}
        experienceData={props.experienceData}
        deleteExperience={props.deleteExperience}
        confirmExperienceData={props.confirmExperienceData}
        updateExperienceData={props.updateExperienceData}
        profileImg={props.profileImg}
        setProfileImg={props.setProfileImg}
      />
    </div>
  );
}
