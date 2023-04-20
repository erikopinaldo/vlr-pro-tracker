export default function MatchTeams({ teamOneName, teamTwoName }) {
    return (
        <div className="basis-3/6">
            <div>
                <span>{teamOneName}</span>
            </div>
            <div>
                <span>{teamTwoName}</span>
            </div>
        </div>
    );
}