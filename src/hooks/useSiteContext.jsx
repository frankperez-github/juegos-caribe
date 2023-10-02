import Cronograma from "../../cronograma.json"
export default function useSiteContext()
{
    const Faculties = [
        {
            "image": "/diseño.svg",
            "name": "ISDi"
        },
        {
            "image": "/economia.svg",
            "name": "EKO"
        },
        {
            "image": "/matcom.svg",
            "name": "MATCOM"
        },
        {
            "image": "/psicologia.svg",
            "name": "Psico"
        }
    ]
    return({Cronograma, Faculties})
}