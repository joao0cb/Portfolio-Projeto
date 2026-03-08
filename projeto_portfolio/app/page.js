export default function Home() {
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

          <div className="cards">
            <div className="card">

              <div className="cardImagem">
                <img src="/musicap.png" alt="Projeto Musicap"/>
              </div>

              <div className="cardConteudo">
                <p className="tituloProjeto">
                  Projeto Musicap
                </p>

                <div className="tags">
                  <span className="tag">Java</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">FXML</span>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}