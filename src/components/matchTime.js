export default function MatchTime({ matchTime, matchEta }) {
    let styleOptions 
    if (matchEta !== 'LIVE' && matchEta !== 'Upcoming') styleOptions = 'hidden md:block'

    return (
        <div className='basis-1/6 mr-10'>
            <div>
                <span suppressHydrationWarning={true}>{(typeof window !== undefined) && matchTime}</span>
            </div>
            <div className={styleOptions}>
                <span suppressHydrationWarning={true}>{(typeof window !== undefined) && matchEta}</span>
            </div>
        </div>
    );
}