import { useState } from 'react'

export default function App() {
  const [nomeDoJogo, setNomeDoJogo] = useState('')
  const [jogos, setJogos] = useState([])

  function clicouParaAdicionarJogo() {
    const novoJogos = [
      ...jogos,
      nomeDoJogo
    ]

    setJogos(novoJogos)
  }

  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="w-8/12">
        <h1 className="text-white text-4xl text-center py-5">
          gg.gg
        </h1>
          <input
            placeholder="digite o nome do jogo"
            className="w-full h-10 bg-transparent border border-white px-5 rounded-md text-white"
            value={nomeDoJogo}
            onChange={(evento) => setNomeDoJogo(evento.target.value)}
          />
          <div
            className="text-white text-right mt-2 cursor-pointer hover:underline"
            onClick={() => clicouParaAdicionarJogo()}
          >
            adicionar jogo +
          </div>
        <div className="mt-5">
          {
            jogos.map(jogo => (
              <div key={jogo} className="bg-white p-8 rounded-md mt-5">
                {jogo}
              </div>
            ))  
          }
        </div>
      </div>
    </div>
  )
}