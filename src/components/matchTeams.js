export default function MatchTeams({ teamOneName, teamTwoName }) {
    return (
        <div className="basis-1/2 mx-4">
            <span>{teamOneName} vs. {teamTwoName}</span>
        </div>
    );
}