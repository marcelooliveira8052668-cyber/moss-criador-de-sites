// =============================================
// MOSS CRIADOR DE SITES — aplicativo do editor
// =============================================
//
// Eu funciono assim: o painel edita o estado do site,
// o gerador transforma em HTML e a prévia mostra o
// HTML real dentro de um iframe. O que o cliente vê
// é exatamente o arquivo que ele baixa.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import {
  aplicar,
  carregarProjetoAtual,
  carregarProjetos,
  clonar,
  criarProjeto,
  salvarProjetoAtual,
  salvarProjetos,
} from './estado.js'
import { gerarHtml } from './gerador/html.js'
import { segmentoPorId } from './segmentos.js'
import Painel from './componentes/Painel.jsx'
import Wizard from './componentes/Wizard.jsx'
import ListaProjetos from './componentes/ListaProjetos.jsx'

// Eu baixo um arquivo gerado (HTML ou JSON).
function baixarArquivo(nomeArquivo, conteudo, tipo) {
  const blob = new Blob([conteudo], { type: tipo })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = nomeArquivo
  link.click()
  URL.revokeObjectURL(url)
}

function slug(texto) {
  return (
    String(texto || 'site')
      .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'site'
  )
}

export default function App() {
  const [projetos, setProjetos] = useState(() => carregarProjetos())
  const [atualId, setAtualId] = useState(() => carregarProjetoAtual())
  // Eu abro o assistente automaticamente se não houver projeto nenhum.
  const [mostrarWizard, setMostrarWizard] = useState(() => carregarProjetos().length === 0)
  const [mostrarProjetos, setMostrarProjetos] = useState(false)
  const [modoPrevia, setModoPrevia] = useState('desktop')
  const [html, setHtml] = useState('')
  const [recarga, setRecarga] = useState(0)
  const [aviso, setAviso] = useState('')
  const arquivoImportacao = useRef(null)
  const tempoAviso = useRef(null)

  const atual = useMemo(() => projetos.find((p) => p.id === atualId) ?? null, [projetos, atualId])

  // Eu gero o HTML da prévia (com pequeno atraso para digitação fluida).
  useEffect(() => {
    if (!atual) return undefined
    const tempo = setTimeout(() => setHtml(gerarHtml(atual)), 200)
    return () => clearTimeout(tempo)
  }, [atual])

  // Eu salvo os projetos no navegador automaticamente.
  useEffect(() => {
    const tempo = setTimeout(() => {
      salvarProjetos(projetos)
      salvarProjetoAtual(atualId)
    }, 350)
    return () => clearTimeout(tempo)
  }, [projetos, atualId])

  const mostrarAviso = useCallback((texto) => {
    setAviso(texto)
    window.clearTimeout(tempoAviso.current)
    tempoAviso.current = window.setTimeout(() => setAviso(''), 3000)
  }, [])

  // Eu atualizo um campo (caminho como 'hero.titulo').
  const atualizar = useCallback(
    (caminho, valor) => {
      setProjetos((lista) => lista.map((p) => (p.id === atualId ? aplicar(caminho, valor, p) : p)))
    },
    [atualId]
  )

  // Eu muto uma lista (adicionar/remover/reordenar itens).
  const mutar = useCallback(
    (caminhoPai, fn) => {
      setProjetos((lista) =>
        lista.map((p) => {
          if (p.id !== atualId) return p
          const novo = clonar(p)
          const partes = caminhoPai.split('.')
          let alvo = novo
          partes.forEach((chave) => {
            alvo = alvo[chave]
          })
          fn(alvo)
          novo.atualizadoEm = new Date().toISOString()
          return novo
        })
      )
    },
    [atualId]
  )

  // Eu crio o projeto a partir do assistente.
  const criar = (segmentoId, temaId, nome) => {
    const novo = criarProjeto(segmentoId, temaId)
    if (!novo) return
    if (nome) novo.negocio.nome = nome
    setProjetos((lista) => [novo, ...lista])
    setAtualId(novo.id)
    salvarProjetoAtual(novo.id)
    setMostrarWizard(false)
    mostrarAviso('Site criado com o conteúdo profissional do segmento ✓')
  }

  const abrir = (id) => {
    setAtualId(id)
    salvarProjetoAtual(id)
    setMostrarProjetos(false)
    setRecarga((r) => r + 1)
  }

  const duplicar = (id) => {
    const origem = projetos.find((p) => p.id === id)
    if (!origem) return
    const copia = clonar(origem)
    copia.id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
    copia.negocio.nome = `${origem.negocio.nome} (cópia)`
    copia.criadoEm = new Date().toISOString()
    copia.atualizadoEm = copia.criadoEm
    setProjetos((lista) => [copia, ...lista])
    mostrarAviso('Projeto duplicado ✓')
  }

  const excluir = (id) => {
    setProjetos((lista) => {
      const restante = lista.filter((p) => p.id !== id)
      if (id === atualId) {
        const proximo = restante[0] ?? null
        setAtualId(proximo ? proximo.id : '')
        salvarProjetoAtual(proximo ? proximo.id : '')
      }
      return restante
    })
    setMostrarProjetos(false)
  }

  // Eu exporto o site final em um arquivo só.
  const baixarSite = () => {
    if (!atual) return
    baixarArquivo(`${slug(atual.negocio.nome)}.html`, html, 'text/html;charset=utf-8')
    mostrarAviso('Site baixado! O arquivo abre em qualquer hospedagem, navegador ou celular.')
  }

  const copiarHtml = async () => {
    if (!atual) return
    try {
      await navigator.clipboard.writeText(html)
      mostrarAviso('Código HTML copiado ✓')
    } catch {
      mostrarAviso('Não foi possível copiar automaticamente — use “Baixar site”.')
    }
  }

  const baixarJson = () => {
    if (!atual) return
    baixarArquivo(`${slug(atual.negocio.nome)}.mossprojeto.json`, JSON.stringify(atual, null, 2), 'application/json')
    mostrarAviso('Projeto salvo em arquivo (backup/transferência) ✓')
  }

  const importarJson = (evento) => {
    const arquivo = evento.target.files?.[0]
    if (!arquivo) return
    const leitor = new FileReader()
    leitor.onload = () => {
      try {
        const dados = JSON.parse(String(leitor.result))
        if (!dados || !dados.negocio || !dados.segmento) throw new Error('formato')
        dados.id = 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
        setProjetos((lista) => [dados, ...lista])
        setAtualId(dados.id)
        mostrarAviso('Projeto importado ✓')
      } catch {
        mostrarAviso('Arquivo inválido: escolha um .json exportado por aqui.')
      }
    }
    leitor.readAsText(arquivo)
    evento.target.value = ''
  }

  const nomeProjeto = atual ? atual.negocio.nome : 'Nenhum site aberto'
  const segAtual = atual ? segmentoPorId(atual.segmento) : null

  return (
    <div className="app-editor">
      {/* ================= Barra superior ================= */}
      <header className="topo">
        <div className="topo-marca">
          <span className="logo-simbolo" aria-hidden="true">
            M
          </span>
          <div className="topo-titulo">
            <strong>MOSS Criador de Sites</strong>
            <small>Editor profissional sem código</small>
          </div>
        </div>

        {atual && (
          <div className="topo-projeto">
            <input
              type="text"
              value={atual.negocio.nome}
              onChange={(ev) => atualizar('negocio.nome', ev.target.value)}
              aria-label="Nome do projeto"
            />
            <span className="topo-seg">
              {segAtual ? `${segAtual.emoji} ${segAtual.nome}` : atual.segmento}
            </span>
          </div>
        )}

        <div className="topo-acoes">
          <div className="interruptor" role="group" aria-label="Modo de prévia">
            <button
              type="button"
              className={modoPrevia === 'desktop' ? 'ativo' : ''}
              onClick={() => setModoPrevia('desktop')}
              title="Prévia de computador"
            >
              🖥️
            </button>
            <button
              type="button"
              className={modoPrevia === 'celular' ? 'ativo' : ''}
              onClick={() => setModoPrevia('celular')}
              title="Prévia de celular"
            >
              📱
            </button>
          </div>
          <button type="button" className="botao-secundario" onClick={() => setMostrarProjetos(true)}>
            Projetos ({projetos.length})
          </button>
          <button
            type="button"
            className="botao-secundario"
            onClick={() => {
              setRecarga((r) => r + 1)
              mostrarAviso('Prévia recarregada ✓')
            }}
            title="Recarregar prévia"
          >
            ↻
          </button>
          <button type="button" className="botao-primario" onClick={baixarSite} disabled={!atual}>
            ⬇ Baixar site
          </button>
        </div>
      </header>

      <div className="corpo">
        {/* ================= Painel esquerdo ================= */}
        {atual ? (
          <Painel projeto={atual} atualizar={atualizar} mutar={mutar} baixarHtml={baixarSite} copiarHtml={copiarHtml} baixarJson={baixarJson} importarJson={importarJson} arquivoImportacao={arquivoImportacao} aoNovo={() => setMostrarWizard(true)} aoExcluir={() => excluir(atual.id)} mostrarAviso={mostrarAviso} />
        ) : (
          <div className="painel painel-vazio">
            <p>Nenhum site aberto.</p>
            <button type="button" className="botao-primario" onClick={() => setMostrarWizard(true)}>
              + Criar meu primeiro site
            </button>
          </div>
        )}

        {/* ================= Prévia ================= */}
        <section className="area-previa" aria-label="Prévia do site">
          <div className="barra-previa">
            <span className="url-falsa">
              🔒 {slug(nomeProjeto)}.com.br
            </span>
            <span className="dica-previa">
              {modoPrevia === 'desktop' ? 'Prévia de computador' : 'Prévia de celular'} — é assim que o cliente
              vê o site
            </span>
          </div>
          <div className={`moldura ${modoPrevia === 'celular' ? 'moldura-celular' : ''}`}>
            {atual && html ? (
              <iframe
                key={`${atual.id}-${recarga}`}
                className="iframe-previa"
                title="Prévia do site gerado"
                srcDoc={html}
                sandbox="allow-scripts allow-popups allow-modals"
              />
            ) : (
              <div className="previa-vazia">
                <span aria-hidden="true">🎨</span>
                <p>Escolha um segmento e monte seu site profissional em minutos.</p>
                <button type="button" className="botao-primario" onClick={() => setMostrarWizard(true)}>
                  Começar agora
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ================= Overlays ================= */}
      {mostrarWizard && <Wizard aoCriar={criar} aoPular={projetos.length > 0 ? () => setMostrarWizard(false) : null} />}
      {mostrarProjetos && (
        <ListaProjetos
          projetos={projetos}
          atualId={atualId}
          aoAbrir={abrir}
          aoNovo={() => {
            setMostrarProjetos(false)
            setMostrarWizard(true)
          }}
          aoDuplicar={duplicar}
          aoExcluir={excluir}
          aoFechar={() => setMostrarProjetos(false)}
        />
      )}
      <input
        ref={arquivoImportacao}
        type="file"
        accept=".json,application/json"
        onChange={importarJson}
        style={{ display: 'none' }}
        aria-label="Importar projeto JSON"
      />

      {aviso && (
        <div className="aviso" role="status">
          {aviso}
        </div>
      )}
    </div>
  )
}
