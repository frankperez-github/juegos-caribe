'use client'
import useSiteContext from "@/hooks/useSiteContext";
import "./schedule.css"
import Layout from "@/Components/Layout/Layout";
import Image from "next/image"
import PlayCard from "@/Components/PlayCard/PlayCard";
import { useEffect, useState } from "react";

export default function Schedule()
{
    const {Cronograma} = useSiteContext()

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const date = new Date()

    // Filter
    const [filtered, setFiltered] = useState(Cronograma)
    const [filtering, setFiltering] = useState(false)
    const [filteredSession, setFilteredSession] = useState(["morning", "afternoon"])
    const [filteredFaculties, setFilteredFaculties] = useState([])
    const [filteredSports, setFilteredSports] = useState([])
    const [filteredGender, setFilteredGender] = useState([])
    const [filteredLocation, setFilteredLocation] = useState([])

    const handleSelect=(e)=>{
        document.sessionForm.session.value = e.target.value
        setFilteredSession(e.target.value)
    }

    const [filterButtonStyle, setFilterButtonStyle] = useState({})
    
    useEffect(()=>{
        if(filtering === true)
        {
            setFilterButtonStyle({backgroundColor: "white", boxShadow: "0px 0px 10px 1px rgb(209, 209, 209)"})
        }
        else
        {
            setFilterButtonStyle({})
        }
        var Filtered = []
        Cronograma.map((play)=>{
            if (filteredSession.includes(play.session))
            {
                Filtered = [...Filtered, play]
            }
            if (filteredFaculties.includes(play.teams[0]) || filteredFaculties.includes(play.teams[1]) )
            {
                Filtered = [...Filtered, play]
            }
        })
        setFiltered(Filtered)
    },[filtering, filteredSession])
    
    return(
        <div className="Schedule MobileView">
            <Layout>
                <div className="cornerCircle">
                    <Image src="/smallBall.svg" fill className="image" alt=""/>
                </div>
                <div className="container">
                    <h2>Cronograma</h2>
                    <div className="scheduleHead">
                        <div className="date">
                            <p>{days[date.getDay()]}, {date.getDate()} de {months[date.getMonth()]} {date.getFullYear()}</p>
                            <div className="calendar">
                                <div className="calendarImage" id="calendar">
                                    <Image src="/lightCalendar.svg" fill className="image" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="filterButt" style={filterButtonStyle} onClick={()=>setFiltering(!filtering)}>
                            <p>Filtro</p>
                            <div className="arr">
                                <div className="arrowImg">
                                    <Image src={filtering ? "/less.svg" :"/more.svg"} alt="" fill className="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        filtering &&
                            <div className="FiltersSelection">
                                <div className="filterHead">
                                    <h4>Filtros del día</h4>
                                </div>
                                <div className="filter">
                                    <h4 className="filterTitle">Horario</h4>
                                    <form name="sessionForm" className="row">
                                        <div className="option">
                                            <input type="radio" name="session"  className="filterSession" value="morning" onClick={handleSelect}/>
                                            <p>Mañana</p>
                                        </div>
                                        <div className="option">
                                            <input type="radio" name="session" className="filterSession" value="afternoon" onClick={handleSelect} />
                                            <p>Tarde</p>
                                        </div>
                                        <div className="option">
                                            <input type="radio" name="session" className="filterSession" value={["morning", "afternoon"]} onClick={handleSelect} />
                                            <p>Todo el día</p>
                                        </div>
                                    </form>
                                </div>
                                <div className="filter">
                                    <h4 className="filterTitle">Facultades</h4>
                                </div>
                                <div className="filter">
                                    <h4 className="filterTitle">Deportes</h4>
                                </div>
                                <div className="filter">
                                    <h4 className="filterTitle">Sexo</h4>
                                </div>
                                <div className="filter">
                                    <h4 className="filterTitle">Sede</h4>
                                </div>
                            </div>
                    }
                    <div className="morning">
                        <p className="session">Sesión de la mañana</p>
                        {
                            filtered.map((play, index)=>{
                                if(play.session === "morning")
                                {
                                    return(
                                        <PlayCard key={index} play={play}/>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="afternoon">
                        <p className="session">Sesión de la tarde</p>
                        {
                            filtered.map((play, index)=>{
                                if(play.session === "afternoon")
                                {
                                    return(
                                        <PlayCard key={index} play={play}/>
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