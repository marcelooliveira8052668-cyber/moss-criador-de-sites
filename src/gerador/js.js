// =============================================
// JAVASCRIPT EMBUTIDO NOS SITES GERADOS
// =============================================

// Eu gero um script mínimo (vanilla, sem dependências)
// que dá vida ao site: menu celular, sombra no
// cabeçalho ao rolar, ano automático e formulário
// de contato que vira mensagem de WhatsApp.

export function scriptInterno(projeto) {
  const nome = JSON.stringify(String(projeto.negocio.nome || ''))
  const zap = String(projeto.negocio.whatsapp || '').replace(/\D/g, '')

  return `
(function () {
  var cabecalho = document.querySelector('.cabecalho');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 8) { cabecalho.classList.add('rolou'); }
    else { cabecalho.classList.remove('rolou'); }
  }, { passive: true });

  var botao = document.getElementById('botao-menu');
  var nav = document.getElementById('nav-principal');
  if (botao && nav) {
    botao.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    nav.addEventListener('click', function (evento) {
      if (evento.target.tagName === 'A') {
        nav.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var ano = document.getElementById('ano');
  if (ano) { ano.textContent = new Date().getFullYear(); }

  var form = document.getElementById('form-zap');
  if (form) {
    form.addEventListener('submit', function (evento) {
      evento.preventDefault();
      var campos = form.elements;
      var texto = 'Olá! Vim pelo site ' + ${nome} + '.\\n\\n'
        + 'Nome: ' + campos.nome.value + '\\n'
        + 'Telefone: ' + campos.telefone.value + '\\n\\n'
        + campos.mensagem.value;
      window.open('https://wa.me/' + ${zap} + '?text=' + encodeURIComponent(texto), '_blank');
    });
  }
})();
`
}
