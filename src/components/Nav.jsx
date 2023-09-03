/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Nav() {

    return (
        // Botão da home
        <div className='flex flex-col w-40 gap-3'> 
            <div className='flex flex-row gap-2'>
               <a href='#home'><img src={'/images/deathstar.png'} className='w-14 bg-zinc-200 rounded 'alt='Death Star'></img></a> 
                <a className='text-2xl font-semibold text-zinc-200 translate-y-3' href='#home'>Home</a>
            </div>
        {/* Botão da Galeria */}
            <div className='flex flex-row gap-2'>
                <a href="#cards"><img src={'/images/book.png'} className='p-1 w-14 bg-zinc-200 rounded 'alt='Books'></img></a>
                <a className='text-2xl font-semibold text-zinc-200 translate-y-3' href='#cards'>Library</a>
            </div>
        </div>
    )
}