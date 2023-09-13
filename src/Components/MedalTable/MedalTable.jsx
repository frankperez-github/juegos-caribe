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
                <table className="medalsTable">
                    <tr>
                        <th>Facultades</th>
                        <th>
                            <div className="medalIcon">
                                <Image src="/goldenMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon">
                                <Image src="/silverMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon">
                                <Image src="/bronzeMedal.svg" fill className="image"/>
                            </div>
                        </th>
                        <th>
                            <div className="medalIcon">
                                <Image src="/allMedals.svg" fill className="image"/>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <div className="row">
                                <p>1</p>
                                <div className="logoName">
                                    <Image src="/lenguas_extranjeras.svg" fill className="image"/>
                                </div>
                                <p>FLEX</p>
                            </div>
                        </td>
                        <td className="medalInfo">1</td>
                        <td className="medalInfo">-</td>
                        <td className="medalInfo">4</td>
                        <td className="medalInfo">5</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}