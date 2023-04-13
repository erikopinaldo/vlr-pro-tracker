import FilterItem from './filterItem'

export default function FilterBar({ matches, filterArr, onFilterClick, onFilterReset }) {    
    const rows = []
    const events = []

    matches.forEach(match => {
        let isActive = filterArr.includes(match.event_name)

        if (!events.includes(match.event_name)) {
            events.push(match.event_name)

            rows.push(
                <FilterItem
                    isActive={isActive}
                    onFilterClick={() => onFilterClick}
                    eventName={match.event_name}
                    key={match.match_url} />
            );
        }
    });

    rows.push((
        <li key='reset'
            className='text-center cursor-pointer'
            onClick={onFilterReset()}>
            Reset filter
        </li>
    ))

    return (
        <div className='my-6 md:my-0 px-4 py-2 bg-gray-950 md:col-span-2'>
            <ul>{rows}</ul>
        </div>
    );
}