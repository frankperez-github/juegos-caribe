import "./presentation.css"
import Image from 'next/image'
export default function Main()
{
    return(
        <div className="Main">
            <div className="MobileView">
                <div className="gameIsOn">
                    <div className="leftInfo">
                        <div className="smallBall">
                            <Image alt="" src="/smallBall.svg" fill className="image"/>
                        </div>
                    </div>
                    <div className="Introduction">
                        <p>COMIENZAN LOS</p>
                        <h1>JUEGOS CARIBE</h1>
                        <p>Del 3 de Octubre al 7 de Noviembre de 2023 estaremos disfrutando de este gran evento.</p>
                    </div>
                </div>
                <div className="playerImage">
                    <div className="backGroundBall">
                        <Image alt="" src="/backgroundBall.svg" fill className="image"/>
                    </div>
                    <div className="recortedPlayer">
                        <Image alt="" src="/player.svg" fill className="image"/>
                    </div>
                </div>
            </div>
            <div className="TabletView">
                
            </div>
            <div className="DesktopView">

            </div>
        </div>
    )
}