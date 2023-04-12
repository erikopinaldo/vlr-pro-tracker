import MatchRow from './matchRow'

export default function MatchTable({ matches, filterArr }) {
    const rows = []

    matches.forEach(match => {
        if (filterArr.length > 0 && filterArr.indexOf(match.event_name) === -1) {
            return;
        }
        
        rows.push(
            <MatchRow
                match={match}
                key={match.match_url} />
        );
    });
    
    return (
        <div className='my-6 px-4 py-2 bg-gray-950'>
            <ul>{rows}</ul>
        </div>
    );
}