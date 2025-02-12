import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
   <footer className='mt-20 border-t py-10 border-neutral-700'>
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
   <div>
    <h3 className='text-md font-semibold mb-4'>
        Resources</h3>
        <ul className='space-y-2'>
            {resourcesLinks.map((link, index) => (
                <li key={index}>
                    <a className='text-neutral-300 hover:text-white' href={link.href}>
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
   </div>

   <div>
    <h3 className='text-md font-semibold mb-4'>
        Platforms</h3>
        <ul className='space-y-2'>
            {platformLinks.map((link, index) => (
                <li key={index}>
                    <a className='text-neutral-300 hover:text-white' href={link.href}>
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
   </div>

   <div>
    <h3 className='text-md font-semibold mb-4'>
        Community</h3>
        <ul className='space-y-2'>
            {communityLinks.map((link, index) => (
                <li key={index}>
                    <a className='text-neutral-300 hover:text-white' href={link.href}>
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
   </div>
    </div>
   <div className='flex items-center rounded-md justify-center border border-orange-700 w-full mx-auto py-3 mt-10 px-4 gap-3'>
    <img src="./abbas.jpeg" className='h-14 w-14 border border-neutral-300 rounded-full' />
   <h3 className='text-center text-3xl mb-5 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-bold italic'>By Muhammad Abbas...❤️</h3>
   </div>
   </footer>
  )
}

export default Footer
