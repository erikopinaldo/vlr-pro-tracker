export default function MatchTime({ matchTime, matchEta }) {
    return (
        <div className='basis-1/4'>
            <div>
                <span>{matchTime}</span>
            </div>
            <div>
                <span>{matchEta}</span>
            </div>
        </div>
    );
}