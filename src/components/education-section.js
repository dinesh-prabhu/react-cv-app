import { useState, useEffect } from "react";
import InputElement from "./common/input-element";

function EducationSection(props) {
    const [educationInfo, setEducationInfo] = useState({});
    const setEducationalFieldData = (fieldName, fieldValue) => {
        setEducationInfo((pEducationalInfo) => {
            pEducationalInfo[fieldName] = fieldValue;
            return pEducationalInfo;
        });
    };
    useEffect(() => {
        props.setFormData("educationInfo", educationInfo, props.index);
        return () => props.removeFormData("educationInfo", props.index);
    }, [educationInfo]);
    return <div className="eductaion-container">
        <InputElement type="text" label="University or School Name" name="univName" id={"univName_" + props.index} className="input-field" setFieldData={setEducationalFieldData} />
        <InputElement type="text" label="Degree or Stream" name="degOrStream" id={"degOrStream_" + props.index} className="input-field" setFieldData={setEducationalFieldData} />
        <InputElement type="date" label="From" name="educationFrom" id={"educationFrom_" + props.index} className="input-field" labelFocused={true} setFieldData={setEducationalFieldData} />
        <InputElement type="date" label="To" name="educationTo" id={"educationTo_" + props.index} className="input-field" labelFocused={true} setFieldData={setEducationalFieldData} />
    </div>;
}
export default EducationSection;