import FilterItem from './filterItem'

export default function FilterBar({ matches, onFilterClick }) {    
    const rows = []

    matches.forEach(match => {
        rows.push(
            <FilterItem
                onFilterClick={() => onFilterClick}
                eventName={match.event_name}
                key={match.match_url} />
        );
    });

    return (
        <div className='my-6 px-4 py-2 bg-gray-950'>
            <ul>{rows}</ul>
        </div>
    );
}