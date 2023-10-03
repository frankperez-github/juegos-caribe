'use client'
import useSiteContext from "@/hooks/useSiteContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import "./schedule.css"
import Layout from "@/Components/Layout/Layout";
import Image from "next/image"
import PlayCard from "@/Components/PlayCard/PlayCard";
import { useEffect, useState } from "react";
import { generateBuildId } from "../../../next.config";

export default function Schedule()
{
    const {dailySchedule, Faculties, Sports} = useSiteContext()

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const date = new Date()

    const [faculties, setFaculties] = useState([])
    const [sports, setSports] = useState([])

    // Filter
    const [filtered, setFiltered] = useState(dailySchedule)
    const [filtering, setFiltering] = useState(false)
    const [filteredSession, setFilteredSession] = useState([])
    const [filteredFaculties, setFilteredFaculties] = useState([])
    const [filteredSports, setFilteredSports] = useState([])
    const [filteredGender, setFilteredGender] = useState([])
    const [filteredLocation, setFilteredLocation] = useState([])

    const handleRadioSelect=(e)=>{
        if(e.target.name === "session")
        {
            document.sessionForm.session.value = e.target.value
            setFilteredSession(e.target.value)
        }
        if(e.target.name === "gender")
        {
            document.genderForm.gender.value = e.target.value
            setFilteredGender(e.target.value)
        }
        console.log(filteredGender)
    }
    
    const handleIconSelect=(e)=>{
        while(!e.target.className.split(" ").includes("iconFilter"))
        {
            e.target = e.target.parentNode
        }
        if (e.target.className.split(' ').includes("faculty"))
        {
            // Selected
            if(filteredFaculties.includes(e.target.id))
            {
                e.target.classList.remove("selectedIcon")
                setFilteredFaculties(filteredFaculties.filter(x=>x!==e.target.id))
            }
            // Selecting now
            else
            {
                e.target.classList.add("selectedIcon")
                setFilteredFaculties([...filteredFaculties, e.target.id])
            }
        }
        if (e.target.className.split(' ').includes("sport"))
        {
            // Selected
            if(filteredSports.includes(e.target.id))
            {
                e.target.classList.remove("selectedIcon")
                setFilteredSports(filteredSports.filter(x=>x!==e.target.id))
            }
            // Selecting now
            else
            {
                e.target.classList.add("selectedIcon")
                setFilteredSports([...filteredSports, e.target.id])
            }
        }
    }

    const [filterButtonStyle, setFilterButtonStyle] = useState({})

    useEffect(()=>{
        //Setting playing faculties
        var facults = []
        var sports = []
        dailySchedule.map((play)=>
        {
            //Setting Spots Available
            if(!sports.includes(play.sport))
            {
                sports = [...sports, play.sport]
            }

            //Setting Faculties available
            for (let i = 0; i < play.teams.length; i++) {
                if(!facults.includes(play.teams[i]))
                {
                    facults = [...facults, play.teams[i]]
                }                
            }
        })
        setFaculties(facults)
        setSports(sports)
    },[dailySchedule])
    
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
        var erase = []
        dailySchedule.map((play)=>{
            //If a game doesn't have a filtered option is eliminated
            if (filteredSession.length !== 0 && !filteredSession.includes(play.session))
            {
                erase.push(play)
            }
            if (filteredFaculties.length !== 0 && !filteredFaculties.includes(play.teams[0]) && !filteredFaculties.includes(play.teams[1]) )
            {
                erase.push(play)
            }
            if (filteredSports.length !== 0 && !filteredSports.includes(play.sport))
            {
                erase.push(play)
            }
            if (filteredGender.length !== 0 && !filteredGender.includes(play.gender))
            {
                console.log(play+"and"+filteredGender)
                erase.push(play)
            }
        })
        dailySchedule.map((play)=>
        {
            if(!erase.includes(play))
            {
                Filtered = [...Filtered, play]
            }
        })
        setFiltered(Filtered)
    },[filtering, filteredSession, filteredFaculties, filteredSports, filteredGender])
    
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
                                    <form name="sessionForm" className="row" value={filteredSession}>
                                        <div className="option">
                                            <input type="radio" name="session"  className="filterSession" value="morning" onClick={handleRadioSelect}/>
                                            <p>Mañana</p>
                                        </div>
                                        <div className="option">
                                            <input type="radio" name="session" className="filterSession" value="afternoon" onClick={handleRadioSelect} />
                                            <p>Tarde</p>
                                        </div>
                                        <div className="option">
                                            <input type="radio" name="session" className="filterSession" value={["morning", "afternoon"]} onClick={handleRadioSelect} />
                                            <p>Todo el día</p>
                                        </div>
                                    </form>
                                </div>

                                <div className="filter">
                                    <h4 className="filterTitle">Facultades</h4>
                                    <Swiper
                                    className="swiper"
                                    spaceBetween={15}
                                    slidesPerView={4}
                                    navigation
                                    modules={[Navigation]}>
                                    {
                                        faculties.map((facult, index)=>(
                                            <SwiperSlide key={index} >
                                                <div className="iconFilter faculty" id={facult} onClick={handleIconSelect}>
                                                    <div className="iconImage">
                                                        <Image alt="" src={Faculties.filter((fac)=>fac.name === facult)[0].image} fill className="image faculty"/>
                                                    </div>
                                                    <p>{facult}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                    </Swiper>
                                </div>

                                <div className="filter">
                                    <h4 className="filterTitle">Deportes</h4>
                                    <Swiper
                                    className="swiper"
                                    spaceBetween={15}
                                    slidesPerView={4}
                                    navigation
                                    modules={[Navigation]}>
                                    {
                                        sports.map((sport, index)=>(
                                            <SwiperSlide key={index} >
                                                <div className="iconFilter sport" id={sport} onClick={handleIconSelect}>
                                                    <div className="iconImage SportIcon">
                                                        {
                                                            Sports.filter(x=>x.name === sport)[0] !== undefined &&
                                                            <div className="icon">
                                                                <Image alt="" src={Sports.filter(x=>x.name === sport)[0].image} fill className="image sport"/>
                                                            </div>
                                                        }
                                                    </div>
                                                    <p>{sport}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                    </Swiper>
                                </div>
                                
                                <div className="filter">
                                    <h4 className="filterTitle">Sexo</h4>
                                    <form name="genderForm" className="row" value={filteredGender}>
                                        <div className="option">
                                            <input type="radio" name="gender"  className="filterGender" value="female" onClick={handleRadioSelect}/>
                                            <p>Femenino</p>
                                        </div>
                                        <div className="option">
                                            <input type="radio" name="gender" className="filterGender" value="male" onClick={handleRadioSelect} />
                                            <p>Masculino</p>
                                        </div>
                                        <div className="option">
                                            <input type="radio" name="gender" className="filterGender" value={["female", "male"]} onClick={handleRadioSelect} />
                                            <p>Ambos sexos</p>
                                        </div>
                                    </form>
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