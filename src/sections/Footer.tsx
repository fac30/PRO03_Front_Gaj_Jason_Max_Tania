const Footer: React.FC = () => {
  return (
    <footer
	  role="contentinfo"
      className="flex flex-col items-center justify-center bg-[--light-blue] text-sm font-medium py-2 sm:py-8 md:py-10 lg:py-8 px-8 lg:px-8 w-full w-screen-sm md:w-screen-md"
	>
		<p className="mt-3 mb-3 text-neutral-900 font-medium">
            &copy; 2024 SpotifyMoodList, Inc. All rights reserved.
        </p>	
	</footer>
  )
}


export default Footer;