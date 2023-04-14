import MatchTime from './matchTime'
import MatchTeams from './matchTeams'
import EventName from './eventName'

export default function matchRow({ match, matchTime }) {
    return (
        <li className='flex justify-between items-center my-4 p-6 md:px-16 rounded bg-gray-900'>
            <MatchTime matchTime={matchTime} matchEta={match.time_until_match} />
            <MatchTeams teamOneName={match.team1} teamTwoName={match.team2} />
            <EventName eventName={match.tournament_name} eventImg={match.tournament_icon} />
        </li>
    );
}