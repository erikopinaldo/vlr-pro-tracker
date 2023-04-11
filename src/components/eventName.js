export default function EventName({ eventName, eventImg }) {
    return (
        <div className="flex items-center basis-1/4 justify-end">
            <span className="hidden md:inline mr-12 text-sm">{eventName}</span>
            <img src={eventImg} />
        </div>
    );
}