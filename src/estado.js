// =============================================
// ESTADO DO PROJETO — modelo de dados + salvar/carregar
// =============================================

import { segmentoPorId } from './segmentos.js'

export const CHAVE_PROJETOS = 'mosscriador:projetos'
export const CHAVE_ATUAL = 'mosscriador:atual'

// Eu gero um id curto e único para cada projeto.
export function novoId() {
  return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

// Eu clono profundo (estado é puro JSON).
export function clonar(valor) {
  return JSON.parse(JSON.stringify(valor))
}

// Eu monto um projeto novo já preenchido com o
// conteúdo profissional do segmento escolhido.
export function criarProjeto(segmentoId, temaId) {
  const seg = segmentoPorId(segmentoId)
  if (!seg) return null
  const agora = new Date().toISOString()
  const negocio = clonar(seg.negocio)

  return {
    id: novoId(),
    segmento: seg.id,
    tema: temaId ?? seg.temaSugerido,
    criadoEm: agora,
    atualizadoEm: agora,

    // Identidade
    negocio,

    // Seções (visivel liga/desliga a seção no site)
    hero: {
      visivel: true,
      titulo: seg.hero.titulo,
      texto: seg.hero.texto,
      imagem: seg.hero.imagem,
      cta1: seg.hero.cta1,
      cta1Acao: 'servicos',
      cta2: seg.hero.cta2,
      cta2Acao: 'whatsapp',
    },
    servicos: {
      visivel: true,
      titulo: seg.sugestoes.servicos,
      itens: clonar(seg.servicos),
    },
    sobre: {
      visivel: true,
      titulo: seg.sobre.titulo,
      texto: seg.sobre.texto,
      imagem: seg.galeria[0],
      numeros: clonar(seg.sobre.numeros),
    },
    galeria: {
      visivel: true,
      titulo: seg.sugestoes.galeria,
      imagens: clonar(seg.galeria),
    },
    depoimentos: {
      visivel: true,
      titulo: seg.sugestoes.depoimentos,
      itens: clonar(seg.depoimentos),
    },
    horarios: {
      visivel: true,
      titulo: 'Horário de funcionamento',
      itens: clonar(seg.horarios),
    },
    faq: {
      visivel: true,
      titulo: seg.sugestoes.faq,
      itens: clonar(seg.faq),
    },
    contato: {
      visivel: true,
      titulo: seg.sugestoes.contato,
      texto: 'Fale conosco pelos canais abaixo ou envie uma mensagem pelo formulário — respondemos em minutos no horário comercial.',
      mostrarMapa: true,
      mapaQuery: `${negocio.nome}, ${negocio.endereco}, ${negocio.cidade}`,
    },
    rodape: {
      texto: 'Atendimento em todo o Brasil. Todos os direitos reservados.',
      creditos: true,
    },

    // SEO (como aparece no Google e ao compartilhar)
    seo: {
      titulo: `${negocio.nome} — ${negocio.slogan}`,
      descricao: `${seg.hero.texto} ${negocio.endereco} — ${negocio.cidade}.`,
      imagem: seg.hero.imagem,
    },

    // Cor de destaque extra (vazio = usa a do tema)
    corDestaque: '',
  }
}

// Eu persisto a lista de projetos no navegador.
export function carregarProjetos() {
  try {
    const bruto = window.localStorage.getItem(CHAVE_PROJETOS)
    const lista = bruto ? JSON.parse(bruto) : []
    return Array.isArray(lista) ? lista : []
  } catch {
    return []
  }
}

export function salvarProjetos(lista) {
  try {
    window.localStorage.setItem(CHAVE_PROJETOS, JSON.stringify(lista))
    return true
  } catch {
    return false
  }
}

// Eu marco qual projeto está aberto.
export function salvarProjetoAtual(id) {
  try {
    window.localStorage.setItem(CHAVE_ATUAL, id ?? '')
  } catch {
    /* modo privado: segue o app sem persistir */
  }
}

export function carregarProjetoAtual() {
  try {
    return window.localStorage.getItem(CHAVE_ATUAL) || ''
  } catch {
    return ''
  }
}

// Eu aplico uma mutação num projeto (padrão imutável).
export function aplicar(caminho, valor, projeto) {
  const partes = caminho.split('.')
  const novo = clonar(projeto)
  let alvo = novo
  for (let i = 0; i < partes.length - 1; i += 1) {
    alvo = alvo[partes[i]]
  }
  alvo[partes[partes.length - 1]] = valor
  novo.atualizadoEm = new Date().toISOString()
  return novo
}

// Eu formatos de data legíveis para o painel.
export function dataLegivel(iso) {
  try {
    return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return ''
  }
}
