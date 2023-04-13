import FilterItem from './filterItem'

export default function FilterBar({ matches, onFilterClick }) {    
    const rows = []
    const events = []

    matches.forEach(match => {
        if (!events.includes(match.event_name)) {
            events.push(match.event_name)

            rows.push(
                <FilterItem
                    onFilterClick={() => onFilterClick}
                    eventName={match.event_name}
                    key={match.match_url} />
            );
        }
    });

    rows.push((
        <li key='reset' className='text-center'>
            Reset filter
        </li>
    ))

    return (
        <div className='my-6 px-4 py-2 bg-gray-950 md:col-span-3'>
            <ul>{rows}</ul>
        </div>
    );
}