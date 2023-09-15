'use client'

import "./SportCard.css"
import Image from "next/image"
export default function SportCard({sportName})
{
    const sports_icons =[
        {
            "name": "Atletismo",
            "icon": "/athletism.svg"
        }
    ]
    return(
        <div className="SportCard">
            {
                sports_icons.map((sport)=>
                {
                    if(sport.name === sportName)
                    {
                        return(
                            <>
                                <Image src={sport.icon} alt="" fill className="image"/>
                                <p>{sport.name}</p>
                            </>
                        )
                    }
                })
            }
        </div>
    )
}