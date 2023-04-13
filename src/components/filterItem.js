export default function filterItem({ eventName, isActive, onFilterClick }) {
    let options = 'my-4 pl-8 py-2 md:px-6 rounded-full bg-gray-900 cursor-pointer'

    if (isActive) {
        options += ' outline outline-offset-2 outline-color-white'
    }
    
    return (
        <li
            className={options}
            onClick={onFilterClick()}>
            <span>{eventName}</span>
        </li>
    );
}