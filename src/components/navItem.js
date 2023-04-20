export default function NavItem({ children, matchView, onViewClick }) {
    let styleOptions = "p-4 cursor-pointer text-center"

    if (children.toLowerCase() === matchView) styleOptions += " border-solid border-b-2 border-sky-500"

    return (
        <li
            className={styleOptions}
            onClick={onViewClick()}>
            {children}
        </li>
    );
}