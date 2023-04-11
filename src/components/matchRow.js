import MatchTime from './matchTime'
import MatchTeams from './matchTeams'
import EventName from './eventName'

export default function matchRow({ match }) {
    return (
        <li className='flex justify-between my-4 px-8 bg-slate-500'>
            <MatchTime matchTime={match.match_time} />
            <MatchTeams teamOneName={match.team_one_name} teamTwoName={match.team_two_name} />
            <EventName eventName={match.event_name} />
        </li>
    );
}