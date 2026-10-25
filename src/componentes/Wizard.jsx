// =============================================
// ASSISTENTE DE CRIAÇÃO — novo site em 2 passos
// =============================================

import { useState } from 'react'
import { SEGMENTOS } from '../segmentos.js'
import { TEMAS } from '../temas.js'

export default function Wizard({ aoCriar, aoPular }) {
  const [etapa, setEtapa] = useState(1)
  const [segmento, setSegmento] = useState(null)
  const [tema, setTema] = useState('')
  const [nome, setNome] = useState('')

  const escolherSegmento = (seg) => {
    setSegmento(seg)
    setTema(seg.temaSugerido)
    setNome(seg.negocio.nome)
    setEtapa(2)
  }

  return (
    <div className="sobreposicao wizard" role="dialog" aria-modal="true" aria-label="Criar novo site">
      <div className="janela wizard-janela">
        <header className="janela-topo">
          <div>
            <span className="etapa">Passo {etapa} de 2</span>
            <h2>{etapa === 1 ? 'Que site você quer criar hoje?' : 'Ajuste os últimos detalhes'}</h2>
          </div>
          {aoPular && (
            <button type="button" className="icone-botao" onClick={aoPular} aria-label="Fechar">
              ✕
            </button>
          )}
        </header>

        {etapa === 1 && (
          <>
            <p className="janela-sub">
              Escolha o segmento: o site já nasce completo com textos profissionais, serviços, depoimentos,
              dúvidas e imagens — é só colocar os dados do cliente.
            </p>
            <div className="grade-segmentos">
              {SEGMENTOS.map((seg) => (
                <button key={seg.id} type="button" className="cartao-segmento" onClick={() => escolherSegmento(seg)}>
                  <span className="segmento-emoji" aria-hidden="true">
                    {seg.emoji}
                  </span>
                  <strong>{seg.nome}</strong>
                  <small>{seg.servicos.length} serviços · {seg.depoimentos.length} depoimentos prontos</small>
                </button>
              ))}
            </div>
          </>
        )}

        {etapa === 2 && segmento && (
          <>
            <div className="resumo-segamento">
              <span aria-hidden="true">{segmento.emoji}</span>
              <div>
                <strong>{segmento.nome}</strong>
                <small>Conteúdo profissional carregado ✓</small>
              </div>
              <button type="button" className="botao-secundario" onClick={() => setEtapa(1)}>
                Trocar segmento
              </button>
            </div>

            <label className="campo-grande">
              Nome do negócio
              <input type="text" value={nome} onChange={(ev) => setNome(ev.target.value)} placeholder="Ex.: Studio Lume" />
            </label>

            <span className="rotulo-visual">Estilo visual</span>
            <div className="grade-temas">
              {TEMAS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`cartao-tema ${tema === t.id ? 'ativo' : ''}`}
                  onClick={() => setTema(t.id)}
                >
                  <span className="tema-cores">
                    <i style={{ background: t.corPrimaria }} />
                    <i style={{ background: t.corFundo }} />
                    <i style={{ background: t.corTexto }} />
                  </span>
                  <strong>
                    {t.emoji} {t.nome}
                  </strong>
                  <small>{t.desc}</small>
                </button>
              ))}
            </div>

            <footer className="wizard-acoes">
              <button
                type="button"
                className="botao-primario"
                onClick={() => aoCriar(segmento.id, tema, nome.trim())}
              >
                Criar meu site →
              </button>
              <small>Você poderá mudar tudo depois, inclusive o segmento e o estilo.</small>
            </footer>
          </>
        )}
      </div>
    </div>
  )
}
