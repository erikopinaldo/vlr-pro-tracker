import MatchRow from './matchRow'
import MatchDateHeader from './matchDateHeader'
import { DateTime } from 'luxon'

export default function MatchTable({ matches, filterArr }) {
    const rows = []
    let lastDateHeader = null;

    matches.forEach(match => {
        if (filterArr.length > 0 && filterArr.indexOf(match.tournament_name) === -1) {
            return;
        }

        // store date intervals to be added to "now" via Luxon
        let matchEtaIntervals = {}

        match.time_until_match
            .split(' ')
            .filter(element => element !== 'from' && element !== 'now')
            .forEach(time => {
                const timeSplit = time.match(/[a-zA-Z]+|[0-9]+/g)

                if (timeSplit[1] === 'd') matchEtaIntervals.days = timeSplit[0]
                else if (timeSplit[1] === 'h') matchEtaIntervals.hours = timeSplit[0]
                else if (timeSplit[1] === 'm') matchEtaIntervals.minutes = timeSplit[0]
                else matchEtaIntervals = timeSplit[0]
            })

        // Get match date using conversion via Luxon
        let matchDateObj
        let matchDate
        let matchTime

        if (matchEtaIntervals === 'TBD') matchDate = 'LIVE'
        else {
            matchDateObj = new DateTime(Date.now()).plus(matchEtaIntervals)
            matchDate = matchDateObj.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
            matchTime = matchDateObj.toLocaleString(DateTime.TIME_SIMPLE)
        }

        // Create date row
        match.matchDate = matchDate
        
        if (match.matchDate !== lastDateHeader) {
            let styleOptions
            if (rows.length === 0) styleOptions = 'mt-4 md:mt-10 mb-2 px-6'
            else styleOptions = 'mt-10 mb-2 px-6'
            
            rows.push(
                <MatchDateHeader
                    styleOptions={styleOptions}
                    matchDate={matchDate}
                    key={matchDate} />
            );
        }
        
        rows.push(
            <MatchRow
                match={match}
                matchDate={matchDate}
                matchTime={matchTime}
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