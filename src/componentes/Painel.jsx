// =============================================
// PAINEL DE EDIÇÃO — todas as abas do editor
// =============================================

import { useState } from 'react'
import { TEMAS } from '../temas.js'
import { clonar, dataLegivel } from '../estado.js'
import { SEGMENTOS } from '../segmentos.js'

// ---------- peças reutilizáveis ----------

function Campo({ rotulo, valor, aoMudar, tipo = 'text', dica, placeholder, maxLength }) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      <input
        type={tipo}
        value={valor ?? ''}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(ev) => aoMudar(ev.target.value)}
      />
      {dica && <small>{dica}</small>}
    </label>
  )
}

function Area({ rotulo, valor, aoMudar, dica, placeholder, linhas = 4, maxLength }) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      <textarea
        rows={linhas}
        value={valor ?? ''}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(ev) => aoMudar(ev.target.value)}
      />
      {dica && <small>{dica}</small>}
    </label>
  )
}

function Switch({ rotulo, ligado, aoMudar }) {
  return (
    <label className={`switch ${ligado ? 'ligado' : ''}`}>
      <input type="checkbox" checked={!!ligado} onChange={(ev) => aoMudar(ev.target.checked)} />
      <span aria-hidden="true" />
      {rotulo}
    </label>
  )
}

function TituloGrupo({ children, acao }) {
  return (
    <div className="grupo-titulo">
      <h3>{children}</h3>
      {acao}
    </div>
  )
}

function BotaoAdicionar({ aoClicar, children }) {
  return (
    <button type="button" className="botao-adicionar" onClick={aoClicar}>
      + {children}
    </button>
  )
}

function Controles({ aoSubir, aoDescer, aoRemover }) {
  return (
    <span className="controles-item">
      <button type="button" onClick={aoSubir} title="Subir" aria-label="Subir item">
        ↑
      </button>
      <button type="button" onClick={aoDescer} title="Descer" aria-label="Descer item">
        ↓
      </button>
      <button type="button" onClick={aoRemover} title="Remover" aria-label="Remover item" className="remover">
        ✕
      </button>
    </span>
  )
}

// ---------- abas ----------

const ABAS = [
  { id: 'identidade', emoji: '🏢', nome: 'Identidade' },
  { id: 'visual', emoji: '🎨', nome: 'Visual' },
  { id: 'hero', emoji: '🖼️', nome: 'Destaque' },
  { id: 'servicos', emoji: '🧩', nome: 'Serviços' },
  { id: 'sobre', emoji: '📖', nome: 'Sobre' },
  { id: 'galeria', emoji: '🖼️', nome: 'Galeria' },
  { id: 'depoimentos', emoji: '💬', nome: 'Depoimentos' },
  { id: 'horarios', emoji: '🕐', nome: 'Horários' },
  { id: 'faq', emoji: '❓', nome: 'Dúvidas' },
  { id: 'contato', emoji: '📬', nome: 'Contato' },
  { id: 'seo', emoji: '🔍', nome: 'SEO' },
  { id: 'exportar', emoji: '📤', nome: 'Exportar' },
]

