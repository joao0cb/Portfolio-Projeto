"use client"
import { useRef } from "react"

export default function Home() {

  const carouselRef = useRef(null)

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -270.45,
      behavior: "smooth"
    })
  }

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 270.45,
      behavior: "smooth"
    })
  }

  return (
    <>
      <main className="container">
        <div className="intro">
          <div className="topo">
            JS
            <div>
              <nav>
                <ul>
                  <li><a href="#">Início</a></li>
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Habilidades</a></li>
                  <li><a href="#">Projetos</a></li>
                  <li><a href="#">Contato</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="info">
            <div className="foto">
              <img src="/fotojoao.jpg" alt="Foto de João" className="icon"></img>
            </div>
            <h1>João Victor</h1>
            <p className="descricao">Estudante de Ciência da Computação</p>
            <p className="bio">Sempre aprendendo e construindo. Transformando ideias em software
                e buscando novas formas de resolver desafios reais.</p>
          </div>
        </div>
        <div className="sobreMim">
          <h2 className="tituloSobreMim">Sobre Mim</h2>
          <div className="destaques">
            <div className="cardDestaque">
              <div className="imgDev">
                <img src="/dev.png"></img>
              </div>
              <h3 className="titulo">Desenvolvimento</h3>
              <p className="textoCard">Código limpo e escalável com as melhores práticas</p>
            </div>
            <div className="cardDestaque">
              <div className="imgDev">
                <img src="/aquarela.png"></img>
              </div>
              <h3 className="titulo">Design</h3>
              <p className="textoCard">Interfaces intuitivas e experiências memoráveis</p>
            </div>
            <div className="cardDestaque">
              <div className="imgDev">
                <img src="/foguete.png" className="foguete"></img>
              </div>
              <h3 className="titulo">Inovação</h3>
              <p className="textoCard">Sempre buscando novas tecnologias e soluções</p>
            </div>
          </div>
          <div className="divTextoSobreMim">
            <p className="textoSobreMim">
              Estudante de Ciência da Computação com foco em desenvolvimento de software e aplicações web, 
              com experiência em Java, Python, C e JavaScript. Possuo conhecimento em frameworks como Django 
              e FastAPI, além de bancos de dados relacionais e boas práticas de desenvolvimento. Tenho perfil 
              proativo, foco em aprendizado contínuo e interesse em atuar em projetos reais, buscando uma oportunidade 
              de estágio para gerar impacto e crescer profissionalmente.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}