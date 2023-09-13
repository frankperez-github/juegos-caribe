import "./medalTable.css"
import Image from "next/image"

export default function MedalTable()
{
    return(
        <div className="MedalTable">
            <div className="MobileView container">
                <div className="tableTitle">
                    <h3>Medallero</h3>
                    <div className="filters">
                        <p>Filtros</p>
                        <div className="moreImg">
                            <Image src="/more.svg" fill className="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}