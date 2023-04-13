import FilterBar from './filterBar'
import MatchTable from './matchTable'
import { useState } from 'react';

export default function FilterableMatchTable({ matches }) {
    const [filterArr, setFilterArr] = useState([]);

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
                onFilterReset={() => handleFilterReset()} />
            <MatchTable
                matches={matches}
                filterArr={filterArr} />
        </section>
    );
}