import React from 'react'

function ArticlepageCard() {
  return (
      <div className='basis-1/3 flex-shrink-0  shadow-sm mt-5 hover:bg-neutral-300 rounded-2xl'>

          <div className='p-2' key={key}>
              <img src={item.imag} alt="cover image " className='w-full h-auto rounded-xl' />
          </div>
          <div className='p-2 '>
              <h2 className='font-semibold text-xl'>{item.title}</h2>
              <p className='font-semibold text-neutral-700 text-sm'>{item.date}</p>
              <p className='text-neutral-700 text-md'> {item.subtitle}.</p>
              <p className=' hidden md:flex text-md text-neutral-800'>{item.excerpt}</p>
          </div>


      </div>
  )
}

export default ArticlepageCard
