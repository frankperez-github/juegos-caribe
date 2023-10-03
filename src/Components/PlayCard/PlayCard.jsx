'use client'
import { useEffect, useState } from "react"
import "./playcard.css"
import Image from "next/image"
import useSiteContext from "@/hooks/useSiteContext"
export default function PlayCard({play})
{
    
    const {Faculties}= useSiteContext()
    const [logo1, setLogo1] = useState("")
    const [logo2, setLogo2] = useState("")

    useEffect(()=>
    {
        Faculties.map((fac)=>
        {
            if(play.teams[0] === fac.name)
            {
                setLogo1(fac.image)
            }
            if(play.teams[1] === fac.name)
            {
                setLogo2(fac.image)
            }
        })
    }, [])
    return(
        <div className="MobileView PlayCard">
            <div className="row">
                <div className="left column">
                    <div className="facLogo">
                        <Image src={logo1} fill className="image" alt=""/>
                    </div>
                </div>
                <div className="center column">
                    <h4>{play.sport} {play.gender === "male" ? "(M)" : play.gender === "female" ? "(F)": "(Mix)"}</h4>
                    <h4>{play.scores[0]}-{play.scores[1]}</h4>
                </div>
                <div className="right column">
                <div className="facLogo">
                        <Image src={logo2} fill className="image" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row teamsRow">
                <p>{play.teams[0]}</p>
                <p>{play.status}</p>
                <p>{play.teams[1]}</p>
            </div>
            <div className="cardFooter">
                <p>{play.location}</p>
                <p>{play.stage}</p>
            </div>
            <div className="details">
                <p>Detalles del partido</p>
            </div>
        </div>
    )
}