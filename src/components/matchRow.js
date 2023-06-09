import MatchTime from './matchTime'
import MatchTeams from './matchTeams'
import MatchScore from './matchScore'
import EventName from './eventName'

export default function matchRow({ match, matchTime, matchTimeRelative }) {
    return (
        <li className='flex justify-between items-center my-4 p-6 md:px-16 rounded bg-sky-950'>
            <MatchTime matchTime={matchTime} matchEta={matchTimeRelative} />
            <MatchTeams teamOneName={match.team1} teamTwoName={match.team2} />
            <MatchScore score1={match.score1} score2={match.score2} />
            <EventName eventName={match.tournament_name} eventImg={match.tournament_icon} />
        </li>
    );
}