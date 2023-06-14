import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/PodBreeze.jpg";

/*const NavDiv = styled.div`
    align-items: center;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(80px);
    position: absolute;
    nav {
        ul {
            width: 200px;
            display: flex;
            justify-content: space-around;
        }
    }
    .a {
        text-decoration: none;
        color: white;
    }
`;*/

export default function Header() {
  return (
    <>
      <style jsx>{`
        .divH {
          align-items: center;
          display: flex;
          top: 0;
          width: 100%;
          height: 80px;
          justify-content: space-around;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(80px);
          position: absolute;
        }
        nav {
          width: 200px;
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
      `}</style>
      <div className="divH">
        <Image
          style={{ borderRadius: "50px" }}
          src={logo}
          width={50}
          height={50}
          alt="Logo do PodBreeze"
        />
        <nav>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href="/"
            passHref
          >
            Home
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href="/sobre"
            passHref
          >
            Sobre
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href="/equipe"
            passHref
          >
            Equipe
          </Link>
        </nav>
      </div>
    </>
  );
}
