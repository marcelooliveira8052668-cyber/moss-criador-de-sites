// =============================================
// CSS DOS SITES GERADOS
// =============================================

// Eu gero a folha de estilo completa do site final.
// Ela sai embutida no HTML exportado (zero dependências)
// e muda de verdade conforme o tema escolhido: cores,
// fontes, cantos, estilo de hero e de seção.

export function estilo(tema, projeto) {
  const prim = projeto.corDestaque || tema.corPrimaria
  const primEscura = projeto.corDestaque
    ? `color-mix(in srgb, ${projeto.corDestaque} 82%, #000)`
    : tema.corPrimariaEscura

  return `
:root {
  --prim: ${prim};
  --prim-esc: ${primEscura};
  --fundo: ${tema.corFundo};
  --fundo-suv: ${tema.corFundoSuave};
  --texto: ${tema.corTexto};
  --texto-suv: ${tema.corTextoSuave};
  --card: ${tema.corCard};
  --borda: ${tema.corBorda};
  --cab-fundo: ${tema.corCabecalho};
  --cab-texto: ${tema.corTextoCabecalho};
  --rodape-bg: ${tema.corRodape};
  --rodape-texto: ${tema.corTextoRodape};
  --raio: ${tema.raio};
  --raio-btn: ${tema.raioBotao};
  --peso: ${tema.pesoTitulo};
  --corpo: ${tema.fonteCorpo};
  --titulo: ${tema.fonteTitulo};
  --zap: #25d366;
  --sombra: 0 10px 30px rgba(0, 0, 0, 0.10);
  --largura: 1120px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: var(--corpo);
  background: var(--fundo);
  color: var(--texto);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }

a { color: var(--prim); }

.container {
  width: 100%;
  max-width: var(--largura);
  margin: 0 auto;
  padding: 0 22px;
}

h1, h2, h3 { font-family: var(--titulo); font-weight: var(--peso); line-height: 1.15; margin: 0; }

:focus-visible { outline: 3px solid var(--prim); outline-offset: 2px; }

/* ======== Cabeçalho ======== */

.cabecalho {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--cab-fundo);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.cabecalho.rolou { box-shadow: var(--sombra); border-color: var(--borda); }

.cabecalho__dentro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 68px;
}

.marca {
  display: flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}

.marca__simbolo {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: calc(var(--raio) * 0.8);
  background: var(--prim);
  color: #fff;
  display: grid;
  place-items: center;
  font-family: var(--titulo);
  font-weight: 800;
  font-size: 19px;
}

.marca__texto { display: flex; flex-direction: column; min-width: 0; }

.marca__nome {
  font-family: var(--titulo);
  font-weight: var(--peso);
  font-size: 18.5px;
  letter-spacing: -0.3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.marca__slogan {
  font-size: 11.5px;
  color: var(--texto-suv);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px;
}

.nav { display: flex; align-items: center; gap: 4px; }

.nav a {
  color: var(--cab-texto);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 11px;
  border-radius: var(--raio-btn);
  transition: background 0.15s, color 0.15s;
}

.nav a:hover { background: color-mix(in srgb, var(--prim) 14%, transparent); color: var(--prim); }

.botao {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--corpo);
  font-weight: 700;
  font-size: 15px;
  border-radius: var(--raio-btn);
  padding: 13px 24px;
  transition: transform 0.15s, filter 0.15s, background 0.15s, color 0.15s;
}

.botao:hover { transform: translateY(-2px); filter: brightness(1.05); }

.botao--primario { background: var(--prim); color: #fff; }

.botao--zap { background: var(--zap); color: #06281a; }

.botao--fantasma { background: transparent; color: inherit; border: 2px solid var(--borda); }

.botao--fantasma:hover { border-color: var(--prim); color: var(--prim); filter: none; }

.botao--pequeno { padding: 10px 17px; font-size: 13.5px; }

.menu-botao {
  display: none;
  background: none;
  border: 2px solid var(--borda);
  border-radius: var(--raio-btn);
  width: 44px;
  height: 44px;
  cursor: pointer;
  padding: 0;
}

.menu-botao span,
.menu-botao span::before,
.menu-botao span::after {
  content: '';
  display: block;
  width: 20px;
  height: 2.5px;
  margin: 0 auto;
  background: var(--cab-texto);
  border-radius: 2px;
  position: relative;
}

.menu-botao span::before { position: absolute; top: -6.5px; }
.menu-botao span::after { position: absolute; top: 6.5px; }

/* ======== Hero (4 layouts reais) ======== */

.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 560px;
}

.hero__foto {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__veu { position: absolute; inset: 0; }

.hero__conteudo {
  position: relative;
  padding: 92px 22px;
  max-width: var(--largura);
  margin: 0 auto;
  width: 100%;
}

.hero__selo {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--prim);
  margin: 0 0 16px;
}

.hero h1 {
  font-size: clamp(34px, 5.6vw, 58px);
  letter-spacing: -1.2px;
  max-width: 720px;
  margin-bottom: 18px;
}

.hero__texto {
  font-size: clamp(16px, 2.2vw, 19px);
  color: var(--texto-suv);
  max-width: 580px;
  margin: 0 0 30px;
}

.hero__acoes { display: flex; gap: 13px; flex-wrap: wrap; }

/* Estilo: gradiente — foto com véu forte na cor primária */
.hero--gradiente .hero__veu {
  background:
    linear-gradient(100deg, color-mix(in srgb, var(--prim) 78%, #000) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.25) 100%);
}

.hero--gradiente .hero__selo { color: #fff; opacity: 0.9; }
.hero--gradiente h1, .hero--gradiente .hero__texto { color: #fff; }
.hero--gradiente .hero__texto { opacity: 0.92; }

/* Estilo: imagem — clássico escuro elegante */
.hero--imagem .hero__veu {
  background: linear-gradient(90deg, rgba(8,8,10,0.88) 0%, rgba(8,8,10,0.62) 55%, rgba(8,8,10,0.35) 100%);
}

.hero--imagem h1, .hero--imagem .hero__texto { color: #fff; }
.hero--imagem .hero__texto { opacity: 0.9; }

/* Estilo: suave — fundo claro, foto lateral arredondada */
.hero--suave { background: var(--fundo-suv); min-height: 520px; }
.hero--suave .hero__veu { background: linear-gradient(90deg, var(--fundo-suv) 0%, color-mix(in srgb, var(--fundo-suv) 85%, transparent) 58%, transparent 100%); }
.hero--suave .hero__foto {
  left: auto;
  right: 0;
  width: 44%;
  height: calc(100% - 56px);
  top: 28px;
  bottom: auto;
  border-radius: calc(var(--raio) * 1.6);
  box-shadow: var(--sombra);
}
.hero--suave .hero__conteudo { padding-right: 46%; }

/* Estilo: minimal — divisão limpa, tipografia marcante */
.hero--minimal { background: var(--fundo); border-bottom: 1px solid var(--borda); }
.hero--minimal .hero__veu { background: linear-gradient(90deg, var(--fundo) 0%, var(--fundo) 50%, transparent 78%); }
.hero--minimal .hero__foto { left: auto; right: 0; width: 46%; height: 100%; filter: grayscale(15%); }
.hero--minimal .hero__conteudo { padding-right: 50%; }
.hero--minimal .hero__selo { color: var(--texto-suv); }
.hero--minimal h1 { letter-spacing: -2px; }

/* ======== Seções ======== */

.secao { padding: 78px 0; scroll-margin-top: 76px; }

.secao--suv { background: var(--fundo-suv); }

.secao__cabecalho { max-width: 660px; margin-bottom: 40px; }

.secao__rotulo {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--prim);
  margin-bottom: 10px;
}

.secao h2 { font-size: clamp(27px, 3.6vw, 38px); letter-spacing: -0.8px; }

.secao__sub { color: var(--texto-suv); font-size: 16.5px; margin: 13px 0 0; }

/* ======== Serviços ======== */

.grade-servicos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 20px;
}

.card-servico {
  background: var(--card);
  border: 1px solid var(--borda);
  border-radius: var(--raio);
  padding: 26px 24px;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
}

.card-servico:hover {
  transform: translateY(-5px);
  box-shadow: var(--sombra);
  border-color: color-mix(in srgb, var(--prim) 45%, var(--borda));
}

.card-servico__icone {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  font-size: 26px;
  border-radius: calc(var(--raio) * 0.75);
  background: color-mix(in srgb, var(--prim) 15%, transparent);
  margin-bottom: 16px;
}

.card-servico h3 { font-size: 19.5px; margin-bottom: 8px; }

.card-servico p { color: var(--texto-suv); font-size: 14.5px; margin: 0 0 14px; }

.card-servico__preco {
  display: inline-block;
  font-size: 13.5px;
  font-weight: 800;
  color: var(--prim);
  background: color-mix(in srgb, var(--prim) 12%, transparent);
  padding: 5px 12px;
  border-radius: 999px;
}

/* ======== Sobre ======== */

.grade-sobre {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 52px;
  align-items: center;
}

.sobre__foto img {
  width: 100%;
  height: 430px;
  object-fit: cover;
  border-radius: var(--raio);
  box-shadow: var(--sombra);
}

.sobre h2 { font-size: clamp(26px, 3.4vw, 36px); margin-bottom: 16px; letter-spacing: -0.7px; }

.sobre p { color: var(--texto-suv); font-size: 16.5px; }

.numeros {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 28px;
}

.numero {
  background: var(--card);
  border: 1px solid var(--borda);
  border-radius: var(--raio);
  padding: 16px 12px;
  text-align: center;
}

.numero strong {
  display: block;
  font-family: var(--titulo);
  font-size: clamp(22px, 3vw, 30px);
  color: var(--prim);
}

.numero span { font-size: 12.5px; color: var(--texto-suv); font-weight: 600; }

/* ======== Galeria ======== */

.grade-galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.grade-galeria figure { margin: 0; overflow: hidden; border-radius: var(--raio); }

.grade-galeria img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.grade-galeria figure:hover img { transform: scale(1.06); }

/* ======== Depoimentos ======== */

.grade-depoimentos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 20px;
}

.depoimento {
  background: var(--card);
  border: 1px solid var(--borda);
  border-radius: var(--raio);
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.depoimento__estrelas { color: #f5b301; font-size: 17px; letter-spacing: 2px; }

.depoimento p { margin: 0; font-size: 15.5px; flex: 1; }

.depoimento__autor { display: flex; flex-direction: column; }

.depoimento__autor strong { font-size: 15px; }

.depoimento__autor span { font-size: 12.5px; color: var(--texto-suv); }

/* ======== Horários ======== */

.lista-horarios { max-width: 640px; display: flex; flex-direction: column; gap: 9px; }

.lista-horarios li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  background: var(--card);
  border: 1px solid var(--borda);
  border-radius: var(--raio-btn);
  padding: 13px 18px;
  font-size: 15px;
  list-style: none;
}

.lista-horarios ul { margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }

.lista-horarios li strong { font-weight: 700; }

.lista-horarios li span { color: var(--prim); font-weight: 700; text-align: right; }

/* ======== FAQ ======== */

.lista-faq { max-width: 760px; display: flex; flex-direction: column; gap: 11px; }

.lista-faq details {
  background: var(--card);
  border: 1px solid var(--borda);
  border-radius: var(--raio-btn);
  padding: 17px 20px;
}

.lista-faq summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
}

.lista-faq summary::-webkit-details-marker { display: none; }

.lista-faq summary::after {
  content: '+';
  color: var(--prim);
  font-size: 23px;
  font-weight: 400;
  line-height: 1;
}

.lista-faq details[open] summary::after { content: '\\2212'; }

.lista-faq details p { margin: 11px 0 0; color: var(--texto-suv); font-size: 15.5px; }

/* ======== Contato ======== */

.grade-contato {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 46px;
  align-items: start;
}

.lista-contato { display: flex; flex-direction: column; gap: 13px; margin: 22px 0 0; padding: 0; }

.lista-contato li {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  list-style: none;
  background: var(--card);
  border: 1px solid var(--borda);
  border-radius: var(--raio-btn);
  padding: 14px 16px;
}

.lista-contato__icone { font-size: 19px; line-height: 1.4; }

.lista-contato a { color: inherit; text-decoration: none; font-weight: 600; }
.lista-contato a:hover { color: var(--prim); }

.lista-contato small { display: block; color: var(--texto-suv); font-weight: 500; font-size: 12.5px; }

.formulario {
  background: var(--card);
  border: 1px solid var(--borda);
  border-radius: var(--raio);
  padding: 28px 26px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.formulario h3 { font-size: 21px; }

.campo { display: flex; flex-direction: column; gap: 6px; }

.campo label { font-size: 13.5px; font-weight: 700; }

.campo input, .campo textarea {
  font-family: var(--corpo);
  font-size: 15.5px;
  color: var(--texto);
  background: var(--fundo-suv);
  border: 1.5px solid var(--borda);
  border-radius: var(--raio-btn);
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.15s;
}

.campo input:focus, .campo textarea:focus { border-color: var(--prim); }

.campo textarea { min-height: 110px; resize: vertical; }

.formulario small { color: var(--texto-suv); font-size: 12.5px; text-align: center; }

.mapa {
  margin-top: 26px;
  border: 1px solid var(--borda);
  border-radius: var(--raio);
  overflow: hidden;
}

.mapa iframe { display: block; width: 100%; height: 300px; border: 0; }

/* ======== Rodapé ======== */

.rodape { background: var(--rodape-bg); color: var(--rodape-texto); padding: 54px 0 26px; }

.rodape__grade {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 36px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.rodape h3 { color: #fff; font-size: 16.5px; margin-bottom: 13px; }

.rodape p { margin: 0; font-size: 14.5px; }

.rodape ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }

.rodape ul a, .rodape__info a { color: var(--rodape-texto); text-decoration: none; font-size: 14.5px; }
.rodape ul a:hover, .rodape__info a:hover { color: #fff; }

.rodape__info { display: flex; flex-direction: column; gap: 8px; font-size: 14.5px; }

.rodape__baixo {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 20px;
  font-size: 13px;
}

.rodape__baixo a { color: var(--prim); font-weight: 700; text-decoration: none; }
.rodape__baixo a:hover { text-decoration: underline; }

/* ======== Zap flutuante ======== */

.zap-flutuante {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 60;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--zap);
  display: grid;
  place-items: center;
  box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
  transition: transform 0.18s;
}

.zap-flutuante:hover { transform: scale(1.09); }

.zap-flutuante svg { width: 30px; height: 30px; fill: #fff; }

/* ======== Responsivo ======== */

@media (max-width: 940px) {
  .grade-sobre, .grade-contato { grid-template-columns: 1fr; gap: 30px; }
  .sobre__foto img { height: 320px; }
  .rodape__grade { grid-template-columns: 1fr 1fr; }
  .hero--suave .hero__foto, .hero--minimal .hero__foto { display: none; }
  .hero--suave .hero__conteudo, .hero--minimal .hero__conteudo { padding-right: 22px; }
  .hero--suave .hero__veu, .hero--minimal .hero__veu { background: none; }
}

@media (max-width: 820px) {
  .menu-botao { display: block; }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--cab-fundo);
    flex-direction: column;
    align-items: stretch;
    padding: 12px 18px 18px;
    border-bottom: 1px solid var(--borda);
    box-shadow: var(--sombra);
    display: none;
  }

  .nav.aberto { display: flex; }
  .nav a { padding: 12px 10px; font-size: 16px; }
  .nav .botao { margin-top: 6px; }

  .cabecalho { position: sticky; }
  .cabecalho__dentro { position: relative; }

  .hero { min-height: 470px; }
  .hero__conteudo { padding: 64px 22px; }
  .grade-galeria { grid-template-columns: 1fr 1fr; }
  .grade-galeria img { height: 180px; }
  .numeros { grid-template-columns: repeat(3, 1fr); gap: 9px; }
  .rodape__grade { grid-template-columns: 1fr; gap: 26px; }
  .secao { padding: 56px 0; }
  .marca__slogan { display: none; }
}

@media (max-width: 480px) {
  .grade-galeria { grid-template-columns: 1fr; }
  .hero h1 { font-size: 33px; }
  .zap-flutuante { right: 14px; bottom: 14px; width: 54px; height: 54px; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; animation: none !important; }
}

@media print {
  .cabecalho, .zap-flutuante, .formulario, .mapa { display: none !important; }
  body { background: #fff; color: #000; }
}
`
}
