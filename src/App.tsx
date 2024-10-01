import './App.css'
import Header from './sections/Header'
import Content from './sections/Content'
import Footer from './sections/Footer'
import Button from './buttons/Button';
//import RoundedButton from './buttons/Button'

function App() {
  return (
		<>
			<Header />
			<Content />
			<Button onClick={function (): void {
			  throw new Error('Function not implemented.')
		  } } label={'Click me'} />
			<Footer />
		</>
  );
}

export default App;