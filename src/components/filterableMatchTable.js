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
    
    return (
        <section>
            <FilterBar
                matches={matches}
                filterArr={filterArr}
                onFilterClick={(e) => handleFilterClick(e.target.textContent)} />
            <MatchTable
                matches={matches}
                filterArr={filterArr} />
        </section>
    );
}