import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../reducer/newsSlice';
import Newsitem from './Newsitem';


function Newsdata() {

 const dispatch = useDispatch();
 const { articles, status, error } = useSelector((state) => state.news);
 const selectedCategory = useSelector((state) => state.category);

  useEffect(()=>{
    dispatch(fetchNews(selectedCategory));
  }, [selectedCategory, dispatch])
  
  if (status === "loading")
    {return <p className='loading'>Loading...</p>}
  if (status === "failed")
    {return <p>Error: {error} </p>}

  return (
    <div className='allbox'>
      <div className="box">
        {articles.length > 0 ? (
          articles.map((article, index)=>(
            <Newsitem key = {index} article = {article}/>
          ))
        ) : (
          <p>No news available </p>
        )}
      </div>
      
    </div>
  )
}

export default Newsdata