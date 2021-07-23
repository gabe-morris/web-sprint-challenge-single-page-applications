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
    </div>
    <div className ='form-group inputs'>
    <h4>Order Name</h4>
    <input
    value={values.name}
    onChange={onChange}
    name ='name'
    type = 'text'
    />
    <h4>Choose a size</h4>
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
    <h4>Choose a sauce</h4>
    <label> Original Red
    <input
    type ='radio'
    name ='sauce'
    value ='original'
    onChange ={onChange}
    checked={values.sauce === 'original'}
    />
    </label>
    <label> Garlic Ranch
    <input
    type ='radio'
    name ='sauce'
    value ='garlic'
    onChange ={onChange}
    checked={values.sauce === 'garlic'}
    />
    </label>
    <label>BBQ Sauce
    <input
    type ='radio'
    name ='sauce'
    value ='bbq'
    onChange ={onChange}
    checked={values.sauce === 'bbq'}
    />
    </label>
    <label>Spinach Alfredo
    <input
    type ='radio'
    name ='sauce'
    value ='alfredo'
    onChange ={onChange}
    checked={values.sauce === 'alfredo'}
    />
    </label>
    
        </div>
    </div>

    <button disabled={disabled}>Add To Order</button>
</form>


)
}