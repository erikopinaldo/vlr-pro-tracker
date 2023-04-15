import FilterItem from './filterItem'

export default function FilterBar({ matches, filterArr, onFilterClick, onFilterReset, styleOptions }) {    
    const rows = []
    const events = []

    rows.push((
        <li key='reset'
            className='md:mt-1.5 md:px-6 text-center cursor-pointer'
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
        <div className={styleOptions}>
            <ul>{rows}</ul>
        </div>
    );
}