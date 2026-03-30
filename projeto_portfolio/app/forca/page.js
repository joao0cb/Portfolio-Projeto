"use client"
import { useState, useEffect, useCallback } from "react"
import "./forca_module.css"
import { useTema } from "../themeProvider"

const PALAVRAS = [
  { palavra: "JAVASCRIPT", dica: "Linguagem de programação web" },
  { palavra: "PYTHON", dica: "Linguagem famosa por sua simplicidade" },
  { palavra: "PROGRAMACAO", dica: "O que desenvolvedores fazem" },
  { palavra: "ALGORITMO", dica: "Sequência de passos para resolver um problema" },
  { palavra: "COMPILADOR", dica: "Transforma código em executável" },
  { palavra: "FRAMEWORK", dica: "Estrutura para desenvolvimento" },
  { palavra: "INTERFACE", dica: "O que o usuário vê e interage" },
  { palavra: "RECURSAO", dica: "Função que chama a si mesma" },
  { palavra: "VARIAVEL", dica: "Armazena um valor na memória" },
  { palavra: "BANCO DE DADOS", dica: "Onde os dados são persistidos" },
  { palavra: "TYPESCRIPT", dica: "JavaScript com tipagem estática" },
  { palavra: "COMPONENTE", dica: "Bloco reutilizável no React" },
  { palavra: "REPOSITORIO", dica: "Onde o código fica guardado no Git" },
  { palavra: "DEPLOY", dica: "Colocar a aplicação no ar" },
  { palavra: "DEBUGGING", dica: "Processo de encontrar e corrigir erros" },
  { palavra: "HTML", dica: "Estrutura de páginas web" },
  { palavra: "CSS", dica: "Estiliza páginas web" },
  { palavra: "SERVIDOR", dica: "Onde a aplicação roda" },
  { palavra: "CLIENTE", dica: "Quem acessa a aplicação" },
  { palavra: "API", dica: "Comunicação entre sistemas" },
  { palavra: "JSON", dica: "Formato de troca de dados" },
  { palavra: "FUNCAO", dica: "Bloco de código reutilizável" },
  { palavra: "LOOP", dica: "Repete um bloco de código" },
  { palavra: "ARRAY", dica: "Lista de elementos" },
  { palavra: "OBJETO", dica: "Estrutura com chave e valor" },
  { palavra: "CLASSE", dica: "Modelo para criar objetos" },
  { palavra: "HERANCA", dica: "Reutilização entre classes" },
  { palavra: "EVENTO", dica: "Ação do usuário na tela" },
  { palavra: "RESPONSIVO", dica: "Adapta a diferentes telas" },
  { palavra: "VERSIONAMENTO", dica: "Controle de mudanças no código" },
]

const MAX_ERROS = 6

function sortearPalavra() {
  return PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)]
}

function ForcaSVG({ erros }) {
  return (
    <svg className="svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="210" x2="180" y2="210" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="210" x2="60" y2="20" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="20" x2="130" y2="20" strokeWidth="4" strokeLinecap="round" />
      <line x1="130" y1="20" x2="130" y2="45" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="50" x2="90" y2="20" strokeWidth="3" strokeLinecap="round" />

      {erros >= 1 && <circle cx="130" cy="58" r="13" strokeWidth="3" fill="none" className="corpo" />}
      {erros >= 2 && <line x1="130" y1="71" x2="130" y2="130" strokeWidth="3" strokeLinecap="round" className="corpo" />}
      {erros >= 3 && <line x1="130" y1="85" x2="105" y2="110" strokeWidth="3" strokeLinecap="round" className="corpo" />}
      {erros >= 4 && <line x1="130" y1="85" x2="155" y2="110" strokeWidth="3" strokeLinecap="round" className="corpo" />}
      {erros >= 5 && <line x1="130" y1="130" x2="105" y2="165" strokeWidth="3" strokeLinecap="round" className="corpo" />}
      {erros >= 6 && <line x1="130" y1="130" x2="155" y2="165" strokeWidth="3" strokeLinecap="round" className="corpo" />}
    </svg>
  )
}

const TECLADO = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
]

export default function Forca() {
  const [palavraAtual, setPalavraAtual] = useState(null)
  const [tentativas, setTentativas] = useState([])
  const { toggleTema } = useTema()

  useEffect(() => {
    setPalavraAtual(sortearPalavra())
  }, [])

  if (!palavraAtual) return null

  const { palavra, dica } = palavraAtual

  const letrasErradas = tentativas.filter(l => !palavra.includes(l))
  const erros = letrasErradas.length

  const palavraVisivel = palavra.split("").map(letra =>
    letra === " " ? " " : tentativas.includes(letra) ? letra : "_"
  )

  const ganhou = palavra.split("").filter(l => l !== " ").every(l => tentativas.includes(l))
  const perdeu = erros >= MAX_ERROS
  const status = ganhou ? "ganhou" : perdeu ? "perdeu" : "jogando"

  const chutar = (letra) => {
    if (status !== "jogando" || tentativas.includes(letra)) return
    setTentativas(prev => [...prev, letra])
  }

  const reiniciar = () => {
    setPalavraAtual(sortearPalavra())
    setTentativas([])
  }

  return (
    <div className="page">
      <header className="header">
        <a href="/" className="voltar">← Voltar</a>
        <h1 className="titulo">Jogo da Forca</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="errosContador">
            <span>{erros}</span>/<span>{MAX_ERROS}</span>
          </div>
          <button className="btnTema" onClick={toggleTema} aria-label="Alternar tema">
            <span className="lua">🌙</span>
            <span className="sol">☀️</span>
          </button>
        </div>
      </header>

      <main className="main">
        <section className="colunaEsq">
          <ForcaSVG erros={erros} />
          <p className="dica"><span>Dica:</span> {dica}</p>
        </section>

        <section className="colunaDir">
          <div className="palavra">
            {palavraVisivel.map((letra, i) =>
              letra === " "
                ? <div key={i} className="espaco" />
                : (
                  <div
                    key={i}
                    className={`letra ${letra !== "_" ? "revelada" : ""}`}
                  >
                    {letra !== "_" ? letra : ""}
                  </div>
                )
            )}
          </div>

          <div className="erradas">
            <p className="erradasTitulo">Erros:</p>
            <div className="eerradas">
              {letrasErradas.length === 0
                ? <span className="erradasVazio">—</span>
                : letrasErradas.map(l => (
                  <span key={l} className="letraErrada">{l}</span>
                ))
              }
            </div>
          </div>

          <div className="teclado">
            {TECLADO.map((linha, i) => (
              <div key={i} className="tecladoLinha">
                {linha.map(letra => {
                  const tentada = tentativas.includes(letra)
                  const acertou = tentada && palavra.includes(letra)
                  const errou = tentada && !palavra.includes(letra)
                  return (
                    <button
                      key={letra}
                      className={`tecla ${acertou ? "acertou" : ""} ${errou ? "errou" : ""}`}
                      onClick={() => chutar(letra)}
                      disabled={tentada || status !== "jogando"}
                    >
                      {letra}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </section>
      </main>

      {status !== "jogando" && (
        <div className="overlay">
          <div className={`modal ${status}`}>
            <div className="modalEmoji">
              {status === "ganhou" ? "🎉" : "💀"}
            </div>
            <h2>{status === "ganhou" ? "Você ganhou!" : "Você perdeu!"}</h2>
            <p className="modalPalavra">
              A palavra era: <strong>{palavra}</strong>
            </p>
            <button className="btnReiniciar" onClick={reiniciar}>
              Jogar novamente
            </button>
          </div>
        </div>
      )}
    </div>
  )
}