import FilterBar from './filterBar'
import MatchTable from './matchTable'
import { useState } from 'react';

export default function FilterableMatchTable({ matches }) {
    const [filterArr, setFilterArr] = useState([]);
    
    return (
        <div>
            <FilterBar
                matches={matches}
                filterArr={filterArr} />
            <MatchTable
                matches={matches}
                filterArr={filterArr} />
        </div>
    );
}