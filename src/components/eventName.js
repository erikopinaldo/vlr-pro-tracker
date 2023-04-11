export default function EventName({ eventName }) {
    return (
        <div className="basis-1/4 text-right">
            {/* <span>{eventName}</span> */}

            <img src={eventName} />
        </div>
    );
}