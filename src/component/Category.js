import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../reducer/categorySlice';


function Category() {

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category);

  const categories = [
    { name: 'All', text: 'All' },
    { name: 'Sports', text: 'Sports' },
    { name: 'Technology', text: 'Technology' },
    { name: 'Business', text: 'Business' },
    { name: 'Science', text: 'Science' },
    { name: 'Entertainment', text: 'Entertainment' },
    { name: 'Health', text: 'Health' },
    { name: 'World', text: 'World' },
    { name: 'Politics', text: 'Politics' },
    { name: 'Environment', text: 'Environment' },
  ]

  return (
      <div className="header">
        <h1>TODAY NEWS</h1>
        <div className="m_button">
          <div className="button_i">
          {
            categories.map((c, idx) => (
              <button
                type='button'
                key={idx}
                onClick={() => dispatch(setCategory(c.name))}
                className={selectedCategory === c.name ? "active" : ""}
              >
                {c.text}
              </button>
            ))
          }
          </div>
         

        </div>
      </div>

  )
}

export default Category