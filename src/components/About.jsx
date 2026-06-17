import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'


const About = () => {
useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<div id="about">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 
		 
		 <div className="md:col-span-3 flex flex-col rounded-3xl flex-center bg-white">
			 <img className="w-1/3 object-contain size-10" src="/images/llama.png" alt="grid-img-1" />
			 <img className="w-1/3 object-contain mt-10" src="/images/mistral.png" alt="grid-img-1" />
			 <img className="w-1/3 object-contain size-30" src="/images/whisper.png" alt="grid-img-1" />
		 </div>
         <div className="md:col-span-8">
			
			<h2>
				Knowledge that stays with you, for free, forever.
			</h2>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid">
		 <div className="md:col-span-4 flex-center">
			 <p className="text-white text-3xl">
				 Works on flights, in basements, on slow networks.
				 No cloud dependency. Your data stays yours.
			 </p>

		 </div>

		
		<div className="md:col-span-2 ">
			<div className="flex-center flex-col">
			<h1 className= "text-purple font bold.3
			 text-3xl">Powered by</h1>
				<img src="./images/qvac.svg" alt="grid-img-2" className="size-60" />
			</div>
	
		</div>

		
		
	 </div>
	 

	 
	</div>
 )
}
export default About