import Link from "next/link";
import Image from "next/image";
import gt from "../../assets/GT.png";

/*const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: white;
  margin-top: -36px;
  height: 85px;
  background-color: black;
  font-size: 16px;
  a {
    border-radius: 50%;
  }
  img {
    margin-top: 5px;
  }
`;*/

export default function Footer() {
  return (
    <>
      <style jsx>{`
        .Footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          color: white;
          height: 85px;
          background-color: black;
          font-size: 16px;
        }
        a {
          border-radius: 50%;
        }
        img {
          margin-top: 5px;
        }
      `}</style>
      <div className="Footer">
        <div>
          <p>E-mail para contato: podbreezeoficialbr@gmail.com </p>
          <p>Feito por: Pedro H.C da Silva</p>
        </div>
        <div>
          <Link href="https://github.com/PedroHenriqueCruzdaSilva/Pedro-Henrique-Cruz-da-Silva">
            <Image src={gt} width={75} alt="github-icon" />
          </Link>
        </div>
      </div>
    </>
  );
}
