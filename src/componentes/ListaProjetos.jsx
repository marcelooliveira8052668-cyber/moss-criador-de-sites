// =============================================
// LISTA DE PROJETOS — abrir, duplicar, excluir
// =============================================

import { dataLegivel } from '../estado.js'
import { segmentoPorId } from '../segmentos.js'

export default function ListaProjetos({ projetos, atualId, aoAbrir, aoNovo, aoDuplicar, aoExcluir, aoFechar }) {
  return (
    <div className="sobreposicao" role="dialog" aria-modal="true" aria-label="Meus projetos">
      <div className="janela">
        <header className="janela-topo">
          <div>
            <span className="etapa">Seus sites</span>
            <h2>Meus projetos ({projetos.length})</h2>
          </div>
          <button type="button" className="icone-botao" onClick={aoFechar} aria-label="Fechar">
            ✕
          </button>
        </header>

        {projetos.length === 0 ? (
          <p className="janela-vazio">Nenhum projeto ainda. Clique em “Novo site” para começar.</p>
        ) : (
          <div className="grade-projetos">
            {projetos.map((p) => {
              const seg = segmentoPorId(p.segmento)
              return (
                <article key={p.id} className={`cartao-projeto ${p.id === atualId ? 'ativo' : ''}`}>
                  <div className="projeto-topo">
                    <span aria-hidden="true">{seg ? seg.emoji : '🌐'}</span>
                    <div>
                      <strong>{p.negocio.nome}</strong>
                      <small>
                        {seg ? seg.nome : p.segmento} · editado em {dataLegivel(p.atualizadoEm)}
                      </small>
                    </div>
                  </div>
                  <div className="projeto-acoes">
                    <button type="button" className="botao-primario" onClick={() => aoAbrir(p.id)}>
                      Abrir
                    </button>
                    <button type="button" className="botao-secundario" onClick={() => aoDuplicar(p.id)}>
                      Duplicar
                    </button>
                    <button
                      type="button"
                      className="botao-perigo"
                      onClick={() => {
                        if (window.confirm(`Excluir o projeto “${p.negocio.nome}”? Essa ação não pode ser desfeita.`)) {
                          aoExcluir(p.id)
                        }
                      }}
                    >
                      Excluir
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <footer className="janela-rodape">
          <button type="button" className="botao-primario" onClick={aoNovo}>
            + Novo site
          </button>
        </footer>
      </div>
    </div>
  )
}
