import React, { useState } from 'react'
import QueryContext from './QueryContext'

const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState('')

  return (
    <div>
      <QueryContext.Provider value = {[ query, setQuery]}>
        {children}
      </QueryContext.Provider>
    </div>
  )
}

export default QueryProvider
