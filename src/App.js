import { useState } from "react";
import EducationSection from "./components/education-section";
import PersonalInfoSection from "./components/personal-info-section";
import WorkSection from "./components/work-section";
import './styles/App.css'

function App() {
    const [formData, setFormData] = useState({});

    const setFormFieldData = (fieldName, fieldValue, index) => {
        setFormData((pFormData) => {
            if(index == null) {
                pFormData[fieldName] = fieldValue;
                return pFormData;
            }
            if(!(fieldName in pFormData)) {
                pFormData[fieldName] = [];
            }
            pFormData[fieldName][index] = fieldValue;
            return pFormData;
        });
    };
    const removeFormFieldData = (fieldName, index) => {
        setFormData({...formData, [fieldName]: formData[fieldName].filter((_data, i) => i !== index)});
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);
    }

    const [eductaionList, setEducationList] = useState([<EducationSection removeFormData={removeFormFieldData} setFormData={setFormFieldData} key={0} index={0}/>]);
    function addEducationSection() {
        setEducationList([...eductaionList, <EducationSection removeFormData={removeFormFieldData} setFormData={setFormFieldData} key={eductaionList.length} index={eductaionList.length}/>])
    }
    function deleteEducationSection() {
        setEducationList(eductaionList.splice(0, eductaionList.length - 1));
    }

    const [workList, setWorkList] = useState([<WorkSection removeFormData={removeFormFieldData} setFormData={setFormFieldData} key={0} index={0}/>]);
    function addWorkSection() {
        setWorkList([...workList, <WorkSection removeFormData={removeFormFieldData} setFormData={setFormFieldData} key={workList.length} index={workList.length}/>])
    }
    function deleteWorkSection() {
        setWorkList(workList.splice(0, workList.length - 1));
    }

    return (
        <div className="App">
            <h1 className="app-header">CV App</h1>
            <form className="cv-form" onSubmit={submitHandler}>
                <h2 className="section-header">Personal Info</h2>
                <PersonalInfoSection setFormData={setFormFieldData}/>
                <h2 className="section-header">Education</h2>
                {eductaionList}
                <div className="btn-grp">
                    <button className="add-btn btn" onClick={addEducationSection} type="button">Add</button>
                    <button className={eductaionList.length === 1 ? "hide" : "btn delete-btn"} onClick={deleteEducationSection} type="button">Delete</button>
                </div>
                <h2 className="section-header">Work</h2>
                {workList}
                <div className="btn-grp">
                    <button className="add-btn btn" onClick={addWorkSection} type="button">Add</button>
                    <button className={workList.length === 1 ? "hide" : "btn delete-btn"} onClick={deleteWorkSection} type="button">Delete</button>
                </div>
                <hr className="submit-divider"/>
                <div className="submit-btn-grp">
                    <button className="btn submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
