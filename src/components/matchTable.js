import MatchRow from './matchRow'
import { DateTime } from 'luxon'

export default function MatchTable({ matches, filterArr }) {
    const rows = []

    matches.forEach(match => {
        if (filterArr.length > 0 && filterArr.indexOf(match.tournament_name) === -1) {
            return;
        }

        let matchEtaIntervals = {}

        const matchEtaArr = match.time_until_match
            .split(' ')
            .filter(element => element !== 'from' && element !== 'now')
            .forEach(time => {
                const timeSplit = time.match(/[a-zA-Z]+|[0-9]+/g)

                if (timeSplit[1] === 'd') matchEtaIntervals.days = timeSplit[0]
                else if (timeSplit[1] === 'h') matchEtaIntervals.hours = timeSplit[0]
                else if (timeSplit[1] === 'm') matchEtaIntervals.minutes = timeSplit[0]
                else matchEtaIntervals = timeSplit[0]
            })

        let matchDate

        if (matchEtaIntervals === 'TBD') matchDate = matchEtaIntervals
        else matchDate = new DateTime(Date.now()).plus(matchEtaIntervals).toISODate()
        
        rows.push(
            <MatchRow
                match={match}
                matchDate={matchDate}
                key={match.match_page} />
        );
    });
    
    return (
        <div className='my-6 md:my-0 px-4 py-2 md:col-span-7'>
            <ul>{rows}</ul>
        </div>
    );
}