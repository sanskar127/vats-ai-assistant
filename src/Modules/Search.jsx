import React, { useState } from 'react'
import Query from '../Components/Query'
import ResultBox from '../Components/ResultBox'
import Name from '../Components/Name'
import '../Components/style.css'

const Search = () => {

    const makeChange = (val) => {
        val = 'random text'
    }

    const [value, changeValue] = useState()

    return (
        <div className='container'>
            <div className="search">
                <Name>Darwin</Name>
                <Query placeholder={'What you want to ask My Friend?'} sendQuery={makeChange}/>
            </div>
            <ResultBox />
        </div>
    )
}

export default Search
