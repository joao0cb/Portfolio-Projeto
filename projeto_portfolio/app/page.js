"use client"
import { useRef } from "react"

export default function Home() {
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
          <div className="carrossel">

            <div className="cardProjeto">
              <div className="imgProjeto">
                <img src="/patasnarua.png" ></img>
              </div>
              <h3 className="nomeProjeto">Patas Na Rua</h3>
              <p className="descProjeto">Plataforma de coleiras GPS para rastrear animais
                 de rua em tempo real. Auxilia ONGs no monitoramento remoto e facilita o 
                 apadrinhamento financeiro e adoções. Conecta tecnologia ao cuidado animal 
                 para quem não tem espaço físico.</p>
              <div className="linkGithubProjeto" >
                <a href="https://github.com/joao0cb/Patas-da-Rua">
                  <img src="/githubpreto.svg"></img>
                  <span>Code</span>
                </a>
              </div>
            </div>

            <div className="cardProjeto">
              <div className="imgProjeto">
                <img src="/bdd.png" ></img>
              </div>
              <h3 className="nomeProjeto">Projeto Banco de Dados</h3>
              <p className="descProjeto">Este e-commerce de artigos esportivos oferece 
                uma plataforma completa para a gestão dinâmica de vendas e produtos online. 
                O sistema foca na eficiência do controle de estoque e na fluidez dos processos 
                de compra, unindo alta performance e escalabilidade.</p>
              <div className="linkGithubProjeto" >
                <a href="https://github.com/joao0cb/Projeto-Banco-De-Dados">
                  <img src="/githubpreto.svg"></img>
                  <span>Code</span>
                </a>
              </div>
            </div>

            <div className="cardProjeto">
              <div className="imgProjeto">
                <img src="/coliceu.jpeg" ></img>
              </div>
              <h3 className="nomeProjeto">Projeto Coliceu</h3>
              <p className="descProjeto">Desenvolvido em Kotlin e Java, este aplicativo mobile 
                centraliza o registro arqueológico em campo. O sistema permite o mapeamento de 
                sítios via imagens, marcação de pontos-zero e catalogação ágil de artefatos. É 
                uma solução focada em precisão e eficiência para a documentação de dados históricos.</p>
              <div className="linkGithubProjeto" >
                <a href="https://github.com/joao0cb/Projeto-Coliceu">
                  <img src="/githubpreto.svg"></img>
                  <span>Code</span>
                </a>
              </div>
            </div>

            <div className="cardProjeto">
              <div className="imgProjeto">
                <img src="/tabelahash.jpg" ></img>
              </div>
              <h3 className="nomeProjeto">Projeto Tabela Hash</h3>
              <p className="descProjeto">Este é um sistema de gerenciamento de biblioteca desenvolvido 
                em C, que permite o cadastro, empréstimo, devolução de livros e a gestão de usuários. 
                O projeto utiliza tabelas hash para armazenar livros e usuários, além de arquivos binários 
                para persistência de dados.</p>
              <div className="linkGithubProjeto" >
                <a href="https://github.com/joao0cb/Projeto-Tabela-Hash">
                  <img src="/githubpreto.svg"></img>
                  <span>Code</span>
                </a>
              </div>
            </div>

            <div className="cardProjeto">
              <div className="imgProjeto">
                <img src="/musicap.png" ></img>
              </div>
              <h3 className="nomeProjeto">Musicap</h3>
              <p className="descProjeto">O Musicap permite o cadastro de usuários para a criação de 
                bibliotecas e avaliação de canções. É uma ferramenta prática e intuitiva, focada na 
                organização de notas e críticas personalizadas para cada obra musical selecionada.</p>
              <div className="linkGithubProjeto" >
                <a href="https://github.com/joao0cb/Projeto-POO">
                  <img src="/githubpreto.svg"></img>
                  <span>Code</span>
                </a>
              </div>
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
          </div>
          <div className="footer">
            <p className="direitosR">© 2026 João Victor. Todos os direitos reservados.</p>
          </div>
        </div>

      </main>
    </>
  )
}