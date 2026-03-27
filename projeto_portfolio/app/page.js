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
                  <li><a href="#">Jogo da Forca</a></li>
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
          <h2 className="titulos">Sobre Mim</h2>
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
                <img src="/aquarela.svg"></img>
              </div>
              <h3 className="titulo">Design</h3>
              <p className="textoCard">Interfaces intuitivas e experiências memoráveis</p>
            </div>
            <div className="cardDestaque">
              <div className="imgDev">
                <img src="/foguete.svg" className="foguete"></img>
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
        <div className="habilidades">
          <h2 className="titulos">Habilidades</h2>
          <p className="textoHabilidades">Um conjunto abrangente de tecnologias e ferramentas que utilizo para dar vida às minhas ideias.</p>
          <div className="cardsHabilidades">
            <div className="cardHabilidade">
              <div className="topoCardHab">
                <div className="imgCardHab">
                  <img src="/frontend.svg"></img>
                </div>
                <h3>Frontend</h3>
              </div>
              <div className="skills">
                <span className="skill">React</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Next.js</span>
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
              </div>
            </div>
            <div className="cardHabilidade">
              <div className="topoCardHab">
                <div className="imgCardHab">
                  <img src="/server.svg"></img>
                </div>
                <h3>Backend</h3>
              </div>
              <div className="skills">
                <span className="skill">Python</span>
                <span className="skill">Django</span>
                <span className="skill">FastAPI</span>
                <span className="skill">Node.js</span>
              </div>
            </div>
            <div className="cardHabilidade">
              <div className="topoCardHab">
                <div className="imgCardHab">
                  <img src="/database.svg"></img>
                </div>
                <h3>Database</h3>
              </div>
              <div className="skills">
                <span className="skill">PostgreeSQL</span>
                <span className="skill">MySQL</span>
              </div>
            </div>
            <div className="cardHabilidade">
              <div className="topoCardHab">
                <div className="imgCardHab">
                  <img src="/tool.svg"></img>
                </div>
                <h3>Tools</h3>
              </div>
              <div className="skills">
                <span className="skill">Git</span>
                <span className="skill">Github</span>
                <span className="skill">Trello</span>
                <span className="skill">Figma</span>
              </div>
            </div>
            <div className="cardHabilidade">
              <div className="topoCardHab">
                <div className="imgCardHab">
                  <img src="/terminal.svg"></img>
                </div>
                <h3>Languages</h3>
              </div>
              <div className="skills">
                <span className="skill">Python</span>
                <span className="skill">Java</span>
                <span className="skill">C</span>
                <span className="skill">Kotlin</span>
              </div>
            </div>
          </div>
        </div>


        <div className="projetos">
          <h2 className="titulos">Projetos</h2>
          <p className="textoHabilidades">Falando sobre projetos bla bla bla</p>
          <div className="carrosel">
            <div className="cardProjeto">
              <div className="imgProjeto">
                <img src="#" ></img>
              </div>
              <h3>Nome do Projeto</h3>
              <p>Descrição do projeto bla bla bla bla bla</p>
              <button href="#">
                <img src="/github.svg"></img>
                <span>Code</span>
              </button>
            </div>
          </div>
        </div>






        <div className="contato">
          <h2 >Vamos Conversar?</h2>
          <p className="textoContato">Estou sempre aberto a novos projetos e oportunidades. Entre em contato!</p>
          <div className="cardContato">
            <div className="infoContato">
              <h3>Informações de Contato</h3>
              <a href="mailto:joaovictorcastelobranco123@gmail.com" className="linkEmail">
                <img src="email.svg" className="imgLinkEmail"></img>
                <p>joaovictorcastelobranco123@gmail.com</p>
              </a>
              <div className="redes">
                <a href="https://github.com/joao0cb" target="_blank" className="linksRedes">
                  <img src="/github.svg"></img>
                </a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-castelo-branco-de-sena-20b624312/" target="_blank" className="linksRedes">
                  <img src="/linkedin.svg"></img>
                </a>
                <a href="https://www.instagram.com/joaoo.cb/" target="_blank" className="linksRedes">
                  <img src="/insta.svg"></img>
                </a>
              </div>
            </div>
            <div className="envieMsg">
              <h3>Envie uma Mensagem</h3>
              <form className="formulario">
                <input placeholder="Seu nome"></input>
                <input placeholder="Seu email"></input>
                <textarea placeholder="Sua mensagem" className="suaMsg"></textarea>
                <button className="btnEnviarMsg">Enviar Mensagem</button>
              </form>
            </div>
            <div className="footer">
              <p className="direitosR">© 2026 João Victor. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}