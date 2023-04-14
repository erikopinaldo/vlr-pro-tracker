export default function MatchTime({ matchTime, matchEta }) {
    return (
        <div className='basis-1/5'>
            <div>
                <span>{matchTime === 'TBD' ? 'LIVE' : matchTime}</span>
            </div>
            <div>
                <span>{matchEta}</span>
            </div>
        </div>
    );
}