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
        <div className='px-14'>
            <ul>{rows}</ul>
        </div>
    );
}