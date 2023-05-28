import React from 'react'
import Navbar from './Navbar.tsx'
import {AiFillPlayCircle,AiOutlinePlayCircle} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'

const Hero = () => {
    return (
        <>
            <Navbar />
            <img src="https://wallpapercave.com/wp/wp1945912.jpg" alt="hero" className="absolute -z-10 w-full h-[90vh] object-cover  " />
            <div className=" absolute w-full h-[90vh] bg-black bg-opacity-50 z-[-5]"></div>
            <div className='z-10 px-10 flex justify-between'>
                <div className="flex flex-col justify-end items-start gap-5 h-[90vh] w-1/2 pb-10">
                    <h1 className='text-white text-4xl font-bold'> The Hobbit : An Unexpected Journey  </h1>
                    <p className="text-gray-400 text-lg">2h49m &bull; 2012 &bull; Adventure &bull; Fantasy </p>
                    <p className="text-white text-lg">Bilbo Baggins, a hobbit who is reluctantly recruited by the wizard Gandalf to join a group of dwarves on a quest to reclaim their homeland from the dragon Smaug. Along the way, they encounter various obstacles and enemies, including trolls, goblins, and a mysterious creature called Gollum, as they journey through Middle-earth. The film stars Martin Freeman as Bilbo Baggins, Ian McKellen as Gandalf, and Richard Armitage as Thorin Oakenshield, the leader of the dwarves.</p>
                    <div className="flex gap-5">
                        <button className="flex items-center text-xl gap-2 bg-green-500 text-white px-7 py-3 rounded-lg font-bold"><AiFillPlayCircle className="inline text-xl text-white"/>  Watch Now</button>
                        <button className="flex items-center text-xl gap-2 bg-gray-600 text-white px-7 py-3 rounded-lg font-bold"><AiOutlinePlayCircle className="inline text-xl text-white"/>  Watch Trailer</button>
                        <button className="flex items-center text-xl gap-2 bg-transparent border-white border text-white px-7 py-3 rounded-lg font-bold"><BsBookmark className="inline text-xl text-white"/>  Watch Now</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Hero