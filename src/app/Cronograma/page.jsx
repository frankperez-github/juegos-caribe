'use client'
import useSiteContext from "@/hooks/useSiteContext";
import "./schedule.css"
import Layout from "@/Components/Layout/Layout";
import Image from "next/image"
import PlayCard from "@/Components/PlayCard/PlayCard";
import { useState } from "react";

export default function Schedule()
{
    const {Cronograma} = useSiteContext()

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const date = new Date()

    // Filter
    const [filtering, setFiltering] = useState(false)
    const [filteredSession, setFilteredSession] = useState([])
    const [filteredFaculties, setFilteredFaculties] = useState([])
    const [filteredSports, setFilteredSports] = useState([])
    const [filteredGender, setFilteredGender] = useState([])
    const [filteredLocation, setFilteredLocation] = useState([])
    
    return(
        <div className="Schedule MobileView">
            <Layout>
                <div className="cornerCircle">
                    <Image src="/smallBall.svg" fill className="image"/>
                </div>
                <div className="container">
                    <h2>Cronograma</h2>
                    <div className="scheduleHead">
                        <div className="date">
                            <p>{days[date.getDay()]}, {date.getDate()} de {months[date.getMonth()]} {date.getFullYear()}</p>
                            <div className="calendar">
                                <div className="calendarImage" id="calendar">
                                    <Image src="/lightCalendar.svg" fill className="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="filterButt">
                            <p>Filtro</p>
                            <div className="arr">
                                <div className="arrowImg">
                                    <Image src="/more.svg" fill className="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="morning">
                        <p className="session">Sesión de la mañana</p>
                        {
                            Cronograma.map((play)=>{
                                if(play.session === "morning")
                                {
                                    return(
                                        <PlayCard play={play}/>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="afternoon">
                        <p className="session">Sesión de la tarde</p>
                        {
                            Cronograma.map((play)=>{
                                if(play.session === "afternoon")
                                {
                                    return(
                                        <PlayCard play={play}/>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </Layout>
        </div>
    )
}