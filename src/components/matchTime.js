export default function MatchTime({ matchTime, matchEta }) {
    let styleOptions 
    if (matchEta !== 'LIVE' && matchEta !== 'Upcoming') styleOptions = 'hidden md:block'

    return (
        // We are going to suppress the React hydration warning because matchTime is a relative time
        // There's always going to be some mismatch between the time calulated on the server and the time calculated on the client
        // https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <div
            className='basis-1/6 mr-10'>
            <div>
                <span suppressHydrationWarning={true}>{matchTime}</span>
            </div>
            <div className={styleOptions}>
                <span>{matchEta}</span>
            </div>
        </div>
    );
}