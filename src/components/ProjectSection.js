import { useState, useEffect } from "react";
import InputElement from "./common/InputElement";
import SelectInput from "./common/SelectInput";
import TextArea from "./common/TextArea";

const PROJECT_TYPES = ["Web3", "Android", "iOS", "Desktop"];

function ProjectSection(props) {
    const [projectInfo, setprojectInfo] = useState({});
    const setProjectFieldData = (fieldName, fieldValue) => {
        setprojectInfo((projectInfo) => {
            projectInfo[fieldName] = fieldValue;
            return projectInfo;
        });
    };
    useEffect(() => {
        props.setFormData("projectInfo", projectInfo, props.index);
    }, [projectInfo]);
    return <div className="info-container">
        <InputElement type="text" label="Project Name" name="ProjectName" id={"ProjectName_" + props.index} className="input-field" setFieldData={setProjectFieldData} />
        <SelectInput label="Project Type" name="projectType" id={"projectType_" + props.index} className="input-field" 
            options={PROJECT_TYPES} setFieldData={setProjectFieldData} />
        <TextArea label="Description" name="description" id={"projectDescription_" + props.index} className="input-field" setFieldData={setProjectFieldData} />
    </div>;
}
export default ProjectSection;