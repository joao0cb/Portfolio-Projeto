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
      <header>
        <nav className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#">Habilidades</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <section className="intro">

          <div className="divFotoJoao">
            <img src="/fotojoao.jpg" alt="Foto de João Victor" className="fotoJoao"/>
          </div>

          <div className="textoIcons">

            <div className="textoTopo">
              <p className="textoDestaque">
                Oi, eu sou <strong><span className="joaovictor">João Victor</span></strong>
              </p>
              <p className="descricao">
                Estudante de Ciência da Computação
              </p>
              <p className="bio">
                Sempre aprendendo e construindo. Transformando ideias em software
                e buscando novas formas de resolver desafios reais.
              </p>
            </div>

            <div className="icons">

              <a href="https://github.com/joao0cb">
                <img src="/github.png" alt="Github" className="icon" />
              </a>
              <a href="https://www.linkedin.com">
                <img src="/linkedin.png" alt="LinkedIn" className="icon" />
              </a>
              <a href="mailto:joaovictorcastelobranco123@gmail.com">
                <img src="/email.png" alt="Email" className="icon email" />
              </a>

            </div>

          </div>
        </section>

        <section className="projetos" id="projetos">

          <div className="textosProjetos">
            <p className="tituloProjetos">Projetos em Destaques</p>

            <p className="textoProjetos">
              Aqui estão alguns dos meus trabalhos recentes que demonstram minhas
              habilidades em programação e desenvolvimento.
            </p>
          </div>
          <div className="cardsContainer">
            <button className="btnCarrosel esquerda" onClick={scrollLeft}>
              ᐸ
            </button>
            
            <div className="cards" ref={carouselRef}>

              <div className="card">

                <div className="cardImagem">
                  <img src="/jogodaforca.jpg" alt="Jogo da Forca"/>
                </div>

                <div className="cardConteudo">
                  <p className="tituloProjeto">
                    Jogo da Forca
                  </p>

                  <div className="tags">
                    <span className="tag">C</span>
                  </div>

                </div>
              </div>

              <div className="card">

                <div className="cardImagem">
                  <img src="/musicap.png" alt="Musicap"/>
                </div>

                <div className="cardConteudo">
                  <p className="tituloProjeto">
                    Projeto Musicap
                  </p>
                  <p className="conteudoProjeto">
                    O Musicap é um app de registro e avaliação de músicas.
                  </p>

                  <div className="tags">
                    <span className="tag">Java</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">FXML</span>
                  </div>

                </div>
              </div>

              <div className="card">

                <div className="cardImagem">
                  <img src="/coliceu.jpeg" alt="Projeto Coliceu"/>
                </div>

                <div className="cardConteudo">
                  <p className="tituloProjeto">
                    Projeto Coliceu
                  </p>

                  <div className="tags">
                    <span className="tag">Kotlin</span>
                  </div>

                </div>
              </div>

              <div className="card">

                <div className="cardImagem">
                  <img src="/patasnarua.png" alt="Patas Na Rua"/>
                </div>

                <div className="cardConteudo">
                  <p className="tituloProjeto">
                    Patas Na Rua
                  </p>

                  <div className="tags">
                    <span className="tag">Django</span>
                    <span className="tag">Python</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScrip</span>
                  </div>

                </div>
              </div>

              <div className="card">

                <div className="cardImagem">
                  <img src="/bdd.png" alt="Banco de Dados MySQL"/>
                </div>

                <div className="cardConteudo">
                  <p className="tituloProjeto">
                    Projeto Banco de Dados
                  </p>

                  <div className="tags">
                    <span className="tag">Python</span>
                    <span className="tag">MySQL</span>
                  </div>

                </div>
              </div>

              <div className="card">

                <div className="cardImagem">
                  <img src="/tabelahash.jpg" alt="Tabela Hash"/>
                </div>

                <div className="cardConteudo">
                  <p className="tituloProjeto">
                    Projeto Banco de Dados
                  </p>
                  <p className="conteudoProjeto">
                    Um sistema 
                  </p>

                  <div className="tags">
                    <span className="tag">C</span>
                  </div>

                </div>
              </div>
            </div>

            <button className="btnCarrosel direita" onClick={scrollRight}>
              ᐳ
            </button>
          </div>
        </section>

      </main>
    </>
  )
}