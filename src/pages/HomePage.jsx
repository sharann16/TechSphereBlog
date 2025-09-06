import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import ArticleSection from '../Components/ArticleSection'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection/>
      <ArticleSection/>
    </div>
  )
}

export default HomePage
