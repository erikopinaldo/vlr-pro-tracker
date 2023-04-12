export default function filterItem({ eventName }) {
    return (
        <li className='my-4 pl-8 py-2 md:px-16 rounded-full bg-gray-900'>
            <span>{eventName}</span>
        </li>
    );
}