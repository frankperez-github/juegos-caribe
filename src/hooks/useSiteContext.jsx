import dailySchedule from "../../cronograma.json"
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
    const Sports = [
        {
            "image": "/athletism.svg",
            "name": "Atletismo"
        },
        {
            "image": "/badminton.svg",
            "name": "Badminton"
        },
        {
            "image": "/baseball.svg",
            "name": "Béisbol"
        },
        {
            "image": "/baseball5x5.svg",
            "name": "Béisbol 5"
        },
        {
            "image": "/basketball.svg",
            "name": "Baloncesto"
        },
        {
            "image": "/basketbal3x3.svg",
            "name": "Baloncesto 3x3"
        },
        {
            "image": "/biatlex.svg",
            "name": "Biatlex"
        },
        {
            "image": "/baseball5x5.svg",
            "name": "Béisbol 5"
        },
        {
            "image": "/chess.svg",
            "name": "Ajedrez"
        },
        {
            "image": "/football.svg",
            "name": "Fútbol"
        },
        {
            "image": "/frontenis.svg",
            "name": "Cancha"
        },
        {
            "image": "/futsal.svg",
            "name": "Futsal"
        },
        {
            "image": "/handball.svg",
            "name": "Balonmano"
        },
        {
            "image": "/judo.svg",
            "name": "Judo"
        },
        {
            "image": "/karate.svg",
            "name": "Karate"
        },
        {
            "image": "/knowledge.svg",
            "name": "Encuentro de conocimientos"
        },
        {
            "image": "/marathon.svg",
            "name": "Maratón"
        },
        {
            "image": "/musicalGymnastics.svg",
            "name": "Gimnasia Musical"
        },
        {
            "image": "/orientationCareer.svg",
            "name": "Carrera de Orientación"
        },
        {
            "image": "/pingpong.svg",
            "name": "Tenis de mesa"
        },
        {
            "image": "/polo.svg",
            "name": "Polo acuático"
        },
        {
            "image": "/softball.svg",
            "name": "Softbol"
        },
        {
            "image": "/sportShoot.svg",
            "name": "Tiro Deportivo"
        },
        {
            "image": "/swimming.svg",
            "name": "Natación"
        },
        {
            "image": "/taekwondo.svg",
            "name": "Taekwondo"
        },
        {
            "image": "/tennis.svg",
            "name": "Tenis de Campo"
        },
        {
            "image": "/volleyball.svg",
            "name": "Voleibol"
        }
    ]
    return({dailySchedule, Faculties, Sports})
}