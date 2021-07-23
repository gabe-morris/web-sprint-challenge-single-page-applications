import React from 'react'


export default function Form(props){
const {
values,
submit,
change,
disabled,
errors,
} = props
const onSubmit = evt => {
    evt.preventDefault()
    submit()
}
const onChange = evt => {
    const {name,value,type,checked} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value

    change(name,valueToUse)
}
return (
<form className ='form container' onSubmit ={onSubmit}>
    <div className = 'form-group'>
    <h2>Pizza Builder</h2>
    <div className ='errors'>
    <div>{errors.name}</div>
    <div>{errors.size}</div>
    <div className ='form-group inputs'>
    <label> Name for order
    <input
    value={values.name}
    onChange={onChange}
    name ='name'
    type = 'text'
    />
    </label>
    <label>Choice of Size</label>
    <select 
    onChange={onChange}
    value ={values.size}
    name ='size'
    >
    <option value =''>Choose a size</option>
    <option value ='personal'>Personal(8")</option>
    <option value = 'small'>Small(10")</option>
    <option value ='medium'>Medium(12")</option>
    <option value ='large'>Large(16")</option>
    </select>
    <label> Choice of Sauce

    </label>

    </div>


    </div>


    </div>

    <button disabled={disabled}>Add To Order</button>
</form>


)
}