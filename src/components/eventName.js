export default function EventName({ eventName, eventImg }) {
    return (
        <div className="flex items-center basis-2/5 justify-end overflow-hidden">
            <span className="hidden md:inline mr-12 truncate">{eventName}</span>
            <img src={eventImg} />
        </div>
    );
}