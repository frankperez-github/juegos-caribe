'use client'
import { useState } from "react"
import "../Header/header.css"
import "../../app/globals.css"
import Image from 'next/image'

export default function Header()
{
    const [lenguage, setLenguage] = useState("es")
    return(
        <div className="Header">
            <div className="MobileView">
                <div className="MobileHeader">
                    <div className="leftHeader">
                        <div className="mobileLogo">
                            <Image src="/logo.svg" fill className="image"/>
                        </div>
                    </div>
                    <div className="rightHeader">
                        <div className="searchIcon">
                            <Image src="/search.svg" fill className="image"/>
                        </div>
                        <h2 onClick={()=>{ lenguage === "es" ? setLenguage("en"): setLenguage("es")}}>
                            {lenguage.toUpperCase()}
                        </h2>
                        <div className="burgerMenu">
                            <Image src="/burgerMenu.svg" fill className="image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="DesktopView">

            </div>
        </div>
    )
}