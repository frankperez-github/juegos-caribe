import Image from "next/image"
import "./FacultyPreview.css"

export default function FacultyPreview({name, image})
{
    return(
        name !== undefined && image !== undefined &&
            <div className="FacultyPreview MobileView container">
                <div className="facultyLogo">
                    <Image src={image} alt="" fill className="image"/>
                </div>
                <h2>{name}</h2>
            </div>
        
    )
}