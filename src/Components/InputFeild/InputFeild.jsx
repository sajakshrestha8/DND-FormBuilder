import "./InputFeild.css";

const InputFeild = ({ handleChange, data, name }) => {
  return (
    <>
      <div className="input">
        <input
          placeholder="Enter the input"
          onChange={handleChange}
          value={data}
          name={name}
        />
      </div>
    </>
  );
};

export default InputFeild;
