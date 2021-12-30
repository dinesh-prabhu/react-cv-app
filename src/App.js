import { useState } from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import './styles/App.css'

function App() {
    const [formData, setFormData] = useState({});
    const setFormFieldData = (fieldName, fieldValue, index) => {
        setFormData((pFormData) => {
            if (index == null) {
                pFormData[fieldName] = fieldValue;
                return pFormData;
            }
            if (!(fieldName in pFormData)) {
                pFormData[fieldName] = [];
            }
            pFormData[fieldName][index] = fieldValue;
            return pFormData;
        });
    };
    const removeFormFieldData = (fieldName, index) => {
        setFormData({ ...formData, [fieldName]: formData[fieldName].filter((_data, i) => i !== index) });
    }

    const [hideCVForm, toggleCVForm] = useState(false);

    function submitHandler(e) {
        e.preventDefault();
        toggleCVForm(!hideCVForm);
        document.querySelector(".app-header").scrollIntoView({behavior: "smooth", block: "end"});
    }

    return (
        <div className="App">
            <h1 className="app-header">CV App</h1>
            <CVForm setFormFieldData={setFormFieldData} removeFormFieldData={removeFormFieldData} 
                submitHandler={submitHandler} showCVForm={!hideCVForm} />
            <CVPreview {...formData} showCVPreview={hideCVForm} togglePreview={toggleCVForm} />
        </div>
    );
}

export default App;
