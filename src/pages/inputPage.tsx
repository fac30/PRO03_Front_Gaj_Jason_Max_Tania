import React, { useContext, useEffect } from 'react';
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
		date: "",
		feel: "",
		genre: "",
		quant: NaN
	});

	useEffect(() => {
		const callAPI = async () => {
			if (userResponse.date && userResponse.feel && userResponse.genre && !isNaN(userResponse.quant)) {
				try {
					const response = await fetch(
						`http://localhost:3000/api/run/?musicGenre=${encodeURIComponent(userResponse.genre)}&eventDescription=${encodeURIComponent(userResponse.feel)}&date=${encodeURIComponent(userResponse.date)}T00:00:00.000Z&playlistCount=${encodeURIComponent(userResponse.quant)}`,
						{
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);

					if (!response.ok) {
						throw new Error('Network response was not ok');
					}

					const data = await response.json();
					console.log(data);
				} catch (error) {
					console.error('Error calling API:', error);
				}
			}
		};

		callAPI();
	}, [userResponse]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setUserResponse({
			date: event.currentTarget.date.value,
			feel: event.currentTarget.feel.value,
			genre: event.currentTarget.genre.value,
			quant: 6,
		});
		// onNext();
	}

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
