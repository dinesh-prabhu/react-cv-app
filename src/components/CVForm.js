import { useState } from "react";
import EducationSection from "./EducationSection";
import PersonalInfoSection from "./PersonalInfoSection";
import WorkSection from "./WorkSection";

function CVForm({setFormFieldData, removeFormFieldData, submitHandler, showCVForm}) {
    const [eductaionList, setEducationList] = useState([<EducationSection setFormData={setFormFieldData} key={0} index={0} />]);
    function addEducationSection() {
        setEducationList([...eductaionList, <EducationSection setFormData={setFormFieldData} key={eductaionList.length} index={eductaionList.length} />])
    }
    function deleteEducationSection() {
        removeFormFieldData("educationInfo", eductaionList.length - 1);
        setEducationList(eductaionList.splice(0, eductaionList.length - 1));
    }

    const [workList, setWorkList] = useState([<WorkSection setFormData={setFormFieldData} key={0} index={0} />]);
    function addWorkSection() {
        setWorkList([...workList, <WorkSection setFormData={setFormFieldData} key={workList.length} index={workList.length} />])
    }
    function deleteWorkSection() {
        removeFormFieldData("workInfo", workList.length - 1)
        setWorkList(workList.splice(0, workList.length - 1));
    }

    return (<form className={`cv-form ${showCVForm ? "" : "hide"}`} onSubmit={submitHandler}>
        <h2 className="section-header">Personal Info</h2>
        <PersonalInfoSection setFormData={setFormFieldData} />
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
        <hr className="submit-divider" />
        <div className="submit-btn-grp">
            <button className="btn submit-btn">Submit</button>
        </div>
    </form>);
}
export default CVForm;