import "./Button.css";

const Button = ({ handleSubmit }) => {
  return (
    <>
      <button
        className="button"
        onClick={handleSubmit}
        style={{
          margin: "0 auto",
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Button;
