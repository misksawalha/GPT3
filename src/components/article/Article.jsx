import React from 'react'
import './article.css'
function Article({imageUrl,date,title}) {
  return (
   <div className='gpt3__blog-container__article'>
    <div className='gpt3__blog-container__article-image'>
      <img  src={imageUrl} alt='blog image'/>
    </div>
    <div className='gpt3__blog-container__article-content'>
      <p>{date}</p>
      <h3>{title}</h3>
      <p>Read Full Article</p>
    </div>
    
   </div>
  )
}

export default Article