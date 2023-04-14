import FilterItem from './filterItem'

export default function FilterBar({ matches, filterArr, onFilterClick, onFilterReset }) {    
    const rows = []
    const events = []

    rows.push((
        <li key='reset'
            className='my-4 py-2 md:px-6 text-center cursor-pointer'
            onClick={onFilterReset()}>
            Reset filter
        </li>
    ))

    matches.forEach(match => {
        const isActive = filterArr.includes(match.tournament_name)

        if (!events.includes(match.tournament_name)) {
            events.push(match.tournament_name)

            rows.push(
                <FilterItem
                    isActive={isActive}
                    onFilterClick={() => onFilterClick}
                    eventName={match.tournament_name}
                    key={match.match_page} />
            );
        }
    });

    return (
        <div className='my-6 md:my-0 px-4 py-2 bg-gray-950 md:col-span-2'>
            <ul>{rows}</ul>
        </div>
    );
}