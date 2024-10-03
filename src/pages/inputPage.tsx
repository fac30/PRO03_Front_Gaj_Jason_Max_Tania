import React, { useContext, useEffect } from 'react';
import { UserContext } from '../sections/Content';
import HeroTxt from '../components/HeroTxt';
import Genre from '../components/Genre';
import OpenQuestion from '../components/OpenQuestion';
import Date from '../components/Date';
import Button from '../buttons/Button';
import Footer from '../sections/Footer';

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

					// Call onNext after initiating the API call
					onNext();

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
	}, [userResponse, onNext]);

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
    <div className="bg-[var(--pink)] min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow p-6">
        <HeroTxt
          userName={userName}
          primaryText={'UNLEASH THE POWER OF YOUR EMOTIONS'}
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Date />
          <OpenQuestion />
          <Genre />
            
          {/* need to put the radios wihtin its own component*/}
          <div className="flex justify-center space-x-4 my-4">
            {[5, 10, 15].map(num => (
              <button
                key={num}
                type="button"
                onClick={() => setUserResponse(prev => ({ ...prev, quant: num }))}
                className="w-12 h-12 rounded-full bg-purple-400 text-white flex items-center justify-center"
              >
                {num}
              </button>
            ))}
          </div>

          <Button onClick={()=> handleSubmit} label='Create playlist' />
          
        </form>
      </div>

      {/* Footer */}
          
    </div>
  );
}

export default InputPage;

/* Gaj's Notes
	first step to create a context API 
	create a used context Api hook
	transfer the state from the pink Section to the context Api
	inside the form create a function. 
	submit the form and inside this function i will need to use context api hook to update the username and user answers.*/
