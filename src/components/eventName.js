export default function EventName({ eventName, eventImg }) {
    return (
        <div className="basis-1/4 text-right">
            <span className="hidden md:inline">{eventName}</span>

            <img src={eventImg} />
        </div>
    );
}