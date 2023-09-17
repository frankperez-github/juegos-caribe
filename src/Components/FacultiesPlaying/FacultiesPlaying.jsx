'use client'
import "../FacultyPreview/FacultyPreview.css"
import Image from "next/image"
import FacultyPreview from "../FacultyPreview/FacultyPreview"
import { useEffect, useState } from "react"

export default function FacultiesPlaying()
{
    const Faculties = [
        {
            "name": "FLEX1",
            "image": "/lenguas_extranjeras.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        },
        {
            "name": "FARAL2",
            "image": "/farmacia_alimentos.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        },
        {
            "name": "FARAL3",
            "image": "/farmacia_alimentos.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        },
        {
            "name": "FLEX4",
            "image": "/lenguas_extranjeras.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        },
        {
            "name": "FARAL5",
            "image": "/farmacia_alimentos.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        },
        {
            "name": "FARAL6",
            "image": "/farmacia_alimentos.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        }
    ]

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(1)
    const [leftCard, setLeftCard] = useState({
        "name": Faculties[left].name,
        "image": Faculties[left].image
    })
    const [rightCard, setRightCard] = useState({
        "name": Faculties[right].name,
        "image": Faculties[right].image
    })

    useEffect(()=>{
        document.getElementById(left).classList.add("selected")

    },[left, right])

    const handleRight=()=>{
        var selected = document.getElementsByClassName("selected")
        if (+selected[0].innerHTML === right+1)
        {
            document.getElementById(left).classList.add("selected")
            document.getElementById(right).classList.remove("selected")
            setLeftCard({"name": Faculties[right+3].name,"image": Faculties[right+3].image})
            setRightCard({"name": Faculties[right+4].name,"image": Faculties[right+4].image})
            setLeft(right+1)
            setRight(right+2)
        }
        else
        {
            document.getElementById(left).classList.remove("selected")
            document.getElementById(right).classList.add("selected")
            setLeftCard({"name": Faculties[right+1].name,"image": Faculties[right+1].image})
            setRightCard({"name": Faculties[right+2].name,"image": Faculties[right+2].image})
        }
    }
    const handleLeft=()=>{
        var selected = document.getElementsByClassName("selected")
        if (+selected[0].innerHTML === left+1)
        {
            document.getElementById(left).classList.remove("selected")
            document.getElementById(right).classList.add("selected")
            setLeft(left-2)
            setRight(left-1)
            // setLeftCard({"name": Faculties[left].name,"image": Faculties[left].image})
            // setRightCard({"name": Faculties[right].name,"image": Faculties[right].image})
        }
        else
        {
            document.getElementById(left).classList.add("selected")
            document.getElementById(right).classList.remove("selected")
            // setLeftCard({"name": Faculties[left-2].name,"image": Faculties[left-2].image})
            // setRightCard({"name": Faculties[left-1].name,"image": Faculties[left-1].image})
        }
    }

    return(
        <div className="FacultiesPlaying MobileView container">
            <h2 className="sectionTitle">Facultades Participantes</h2>
            <div className="FacultiesPage">
                <FacultyPreview name={leftCard.name} image={leftCard.image}/>
                <FacultyPreview name={rightCard.name} image={rightCard.image}/>
            </div>
            <div className="pagination">
                {
                    left > 0 ?
                        <div className="arrow">
                            <div className="leftArrow"  onClick={handleLeft}>
                                <Image src="/left.svg" alt="" fill className="image"/>
                            </div>
                        </div>
                        :
                        <div className=""></div>
                }
                <p  className="pageNumb" id={left}>
                    {left+1}
                </p>
                <p className="pageNumb" id={right}>
                    {right < Faculties.length/2 && right+1}
                </p>
                {
                    right < Faculties.length/2 ?
                        <div className="arrow">
                            <div className="rightArrow" onClick={handleRight}>
                                <Image src="/right.svg" alt="" fill className="image"/>
                            </div>
                        </div>
                    :
                    <div className=""></div>
                }
            </div>
        </div>
    )
}