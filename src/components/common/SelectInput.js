import { useState, useEffect } from "react";

function SelectInput(props) {
    const[fieldValue, setFieldValue] = useState("");

    const inputChangeHandler = (e) => {
        setFieldValue(e.target.value);
    }
    
    useEffect(() => {
        if(props.setFieldData) {
            props.setFieldData(props.name, fieldValue);
        }
    }, [fieldValue]);

    return (<div className="form-group">
            <select name={props.name} className={props.className} id={props.id ?? props.name} onChange={inputChangeHandler}>
                {props.options.map((optionValue, index) => <option key={index} value={optionValue}>{optionValue}</option>)}
            </select>
            <label className="floating-label floating-label-focused" htmlFor={props.id ?? props.name}>{props.label}</label>
        </div>);
}
export default SelectInput;