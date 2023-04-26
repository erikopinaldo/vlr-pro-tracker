export default function MatchDateHeader({ matchDate, styleOptions }) { 
    return (
        <li className={styleOptions} suppressHydrationWarning={true}>
            {matchDate}
        </li>
    );
}