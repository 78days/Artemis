'use client'

import { usePetcontext } from '@/hooks/hooks'
import type { Pet } from '@/lib/types'
import Image from 'next/image'

const PetList = () => {
  const { pets } = usePetcontext()

  return (
    <ul className='bg-white border-b border-black/8'>
      <li>
        {pets.map((pet: Pet) => (
          <li key={pet.id}>
            <button className='flex h-17.5 w-full cursor-pointer items-center px-5 text-base gap-3 hover:bg-[#EFF1F2] transition' type='button'>
              <Image
                src={pet.imageUrl}
                alt='pet'
                width={45}
                height={45}
                className='rounded-full object-cover'
              />
              <div className='flex flex-col text-left'>
                <strong className='block font-medium'>{pet.name}</strong>
                <span className='block text-xs text-[#6E6893]'>{pet.ownerName}</span>
              </div>
            </button>
          </li>
        ))}
      </li>
    </ul>
  )
}

export default PetList
