import { DndProvider } from "react-dnd";
import ComponentCollection from "./Pages/CompCollection/ComponentCollection";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropArea from "./Pages/DropArea/DropArea";
import { useState } from "react";
import "./App.css";
import InputFeild from "./Components/InputFeild/InputFeild";
import { nanoid } from "nanoid";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const App = () => {
  // const [formChange, setFormChange] = useState([]);

  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});

  // const handleFieldValueChange = (name, value) => {
  //   setFormData({ ...formData, [name]: value });
  // };

  // function handleformChange(updateForm) {
  //   setFormChange(updateForm);
  // }

  const formComponents = [
    {
      type: "input",
      label: "Input Field",
      id: nanoid(),
    },

    {
      type: "radio",
      label: "Radio Field",
      id: nanoid(),
    },

    {
      type: "select",
      label: "Select Field",
      id: nanoid(),
    },
  ];

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="wrapper">
          <div>
            <Tabs>
              <TabList>
                <Tab>Form Builder</Tab>
                <Tab>Preview</Tab>
              </TabList>

              <TabPanel>
                <div className="form-wrapper">
                  <DropArea
                    formFields={formFields}
                    setFormFields={setFormFields}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="form-wrapper">
                  <DropArea
                    formFields={formFields}
                    setFormFields={setFormFields}
                    formData={formData}
                    setFormData={setFormData}
                    isPreview
                  />
                </div>
              </TabPanel>
            </Tabs>
          </div>
          <div className="form-elements">
            <div>
              <label className="heading">Form Elements</label>
            </div>
            <div className="form-element-component">
              {formComponents.map((component) => {
                return (
                  <div className="element">
                    <ComponentCollection item={component} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default App;
