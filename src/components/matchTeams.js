export default function MatchTeams({ teamOneName, teamTwoName }) {
    return (
        <div className="basis-1/2 mx-4 text-sm">
            <div>
                <span>{teamOneName}</span>
            </div>
            <div>
                <span>{teamTwoName}</span>
            </div>
        </div>
    );
}