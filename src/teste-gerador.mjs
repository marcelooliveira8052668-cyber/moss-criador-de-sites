// =============================================
// TESTE DO GERADOR DE SITES
// =============================================
// Eu gero um site de cada segmento e verifico se o
// HTML final está completo e sem defeitos.

import { writeFileSync } from 'node:fs'
import { criarProjeto } from './estado.js'
import { gerarHtml } from './gerador/html.js'
import { SEGMENTOS } from './segmentos.js'

const verificacoes = []

const principal = criarProjeto('restaurante')
const html = gerarHtml(principal)

verificacoes.push(['começa com doctype', html.startsWith('<!doctype html>')])
verificacoes.push(['lang pt-BR', html.includes('<html lang="pt-BR">')])
verificacoes.push(['title presente', /<title>[^<]{10,}<\/title>/.test(html)])
verificacoes.push(['meta description', html.includes('name="description"')])
verificacoes.push(['Open Graph', html.includes('property="og:title"')])
verificacoes.push(['favicon embutido', html.includes('data:image/svg+xml')])
verificacoes.push(['favicon codificado (não quebra o HTML)', !/svg\+xml,</.test(html)])
verificacoes.push(['dados estruturados LocalBusiness', html.includes('application/ld+json') && html.includes('LocalBusiness')])
verificacoes.push(['Google Fonts do tema', html.includes('fonts.googleapis.com')])
verificacoes.push(['CSS embutido', html.includes('<style>') && html.includes('--prim')])
verificacoes.push(['JS embutido', html.includes('form-zap')])
verificacoes.push(['WhatsApp do cliente', html.includes('wa.me/5511999990000')])
verificacoes.push(['mapa do Google', html.includes('maps.google.com')])
verificacoes.push(['menu mobile', html.includes('botao-menu')])
verificacoes.push(['crédito MOSS', html.includes('MOSS Criador de Sites')])
verificacoes.push(['ano automático', html.includes('id="ano"')])
verificacoes.push(['script JSON-LD sem quebrar tag', !/<\/script>\s*<\/head>[\s\S]*undefined/.test(html)])
verificacoes.push(['sem undefined', !html.includes('undefined')])
verificacoes.push(['sem [object Object]', !html.includes('[object Object]')])
verificacoes.push(['sem NaN', !html.includes('NaN')])

// Todas as seções do segmento restaurante devem existir.
const secoesEsperadas = ['inicio', 'servicos', 'sobre', 'galeria', 'depoimentos', 'horarios', 'faq', 'contato']
for (const id of secoesEsperadas) {
  verificacoes.push([`seção #${id}`, html.includes(`id="${id}"`)])
}

// Todos os segmentos geram site saudável.
for (const segmento of SEGMENTOS) {
  const site = gerarHtml(criarProjeto(segmento.id))
  const saudavel =
    site.startsWith('<!doctype html>') &&
    !site.includes('undefined') &&
    !site.includes('[object Object]') &&
    !site.includes('NaN') &&
    site.length > 15000
  verificacoes.push([`segmento ${segmento.emoji} ${segmento.id}`, saudavel])
}

// Seção desligada some do site.
const semGaleria = criarProjeto('restaurante')
semGaleria.galeria.visivel = false
const htmlSemGaleria = gerarHtml(semGaleria)
verificacoes.push(['galeria desligada sai do HTML', !htmlSemGaleria.includes('id="galeria"')])
verificacoes.push(['galeria desligada sai do menu', !htmlSemGaleria.includes('href="#galeria"')])

// Cor personalizada substitui a do tema.
const comCor = criarProjeto('beleza')
comCor.corDestaque = '#ff00aa'
verificacoes.push(['cor personalizada aplicada', gerarHtml(comCor).includes('--prim: #ff00aa')])

// Gero a amostra para inspeção visual.
writeFileSync('amostra-restaurante.html', html, 'utf8')

let falhas = 0
console.log('\n— Gerador de sites —')
for (const [nome, ok] of verificacoes) {
  console.log(`  ${ok ? '✓' : '✗'} ${nome}`)
  if (!ok) falhas += 1
}
console.log(`\nResultado: ${verificacoes.length - falhas} ok, ${falhas} falha(s)`)
console.log(`Amostra gravada: amostra-restaurante.html (${html.length} caracteres)`)

process.exit(falhas ? 1 : 0)
