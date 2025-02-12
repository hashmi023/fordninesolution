const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Ford9Solution Build tool <span className='bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text' >
            For Developers...</span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis quam maxime officia inventore aspernatur eligendi.  
      </p>

<div className="flex justify-center my-10">
    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
        Start For Free
    </a>
    <a href="#" className='py-3 px-4 mx-3 rounded-md border border-neutral-300'>
        Documentation
    </a>
</div>
    <div className="flex justify-center mt-10">
        <video className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 py-4" 
         autoPlay muted loop src="./video1.mp4" />

<video className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 py-4" 
         autoPlay muted loop src="./video2.mp4" />
    </div>
    </div>
  )
}

export default Hero;
