import React, { useState } from 'react'
import QueryContext from './QueryContext'

const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState('')

    const changeQuery = (data) => {
        setQuery(data)
    }

  return (
    <div>
      <QueryContext.Provider value = {{ query, changeQuery}}>
        {children}
      </QueryContext.Provider>
    </div>
  )
}

export default QueryProvider
