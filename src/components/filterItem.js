export default function filterItem({ eventName, isActive, onFilterClick }) {
    let options = 'my-4 p-8 py-2 md:px-6 rounded-full bg-gray-800 cursor-pointer truncate'

    if (!isActive) {
        // options += ' outline outline-offset-2 outline-color-white'
        options += ' opacity-50'
    }
    
    return (
        <li
            className={options}
            onClick={onFilterClick()}>
            <span
                className="truncate"
                data-tooltip-id="event-name-tooltip"
                data-tooltip-content={eventName}
                data-tooltip-place="top"
            >
                {eventName}
            </span>
        </li>
    );
}