import React, { useEffect, useState } from "react";
import InputElement from "./common/InputElement";

function PersonalInfoSection(props) {
    const [personalInfo, setPersonalInfo] = useState({});
    const setPersonalFieldData = (fieldName, fieldValue) => {
        setPersonalInfo((pPersonalInfo) => {
            pPersonalInfo[fieldName] = fieldValue;
            return pPersonalInfo;
        });
    };
    useEffect(() => {
        props.setFormData("personalInfo", personalInfo, null);
    }, [personalInfo]);
    return (
        <div className="personal-info-container">
            <InputElement type="text" label="First Name" name="firstName" className="input-field" setFieldData={setPersonalFieldData} />
            <InputElement type="text" label="Last Name" name="lastName" className="input-field" setFieldData={setPersonalFieldData} />
            <InputElement type="email" label="Email" name="email" className="input-field" setFieldData={setPersonalFieldData} />
            <InputElement type="tel" label="Phone Number" name="phoneNumber" className="input-field" setFieldData={setPersonalFieldData} />
        </div>
    );
}
export default PersonalInfoSection;