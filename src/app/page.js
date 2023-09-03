/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'; 
import Card from '@/components/Card';
import Nav from '@/components/Nav';
import Slider from '@/components/Slider';
import Song from '@/components/Song';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 ">
      <div className="min-w-full">
        {/* Header */}
        <div className="flex flex-row justify-between">
          <Nav></Nav>
          <h1 className='star-wars font-star-wars text-7xl text-center'>STAR<br></br>WARS</h1>
          <div className='w-40'><Song></Song></div>
        </div>
        {/* Organização do Carrossel */}
        <div>
          <div id='home'className="mb-16 text-zinc-800 rounded">
            <Slider></Slider>
          </div>
        </div>
        {/* Cards Respectivos às URLs da API */}
        <div id='cards' className="grid grid-cols-3 px-2">
          <Card id='1'></Card>
          <Card id='2'></Card>
          <Card id='3'></Card>
          <Card id='4'></Card>
          <Card id='5'></Card>
          <Card id='13'></Card>
          <Card id='14'></Card>
          <Card id='20'></Card>
          <Card id='21'></Card>
          <Card id='10'></Card>
          <Card id='11'></Card>
          <Card id='16'></Card>
        </div>
        {/* Desenvolvimento do Footer */}
        <div>
          <div className="content-center mt-20">
            <div className='flex justify-center'>
              <img className='lightsaber' src='images/lightsaber.png'></img>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <img src='images/github.png' className=' bg-zinc-200 p-1 w-8 h-8 -translate-y-1 rounded-lg'></img>  
                <p className='text-1xl'>@juliowccs</p>
              </div>
              <div className="flex flex-row">
                <img src='images/linkedin.png' className='w-12 -translate-y-3'></img>
                <p className='text-1xl'>Júlio César Carvalho Santos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
