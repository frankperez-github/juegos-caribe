'use client'
import { useEffect, useState } from "react"
import "./BreadCrumbs.css"
import { useRouter, usePathname } from "next/navigation"
export default function BreadCrumbs()
{
    const [route, setRoute] = useState(["Inicio"])
    var Color = "gray";
    useEffect(()=>
    {
        const splittedRoute = location.href.split("/")
        for (let i = 0; i < splittedRoute.length; i++) {
            const crumb = splittedRoute[i] === "Contactenos" ? "Contáctenos" : splittedRoute[i]
            if(i >= 3 && !route.includes(crumb))
            {
                setRoute([...route, crumb])            
            }
        }
    },[])

    const router = useRouter()
    const pathname = usePathname()

    const changeRoute=(crumb)=>
    {
        var found = false
        var stringRoute = "/"
        for (let i = 1; i < route.length; i++) {
            if(route[i] === crumb)
            {
                found = true
            }
            if(found === true)
            {
                var str = route[i] === "Contáctenos" ? "Contactenos" : route[i]
                stringRoute+=str+"/"
            }
        }
        router.push(stringRoute)
    }
    const noCrumbsPages = [
        "/"
    ]
    return(
        <div className="BreadCrumbs MobileView">
            {
                !noCrumbsPages.includes(pathname) &&
                route.map((crumb, index)=>{
                    if (index===route.length-1) {
                        Color = "#5a1024"
                    }
                    return(
                        <div className="crumbs" key={index} onClick={()=>changeRoute(crumb)}>
                            {
                                index > 0
                                &&
                                <h3 style={{color:Color}}> &#8250;</h3>
                            }
                            <p style={{color:Color}}>{crumb}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}