export default function Header(props) {
  return (
    <div className="header-container">
      <header className="header-title">CV Application Builder</header>
      <div className="header-btn-container">
        <button
          className={`header-edit header-btn ${
            props.stateData.editMode ? "active" : ""
          } `}
          onClick={(e) => props.changeMode(true)}
        >
          Edit Resume
        </button>
        <button
          className={`header-preview header-btn ${
            !props.stateData.editMode ? "active" : ""
          }`}
          onClick={() => props.changeMode(false)}
        >
          Preview
        </button>
      </div>
    </div>
  );
}
