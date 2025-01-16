import "./RadioButton.css";

const RadioButton = ({ handleSelect, name, disabled }) => {
  return (
    <>
      <div className="radio-wrapper" onChange={handleSelect}>
        <div>
          <input
            type="radio"
            name={name}
            value="Default Value 1"
            disabled={disabled}
          />
          <label>Default Value 1</label>
        </div>
        <div>
          <input
            type="radio"
            name={name}
            value="Default Value 2"
            disabled={disabled}
          />
          <label>Default Value 2</label>
        </div>
      </div>
    </>
  );
};

export default RadioButton;
