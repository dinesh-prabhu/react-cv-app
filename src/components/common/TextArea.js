import { useState, useEffect } from "react";

function TextArea(props) {
    const[fieldValue, setFieldValue] = useState("");

    const inputChangeHandler = (e) => {
        setFieldValue(e.target.value);
    }
    
    useEffect(() => {
        if(props.setFieldData) {
            props.setFieldData(props.name, fieldValue);
        }
    }, [fieldValue]);

    return <div className="form-group text-area-group"><textarea id={props.id ?? props.name} value={fieldValue} onChange={inputChangeHandler} 
        name={props.name} className={props.className} required={true}></textarea>
        <label className={`floating-label ${props.labelFocused || fieldValue.length ? "floating-label-focused" : ""}`}
            htmlFor={props.id ?? props.name}>{props.label}</label></div>;
}
export default TextArea;