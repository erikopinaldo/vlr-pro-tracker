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
        <div className='mx-2 my-20 p-8 bg-slate-900'>
            <ul>{rows}</ul>
        </div>
    );
}