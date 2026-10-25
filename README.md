# 🌐 MOSS Criador de Sites

**Monte sites profissionais completos — sem escrever uma linha de código.**
Escolha o segmento, ajuste textos, cores e fotos, veja a prévia ao vivo e baixe o site final em **um único arquivo HTML** pronto para publicar.

Produto da **MOSS DIGITAL** — cartão no portfólio: https://marcelooliveira8052668-cyber.github.io/mossdigital/

---

## ✨ O que ele faz de verdade (não é site "meia boca")

| Recurso | Detalhe |
| --- | --- |
| 🎯 **8 segmentos com copy profissional** | Restaurante, salão, clínica, academia, advocacia, fotografia, oficina e pet — textos de venda, serviços com preços, depoimentos, FAQ e horários **já escritos por especialistas** |
| 🎨 **6 temas de design reais** | Essencial, Gourmet, Bem-estar, Premium, Vibrante e Minimalista — cada um muda paleta, tipografia, cantos e estilo de seção (não é só trocar cor) |
| 👁️ **Prévia = arquivo final** | O que você vê (inclusive no modo celular) é exatamente o HTML baixado — sem surpresa |
| 🧩 **Editor completo** | Identidade, abertura, serviços, sobre, galeria, depoimentos, horários, FAQ, contato, SEO e rodapé — com adicionar/remover/reordenar itens |
| 💬 **Tudo que converte em venda** | Botão flutuante de WhatsApp, formulário que vira mensagem no WhatsApp, CTA no topo, telefone/e-mail/Instagram automáticos |
| 📍 **Mapa do Google** | Seção de contato com mapa embutido (sem chave de API) |
| 🔍 **SEO de verdade** | `title`, `meta description`, Open Graph, favicon e **dados estruturados LocalBusiness** (Google entende o negócio) |
| 📱 **100% responsivo** | Menu celular, layouts fluidos, prévia em modo celular no editor |
| ⚡ **Leve e offline** | HTML único, CSS/JS embutidos, sem framework — carrega em qualquer lugar |
| 💾 **Projetos ilimitados** | Salvos no navegador + backup/importação em `.json` |
| 📦 **Exportação** | Baixar `.html` (site pronto), copiar código ou baixar projeto |

## 🧭 Estrutura

```
moss-criador-de-sites/
├─ index.html                    # Editor (SEO + fontes)
├─ public/icone.svg
├─ src/
│  ├─ configuracao.js            # (marcas — veja abaixo)
│  ├─ segmentos.js               # ⭐ copy profissional por segmento
│  ├─ temas.js                   # ⭐ os6 temas de design
│  ├─ estado.js                  # modelo de dados + persistência
│  ├─ gerador/
│  │   ├─ html.js                # ⭐ monta o site final
│  │   ├─ css.js                 # estilo do site gerado
│  │   └─ js.js                  # script embutido (menu/zap/form)
│  ├─ componentes/
│  │   ├─ Painel.jsx             # editor (12 abas)
│  │   ├─ Wizard.jsx             # assistente de criação
│  │   └─ ListaProjetos.jsx      # gerenciador
│  ├─ App.jsx / App.css          # casca do editor
│  └─ main.jsx
└─ .github/workflows/deploy.yml  # deploy automático
```

## ▶️ Rodar localmente

```bash
npm install
npm run dev      # editor em http://localhost:5173
npm run lint     # qualidade
npm run build    # gera dist/
```

## 🚀 Como usar (fluxo de vendas)

1. Abra o assistente → **escolha o segmento** do cliente;
2. O site já nasce completo (textos, serviços, depoimentos, fotos);
3. Troque **nome, WhatsApp, endereço e fotos reais**;
4. Ajuste o **tema/cor** para combinar com a marca;
5. **Baixe o `.html`** e publique (GitHub Pages, Hostinger, cliente pediu — serve para tudo);
6. Recorra ao **backup `.json`** quando o cliente pedir alterações futuras.

## 💰 Tabela comercial sugerida (MOSS DIGITAL)

| Item | Valor |
| --- | --- |
| **Plano Essencial** | **R$ 39,90/mês** — site de uma página, 1 alteração/mês |
| **Plano Profissional** | **R$ 79,90/mês** — seções ilimitadas, alterações ilimitadas, SEO básico |
| **Montagem personalizada** (opcional, avulso) | **R$ 149 a R$ 299** — a gente monta com as fotos e textos do cliente |

> 💡 **Por que assinatura?** O cliente continua com o site vivo, com suporte e atualizações — receita recorrente para a MOSS. Custo de hospedagem: **praticamente zero** (HTML estático).

## 🧪 Teste de fumaça (manual)

1. Assistente → segmento “Salão & Barbearia” → tema Bem-estar → **Criar**;
2. Prévia mostra site completo com menu, seções e WhatsApp flutuante;
3. Modo celular → layout responde;
4. Painel: alterar nome → prévia atualiza em ~0,2s;
5. Desligar “Galeria” → seção some da prévia E do menu;
6. Serviços → adicionar item, reordenar, remover;
7. **Baixar site** → abrir o arquivo no navegador → tudo igual (menu, formulário → WhatsApp);
8. SEO: título/descrição refletem no `<head>` do arquivo baixado.

## 🔧 Personalização avançada

- **Nova copy de segmento:** adicione um objeto em `src/segmentos.js` (mesma estrutura);
- **Novo tema:** clone um objeto em `src/temas.js` (cores, fontes, raios, estilos);
- **Crédito no rodapé:** `projeto.rodape.creditos` (aba Exportar/rodapé) — ótimo para viralizar.

## 🗺️ Fase 2 (roadmap)

- Publicação 1 clique direto do editor (domínio do cliente);
- Domínios `.com.br` integrados (parceria Registro.br);
- Editar texto clicando direto na prévia (WYSIWYG);
- IA escrevendo a copy do cliente a partir de um briefing;
- Área do cliente com login (faturamento por assinatura recorrente).

---

Desenvolvido com **React + Vite**. Projeto MOSS DIGITAL ©.
