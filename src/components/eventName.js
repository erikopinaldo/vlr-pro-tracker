export default function EventName({ eventName, eventImg }) {
    return (
        <div className="flex items-center basis-1/6 md:basis-2/5 justify-end overflow-hidden">
            <div
                className="hidden md:inline mr-12 truncate"
                data-tooltip-id="event-name-tooltip"
                data-tooltip-content={eventName}
                data-tooltip-place="top"
            >
                {eventName}
            </div>
            <img src={eventImg} />
        </div>
    );
}