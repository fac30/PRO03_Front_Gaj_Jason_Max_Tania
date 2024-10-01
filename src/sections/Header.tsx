import React from "react";


// declare the component with a capitalised name
const Header: React.FC = () => {
  return (
    <nav>
		<div>
		    <img 
			    src="../assets/logo_backgrounf.png"
				width="60"
				height="60"
				alt="logo of the app"
			/>
		    <span>SpotifyMoodList</span>
		</div>		
	</nav>
  )
}

// separate export statement, so it is easy to see at a glance
export default Header;