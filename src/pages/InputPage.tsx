import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../sections/Content';
import HeroTxt from '../text/HeroTxt';
import Genre from '../inputs/Genre';
import OpenQuestion from '../inputs/OpenQuestion';
import Date from '../inputs/Date';
import Button from '../buttons/Button';
import LoadingPage from './LoadingPage';
import Radio from '../inputs/Radio';

interface InputProps {
	onNext: () => void;
}

function InputPage({ onNext }: InputProps) {
  const { userName } = useContext(UserContext);
  const [ loading, setLoading ] = useState(false);

	const [userResponse, setUserResponse] = React.useState({
		date: '',
		feel: '',
		genre: '',
		quant: NaN,
	});

	useEffect(() => {
		const callAPI = async () => {
			if (
				userResponse.date &&
				userResponse.feel &&
				userResponse.genre &&
				!isNaN(userResponse.quant)
			) {
				try {
					const response = await fetch(
						`http://18.133.237.127:3000/api/run/?musicGenre=${encodeURIComponent(
							userResponse.genre
						)}&eventDescription=${encodeURIComponent(
							userResponse.feel
						)}&date=${encodeURIComponent(
							userResponse.date
						)}T00:00:00.000Z&playlistCount=${encodeURIComponent(
							userResponse.quant
						)}`,
						{
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);

					// // Call onNext after initiating the API call
					// onNext();

					if (!response.ok) {
                        setLoading(false);
						throw new Error('Network response was not ok');
					}

					const data = await response.json();
                    setLoading(false);
					console.log(data);
				} catch (error) {
                    setLoading(false);
					console.error('Error calling API:', error);
				}
			}
		};

		callAPI();
	}, [userResponse, onNext]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Trigger loading page
    setLoading(true);

    setUserResponse({
      date: event.currentTarget.date.value,
      feel: event.currentTarget.feel.value,
      genre: event.currentTarget.genre.value,
      quant: userResponse.quant,
    });
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
	    <div className="bg-[var(--pink)] flex-grow flex flex-col p-4 md:p-6 items-center justify-center">
                <div className="w-full max-w-md space-y-6">
					<HeroTxt
						userName={userName}
						primaryText={'UNLEASH THE POWER OF YOUR EMOTIONS'}
					/>

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='flex flex-col items-center mt-4 space-y-6'>
							<Date />
							<OpenQuestion />
							<Genre />
							<Radio
								selectedQuant={userResponse.quant}
								setQuant={(num: number) =>
									setUserResponse((prev) => ({ ...prev, quant: num }))
								}
							/>
						</div>
						<Button onClick={() => handleSubmit} label='Create playlist' />
					</form>
				</div>
		</div>
	);
}

export default InputPage;
