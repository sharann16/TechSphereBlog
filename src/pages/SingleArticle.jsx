import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { articalData } from '../Components/Constant';
import ArticleCards from '../Components/ArticleCards';

function SingleArticle() {
  const { title } = useParams();
  const article = articalData.find((item) => item.title === title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);


  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div className='' id='articletop'>
      <h1 className='font-bold text-3xl underline flex justify-center'>{article.title}</h1> 
      <p className='flex justify-end mt-5' >{article.subtitle}. <span>   ''{article.date}''</span></p>
      <p className='tracking-wider mt-5'>{article.p}</p>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 md:p-0'>
        {articalData.filter((item)=>item.title!==article.title).slice(0,3).map((item,key)=>(
          <ArticleCards item={item} key={key} /> 
        ))}
      </div>
      
    </div>
  )
}

export default SingleArticle