export default function Painel({
  projeto,
  atualizar,
  mutar,
  baixarHtml,
  copiarHtml,
  baixarJson,
  arquivoImportacao,
  aoNovo,
  aoExcluir,
  mostrarAviso,
}) {
  const [aba, setAba] = useState('identidade')

  // Helpers de lista
  const removerItem = (pai, i) => mutar(pai, (lista) => lista.splice(i, 1))
  const moverItem = (pai, i, delta) =>
    mutar(pai, (lista) => {
      const j = i + delta
      if (j < 0 || j >= lista.length) return
      const trocado = lista[j]
      lista[j] = lista[i]
      lista[i] = trocado
    })

  const n = projeto.negocio

  return (
    <aside className="painel" aria-label="Painel de edição">
      <nav className="abas-painel" aria-label="Seções de edição">
        {ABAS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={aba === item.id ? 'ativo' : ''}
            onClick={() => setAba(item.id)}
          >
            <span aria-hidden="true">{item.emoji}</span>
            {item.nome}
          </button>
        ))}
      </nav>

      <div className="conteudo-painel">
        {/* ============ IDENTIDADE ============ */}
        {aba === 'identidade' && (
          <div className="grupo">
            <TituloGrupo>Nome e slogan</TituloGrupo>
            <Campo rotulo="Nome do negócio" valor={n.nome} aoMudar={(v) => atualizar('negocio.nome', v)} />
            <Campo
              rotulo="Slogan"
              valor={n.slogan}
              aoMudar={(v) => atualizar('negocio.slogan', v)}
              dica="Frase curta que aparece no topo do site."
            />
            <Campo rotulo="Headline (grande, destaque)" valor={projeto.hero.titulo} aoMudar={(v) => atualizar('hero.titulo', v)} />
            <Area
              rotulo="Texto de apoio da abertura"
              valor={projeto.hero.texto}
              aoMudar={(v) => atualizar('hero.texto', v)}
              linhas={3}
            />
          </div>
        )}

        {aba === 'identidade' && (
          <div className="grupo">
            <TituloGrupo>Contato do negócio</TituloGrupo>
            <Campo rotulo="Telefone" valor={n.telefone} aoMudar={(v) => atualizar('negocio.telefone', v)} placeholder="(11) 3333-4444" />
            <Campo
              rotulo="WhatsApp"
              valor={n.whatsapp}
              aoMudar={(v) => atualizar('negocio.whatsapp', v)}
              placeholder="5511999990000"
              dica="55 + DDD + número, só dígitos. É para cá que vão os botões e o formulário."
            />
            <Campo rotulo="E-mail" tipo="email" valor={n.email} aoMudar={(v) => atualizar('negocio.email', v)} />
            <Campo rotulo="Endereço" valor={n.endereco} aoMudar={(v) => atualizar('negocio.endereco', v)} />
            <Campo rotulo="Cidade/UF" valor={n.cidade} aoMudar={(v) => atualizar('negocio.cidade', v)} />
            <Campo rotulo="Instagram" valor={n.instagram} aoMudar={(v) => atualizar('negocio.instagram', v)} placeholder="@seuperfil" />
          </div>
        )}

        {/* ============ VISUAL ============ */}
        {aba === 'visual' && (
          <>
            <div className="grupo">
              <TituloGrupo>Estilo do site</TituloGrupo>
              <div className="grade-temas-painel">
                {TEMAS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`mini-tema ${projeto.tema === t.id ? 'ativo' : ''}`}
                    onClick={() => atualizar('tema', t.id)}
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
            </div>
            <div className="grupo">
              <TituloGrupo>Cor de destaque</TituloGrupo>
              <Campo
                rotulo="Cor personalizada (opcional)"
                tipo="color"
                valor={projeto.corDestaque || ''}
                aoMudar={(v) => atualizar('corDestaque', v)}
                dica="Vazia = usa a cor do estilo escolhido."
              />
              {projeto.corDestaque && (
                <button type="button" className="botao-secundario" onClick={() => atualizar('corDestaque', '')}>
                  Voltar à cor do tema
                </button>
              )}
            </div>
            <div className="grupo">
              <TituloGrupo>Trocar segmento do conteúdo</TituloGrupo>
              <label className="campo">
                <span>Aplicar conteúdo profissional de outro segmento</span>
                <select
                  value=""
                  onChange={(ev) => {
                    const seg = SEGMENTOS.find((s) => s.id === ev.target.value)
                    if (!seg) return
                    if (!window.confirm('Trocar o segmento substitui textos, serviços e imagens atuais. Continuar?')) return
                    // Eu troco apenas o conteúdo de serviços, mantendo contato e nome.
                    atualizar('servicos', { visivel: true, titulo: seg.sugestoes.servicos, itens: clonar(seg.servicos) })
                    mostrarAviso('Conteúdo de serviços trocado pelo novo segmento ✓')
                  }}
                >
                  <option value="">Escolha um segmento…</option>
                  {SEGMENTOS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.emoji} {s.nome}
                    </option>
                  ))}
                </select>
                <small>Atualiza só a seção de serviços (o restante você edita campo a campo).</small>
              </label>
            </div>
          </>
        )}

        {/* ============ HERO ============ */}
        {aba === 'hero' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.hero.visivel} aoMudar={(v) => atualizar('hero.visivel', v)} />}>
              Abertura (topo do site)
            </TituloGrupo>
            <Campo rotulo="Título principal" valor={projeto.hero.titulo} aoMudar={(v) => atualizar('hero.titulo', v)} />
            <Area rotulo="Texto de apoio" valor={projeto.hero.texto} aoMudar={(v) => atualizar('hero.texto', v)} linhas={3} />
            <Campo rotulo="Imagem (URL)" valor={projeto.hero.imagem} aoMudar={(v) => atualizar('hero.imagem', v)} dica="URL de uma foto. Troque pela foto real do cliente." />
            <div className="duas-colunas">
              <Campo rotulo="Botão 1" valor={projeto.hero.cta1} aoMudar={(v) => atualizar('hero.cta1', v)} />
              <label className="campo">
                <span>Leva para</span>
                <select value={projeto.hero.cta1Acao} onChange={(ev) => atualizar('hero.cta1Acao', ev.target.value)}>
                  <option value="servicos">Seção de serviços</option>
                  <option value="contato">Seção de contato</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="galeria">Galeria</option>
                  <option value="depoimentos">Depoimentos</option>
                </select>
              </label>
            </div>
            <div className="duas-colunas">
              <Campo rotulo="Botão 2 (vazio = sem)" valor={projeto.hero.cta2} aoMudar={(v) => atualizar('hero.cta2', v)} />
              <label className="campo">
                <span>Leva para</span>
                <select value={projeto.hero.cta2Acao} onChange={(ev) => atualizar('hero.cta2Acao', ev.target.value)}>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="contato">Seção de contato</option>
                  <option value="servicos">Seção de serviços</option>
                  <option value="galeria">Galeria</option>
                  <option value="depoimentos">Depoimentos</option>
                </select>
              </label>
            </div>
          </div>
        )}

        {/* ============ SERVIÇOS ============ */}
        {aba === 'servicos' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.servicos.visivel} aoMudar={(v) => atualizar('servicos.visivel', v)} />}>
              Serviços / produtos
            </TituloGrupo>
            <Campo rotulo="Título da seção" valor={projeto.servicos.titulo} aoMudar={(v) => atualizar('servicos.titulo', v)} />
            {projeto.servicos.itens.map((item, i) => (
              <article key={i} className="item-editavel">
                <header>
                  <strong>
                    {item.icon} {item.nome || 'Novo item'}
                  </strong>
                  <Controles
                    aoSubir={() => moverItem('servicos.itens', i, -1)}
                    aoDescer={() => moverItem('servicos.itens', i, 1)}
                    aoRemover={() => removerItem('servicos.itens', i)}
                  />
                </header>
                <div className="duas-colunas">
                  <Campo rotulo="Ícone (emoji)" valor={item.icon} aoMudar={(v) => atualizar(`servicos.itens.${i}.icon`, v)} maxLength={4} />
                  <Campo rotulo="Preço" valor={item.preco} aoMudar={(v) => atualizar(`servicos.itens.${i}.preco`, v)} placeholder="a partir de R$ 90" />
                </div>
                <Campo rotulo="Nome" valor={item.nome} aoMudar={(v) => atualizar(`servicos.itens.${i}.nome`, v)} />
                <Area rotulo="Descrição" valor={item.desc} aoMudar={(v) => atualizar(`servicos.itens.${i}.desc`, v)} linhas={2} />
              </article>
            ))}
            <BotaoAdicionar
              aoClicar={() =>
                mutar('servicos.itens', (lista) => lista.push({ icon: '✨', nome: 'Novo serviço', desc: 'Descreva o benefício para o cliente.', preco: '' }))
              }
            >
              Adicionar serviço
            </BotaoAdicionar>
          </div>
        )}

        {/* ============ SOBRE ============ */}
        {aba === 'sobre' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.sobre.visivel} aoMudar={(v) => atualizar('sobre.visivel', v)} />}>
              Sobre nós
            </TituloGrupo>
            <Campo rotulo="Título" valor={projeto.sobre.titulo} aoMudar={(v) => atualizar('sobre.titulo', v)} />
            <Area rotulo="Texto" valor={projeto.sobre.texto} aoMudar={(v) => atualizar('sobre.texto', v)} linhas={6} />
            <Campo rotulo="Imagem (URL)" valor={projeto.sobre.imagem} aoMudar={(v) => atualizar('sobre.imagem', v)} />
            <span className="rotulo-grupo">Números de credibilidade</span>
            {projeto.sobre.numeros.map((num, i) => (
              <div key={i} className="linha-numero">
                <Campo rotulo="Valor" valor={num.valor} aoMudar={(v) => atualizar(`sobre.numeros.${i}.valor`, v)} placeholder="12+" />
                <Campo rotulo="Legenda" valor={num.label} aoMudar={(v) => atualizar(`sobre.numeros.${i}.label`, v)} placeholder="anos de casa" />
                <button
                  type="button"
                  className="icone-perigo"
                  onClick={() => removerItem('sobre.numeros', i)}
                  aria-label="Remover número"
                >
                  ✕
                </button>
              </div>
            ))}
            <BotaoAdicionar aoClicar={() => mutar('sobre.numeros', (lista) => lista.push({ valor: '100%', label: 'satisfação' }))}>
              Adicionar número
            </BotaoAdicionar>
          </div>
        )}

        {/* ============ GALERIA ============ */}
        {aba === 'galeria' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.galeria.visivel} aoMudar={(v) => atualizar('galeria.visivel', v)} />}>
              Galeria de fotos
            </TituloGrupo>
            <Campo rotulo="Título da seção" valor={projeto.galeria.titulo} aoMudar={(v) => atualizar('galeria.titulo', v)} />
            {projeto.galeria.imagens.map((url, i) => (
              <div key={i} className="linha-imagem">
                <img src={url} alt={`Prévia ${i + 1}`} onError={(ev) => (ev.currentTarget.style.visibility = 'hidden')} />
                <Campo rotulo={`Foto ${i + 1} (URL)`} valor={url} aoMudar={(v) => atualizar(`galeria.imagens.${i}`, v)} />
                <Controles
                  aoSubir={() => moverItem('galeria.imagens', i, -1)}
                  aoDescer={() => moverItem('galeria.imagens', i, 1)}
                  aoRemover={() => removerItem('galeria.imagens', i)}
                />
              </div>
            ))}
            <BotaoAdicionar aoClicar={() => mutar('galeria.imagens', (lista) => lista.push(''))}>
              Adicionar foto
            </BotaoAdicionar>
            <p className="dica">
              💡 Fotografias reais do cliente convertem muito mais. Pode usar a URL de qualquer imagem.
            </p>
          </div>
        )}

        {/* ============ DEPOIMENTOS ============ */}
        {aba === 'depoimentos' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.depoimentos.visivel} aoMudar={(v) => atualizar('depoimentos.visivel', v)} />}>
              Depoimentos
            </TituloGrupo>
            <Campo rotulo="Título da seção" valor={projeto.depoimentos.titulo} aoMudar={(v) => atualizar('depoimentos.titulo', v)} />
            {projeto.depoimentos.itens.map((item, i) => (
              <article key={i} className="item-editavel">
                <header>
                  <strong>💬 {item.nome || 'Novo depoimento'}</strong>
                  <Controles
                    aoSubir={() => moverItem('depoimentos.itens', i, -1)}
                    aoDescer={() => moverItem('depoimentos.itens', i, 1)}
                    aoRemover={() => removerItem('depoimentos.itens', i)}
                  />
                </header>
                <div className="duas-colunas">
                  <Campo rotulo="Nome" valor={item.nome} aoMudar={(v) => atualizar(`depoimentos.itens.${i}.nome`, v)} />
                  <Campo rotulo="Origem" valor={item.origem} aoMudar={(v) => atualizar(`depoimentos.itens.${i}.origem`, v)} placeholder="Google" />
                </div>
                <Area rotulo="Fala do cliente" valor={item.texto} aoMudar={(v) => atualizar(`depoimentos.itens.${i}.texto`, v)} linhas={3} />
              </article>
            ))}
            <BotaoAdicionar
              aoClicar={() => mutar('depoimentos.itens', (lista) => lista.push({ nome: 'Cliente', origem: 'Google', texto: 'Excelente atendimento!' }))}
            >
              Adicionar depoimento
            </BotaoAdicionar>
          </div>
        )}

        {/* ============ HORÁRIOS ============ */}
        {aba === 'horarios' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.horarios.visivel} aoMudar={(v) => atualizar('horarios.visivel', v)} />}>
              Horário de funcionamento
            </TituloGrupo>
            <Campo rotulo="Título da seção" valor={projeto.horarios.titulo} aoMudar={(v) => atualizar('horarios.titulo', v)} />
            {projeto.horarios.itens.map((item, i) => (
              <div key={i} className="linha-dupla">
                <Campo rotulo="Dia" valor={item.dia} aoMudar={(v) => atualizar(`horarios.itens.${i}.dia`, v)} />
                <Campo rotulo="Horário" valor={item.hora} aoMudar={(v) => atualizar(`horarios.itens.${i}.hora`, v)} />
                <button type="button" className="icone-perigo" onClick={() => removerItem('horarios.itens', i)} aria-label="Remover dia">
                  ✕
                </button>
              </div>
            ))}
            <BotaoAdicionar aoClicar={() => mutar('horarios.itens', (lista) => lista.push({ dia: 'Sábado', hora: '9h – 18h' }))}>
              Adicionar dia
            </BotaoAdicionar>
          </div>
        )}

        {/* ============ FAQ ============ */}
        {aba === 'faq' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.faq.visivel} aoMudar={(v) => atualizar('faq.visivel', v)} />}>
              Perguntas frequentes
            </TituloGrupo>
            <Campo rotulo="Título da seção" valor={projeto.faq.titulo} aoMudar={(v) => atualizar('faq.titulo', v)} />
            {projeto.faq.itens.map((item, i) => (
              <article key={i} className="item-editavel">
                <header>
                  <strong>❓ {item.p || 'Nova pergunta'}</strong>
                  <Controles
                    aoSubir={() => moverItem('faq.itens', i, -1)}
                    aoDescer={() => moverItem('faq.itens', i, 1)}
                    aoRemover={() => removerItem('faq.itens', i)}
                  />
                </header>
                <Campo rotulo="Pergunta" valor={item.p} aoMudar={(v) => atualizar(`faq.itens.${i}.p`, v)} />
                <Area rotulo="Resposta" valor={item.r} aoMudar={(v) => atualizar(`faq.itens.${i}.r`, v)} linhas={3} />
              </article>
            ))}
            <BotaoAdicionar aoClicar={() => mutar('faq.itens', (lista) => lista.push({ p: 'Nova pergunta', r: 'Resposta objetiva, sem enrolação.' }))}>
              Adicionar pergunta
            </BotaoAdicionar>
          </div>
        )}

        {/* ============ CONTATO ============ */}
        {aba === 'contato' && (
          <div className="grupo">
            <TituloGrupo acao={<Switch rotulo="Exibir" ligado={projeto.contato.visivel} aoMudar={(v) => atualizar('contato.visivel', v)} />}>
              Seção de contato
            </TituloGrupo>
            <Campo rotulo="Título" valor={projeto.contato.titulo} aoMudar={(v) => atualizar('contato.titulo', v)} />
            <Area rotulo="Texto de apoio" valor={projeto.contato.texto} aoMudar={(v) => atualizar('contato.texto', v)} linhas={3} />
            <Switch
              rotulo="Mostrar mapa do Google"
              ligado={projeto.contato.mostrarMapa}
              aoMudar={(v) => atualizar('contato.mostrarMapa', v)}
            />
            <Campo
              rotulo="Busca do mapa"
              valor={projeto.contato.mapaQuery}
              aoMudar={(v) => atualizar('contato.mapaQuery', v)}
              dica="O que deve ser procurado no Google Maps (nome + endereço)."
            />
            <p className="dica">
              💡 Os botões de WhatsApp, telefone, e-mail e Instagram saem automaticamente dos dados da aba
              <strong> Identidade</strong>. O formulário vira mensagem de WhatsApp.
            </p>
          </div>
        )}

        {/* ============ SEO ============ */}
        {aba === 'seo' && (
          <div className="grupo">
            <TituloGrupo>Como o site aparece no Google</TituloGrupo>
            <Campo
              rotulo="Título (title)"
              valor={projeto.seo.titulo}
              aoMudar={(v) => atualizar('seo.titulo', v)}
              maxLength={65}
              dica="Até 65 caracteres. Nome + o que vocês fazem."
            />
            <Area
              rotulo="Descrição (meta description)"
              valor={projeto.seo.descricao}
              aoMudar={(v) => atualizar('seo.descricao', v)}
              linhas={3}
              maxLength={160}
              dica="Até 160 caracteres — é o resumo que aparece na busca."
            />
            <Campo rotulo="Imagem de compartilhamento (URL)" valor={projeto.seo.imagem} aoMudar={(v) => atualizar('seo.imagem', v)} dica="Aparece quando o link é enviado no WhatsApp/Instagram." />
          </div>
        )}

        {/* ============ EXPORTAR ============ */}
        {aba === 'exportar' && (
          <>
            <div className="grupo">
              <TituloGrupo>Baixar o site</TituloGrupo>
              <p className="dica">
                O arquivo <strong>.html</strong> é o site inteiro (código, estilo e imagens referenciadas). Ele
                funciona em qualquer hospedagem, no GitHub Pages, na Hostinger ou abrindo direto no navegador.
              </p>
              <button type="button" className="botao-primario grande" onClick={baixarHtml}>
                ⬇ Baixar site em HTML
              </button>
              <button type="button" className="botao-secundario" onClick={copiarHtml}>
                Copiar código HTML
              </button>
            </div>
            <div className="grupo">
              <TituloGrupo>Backup do projeto</TituloGrupo>
              <button type="button" className="botao-secundario" onClick={baixarJson}>
                💾 Baixar projeto (.json)
              </button>
              <button type="button" className="botao-secundario" onClick={() => arquivoImportacao.current?.click()}>
                📂 Importar projeto (.json)
              </button>
              <small className="dica-block">Use para levar o projeto para outro computador ou guardar cópia de segurança.</small>
            </div>
            <div className="grupo">
              <TituloGrupo>Gerenciar</TituloGrupo>
              <button type="button" className="botao-secundario" onClick={aoNovo}>
                + Criar novo site
              </button>
              <button type="button" className="botao-perigo" onClick={aoExcluir}>
                🗑️ Excluir este projeto
              </button>
              <small className="dica-block">Última edição: {dataLegivel(projeto.atualizadoEm)}</small>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
