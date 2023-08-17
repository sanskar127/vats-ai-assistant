import React, { useContext } from 'react'
import QueryContext from '../Context/QueryContext'

const ResultBox = () => {
  const [query, setQuery] = useContext(QueryContext)

  return (
    <div className='result'>
      <p>
        {query}
      </p>
    </div>
  )
}

export default ResultBox
