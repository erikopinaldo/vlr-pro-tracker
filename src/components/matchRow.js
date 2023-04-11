import MatchTime from './matchTime'
import MatchTeams from './matchTeams'
import EventName from './eventName'

export default function matchRow({ match }) {
    return (
        <li className='flex justify-between items-center my-4 p-6 rounded bg-gray-900'>
            <MatchTime matchTime={match.match_time} matchEta={match.eta}/>
            <MatchTeams teamOneName={match.team_one_name} teamTwoName={match.team_two_name} />
            <EventName eventName={match.event_icon_url} />
        </li>
    );
}