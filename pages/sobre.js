import Header from "../src/components/Header";
import Footer from "../src/components/Footer/index";
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

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <link rel="icon" type="image/jpg" sizes="any" href="/PodBreeze.jpg" />
      </Head>
      <Header />
      <style jsx>{`
        .sobre {
          display: flex;
          text-align: center;
          margin-top: 225px;
          color: white;
          margin-left: 15%;
          width: 70%;
          flex-direction: column;
          font-size: 25px;
          justify-content: center;
        }
      `}</style>
      <div className="sobre">
        <h1>Sobre o PodBreeze</h1>
        <p>
          Podbreeze é um podcast feito por um grupo de alunos do colégio INSA
          Araras, abordamos sobre diversos temas diferentes para incentivar e
          inspirar jovens como nós a seguir carreiras diversas e que podem não
          ter sido apresentadas para eles ainda
        </p>
      </div>
      <div style={{ marginTop: "189px" }}>
        <Footer />
      </div>
    </>
  );
}
