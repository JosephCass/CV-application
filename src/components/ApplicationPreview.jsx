import defaultProfileImg from "../assets/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpeg";

export default function ApplicationPreview(props) {
  let { firstName, lastName, email, phoneNumber } = props.generalInfo;

  function displayEducationInfo() {
    if (props.education.length === 0) {
      return (
        <div className="preview-field-container">
          <p className="preview-field school-title">School</p>
          <p className="preview-field">Subject</p>
          <p className="preview-field">Degree</p>
          <p className="preview-field">Date of study</p>
        </div>
      );
    }

    return props.education.map((curr, indx) => {
      return (
        <div
          key={`${curr.school}-${indx}-container`}
          className="preview-field-container"
        >
          <p
            key={`${curr.school} ${indx}`}
            className="preview-field school-title"
          >
            {curr.school}
          </p>
          <p key={`${curr.subject}-${indx}`} className="preview-field">
            {curr.subject}
          </p>
          <p key={`${curr.degree}-${indx}`} className="preview-field">
            {curr.degree}
          </p>
          <p key={`${curr.date}-${indx}`} className="preview-field">
            {curr.date}
          </p>
          <br />
        </div>
      );
    });
  }

  function displayContactInfo() {
    return;
  }

  function displayExperienceInfo() {
    if (props.experience.length === 0) {
      return (
        <div className="preview-field-container">
          <p className="preview-field job-title">Company Name</p>
          <p className="preview-field">Position</p>
          <p className="preview-field">Role</p>
          <p className="preview-field">Start date</p>
          <p className="preview-field">End date</p>
        </div>
      );
    }

    return props.experience.map((curr, indx) => {
      return (
        <div
          key={`${curr.companyName}-${indx}-container`}
          className="preview-field-container"
        >
          <p
            key={`${curr.companyName} ${indx}`}
            className="preview-field company-title"
          >
            {curr.companyName}
          </p>
          <p key={`${curr.position}-${indx}`} className="preview-field">
            {curr.position}
          </p>
          <p key={`${curr.role}-${indx}`} className="preview-field">
            {curr.role}
          </p>
          <p key={`${curr.start}-${indx}`} className="preview-field">
            {`Start - ${curr.start}`}
          </p>
          <p key={`${curr.end}-${indx}`} className="preview-field">
            {`End - ${curr.end}`}
          </p>

          <br />
        </div>
      );
    });
  }

  return (
    <div className="preview-resume-container">
      <header className="preview-header-info">
        <h2 className="preview-fullname">
          {firstName && lastName
            ? `${firstName} ${lastName}`
            : "Full Name Here"}
        </h2>
        <img
          className="profile-img-preview"
          src={props.profileImg ? props.profileImg : defaultProfileImg}
          alt=""
        />
      </header>
      <section className="preview-section">
        <h3 className="preview-heading">Education</h3>
        <hr />
        {displayEducationInfo()}
      </section>
      <section className="preview-section">
        <h3 className="preview-heading">Experience</h3>
        <hr />
        {displayExperienceInfo()}
      </section>
      <section className="preview-section">
        <h3 className="preview-heading">Contact</h3>
        <hr />
        <p className="preview-field">{email ? `${email}` : "Email"}</p>
        <p className="preview-field">
          {phoneNumber ? `${phoneNumber}` : "Phone Number"}
        </p>
      </section>
    </div>
  );
}
