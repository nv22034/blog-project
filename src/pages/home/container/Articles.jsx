import React from 'react'
import ArticleCard from '../../../components/ArticleCard'

const Articles = () => {
  return (
    <section className='container mx-auto px-5 py-10'>
      <div className='flex flex-wrap md:gap-x-5 gap-y-5'>
      <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
    </section>
  )
}

export default Articles
