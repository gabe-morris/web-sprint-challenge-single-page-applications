import React from 'react'
import {useHistory} from 'react-router-dom'


export default function Home() {
const history = useHistory()

const pizzaRoute = () => {
console.log('loading pizza customization')
history.push('/pizza')
}


return(
<div className='home-wrapper'>
<h1>Your Favorite Food, Delivered While Coding</h1>
<button id='order-pizza' onClick={pizzaRoute}>Create Your Own Pizza!</button>
</div>

)
}