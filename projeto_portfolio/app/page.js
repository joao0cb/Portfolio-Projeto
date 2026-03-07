export default function Home() {
  return (
    <>
      <header>
        <div className="divMenu">
          <nav className="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Projetos</a></li>
              <li><a href="#">Habilidades</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="fotoTexto">
          <div className="divFotoJoao">
            <img src="/fotojoao.jpg" alt="Foto de João Victor" className="fotoJoao"></img>
          </div>
          <div className="textoIcons">
            <div className="textoTopo">
              <p className="textoDestaque texto">Oi, eu sou <strong><span className="joaovictor">João Victor</span></strong></p>
              <p className="descricao texto">Estudante de Ciência da Computação</p>
              <p className="bio texto">Sempre aprendendo e construindo. Transformando ideias em software e buscando novas formas de resolver desafios reais.</p>
            </div>
            <div className="icons">
              <a href="https://github.com/joao0cb" className="linkInvisivel">
                <img src="/github.png" alt="Link Github" className="github icon"></img>
              </a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-castelo-branco-de-sena-20b624312/" className="linkInvisivel">
                <img src="/linkedin.png" alt="Link LinkedIn" className="linkedin icon"></img>
              </a>
              <a href="mailto:joaovictorcastelobranco123@gmail.com" className="linkInvisivel">
                <img src="/email.png" alt="Link E-mail" className="email icon"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="projetos">
          <div className="textosProjetos">
            <p className="tituloProjetos texto">Projetos em Destaques</p>
            <p className="textoProjetos texto">Aqui estão alguns dos meus trabalhos recentes que demonstram minhas habilidades em programação, banco de dados, desenvolvimento web e movile, etc.</p>
          </div>
          <div className="cards">
            <div className="cardMusicap">
              <div className="divMusicap">
                <img src="musicap.jpeg" alt="Imagem Logo Musicap" className="fotoMusicap"></img>
              </div>
              <div>
                <p>Projeto Musicap</p>
              </div>
              <div>
                <p>Java</p>
                <p>FXML</p>
                <p>MySQL</p>
                <button type="button">
                  <img src="#"></img>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
