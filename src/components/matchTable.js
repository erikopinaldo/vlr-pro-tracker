import MatchRow from './matchRow'

export default function MatchTable({ matches, filterArr }) {
    const rows = []

    matches.forEach(match => {
        if (filterArr.length > 0 && filterArr.indexOf(match.tournament_name) === -1) {
            return;
        }
        
        rows.push(
            <MatchRow
                match={match}
                key={match.match_page} />
        );
    });
    
    return (
        <div className='my-6 md:my-0 px-4 py-2 md:col-span-7'>
            <ul>{rows}</ul>
        </div>
    );
}