import Image from 'next/image'


const petlist = () => {
  return (
    <ul className='bg-white border-b border-black/8'>
        <li>
            <button className='flex h-17.5 w-full cursor-pointer items-center px-5 text-base gap-3 hover:bg-[#EFF1F2] transition' type='button'>
                <Image 
                src='https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png'
                alt='pet'
                width={45}
                height={45}
                className='rounded-full object-cover'
                />

            </button>
        </li>
    </ul>
  )
}

export default petlist