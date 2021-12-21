import { useState, useEffect } from "react";
import InputElement from "./common/input-element";

function WorkSection(props) {
    const [workInfo, setWorkInfo] = useState({});
    const setWorkFieldData = (fieldName, fieldValue) => {
        setWorkInfo((workInfo) => {
            workInfo[fieldName] = fieldValue;
            return workInfo;
        });
    };
    useEffect(() => {
        props.setFormData("workInfo", workInfo, props.index);
        return () => props.removeFormData("workInfo", props.index);
    }, [workInfo]);
    return <div className="work-container">
        <InputElement type="text" label="Company Name" name="companyName" id={"companyName_" + props.index} className="input-field" setFieldData={setWorkFieldData} />
        <InputElement type="text" label="Role or Position" name="roleOrPosition" id={"roleOrPosition_" + props.index} className="input-field" setFieldData={setWorkFieldData} />
        <InputElement type="date" label="From" name="workFrom" id={"workFrom_" + props.index} className="input-field" labelFocused={true} setFieldData={setWorkFieldData} />
        <InputElement type="date" label="To" name="workTo" id={"workTo_" + props.index} className="input-field" labelFocused={true} setFieldData={setWorkFieldData} />
    </div>;
}
export default WorkSection;