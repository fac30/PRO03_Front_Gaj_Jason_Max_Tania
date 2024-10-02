import React, { useContext } from 'react';
import { UserContext } from '../sections/Content';
import HeroTxt from '../components/HeroTxt';
import Genre from '../components/Genre';
import OpenQuestion from '../components/OpenQuestion';
import Date from '../components/Date';
import Button from '../buttons/Button';

interface InputProps {
	onNext: () => void;
}

function InputPage({ onNext }: InputProps) {
	const { userName } = useContext(UserContext);

	const [userResponse, setUserResponse] = React.useState({
		date: Date(),
		feel: '',
		genre: '',
		quant: NaN,
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setUserResponse({
			date: event.currentTarget.date.value,
			feel: event.currentTarget.feel.value,
			genre: event.currentTarget.genre.value,
			quant: 6,
		});
		console.log(userResponse);
		//TODO: CALL THE API HERE

		onNext();
	};

	return (
		<section id='inputPage' className='bg-[var(--pink)] flex-col justify-center items-center'>
			<HeroTxt
				userName={userName}
				primaryText={'Unleash the power of your emotions'}
			/>

			<form onSubmit={handleSubmit}>
				<Date />
				<OpenQuestion />
				<Genre />

				<Button onClick={onNext} label='Get playlist' />
			</form>
		</section>
	);
}

export default InputPage;

/* Gaj's Notes
	first step to create a context API 
	create a used context Api hook
	transfer the state from the pink Section to the context Api
	inside the form create a function. 
	submit the form and inside this function i will need to use context api hook to update the username and user answers.*/
