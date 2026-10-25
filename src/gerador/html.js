// =============================================
// GERADOR DE HTML — o site final do cliente
// =============================================

// Eu monto o site completo em um único arquivo HTML:
// estilos, script, SEO, dados estruturados e todas as
// seções visíveis. O que você vê na prévia é exatamente
// o que o cliente baixa (prévia = export, sem surpresa).

import { temaPorId } from '../temas.js'
import { estilo } from './css.js'
import { scriptInterno } from './js.js'

// Eu escapo textos para não quebrar o HTML.
export function esc(valor) {
  return String(valor ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const escUrl = (valor) => encodeURIComponent(String(valor ?? ''))

// Eu mapeio famílias de fonte para a URL do Google Fonts.
const FONTES = {
  Inter: 'Inter:wght@400;500;600;700;800',
  'Playfair Display': 'Playfair+Display:wght@600;700',
  Fraunces: 'Fraunces:opsz,wght@9..144,600;9..144,700',
  'Cormorant Garamond': 'Cormorant+Garamond:wght@600;700',
  Sora: 'Sora:wght@600;700;800',
  Archivo: 'Archivo:wght@700;800',
}

function linkFontes(tema) {
  const primeira = (texto) => {
    const achado = String(texto).match(/'([^']+)'/)
    return achado ? achado[1] : 'Inter'
  }
  const familias = [...new Set([primeira(tema.fonteCorpo), primeira(tema.fonteTitulo)])]
  const slugs = familias.map((f) => FONTES[f]).filter(Boolean)
  if (!slugs.length) return ''
  return `\n    <link href="https://fonts.googleapis.com/css2?${slugs.join('&')}&display=swap" rel="stylesheet">`
}

// Eu gero um favicon SVG com a inicial do negócio.
function favicon(nome) {
  const inicial = String(nome || 'S').trim().charAt(0).toUpperCase() || 'S'
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="14" fill="#2563eb"/>` +
    `<text x="32" y="43" font-family="Georgia,serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">${inicial}</text>` +
    `</svg>`
  // Eu codifico tudo para as aspas não quebrarem o atributo HTML.
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

// Eu gero o link de WhatsApp com mensagem pronta.
function urlZap(projeto, mensagem) {
  const numero = String(projeto.negocio.whatsapp || '').replace(/\D/g, '')
  const texto = mensagem || `Olá! Vim pelo site ${projeto.negocio.nome} e gostaria de mais informações.`
  return `https://wa.me/${numero}?text=${escUrl(texto)}`
}

// Eu decido se uma seção entra no site.
function ativa(projeto, chave) {
  const secao = projeto[chave]
  if (!secao || secao.visivel === false) return false
  if (Array.isArray(secao.itens)) return secao.itens.length > 0
  if (Array.isArray(secao.imagens)) return secao.imagens.length > 0
  return true
}

// Eu monto a navegação só com o que existe.
function linksNav(projeto) {
  const menu = [
    ['inicio', 'Início', projeto.hero.visivel !== false],
    ['servicos', 'Serviços', ativa(projeto, 'servicos')],
    ['sobre', 'Sobre', ativa(projeto, 'sobre')],
    ['galeria', 'Galeria', ativa(projeto, 'galeria')],
    ['depoimentos', 'Depoimentos', ativa(projeto, 'depoimentos')],
    ['horarios', 'Horários', ativa(projeto, 'horarios')],
    ['faq', 'Dúvidas', ativa(projeto, 'faq')],
    ['contato', 'Contato', ativa(projeto, 'contato')],
  ]
  return menu.filter((item) => item[2])
}

// Eu resolvo para onde um botão do hero aponta.
function acaoHero(projeto, acao) {
  const opcoes = {
    whatsapp: () => urlZap(projeto),
    contato: () => (ativa(projeto, 'contato') ? '#contato' : '#inicio'),
    galeria: () => (ativa(projeto, 'galeria') ? '#galeria' : '#servicos'),
    depoimentos: () => (ativa(projeto, 'depoimentos') ? '#depoimentos' : '#sobre'),
    servicos: () => (ativa(projeto, 'servicos') ? '#servicos' : '#contato'),
  }
  const gerar = opcoes[acao] || opcoes.servicos
  return gerar()
}

// ============================ SEÇÕES ============================

function blocoHero(projeto) {
  if (projeto.hero.visivel === false) return ''
  const tema = temaPorId(projeto.tema)
  const h = projeto.hero
  return `
  <section class="hero hero--${tema.estiloHero}" id="inicio">
    ${h.imagem ? `<img class="hero__foto" src="${esc(h.imagem)}" alt="" onerror="this.remove()">` : ''}
    <div class="hero__veu"></div>
    <div class="hero__conteudo">
      <p class="hero__selo">${esc(projeto.negocio.slogan)}</p>
      <h1>${esc(h.titulo)}</h1>
      <p class="hero__texto">${esc(h.texto)}</p>
      <div class="hero__acoes">
        <a class="botao botao--primario" href="${acaoHero(projeto, h.cta1Acao)}">${esc(h.cta1)}</a>
        ${h.cta2 ? `<a class="botao ${h.cta2Acao === 'whatsapp' ? 'botao--zap' : 'botao--fantasma'}" href="${acaoHero(projeto, h.cta2Acao)}">${esc(h.cta2)}</a>` : ''}
      </div>
    </div>
  </section>`
}

function blocoServicos(projeto, suv) {
  if (!ativa(projeto, 'servicos')) return ''
  const s = projeto.servicos
  return `
  <section class="secao ${suv ? 'secao--suv' : ''}" id="servicos">
    <div class="container">
      <header class="secao__cabecalho">
        <span class="secao__rotulo">O que oferecemos</span>
        <h2>${esc(s.titulo)}</h2>
      </header>
      <div class="grade-servicos">
        ${s.itens
          .map(
            (item) => `
        <article class="card-servico">
          <span class="card-servico__icone" aria-hidden="true">${esc(item.icon)}</span>
          <h3>${esc(item.nome)}</h3>
          <p>${esc(item.desc)}</p>
          ${item.preco ? `<span class="card-servico__preco">${esc(item.preco)}</span>` : ''}
        </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`
}

function blocoSobre(projeto, suv) {
  if (!ativa(projeto, 'sobre')) return ''
  const s = projeto.sobre
  return `
  <section class="secao ${suv ? 'secao--suv' : ''}" id="sobre">
    <div class="container grade-sobre">
      <div class="sobre__foto">
        ${s.imagem ? `<img src="${esc(s.imagem)}" alt="${esc(projeto.negocio.nome)}" loading="lazy" onerror="this.parentElement.style.display='none'">` : ''}
      </div>
      <div>
        <span class="secao__rotulo">Sobre nós</span>
        <h2>${esc(s.titulo)}</h2>
        <p>${esc(s.texto)}</p>
        ${
          s.numeros && s.numeros.length
            ? `<div class="numeros">
          ${s.numeros
            .map(
              (n) => `
            <div class="numero"><strong>${esc(n.valor)}</strong><span>${esc(n.label)}</span></div>`
            )
            .join('')}
        </div>`
            : ''
        }
      </div>
    </div>
  </section>`
}

function blocoGaleria(projeto, suv) {
  if (!ativa(projeto, 'galeria')) return ''
  const g = projeto.galeria
  return `
  <section class="secao ${suv ? 'secao--suv' : ''}" id="galeria">
    <div class="container">
      <header class="secao__cabecalho">
        <span class="secao__rotulo">Galeria</span>
        <h2>${esc(g.titulo)}</h2>
      </header>
      <div class="grade-galeria">
        ${g.imagens
          .map(
            (url, i) => `
        <figure><img src="${esc(url)}" alt="Imagem ${i + 1} de ${esc(projeto.negocio.nome)}" loading="lazy" onerror="this.closest('figure').remove()"></figure>`
          )
          .join('')}
      </div>
    </div>
  </section>`
}

function blocoDepoimentos(projeto, suv) {
  if (!ativa(projeto, 'depoimentos')) return ''
  const d = projeto.depoimentos
  return `
  <section class="secao ${suv ? 'secao--suv' : ''}" id="depoimentos">
    <div class="container">
      <header class="secao__cabecalho">
        <span class="secao__rotulo">Prova social</span>
        <h2>${esc(d.titulo)}</h2>
      </header>
      <div class="grade-depoimentos">
        ${d.itens
          .map(
            (item) => `
        <article class="depoimento">
          <span class="depoimento__estrelas" aria-label="5 de 5 estrelas">★★★★★</span>
          <p>“${esc(item.texto)}”</p>
          <footer class="depoimento__autor">
            <strong>${esc(item.nome)}</strong>
            <span>${esc(item.origem)}</span>
          </footer>
        </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`
}

function blocoHorarios(projeto, suv) {
  if (!ativa(projeto, 'horarios')) return ''
  const h = projeto.horarios
  return `
  <section class="secao ${suv ? 'secao--suv' : ''}" id="horarios">
    <div class="container">
      <header class="secao__cabecalho">
        <span class="secao__rotulo">Quando estamos abertos</span>
        <h2>${esc(h.titulo)}</h2>
      </header>
      <div class="lista-horarios">
        <ul>
          ${h.itens
            .map(
              (linha) => `
          <li><strong>${esc(linha.dia)}</strong><span>${esc(linha.hora)}</span></li>`
            )
            .join('')}
        </ul>
      </div>
    </div>
  </section>`
}

function blocoFaq(projeto, suv) {
  if (!ativa(projeto, 'faq')) return ''
  const f = projeto.faq
  return `
  <section class="secao ${suv ? 'secao--suv' : ''}" id="faq">
    <div class="container">
      <header class="secao__cabecalho">
        <span class="secao__rotulo">Antes de perguntar</span>
        <h2>${esc(f.titulo)}</h2>
      </header>
      <div class="lista-faq">
        ${f.itens
          .map(
            (item) => `
        <details>
          <summary>${esc(item.p)}</summary>
          <p>${esc(item.r)}</p>
        </details>`
          )
          .join('')}
      </div>
    </div>
  </section>`
}

function blocoContato(projeto, suv) {
  if (!ativa(projeto, 'contato')) return ''
  const n = projeto.negocio
  const c = projeto.contato
  const itens = []

  if (n.telefone)
    itens.push(
      `<li><span class="lista-contato__icone" aria-hidden="true">📞</span><div><a href="tel:${esc(String(n.telefone).replace(/[^\d+]/g, ''))}">${esc(n.telefone)}</a><small>Ligação direta</small></div></li>`
    )
  if (n.whatsapp)
    itens.push(
      `<li><span class="lista-contato__icone" aria-hidden="true">💬</span><div><a href="${urlZap(projeto)}" target="_blank" rel="noopener">WhatsApp</a><small>Resposta rápida no horário comercial</small></div></li>`
    )
  if (n.email)
    itens.push(
      `<li><span class="lista-contato__icone" aria-hidden="true">✉️</span><div><a href="mailto:${esc(n.email)}">${esc(n.email)}</a><small>E-mail para orçamentos</small></div></li>`
    )
  if (n.endereco)
    itens.push(
      `<li><span class="lista-contato__icone" aria-hidden="true">📍</span><div><span>${esc(n.endereco)}</span><small>${esc(n.cidade)}</small></div></li>`
    )
  if (n.instagram)
    itens.push(
      `<li><span class="lista-contato__icone" aria-hidden="true">📷</span><div><a href="https://instagram.com/${esc(String(n.instagram).replace('@', ''))}" target="_blank" rel="noopener">${esc(n.instagram)}</a><small>Novidades no Instagram</small></div></li>`
    )

  return `
  <section class="secao ${suv ? 'secao--suv' : ''}" id="contato">
    <div class="container">
      <header class="secao__cabecalho">
        <span class="secao__rotulo">Contato</span>
        <h2>${esc(c.titulo)}</h2>
        <p class="secao__sub">${esc(c.texto)}</p>
      </header>
      <div class="grade-contato">
        <div>
          <ul class="lista-contato">${itens.join('')}</ul>
          ${
            c.mostrarMapa && c.mapaQuery
              ? `<div class="mapa"><iframe src="https://maps.google.com/maps?q=${escUrl(c.mapaQuery)}&z=15&hl=pt-BR&output=embed" title="Localização no mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`
              : ''
          }
        </div>
        <form class="formulario" id="form-zap">
          <h3>Envie uma mensagem</h3>
          <div class="campo">
            <label for="nome">Seu nome</label>
            <input id="nome" name="nome" type="text" required placeholder="Como podemos te chamar?">
          </div>
          <div class="campo">
            <label for="telefone">Seu telefone</label>
            <input id="telefone" name="telefone" type="tel" required placeholder="(00) 00000-0000">
          </div>
          <div class="campo">
            <label for="mensagem">Como podemos ajudar?</label>
            <textarea id="mensagem" name="mensagem" required placeholder="Conte o que você precisa..."></textarea>
          </div>
          <button class="botao botao--zap" type="submit">Enviar pelo WhatsApp →</button>
          <small>A mensagem abre no seu WhatsApp, já pronta para enviar.</small>
        </form>
      </div>
    </div>
  </section>`
}

function blocoRodape(projeto, links) {
  const n = projeto.negocio
  return `
  <footer class="rodape">
    <div class="container">
      <div class="rodape__grade">
        <div>
          <h3>${esc(n.nome)}</h3>
          <p>${esc(n.slogan)}</p>
          <p style="margin-top:10px">${esc(projeto.rodape.texto)}</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <ul>
            ${links.map((l) => `<li><a href="#${l[0]}">${esc(l[1])}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h3>Contato</h3>
          <div class="rodape__info">
            ${n.telefone ? `<span>📞 ${esc(n.telefone)}</span>` : ''}
            ${n.whatsapp ? `<a href="${urlZap(projeto)}" target="_blank" rel="noopener">💬 WhatsApp</a>` : ''}
            ${n.email ? `<a href="mailto:${esc(n.email)}">✉️ ${esc(n.email)}</a>` : ''}
            ${n.endereco ? `<span>📍 ${esc(n.endereco)} — ${esc(n.cidade)}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="rodape__baixo">
        <span>© <span id="ano">${new Date().getFullYear()}</span> ${esc(n.nome)}. ${esc(n.instagram || '')}</span>
        ${
          projeto.rodape.creditos
            ? `<span>Criado com <a href="https://marcelooliveira8052668-cyber.github.io/moss-criador-de-sites/" target="_blank" rel="noopener">MOSS Criador de Sites</a></span>`
            : ''
        }
      </div>
    </div>
  </footer>`
}

// ============================ JSON-LD (SEO) ============================

function dadosEstruturados(projeto) {
  const n = projeto.negocio
  const obj = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: n.nome,
    description: projeto.seo.descricao,
    image: projeto.seo.imagem,
    telephone: n.telefone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: n.endereco,
      addressLocality: n.cidade,
    },
  }
  if (n.instagram) obj.sameAs = [`https://instagram.com/${String(n.instagram).replace('@', '')}`]
  if (ativa(projeto, 'horarios')) {
    obj.openingHours = projeto.horarios.itens.map((l) => `${l.dia}: ${l.hora}`)
  }
  // Eu evito quebrar a tag <script> com o JSON.
  return JSON.stringify(obj, null, 2).replace(/</g, '\\u003c')
}

// ============================ MONTAGEM FINAL ============================

export function gerarHtml(projeto) {
  const tema = temaPorId(projeto.tema)
  const n = projeto.negocio
  const links = linksNav(projeto)
  const inicial = String(n.nome || 'S').trim().charAt(0).toUpperCase() || 'S'
  const comecaHero = projeto.hero.visivel !== false

  // Alterno o fundo das seções para dar ritmo visual.
  const ordem = ['servicos', 'sobre', 'galeria', 'depoimentos', 'horarios', 'faq', 'contato'].filter((chave) =>
    ativa(projeto, chave)
  )
  const suv = {}
  ordem.forEach((chave, i) => {
    suv[chave] = i % 2 === 0
  })
  // A primeira seção depois do hero não precisa de fundo trocado.
  if (ordem.length && tema.estiloSecao !== 'alternado') suv[ordem[0]] = false

  const temZap = String(n.whatsapp || '').replace(/\D/g, '').length >= 10

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="${esc(tema.corFundo)}">
    <meta name="robots" content="index, follow">
    <title>${esc(projeto.seo.titulo)}</title>
    <meta name="description" content="${esc(projeto.seo.descricao)}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${esc(projeto.seo.titulo)}">
    <meta property="og:description" content="${esc(projeto.seo.descricao)}">
    <meta property="og:image" content="${esc(projeto.seo.imagem)}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="${favicon(n.nome)}">
    <link rel="canonical" href="./">${linkFontes(tema)}
    <style>${estilo(tema, projeto)}</style>
    <script type="application/ld+json">${dadosEstruturados(projeto)}</script>
  </head>
  <body>
    <header class="cabecalho">
      <div class="container cabecalho__dentro">
        <a class="marca" href="#inicio" aria-label="${esc(n.nome)} — início">
          <span class="marca__simbolo" aria-hidden="true">${esc(inicial)}</span>
          <span class="marca__texto">
            <span class="marca__nome">${esc(n.nome)}</span>
            <span class="marca__slogan">${esc(n.slogan)}</span>
          </span>
        </a>
        <button class="menu-botao" id="botao-menu" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-principal"><span></span></button>
        <nav class="nav" id="nav-principal" aria-label="Navegação principal">
          ${links.map((l) => `<a href="#${l[0]}">${esc(l[1])}</a>`).join('')}
          ${
            temZap
              ? `<a class="botao botao--primario botao--pequeno" href="${urlZap(projeto)}" target="_blank" rel="noopener">Falar agora</a>`
              : ''
          }
        </nav>
      </div>
    </header>

    <main>${comecaHero ? blocoHero(projeto) : ''}
${blocoServicos(projeto, suv.servicos)}
${blocoSobre(projeto, suv.sobre)}
${blocoGaleria(projeto, suv.galeria)}
${blocoDepoimentos(projeto, suv.depoimentos)}
${blocoHorarios(projeto, suv.horarios)}
${blocoFaq(projeto, suv.faq)}
${blocoContato(projeto, suv.contato)}
    </main>${blocoRodape(projeto, links)}
${
  temZap
    ? `    <a class="zap-flutuante" href="${urlZap(projeto)}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.6l.4-.5c.1-.2.1-.3.2-.5s0-.4 0-.5c-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.8 3 .7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z"/></svg>
    </a>`
    : ''
}
    <script>${scriptInterno(projeto)}</script>
  </body>
</html>`
}
