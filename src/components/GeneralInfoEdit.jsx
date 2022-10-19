export default function GeneralInfoEdit(props) {
  return (
    <div className="section">
      <h2 className="section-heading">General Informtion</h2>
      <input
        name="firstName"
        className="input-bar"
        placeholder="First Name"
        type="text"
        onChange={props.updateGeneralInfo}
        value={props.generalInfo.firstName}
      />
      <input
        name="lastName"
        className="input-bar"
        placeholder="Last Name"
        type="text"
        onChange={props.updateGeneralInfo}
        value={props.generalInfo.lastName}
      />
      <input
        name="email"
        className="input-bar"
        placeholder="Email"
        type="email"
        onChange={props.updateGeneralInfo}
        value={props.generalInfo.email}
      />
      <input
        name="phoneNumber"
        className="input-bar"
        placeholder="Phone Number"
        type="tel"
        onChange={props.updateGeneralInfo}
        value={props.generalInfo.phoneNumber}
      />
    </div>
  );
}
