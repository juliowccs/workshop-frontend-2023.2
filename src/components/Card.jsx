/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'; 
import { useEffect, useState } from 'react'
export default function Card({id}) {

  const [datas, setData] = useState([]);

  // Busca do fetch
  useEffect(() => {
    if (!id) return;

    fetch(`https://swapi.dev/api/people/${id}`)
    .then((Response) => Response.json())
    .then((data) => setData([data]))
    .catch((error) => console.log(error))
  }, [id])



  return (
    // Mapeamento e uso dos dados
    <div>
        {datas.map((item) => (
        <div key={item.name} className='text-center flex flex-col gap-3 bg-zinc-200 text-zinc-800 p-6 m-5 rounded-xl'>
          <img src={`images/${id}.jpg`} className='rounded-2xl h-72 object-cover' alt={item.name}></img>
            <h2 className='font-bold text-3xl'>{item.name}</h2>
            <p className='font-semibold text-lg'>Weight: {item.mass}kg</p>
            <p className='font-semibold text-lg'>Hair Color: {item.hair_color}</p>
            <p className='font-semibold text-lg'>Skin Color: {item.skin_color}</p>
            <p className='font-semibold text-lg'>Eye Color: {item.eye_color}</p>
            <p className='font-semibold text-lg'>Birth Year: {item.birth_year}</p>
            <p className='font-semibold text-lg'>Gender: {item.gender}</p>
        </div>
        ))}
    </div>
  )}