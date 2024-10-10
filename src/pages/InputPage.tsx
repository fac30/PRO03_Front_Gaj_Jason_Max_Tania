import React, { useContext, useState } from 'react';
import { UserContext } from '../sections/Content';
import HeroTxt from '../text/HeroTxt';
import Genre from '../inputs/Genre';
import OpenQuestion from '../inputs/OpenQuestion';
import Date from '../inputs/Date';
import Button from '../buttons/Button';
import LoadingPage from './LoadingPage';
import Radio from '../inputs/Radio';
import { fetchPlaylist } from '../utils/fetchPlaylist';
import { TracklistProps } from '../utils/playlistTypes';

interface InputProps {
	setPlaylistJson: (json: Promise<TracklistProps>) => void;
}

function InputPage({ setPlaylistJson }: InputProps) {
	const { userName } = useContext(UserContext);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState<string | null>(null);
	const warn = 'Please complete the form';
	const scold = 'Don\'t be a tit';

	const [userResponse, setUserResponse] = useState({
		date: '',
		eventDescription: '',
		musicGenre: '',
		playlistCount: NaN,
	});
  
  const validateForm = (formData: typeof userResponse): boolean => {
		if (!formData.date) {
			setError(warn);
			return false;
		} else if (!formData.musicGenre) {
			setError(warn);
			return false;
		} else if (!formData.eventDescription.trim()) {
			setError(warn);
			return false;
		} else if (formData.eventDescription.includes('<')) {
			setError(scold);
			return false;
		} else {
			setError(null);
			return true;
		}
	};
  
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Trigger loading page
		setLoading(true);

		// Update user response state based on form input
		const updatedResponse = {
			date: event.currentTarget.date.value,
			eventDescription: event.currentTarget.eventDescription.value,
			musicGenre: event.currentTarget.musicGenre.value,
			playlistCount: userResponse.playlistCount,
		};
    
    if (validateForm(updatedResponse)) {
			setLoading(true);
			setUserResponse(updatedResponse);
      const playlistPromise = fetchPlaylist(updatedResponse);
		  setPlaylistJson(playlistPromise);
		  playlistPromise.finally(() => setLoading(false));
		} else {
			throw new Error('invalid input');
		}
	};


	if (loading) {
		return <LoadingPage />;
	}

	return (
		<div className='bg-[var(--pink)] min-h-screen flex flex-col'>
			<main className='flex-grow p-4 md:p-6 flex flex-col items-center justify-center'>
				<div className='w-full max-w-md space-y-6'>
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

						<Button
							onClick={() => handleSubmit}
							label="Generate playlist"
							disabled={false}
							loading={false}
						/>

					</form>
				</div>
			</main>
		</div>
	);
}

export default InputPage;