'use client'

import "./SportCard.css"
import sports_icons from "../../../public/sportsIcons.json"
import Image from "next/image"
export default function SportCard({sportName})
{
    
    return(
        <div className="SportCard MobileView">
            {
                sports_icons.map((sport, index)=>
                {
                    if(sport.name === sportName)
                    {
                        return(
                            <div key={index}>
                                <div className="circle">
                                    <div className="sportImage">
                                        <Image src={sport.icon} alt="" fill className="image"/>
                                    </div>
                                </div>
                                    <p>{sport.name.toUpperCase()}</p>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}