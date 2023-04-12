import FilterBar from './filterBar'
import MatchTable from './matchTable'
import { useState } from 'react';

export default function FilterableMatchTable({ matches }) {
    const [filterArr, setFilterArr] = useState([]);

    function handleFilterClick(eventName) {
        console.log(eventName)
        const nextFilter = [...filterArr, eventName]
        setFilterArr(nextFilter)
    }
    
    return (
        <div>
            <FilterBar
                matches={matches}
                filterArr={filterArr}
                onFilterClick={(e) => handleFilterClick(e.target.textContent)} />
            <MatchTable
                matches={matches}
                filterArr={filterArr} />
        </div>
    );
}