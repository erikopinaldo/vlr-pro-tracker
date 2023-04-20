export default function MatchScore({ score1, score2 }) {
    return (
        <div className="basis-1/6">
            <div>
                <span>{score1}</span>
            </div>
            <div>
                <span>{score2}</span>
            </div>
        </div>
    );
}