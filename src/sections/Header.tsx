import React from "react";


// declare the component with a capitalised name
const Header: React.FC = () => {
  return (
		<>
		<header>
			<img 
				src="../assets/logo_backgrounf.png"
				width="60"
				height="60"
				alt="logo of the app"
			/>
			<span>
				<h1>MoodTime</h1>
			</span>
			<nav>
				{/* Hamburger Menu Here? */}
			</nav>
			</header>
			<hr/>
		</>
  )
}

// separate export statement, so it is easy to see at a glance
export default Header;