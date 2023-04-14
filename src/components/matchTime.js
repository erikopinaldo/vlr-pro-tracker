export default function MatchTime({ matchTime, matchEta }) {
    return (
        <div className='basis-1/5'>
            <div>
                <span>{matchTime}</span>
            </div>
            <div>
                <span>{matchEta === 'TBD' ? 'LIVE' : matchEta}</span>
            </div>
        </div>
    );
}