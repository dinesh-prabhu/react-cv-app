import React, { useState, useEffect } from "react";

function InputElement(props) {
    const[fieldValue, setFieldValue] = useState("");

    const inputChangeHandler = (e) => {
        setFieldValue(e.target.value);
    }
    
    useEffect(() => {
        if(props.setFieldData) {
            props.setFieldData(props.name, fieldValue);
        }
    }, [fieldValue]);

    return <div className="form-group"><input type={props.type} id={props.id ?? props.name} value={fieldValue} onChange={inputChangeHandler} 
        name={props.name} className={props.className} required={true} />
        <label className={`floating-label ${props.labelFocused || fieldValue.length ? "floating-label-focused" : ""}`}
            htmlFor={props.id ?? props.name}>{props.label}</label></div>;
}
export default InputElement;