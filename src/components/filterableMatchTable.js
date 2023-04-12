import FilterBar from './filterBar'
import MatchTable from './matchTable'

export default function FilterableMatchTable({ matches }) {
    return (
        <div>
            <FilterBar matches={matches} />
            <MatchTable matches={matches} />
        </div>
    );
}