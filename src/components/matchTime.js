export default function MatchTime({ matchTime, matchEta }) {
    let styleOptions 
    if (matchEta !== 'LIVE' && matchEta !== 'Upcoming') styleOptions = 'hidden md:block'

    return (
        <div className='basis-1/6 mr-10'>
            <div>
                <span suppressHydrationWarning={true}>{matchTime}</span>
            </div>
            <div className={styleOptions}>
                <span suppressHydrationWarning={true}>{matchEta}</span>
            </div>
        </div>
    );
}