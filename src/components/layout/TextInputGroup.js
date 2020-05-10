import React from "react";
import classnames from 'classnames';


const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    errors
}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': errors
                })}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {errors &&  <div className='invalid-feedback'>{errors}</div>}


        </div>
    )
    }
;

export default TextInputGroup;
