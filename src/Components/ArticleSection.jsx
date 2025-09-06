import React from 'react'
import { articalData } from './Constant'
import ArticleCards from './ArticleCards'
import { useNavigate } from 'react-router-dom';


function ArticleSection() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col mt-5  scroll-mt-24' id='artical'>
      <div className='flex  justify-end items-center mt-10 px-2 py-3 '>
        <a href="" className='bg-gray-200 rounded-xl px-3 py-2 text-md font-bold shadow-sm  hover:bg-neutral-300' onClick={()=>navigate('/arti')}>view more</a>
      </div>
      <div className='grid  sm:grid-cols-3 gap-4 p-5 md:p-0 '>
        {articalData.map((item,key)=>(
          key<3 &&
          <ArticleCards item={item} key={key} />
        ))}
      </div>
    </div>
  )
}

export default ArticleSection
