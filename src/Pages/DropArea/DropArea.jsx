import { memo } from "react";
import { useDrop } from "react-dnd";

import "./DropArea.css";
import { nanoid } from "nanoid";
import ItemTypes from "../../Constants";
import { Select, RadioButton } from "../../Components";

const DropArea = ({
  isPreview = false,
  formFields,
  setFormFields,
  formData,
  setFormData,
}) => {
  const [_, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      canDrop: (props, monitor) => !isPreview,
      drop: (data) => {
        setFormFields([...formFields, { ...data.item, name: nanoid() }]);
      },
    }),
    [formFields]
  );

  const handleFieldValueChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  function getFieldBasedOnType(type, name) {
    switch (type) {
      case "input":
        return (
          <>
            <label className="element-content">Enter Label</label>
            <input
              disabled={!isPreview}
              placeholder="Enter Label"
              name={name}
              onChange={(e) => {
                handleFieldValueChange(e.target.name, e.target.value);
              }}
            />
          </>
        );
      case "select":
        return (
          <>
            <label>Dropdown Field</label>
            <Select
              disabled={!isPreview}
              name={name}
              handleChange={(e) => {
                handleFieldValueChange(e.target.name, e.target.value);
              }}
            />
          </>
        );
      case "radio":
        return (
          <>
            <label>Radio Button</label>
            <RadioButton
              disabled={!isPreview}
              name={name}
              handleSelect={(e) => {
                handleFieldValueChange(e.target.name, e.target.value);
              }}
            />
          </>
        );

      default:
        return (
          <>
            <label className="element-content">Enter Label</label>
            <input
              placeholder="Enter Label"
              name={name}
              onChange={(e) => {
                handleFieldValueChange(e.target.name, e.target.value);
              }}
            />
          </>
        );
    }
  }

  return (
    <div ref={drop} className="dropArea-field">
      {formFields.length === 0 ? (
        <div className="label-wrapper">
          {!isPreview && <label>Drag and drop the Form Element here</label>}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            console.log(formData);
          }}
        >
          {formFields?.map((field, index) => {
            return (
              <div className="content" key={index}>
                {getFieldBasedOnType(field.type, field.name)}
              </div>
            );
          })}
          {isPreview && (
            <div className="btn-wrapper">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default memo(DropArea);
