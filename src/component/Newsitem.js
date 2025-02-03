import React from 'react'

function Newsitem({ article }) {

  console.log(article)

  return (
    <div className='newsitem'>
      <h2 className='news_text'>{article.text}</h2>
      {article.image_url && <img src={article.image_url} alt={article.text} />}
      <div className="contents">
        <h2>{article.title}</h2>
      <p className='art_t'>{article.description}</p>
      <a href={article.link} target="_blank" rel="noopener noreferrer" className='more_b'>
        Read more...
      </a>
      </div>
    
    </div>
  )
}

export default Newsitem