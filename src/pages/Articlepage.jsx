import React from 'react'
import ArticleCards from '../Components/ArticleCards'
import { articalData } from '../Components/Constant'

function Articlepage() {
  return (
    <div>
          <div className='flex flex-col mt-5 '>
              <p className='font-light text-xl italic'>::Browse through the latest ideas, stories, and insights curated for you.</p>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-5 md:p-0'>
                  {articalData.map((item, key) => (
                      <ArticleCards item={item} key={key} />
                  ))}
              </div>
          </div>
      
    </div>
  )
}

export default Articlepage
