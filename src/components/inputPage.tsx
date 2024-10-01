import React from 'react';
import HeroTxt from './HeroTxt';
import PinkForm from './Form';


export default function PinkSection() {
    const [userName, setUserName] = React.useState("Ga");
    const [userResponse, setUserResponse] = React.useState({
        day: "",
        feel: "",
        genre: "",
        quant: 6});



	return (
		<div className='bg-pink-300'>
            <HeroTxt heroName={'Gajjy Gaj gaj'} heroText={'Gaj is great'} />
            <PinkForm/>
		</div>
	);
}

/*
first step to create a context API 
create a used context Api hook
transfer the state from the pink Section to the context Api
inside the form create a function. 
submit the form and inside this function i will need to use context api hook to update the username and user answers.

*/