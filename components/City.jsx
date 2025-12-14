export default function City({temp, city, time}) {
    return(
        <div>
            <h2>{temp + '˚C'}</h2>
            <h3>{city}</h3>
            <h3>{time}</h3>
        </div>
    )
}