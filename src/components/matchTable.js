import MatchRow from './matchRow'
import MatchDateHeader from './matchDateHeader'
import { DateTime } from 'luxon'
import { useState } from 'react';

export default function MatchTable({ matches, matchView, filterArr, isCopied, handleCopyClick }) {  
    const rows = []
    let lastDateHeader = null;

    matches.forEach(match => {
        // Only build MatchRow and MatchDateHeader components if the matches belong to the user's chosen filter
        if (filterArr.length > 0 && filterArr.indexOf(match.tournament_name) === -1) {
            return;
        }

        const matchTimeRelative = match.time_until_match || match.time_completed // string from API -- can be 'X time ago' or 'X time from now'
        const matchTimeAbs = match.abs_match_time || match.abs_time_completed // string from API -- can be 'X:XX AM/PM'
        
        const matchDateDiffObj = {} // contains units of time extracted from matchTimeRelative -- used in Luxon's .plus() or .minus() methods to calculate a date X time from Date.now()
        let luxonMatchDateObj // Luxon date object converted from matchDateDiffObj, which will be converted to a local string for the client
        let matchDate // final match date given to the MatchRow component 
        let matchTime // final match time given to the MatchRow component

        // If relative match time is a single word string (i.e. 'LIVE', 'UPCOMING', 'TBD'), assign it to the matchDate value 
        // In this scenario, no value is given to matchTime and it is not rendered
        if ((matchTimeRelative.split(' ').length === 1)) {
            matchDate = match.time_until_match || match.time_completed
        }

        // If relative match time is a known set of intervals (i.e. 'X time from now'), use it build the luxonMatchDateObj and calculate final matchDate/matchTime
        else {

            // Build the matchDateDiffObj object with units of time
            matchTimeRelative
                .split(' ')
                .filter(element => element !== 'from' && element !== 'now' && element !== 'ago')
                .forEach(time => {

                    const timeSplit = time.match(/[a-zA-Z]+|[0-9]+/g)

                    if (timeSplit[1] === 'w') matchDateDiffObj.weeks = timeSplit[0]
                    else if (timeSplit[1] === 'd') matchDateDiffObj.days = timeSplit[0]
                    else if (timeSplit[1] === 'h') matchDateDiffObj.hours = timeSplit[0]
                    else if (timeSplit[1] === 'm') matchDateDiffObj.minutes = timeSplit[0]
                })

            // Build the luxonMatchDateObj object
            if (matchView === 'upcoming') {
                luxonMatchDateObj = new DateTime(Date.now()).plus(matchDateDiffObj).setZone('America/Toronto').toObject()
            }
            else if (matchView === 'completed') {
                luxonMatchDateObj = new DateTime(Date.now()).minus(matchDateDiffObj).setZone('America/Toronto').toObject()
            } 

            // Array created by splitting matchTimeAbs by the colon character -- separates hour and minute values
            const matchTimeArr = matchTimeAbs.replace(/[a-zA-Z]/g, '').split(':') 

            // Hour value to be put into luxonMatchDateObj
            if (matchTimeAbs.includes('AM') && !matchTimeAbs.includes('12:')) {
                luxonMatchDateObj.hour = matchTimeArr[0]
            }
            else if (matchTimeAbs.includes('PM') && !matchTimeAbs.includes('12:')) {
                luxonMatchDateObj.hour = Number(Number(matchTimeArr[0]) + 12)
            }
            else if (matchTimeAbs.includes('12:00 AM')) {
                luxonMatchDateObj.hour = 0
            }
            else if (matchTimeAbs.includes('12:00 PM')) {
                luxonMatchDateObj.hour = 12
            }

            // Minute value to be put into luxonMatchDateObj
            luxonMatchDateObj.minute = Number(matchTimeArr[1])

            // Convert to client's local time
            matchDate = DateTime.fromObject(luxonMatchDateObj, { zone: 'America/Toronto' }).setZone('local').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
            matchTime = DateTime.fromObject(luxonMatchDateObj, { zone: 'America/Toronto' }).setZone('local').toLocaleString(DateTime.TIME_SIMPLE)
        } 

        // Create date header 
        if (matchDate !== lastDateHeader) {
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
        
        // Create match rows
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
            <div className='flex justify-end'>
                <button
                    onClick={() => handleCopyClick()}>
                    <span>{isCopied ? 'Copied link!' : 'Copy link to this search'}</span>
                </button> 
            </div>
            <ul>{rows}</ul>
        </div>
    );
}