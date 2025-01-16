import "./RadioButton.css";

const RadioButton = ({ handleSelect, name, disabled }) => {
  return (
    <>
      <div className="radio-wrapper" onChange={handleSelect}>
        <input type="radio" name={name} value="male" disabled={disabled} />
        <label>Male</label>
        <input type="radio" name={name} value="female" disabled={disabled} />
        <label>Female</label>
        <input type="radio" name={name} value="others" disabled={disabled} />
        <label>Others</label>
      </div>
    </>
  );
};

export default RadioButton;
