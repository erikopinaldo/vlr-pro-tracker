import FilterBar from './filterBar'
import MatchTable from './matchTable'
import { useState, useEffect } from 'react';

export default function FilterableMatchTable() {
    const [filterArr, setFilterArr] = useState([]);
    const [matches, setMatches] = useState([])

    useEffect(() => {
        const getMatches = async () => {
            const data = await fetch('https://vlrggapi-two.vercel.app/match/upcoming').then(data => data.json())
            setMatches(data.data.segments)
        }
        getMatches()
    }, [])

    function handleFilterClick(eventName) {
        console.log(eventName)

        let nextFilter

        if (filterArr.includes(eventName)) {
            nextFilter = filterArr.filter(item => item !== eventName)
        }
        else {
            nextFilter = [...filterArr, eventName]
        }        
        setFilterArr(nextFilter)
    }

    function handleFilterReset() {
        setFilterArr([])
    }
    
    return (
        <section className='block md:w-11/12 md:grid md:grid-cols-10'>
            <FilterBar
                matches={matches}
                filterArr={filterArr}
                onFilterClick={(e) => handleFilterClick(e.target.textContent)}
                onFilterReset={() => handleFilterReset} />
            <MatchTable
                matches={matches}
                filterArr={filterArr} />
        </section>
    );
}