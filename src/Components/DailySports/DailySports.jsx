import SportCard from "../SportCard/SportCard"
import "./DailySports.css"

export default function DailySports()
{
    return(
        <div className="DailySports container MobileView">
            <h2 className="sectionTitle">Deportes del día</h2>
            <div className="SportsList">
                <SportCard sportName={"Atletismo"}/>
                <SportCard sportName={"Taekwondo"}/>
                <SportCard sportName={"Tenis"}/>

            </div>
        </div>
    )
}