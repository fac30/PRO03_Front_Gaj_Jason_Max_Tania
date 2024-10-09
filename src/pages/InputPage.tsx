import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../sections/Content';
import HeroTxt from '../text/HeroTxt';
import Genre from '../inputs/Genre';
import OpenQuestion from '../inputs/OpenQuestion';
import Date from '../inputs/Date';
import Button from '../buttons/Button';
import LoadingPage from './LoadingPage';
import Radio from '../inputs/Radio';
import { fetchPlaylist } from '../utils/fetchPlaylist'

interface InputProps {
	onNext: () => void;
}

function InputPage({ onNext }: InputProps) {
  const { userName } = useContext(UserContext);
  const [ loading, setLoading ] = useState(false);

	const [userResponse, setUserResponse] = React.useState({
		date: '',
		eventDescription: '',
		musicGenre: '',
		playlistCount: NaN,
	});

	useEffect(() => {

		fetchPlaylist(userResponse);
	}, [userResponse, onNext]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Trigger loading page
    setLoading(true);

    setUserResponse({
      date: event.currentTarget.date.value,
      eventDescription: event.currentTarget.eventDescription.value,
      musicGenre: event.currentTarget.musicGenre.value,
      playlistCount: userResponse.playlistCount,
    });
  }

  if (loading) {
    return <LoadingPage />;
  }

	return (
		<div className="bg-gradient-to-r from-[var(--yellow)] to-[var(--pink)] flex-grow flex flex-col p-4 md:p-6 items-center justify-center">
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
								selectedQuant={userResponse.playlistCount}
								setQuant={(num: number) =>
									setUserResponse((prev) => ({ ...prev, playlistCount: num }))
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
