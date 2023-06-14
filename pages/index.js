import Image from 'next/image';
import Link from 'next/link';
import ep from '../src/assets/Episodio 1 - Musicas.png';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer/index";

/*const Home = styled.body`
    text-align: center;
    .projetos {
        padding-top: 93px;
    }
    .projetos h1 {
        padding-bottom: 20px;
        font-size: 50px;
        font-weight: bold;
        color: white;
    }
    .projetos-itens {
        width: 70%;
        margin-left: 15%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .pro {
        background-color: #C4C4C4;
        height: 195px;
        width: 310px;
        border-radius: 20px;
        display: flex;
        margin-bottom: 80px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        transition: ease-in-out 0.3s;
    }
    .pro:hover {
        background-color: green;
        color: white;
        img {
            border-radius: 20px;
            width: 80%;
            height: 80%;
        }
    }
`;*/

export default function HomePage() {
    return (
        <>
            <Header />
            <div>
            <style jsx>{`
                    .projetos {
                        padding-top: 63px;
                    }
                    .projetos h1 {
                        font-size: 50px;
                        font-weight: bold;
                        text-align: center;
                        color: white;
                    }
                    .projetos-itens {
                        width: 70%;
                        margin-left: 15%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                    }
                    .pro {
                        background-color: #C4C4C4;
                        width: 310px;
                        height: 430px;
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 40px;
                        align-items: space-around;
                        font-size: 25px;
                        justify-content: center;
                        cursor: pointer;
                        overflow: hidden;
                        transition: ease-in-out 0.3s;
                    }
                    .Desc {
                        width: 90%;
                        margin-left: 5%;
                        margin-top: -35px;
                        text-align: center;
                    }
            `}</style>
                <div className="centralizador projetos">
                        <h1 className="project">Episodios</h1>
                        <div className="projetos-itens">
                            <Link style={{ color: 'black', textDecoration: 'none' }} href='https://open.spotify.com/episode/0Zh6j94nVLVNZlm9kWpfLV' passHref>
                                <div className="pro">
                                    <Image className='img' src={ep} width={310} height={160} alt='EP 01 do PodBreeze' />
                                    <div className='Desc'><p>Nesse epsodio os participantes e os apresentadores discutem sobre Musicas, produtores, o processo de fazer uma musica, cover, assuntos polemicos e muitos mais, acompanhem esse incrivel epsódio do PodBreeze.</p></div>
                                </div>
                            </Link>
                            <div className="pro">
                                <div className='Desc'><p>EM BREVE</p></div>
                            </div>
                            <div className="pro">
                                <div className='Desc'><p>EM BREVE</p></div>
                            </div>
                        </div>
                    </div>
            </div>
            <div style={{ marginTop: '17px' }}>            
                <Footer />
            </div>
        </>
    )
}