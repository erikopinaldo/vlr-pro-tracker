import MatchRow from './matchRow'
import MatchDateHeader from './matchDateHeader'
import { DateTime } from 'luxon'

export default function MatchTable({ matches, matchView, filterArr }) {
    const rows = []
    let lastDateHeader = null;

    matches.forEach(match => {
        if (filterArr.length > 0 && filterArr.indexOf(match.tournament_name) === -1) {
            return;
        }

        // store date intervals to be added to "now" via Luxon
        let matchTimeRelative
        let matchEtaIntervals = {}

        if (matchView === 'upcoming') matchTimeRelative = match.time_until_match
        else  matchTimeRelative = match.time_completed

        matchTimeRelative
            .split(' ')
            .filter(element => element !== 'ago')
            .forEach(time => {

                const timeSplit = time.match(/[a-zA-Z]+|[0-9]+/g)

                if (timeSplit[1] === 'w') matchEtaIntervals.weeks = timeSplit[0]
                else if (timeSplit[1] === 'd') matchEtaIntervals.days = timeSplit[0]
                else if (timeSplit[1] === 'h') matchEtaIntervals.hours = timeSplit[0]
                else if (timeSplit[1] === 'm') matchEtaIntervals.minutes = timeSplit[0]
                else matchEtaIntervals = timeSplit[0]
            })

        // Get match date using conversion via Luxon
        let matchDateObj
        let matchDate
        let matchTime

        // Matches with established ETAs are objects -- values are ETA intervals to be added. For example: {"days": "2", "hours": "15"}
        // Matches without established ETAs are strings. Current possible values are: LIVE, UPCOMING, TBD
        if (typeof matchEtaIntervals === 'string') matchDate = matchEtaIntervals
        else {
            matchDateObj = new DateTime(Date.now()).plus(matchEtaIntervals)
            matchDate = matchDateObj.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
            matchTime = matchDateObj.toLocaleString(DateTime.TIME_SIMPLE)
        }

        // Create date row
        match.matchDate = matchDate
        
        if (match.matchDate !== lastDateHeader) {
            let styleOptions
            if (rows.length === 0) styleOptions = 'mt-4 mb-2 px-6'
            else styleOptions = 'mt-10 mb-2 px-6'
            
            rows.push(
                <MatchDateHeader
                    styleOptions={styleOptions}
                    matchDate={matchDate}
                    key={`${matchDate}-${match.match_page}`} />
            );
        }
        
        rows.push(
            <MatchRow
                match={match}
                matchDate={matchDate}
                matchTime={matchTime}
                matchTimeRelative={matchTimeRelative}
                key={match.match_page} />
        );

        lastDateHeader = matchDate
    });
    
    return (
        <div className='px-4 py-0 md:py-2 md:col-span-7'>
            <ul>{rows}</ul>
        </div>
    );
}