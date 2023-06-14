import Image from "next/image";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer/index";
import p1 from "../src/assets/pessoas/p1.png";
import p2 from "../src/assets/pessoas/p2.png";
import p3 from "../src/assets/pessoas/p3.jpeg";
import p4 from "../src/assets/pessoas/p4.png";
import p5 from "../src/assets/pessoas/p5.jpeg";
import p6 from "../src/assets/pessoas/p6.png";
import p7 from "../src/assets/pessoas/p7.png";
import p8 from "../src/assets/pessoas/p8.png";
import p9 from "../src/assets/pessoas/p9.png";
import p10 from "../src/assets/pessoas/p10.png";
import p11 from "../src/assets/pessoas/p11.jpeg";
import p12 from "../src/assets/pessoas/p12.jpeg";
import Head from "next/head";

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

export default function equipe() {
  return (
    <>
      <Head>
        <title>Equipe</title>
        <link rel="icon" type="image/jpg" sizes="any" href="/PodBreeze.jpg" />
      </Head>
      <Header />
      <style jsx>{`
        .centralizador {
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 73px;
        }
        .pessoas {
          width: 70%;
          text-align: center;
          font-size: 25px;
          color: white;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        p {
          margin-top: 10px;
        }
      `}</style>
      <div className="centralizador">
        <h1>Pessoal da equipe</h1>
        <div className="pessoas">
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p1}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Pedro Henrique</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p2}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Patrick Peace</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p3}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Pedro Tavares</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p4}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Joaquim Blasco</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p5}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Maria Almeida</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p6}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Giovanni Alcaras</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p7}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Frederico Merlo</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p8}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>yasmin hirae sandalo</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p9}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Lucas Guidotti</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p10}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Isabela Mazzaferro</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p11}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Eduardo Hypólito</p>
          </div>
          <div className="pessoa">
            <Image
              style={{ borderRadius: "50%", margin: "30px 100px -10px 100px" }}
              src={p12}
              width={100}
              height={100}
              alt="EP 01 do PodBreeze"
            />
            <p>Cristhiny Alves</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Footer />
      </div>
    </>
  );
}
