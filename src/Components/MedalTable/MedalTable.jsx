'use client'
import { useEffect, useState } from "react"
import "./medalTable.css"
import Image from "next/image"

export default function MedalTable()
{
    const [Style, setStyle] = useState({transform: "rotate(0deg)"})
    const [more, setMore] = useState(false)

    useEffect(()=>
    {
        if(more)
        {
            setStyle({transform: "rotate(180deg)"})
        }
        else
        {
            setStyle({transform: "rotate(0deg)"})
        }
    },[more])
    return(
        <div className="MedalTable">
            <div className="MobileView container">
                <div className="tableTitle">
                    <h3>Medallero</h3>
                    <div className="filters">
                        <p>Filtros</p>
                        <div className="moreImg">
                            <Image alt="" src="/more.svg" fill className="image"/>
                        </div>
                    </div>
                </div>
                <table className="medalsTable">
                    <thead>
                        <tr>
                            <th>Facultades</th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/goldenMedal.svg" fill className="image"/>
                                </div>
                            </th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/silverMedal.svg" fill className="image"/>
                                </div>
                            </th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/bronzeMedal.svg" fill className="image"/>
                                </div>
                            </th>
                            <th>
                                <div className="medalIcon">
                                    <Image alt="" src="/allMedals.svg" fill className="image"/>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {!more ?
                        <>
                            <tr className="trow">
                                <td>
                                    <div className="row">
                                        <p>1</p>
                                        <div className="logoName">
                                        <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                        </div>
                                        <p>FLEX</p>
                                    </div>
                                    </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>
                            <tr className="trow">
                                <td>
                                    <div className="row">
                                        <p>2</p>
                                        <div className="logoName">
                                            <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                            </div>
                                        <p>FARAL</p>
                                        </div>
                                </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>
                            </>
                            :
                            <>
                            <tr className="trow">
                                <td>
                                <div className="row">
                                        <p>1</p>
                                        <div className="logoName">
                                            <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                            </div>
                                        <p>FLEX</p>
                                    </div>
                                    </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <p>2</p>
                                        <div className="logoName">
                                            <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                        </div>
                                        <p>FARAL</p>
                                        </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                            </tr>
                            <tr>
                                        <td>
                                        <div className="row">
                                        <p>1</p>
                                        <div className="logoName">
                                            <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                        </div>
                                            <p>FLEX</p>
                                    </div>
                                </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <p>2</p>
                                        <div className="logoName">
                                            <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                        </div>
                                        <p>FARAL</p>
                                    </div>
                                </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                    <p>1</p>
                                    <div className="logoName">
                                    <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                        </div>
                                        <p>FLEX</p>
                                        </div>
                                        </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                    <p>2</p>
                                    <div className="logoName">
                                    <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                    </div>
                                    <p>FARAL</p>
                                    </div>
                                    </td>
                                    <td className="medalInfo">1</td>
                                    <td className="medalInfo">-</td>
                                    <td className="medalInfo">4</td>
                                    <td className="medalInfo">5</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <p>1</p>
                                        <div className="logoName">
                                            <Image alt="" src="/lenguas_extranjeras.svg" fill className="image"/>
                                        </div>
                                        <p>FLEX</p>
                                    </div>
                                </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row">
                                        <p>2</p>
                                        <div className="logoName">
                                        <Image alt="" src="/farmacia_alimentos.svg" fill className="image"/>
                                        </div>
                                        <p>FARAL</p>
                                    </div>
                                </td>
                                <td className="medalInfo">1</td>
                                <td className="medalInfo">-</td>
                                <td className="medalInfo">4</td>
                                <td className="medalInfo">5</td>
                            </tr>
                        </>
                        }
                    </tbody>

                </table>
                    <div className="moreBar" onClick={()=>setMore(!more)}>
                        <>
                            <p>Ver &nbsp;</p>
                            {
                                !more
                                ?
                                <p>más</p>
                                :
                                <p>menos</p>
                            }
                            <div className="showMore" style={Style}>
                                <div className="moreImg" >
                                <Image alt="" src="more.svg" fill className="image"/>
                                </div>
                            </div>
                        </>
                    </div>
            </div>
        </div>
    )
}