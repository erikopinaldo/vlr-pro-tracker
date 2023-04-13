export default function MatchTeams({ teamOneName, teamTwoName }) {
    return (
        <div className="basis-2/5 mx-4">
            <div>
                <span>{teamOneName}</span>
            </div>
            <div>
                <span>{teamTwoName}</span>
            </div>
        </div>
    );
}