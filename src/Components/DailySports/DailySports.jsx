import SportCard from "../SportCard/SportCard"
import "./DailySports.css"

export default function DailySports()
{
    return(
        <div className="DailySports container">
            <h2>Deportes del día</h2>
            <div className="SportsList">
                <SportCard sportName={"Atletismo"}/>
                <SportCard sportName={"Atletismo"}/>
            </div>
        </div>
    )
}