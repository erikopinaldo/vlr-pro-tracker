import MatchRow from './matchRow'

export default function MatchTable({ matches }) {
    const rows = []

    matches.forEach(match => {
        rows.push(
            <MatchRow
                match={match}
                key={match.match_url} />
        );
    });
    
    return (
        <div className='my-20 p-2 bg-gray-950'>
            <ul>{rows}</ul>
        </div>
    );
}