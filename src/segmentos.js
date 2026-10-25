// =============================================
// SEGMENTOS — conteúdo profissional pronto
// =============================================

// Eu entrego copy (textos de venda) escrita para
// cada segmento. O cliente do criador escolhe o
// tipo de negócio e já nasce com um site completo,
// coerente e pronto para vender — só troca o nome,
// telefone e fotos. Cada segmento traz:
//   • identidade (nome/slogan/headline)
//   • serviços com preços "a partir de"
//   • números de credibilidade
//   • depoimentos, FAQ, horários
//   • imagens curadas (Unsplash, grátis)

export const SEGMENTOS = [
  {
    id: 'restaurante',
    nome: 'Restaurante & Lanchonete',
    emoji: '🍽️',
    temaSugerido: 'gourmet',
    sugestoes: {
      servicos: 'Nossos pratos',
      sobre: 'Nossa história',
      galeria: 'Momentos da casa',
      depoimentos: 'Quem já provou',
      faq: 'Perguntas frequentes',
      contato: 'Faça sua reserva ou pedido',
    },
    negocio: {
      nome: 'Cantina do Zé',
      slogan: 'Comida caseira com alma de restaurante',
      headline: 'O sabor de casa que você não precisa cozinhar',
      subheadline:
        'Massas frescas, churrasco no ponto e sobremesas da vovó. Almoço e jantar todos os dias, no salão ou no delivery.',
      telefone: '(11) 3333-4444',
      whatsapp: '5511999990000',
      email: 'contato@cantinadoze.com.br',
      endereco: 'Rua das Palmeiras, 450 — Vila Madalena',
      cidade: 'São Paulo — SP',
      instagram: '@cantinadoze',
    },
    hero: {
      titulo: 'Comida caseira com alma de restaurante',
      texto: 'Almoço e jantar todos os dias, ingredientes frescos e aquele sabor que lembra a comida da mãe.',
      imagem: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80',
      cta1: 'Ver cardápio',
      cta2: 'Pedir no WhatsApp',
    },
    servicos: [
      { icon: '🍝', nome: 'Massas frescas', desc: 'Massa feita na hora, molhos que cozinham lento.', preco: 'a partir de R$ 34' },
      { icon: '🥩', nome: 'Churrasco & carnes', desc: 'Cortes selecionados, grelhados no ponto.', preco: 'a partir de R$ 49' },
      { icon: '🥗', nome: 'Pratos leves', desc: 'Saladas montadas na hora com ingredientes do dia.', preco: 'a partir de R$ 26' },
      { icon: '🍰', nome: 'Sobremesas da casa', desc: 'Pudim, brownie com sorvete e tortas do dia.', preco: 'a partir de R$ 14' },
      { icon: '🍹', nome: 'Bebidas', desc: 'Sucos naturais, refrigerantes e café coado.', preco: 'a partir de R$ 7' },
      { icon: '🛵', nome: 'Delivery próprio', desc: 'Entrega rápida na região, quentinho na porta.', preco: 'taxa fixa' },
    ],
    sobre: {
      titulo: 'Desde 2012 servindo comida de verdade',
      texto:
        'Começamos com uma chapa na garagem e a receita da dona Helena. Hoje somos uma casa de bairro onde famílias comem bem, pagam justo e voltam sempre. Tudo é feito fresquinho, sem conservantes e com ingredientes de fornecedores locais.',
      numeros: [
        { valor: '12+', label: 'anos de casa' },
        { valor: '40', label: 'pratos no cardápio' },
        { valor: '4,9★', label: 'no Google' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=700&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Juliana M.', origem: 'Google', texto: 'Melhor parmegiana da região! O atendimento é atencioso e o prato vem fumegando. Viramos clientes fiéis.' },
      { nome: 'Rafael T.', origem: 'iFood', texto: 'Peço toda semana para o escritório. Nunca falhou: sempre no horário e porções generosas.' },
      { nome: 'Família Nunes', origem: 'Instagram', texto: 'Levamos os avós no aniversário e todo mundo amou. Ambiente agradável e preço justo.' },
    ],
    faq: [
      { p: 'Vocês fazem delivery?', r: 'Sim! Temos delivery próprio na região e também estamos no iFood. O pedido mínimo é R$ 30.' },
      { p: 'Precisa reservar mesa?', r: 'Para jantar e fins de semana, recomendamos reservar pelo WhatsApp. No almoço costuma ter lugar.' },
      { p: 'Tem opção vegetariana/vegana?', r: 'Sim. Temos pratos vegetarianos fixos e opções veganas do dia — é só perguntar ao garçom.' },
      { p: 'Aceitam cartão?', r: 'Aceitamos dinheiro, débito, crédito e Pix.' },
    ],
    horarios: [
      { dia: 'Segunda', hora: '11h30 – 15h' },
      { dia: 'Terça a sexta', hora: '11h30 – 15h e 18h30 – 23h' },
      { dia: 'Sábado', hora: '11h30 – 23h' },
      { dia: 'Domingo', hora: '11h30 – 17h' },
    ],
  },

  {
    id: 'beleza',
    nome: 'Salão & Barbearia',
    emoji: '💇',
    temaSugerido: 'bemestar',
    sugestoes: {
      servicos: 'Serviços',
      sobre: 'Sobre o salão',
      galeria: 'Nosso trabalho',
      depoimentos: 'Clientes satisfeitos',
      faq: 'Dúvidas frequentes',
      contato: 'Agende seu horário',
    },
    negocio: {
      nome: 'Studio Lume',
      slogan: 'Beleza que valoriza quem você é',
      headline: 'Seu novo visual começa aqui',
      subheadline:
        'Corte, coloração, tratamentos e escova com profissionais especializados. Agende pelo WhatsApp e garanta seu horário.',
      telefone: '(11) 3333-5555',
      whatsapp: '5511999990001',
      email: 'contato@studiolume.com.br',
      endereco: 'Av. Central, 1200 — Centro',
      cidade: 'São Paulo — SP',
      instagram: '@studiolume',
    },
    hero: {
      titulo: 'Seu novo visual começa aqui',
      texto: 'Corte, coloração e tratamentos com quem entende de cabelo. Você sai do salão se sentindo incrível.',
      imagem: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80',
      cta1: 'Agendar horário',
      cta2: 'Ver serviços',
    },
    servicos: [
      { icon: '✂️', nome: 'Corte feminino/masculino', desc: 'Consultoria de estilo, lavagem e finalização.', preco: 'a partir de R$ 70' },
      { icon: '🎨', nome: 'Coloração & mechas', desc: 'Tintas sem amônia, matização e tone.', preco: 'a partir de R$ 160' },
      { icon: '💆', nome: 'Hidratação & reconstrução', desc: 'Tratamentos para cabelo danificado.', preco: 'a partir de R$ 90' },
      { icon: '💅', nome: 'Manicure & pedicure', desc: 'Esmaltação tradicional ou francesinha.', preco: 'a partir de R$ 40' },
      { icon: '👰', nome: 'Penteados & noivas', desc: 'Probagens, maquiagem e penteado do grande dia.', preco: 'orçamento' },
    ],
    sobre: {
      titulo: 'Cuidado, técnica e ambiente pra você relaxar',
      texto:
        'O Studio Lume nasceu da paixão por transformar pessoas. Nossa equipe se atualiza todo ano em academias de beleza e usa apenas produtos profissionais. Aqui o seu tempo é respeitado: horários marcados, sem espera e com café na mão.',
      numeros: [
        { valor: '8', label: 'anos de história' },
        { valor: '15k+', label: 'clientes atendidos' },
        { valor: '4,9★', label: 'no Google' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=700&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80',
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=700&q=80',
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Camila R.', origem: 'Google', texto: 'Melhor coloração que já fiz! Explicaram todo o processo e o resultado ficou exatamente como mostrei na referência.' },
      { nome: 'Pedro A.', origem: 'Instagram', texto: 'Barbearia impecável. Horário certinho, atendimento nota 10 e corte sempre perfeito.' },
      { nome: 'Fernanda L.', origem: 'WhatsApp', texto: 'Fiz o pacote de noiva e me senti uma princesa. Amei cada detalhe, do atendimento ao penteado.' },
    ],
    faq: [
      { p: 'Como agendar horário?', r: 'Pelo WhatsApp ou pelo botão da página. Respondemos em minutos no horário comercial.' },
      { p: 'Posso remarcar?', r: 'Claro. Pedimos apenas que avise com pelo menos 3 horas de antecedência.' },
      { p: 'Trabalham com qual marca de tinta?', r: 'Usamos linhas profissionais sem amônia e temos opção vegana — pergunte pela mais indicada para você.' },
      { p: 'Tem estacionamento?', r: 'Sim, convenção com o estacionamento ao lado (2 primeiras horas grátis).' },
    ],
    horarios: [
      { dia: 'Terça a sexta', hora: '9h – 19h' },
      { dia: 'Sábado', hora: '8h – 18h' },
      { dia: 'Domingo e segunda', hora: 'Fechado' },
    ],
  },

  {
    id: 'saude',
    nome: 'Clínica & Consultório',
    emoji: '🩺',
    temaSugerido: 'bemestar',
    sugestoes: {
      servicos: 'Especialidades',
      sobre: 'Nossa equipe',
      galeria: 'A clínica',
      depoimentos: 'Depoimentos de pacientes',
      faq: 'Dúvidas dos pacientes',
      contato: 'Agende sua consulta',
    },
    negocio: {
      nome: 'Clínica Vitalis',
      slogan: 'Cuidado completo em saúde',
      headline: 'Sua saúde merece atenção de verdade',
      subheadline:
        'Consultas, exames e acompanhamento humanizado. Agende pelo WhatsApp e receba lembrete de cada consulta.',
      telefone: '(11) 3333-6666',
      whatsapp: '5511999990002',
      email: 'agenda@clinicavitalis.com.br',
      endereco: 'Rua Bahia, 780 — Jardins',
      cidade: 'São Paulo — SP',
      instagram: '@clinicavitalis',
    },
    hero: {
      titulo: 'Sua saúde merece atenção de verdade',
      texto: 'Equipe multidisciplinar, estrutura moderna e agendamento fácil pelo WhatsApp.',
      imagem: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80',
      cta1: 'Agendar consulta',
      cta2: 'Ver especialidades',
    },
    servicos: [
      { icon: '🫀', nome: 'Cardiologia', desc: 'Consultas, eletrocardiograma e teste ergométrico.', preco: 'consulta a partir de R$ 250' },
      { icon: '🦴', nome: 'Ortopedia', desc: 'Dores, lesões e acompanhamento pós-operatório.', preco: 'consulta a partir de R$ 260' },
      { icon: '🧠', nome: 'Psicologia & psiquiatria', desc: 'Acolhimento e tratamento com sigilo profissional.', preco: 'sessão a partir de R$ 180' },
      { icon: '🩸', nome: 'Exames laboratoriais', desc: 'Coleta no local, resultados digitais em 24h.', preco: 'convênios e particular' },
      { icon: '💉', nome: 'Vacinas', desc: 'Calendário completo para crianças e adultos.', preco: 'consulte' },
    ],
    sobre: {
      titulo: 'Time médico que escuta antes de prescrever',
      texto:
        'A Vitalis reúne profissionais com mais de 15 anos de experiência e um compromisso simples: ninguém é número aqui. Consultas de verdade, com tempo para conversar, e um acompanhamento que continua pelo WhatsApp após o atendimento.',
      numeros: [
        { valor: '15+', label: 'anos de cuidado' },
        { valor: '20', label: 'especialidades' },
        { valor: '98%', label: 'pacientes recomendam' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=700&q=80',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=700&q=80',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=700&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&q=80',
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Sr. Carlos, 68', origem: 'Google', texto: 'Fui bem atendido pela primeira vez na vida num consultório. Explicaram tudo com calma, sem pressa.' },
      { nome: 'Mariana P.', origem: 'WhatsApp', texto: 'O lembrete pelo WhatsApp salvou minha consulta. Atendimento pontual e equipe muito gentil.' },
      { nome: 'Roberto S.', origem: 'Google', texto: 'Exames rápidos e resultado no celular no dia seguinte. Amei a praticidade.' },
    ],
    faq: [
      { p: 'Atendem convênio?', r: 'Trabalhamos com os principais convênios e também com particular. Consulte a lista no WhatsApp.' },
      { p: 'Preciso de guia médica?', r: 'Para consultas de especialidade, a guia é exigida pelo convênio. No particular, não é necessária.' },
      { p: 'Como recebo meus exames?', r: 'Você recebe um link seguro no WhatsApp ou por e-mail, com laudo assinado digitalmente.' },
      { p: 'Tem estacionamento?', r: 'Sim, com convenção no estacionamento do edifício (1h grátis com carimbo).' },
    ],
    horarios: [
      { dia: 'Segunda a sexta', hora: '7h – 20h' },
      { dia: 'Sábado', hora: '8h – 13h' },
      { dia: 'Domingo', hora: 'Emergências por WhatsApp' },
    ],
  },

  {
    id: 'fitness',
    nome: 'Academia & Personal',
    emoji: '🏋️',
    temaSugerido: 'vibrante',
    sugestoes: {
      servicos: 'Planos & modalidades',
      sobre: 'Por que treinar aqui',
      galeria: 'Nossa estrutura',
      depoimentos: 'Alunos que mudaram de vida',
      faq: 'Perguntas frequentes',
      contato: 'Comece hoje',
    },
    negocio: {
      nome: 'Força Total',
      slogan: 'Treino sério, resultado real',
      headline: 'O seu melhor físico começa com um plano de verdade',
      subheadline:
        'Musculação, funcional e personal trainer com avaliação física gratuita. Matrícula com 50% OFF neste mês.',
      telefone: '(11) 3333-7777',
      whatsapp: '5511999990003',
      email: 'contato@forcaptotal.com.br',
      endereco: 'Rua do Esporte, 300 — Vila Olímpia',
      cidade: 'São Paulo — SP',
      instagram: '@forcaptotal',
    },
    hero: {
      titulo: 'O seu melhor físico começa com um plano de verdade',
      texto: 'Avaliação gratuita, treino personalizado e equipe que acompanha seu evolução semana a semana.',
      imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80',
      cta1: 'Quero matricular',
      cta2: 'Ver planos',
    },
    servicos: [
      { icon: '🏋️', nome: 'Musculação', desc: 'Equipamentos novos, área ampla e sem fila.', preco: 'plano mensal a partir de R$ 89' },
      { icon: '🤸', nome: 'Treino funcional', desc: 'HIIT, cross training e mobilidade em turmas.', preco: 'incluso no plano' },
      { icon: '🥊', nome: 'Boxe & artes', desc: 'Aulas coletivas para queimar caloria com adrenalina.', preco: 'plano a partir de R$ 119' },
      { icon: '🎯', nome: 'Personal trainer', desc: 'Treino exclusivo, 1 ou 2x por semana com professor.', preco: 'a partir de R$ 180/mês' },
      { icon: '📊', nome: 'Avaliação física', desc: 'Composição corporal e metas mensuradas.', preco: 'grátis na matrícula' },
    ],
    sobre: {
      titulo: 'Aqui ninguém treina no escuro',
      texto:
        'Todo aluno começa com avaliação física e um treino montado para a sua meta — ganhar massa, emagrecer ou só se sentir mais disposto. Depois disso, um professor acompanha sua evolução e ajusta o plano a cada quatro semanas. Sem enrolação, sem dieta maluca: método e constância.',
      numeros: [
        { valor: '1.200', label: 'alunos ativos' },
        { valor: '6x', label: 'por semana aberto' },
        { valor: '4,9★', label: 'no Google' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=700&q=80',
      'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=700&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80',
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=700&q=80',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Thiago M.', origem: 'Google', texto: 'Perdi 14 kg em 4 meses seguindo o treino do personal. O acompanhamento faz toda a diferença.' },
      { nome: 'Bruna C.', origem: 'Instagram', texto: 'Academia limpa, equipamento novo e professor que corrige o exercício. Melhor decisão do ano.' },
      { nome: 'Diego F.', origem: 'Google', texto: 'Sempre odiei academia. Aqui a turma motiva e em 1 semana já estava indo todo dia.' },
    ],
    faq: [
      { p: 'Tem fidelidade?', r: 'O plano mensal pode ser cancelado quando quiser. Anual sai mais em conta e vale pelo período.' },
      { p: 'Aula experimental é grátis?', r: 'Sim! Uma aula completa com avaliação, sem compromisso. É só marcar no WhatsApp.' },
      { p: 'Qual a horária de funcionamento?', r: 'De segunda a sábado, das 6h às 22h, e domingo das 8h às 14h.' },
      { p: 'Tem armários e estacionamento?', r: 'Sim, armários individuais com chave e estacionamento conveniado ao lado.' },
    ],
    horarios: [
      { dia: 'Segunda a sexta', hora: '6h – 22h' },
      { dia: 'Sábado', hora: '8h – 18h' },
      { dia: 'Domingo', hora: '8h – 14h' },
    ],
  },

  {
    id: 'juridico',
    nome: 'Advocacia & Contabilidade',
    emoji: '⚖️',
    temaSugerido: 'premium',
    sugestoes: {
      servicos: 'Áreas de atuação',
      sobre: 'O escritório',
      galeria: 'Nosso escritório',
      depoimentos: 'Clientes satisfeitos',
      faq: 'Dúvidas frequentes',
      contato: 'Fale com um especialista',
    },
    negocio: {
      nome: 'Almeida & Parceiros',
      slogan: 'Direito que protege o que você construiu',
      headline: 'Assessoria jurídica transparente, do primeiro contato à sentença',
      subheadline:
        'Empresas, famílias e contratos. Primeira consulta com análise do seu caso e honorários claros desde o início.',
      telefone: '(11) 3333-8888',
      whatsapp: '5511999990004',
      email: 'contato@almeidaparceiros.adv.br',
      endereco: 'Av. Paulista, 1000 — 14º andar',
      cidade: 'São Paulo — SP',
      instagram: '@almeidaparceiros',
    },
    hero: {
      titulo: 'Assessoria jurídica transparente, do primeiro contato à sentença',
      texto: 'Você entende cada etapa, cada prazo e cada custo. Sem surpresa, sem juridiquês.',
      imagem: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80',
      cta1: 'Analisar meu caso',
      cta2: 'Áreas de atuação',
    },
    servicos: [
      { icon: '🏢', nome: 'Direito empresarial', desc: 'Contratos, societário e conformidade da sua empresa.', preco: 'honorários sob medida' },
      { icon: '👨‍👩‍👧', nome: 'Direito de família', desc: 'Divórcio, pensão e guarda com discrição e cuidado.', preco: 'consulta inicial' },
      { icon: '🏠', nome: 'Imobiliário', desc: 'Locação, usucapião, regularização e reivindicação.', preco: 'sob orçamento' },
      { icon: '💼', nome: 'Trabalhista', desc: 'Defesa do empregador ou do trabalhador.', preco: 'análise gratuita' },
      { icon: '📑', nome: 'Contabilidade', desc: 'Abertura, regularização e obrigações da empresa.', preco: 'a partir de R$ 199/mês' },
    ],
    sobre: {
      titulo: '20 anos defendendo o que importa',
      texto:
        'O Almeida & Parceiros nasceu com uma ideia incômoda para o mercado: advogar sem mistério. Cada cliente recebe um plano com prazos, custos e probabilidades — por escrito. Somos 12 profissionais e atendemos todo o Brasil, presencialmente ou por videochamada.',
      numeros: [
        { valor: '20', label: 'anos de atuação' },
        { valor: '3.500+', label: 'casos conduzidos' },
        { valor: '97%', label: 'clientes recomendam' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&q=80',
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Empresa XPTO', origem: 'Google', texto: 'Resolveram um processo trabalhista em 3 meses. Relatório claro em cada etapa, como prometeram.' },
      { nome: 'L. Fernandes', origem: 'Indicação', texto: 'Divórcio conduzido com muita humanidade. Saí com tudo resolvido e sem brigas desnecessárias.' },
      { nome: 'Marcos V.', origem: 'WhatsApp', texto: 'A primeira consulta já valeu: entenderam meu caso e deram um plano com prazo e preço fechados.' },
    ],
    faq: [
      { p: 'A primeira consulta é paga?', r: 'A análise inicial do seu caso é gratuita. Os honorários só são definidos após você aprovar a proposta.' },
      { p: 'Atendem em todo o Brasil?', r: 'Sim. Atendemos por videochamada e temos rede de correspondentes nas capitais.' },
      { p: 'Como funciona o pagamento?', r: 'Pix, boleto e cartão; parcelamos honorários em até 12x conforme o caso.' },
      { p: 'Meu caso é sigiloso?', r: 'Sempre. Todo atendimento é amparado pelo sigilo profissional obrigatório da OAB.' },
    ],
    horarios: [
      { dia: 'Segunda a sexta', hora: '9h – 18h' },
      { dia: 'Sábado', hora: 'Atendimento remoto agendado' },
      { dia: 'Domingo', hora: 'Fechado' },
    ],
  },

  {
    id: 'fotografia',
    nome: 'Fotografia & Eventos',
    emoji: '📸',
    temaSugerido: 'minimalista',
    sugestoes: {
      servicos: 'Pacotes',
      sobre: 'Quem fotografa',
      galeria: 'Portfólio',
      depoimentos: 'Quem já fotografou',
      faq: 'Dúvidas antes do grande dia',
      contato: 'Solicitar orçamento',
    },
    negocio: {
      nome: 'Lume Fotografia',
      luz: true,
      slogan: 'Histórias em luz e imagem',
      headline: 'Fotos que fazem você voltar no tempo',
      subheadline:
        'Casamentos, eventos e ensaios com olhar autoral. Entrega em alta resolução, em até 30 dias.',
      telefone: '(11) 3333-9999',
      whatsapp: '5511999990005',
      email: 'ola@lumefotografia.com.br',
      endereco: 'Estúdio: Rua Harmonia, 88 — Pinheiros',
      cidade: 'São Paulo — SP',
      instagram: '@lumefotografia',
    },
    hero: {
      titulo: 'Fotos que fazem você voltar no tempo',
      texto: 'O instante passa uma vez. A gente captura e transforma em memória para a vida inteira.',
      imagem: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80',
      cta1: 'Ver portfólio',
      cta2: 'Pedir orçamento',
    },
    servicos: [
      { icon: '💍', nome: 'Casamentos', desc: 'Cerimônia e festa, 2 fotógrafos, álbum opcional.', preco: 'a partir de R$ 3.900' },
      { icon: '🎂', nome: 'Eventos & aniversários', desc: 'Cobertura completa com entrega digital.', preco: 'a partir de R$ 1.200' },
      { icon: '👶', nome: 'Gestante & newborn', desc: 'Ensaios delicados, no estúdio ou em casa.', preco: 'a partir de R$ 650' },
      { icon: '🏢', nome: 'Corporativo', desc: 'Equipes, produtos e eventos empresariais.', preco: 'a partir de R$ 900' },
      { icon: '🎞️', nome: 'Tratamento & álbum', desc: 'Correção de cor, backup e álbuns premium.', preco: 'sob orçamento' },
    ],
    sobre: {
      titulo: 'Olhar autoral com entrega profissional',
      texto:
        'Somos um estúdio pequeno de propósito: para cada cliente, atenção total. Fotografamos com luz natural sempre que possível e entregamos tudo em alta resolução, com galeria online e backup por 1 ano. Você assiste o making off antes mesmo do evento terminar.',
      numeros: [
        { valor: '400+', label: 'eventos registrados' },
        { valor: '30', label: 'dias de entrega' },
        { valor: '4,9★', label: 'no Google' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=700&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80',
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Ana & Lucas', origem: 'Google', texto: 'Choramos vendo o álbum. Ela capturou momentos que nem sabíamos que aconteceram. Incrível!' },
      { nome: 'Mariana S.', origem: 'Instagram', texto: 'Ensaio maravilhoso, entrega rápida e fotos tratadas com capricho. Já quero o próximo.' },
      { nome: 'Eventos Alpha', origem: 'Indicação', texto: 'Cobertura do nosso lançamento impecável, discreta e no prazo. Recomendo demais.' },
    ],
    faq: [
      { p: 'Qual o prazo de entrega?', r: 'Eventos e ensaios: até 30 dias. Casamentos com álbum: até 60 dias. Você recebe uma prévia antes.' },
      { p: 'Viaja para outras cidades?', r: 'Sim! Cobrimos todo o estado e viagens para o Brasil inteiro (com taxa de deslocamento).' },
      { p: 'Como funciona o pagamento?', r: '30% na reserva e o restante na entrega. Pix, cartão em até 6x ou boleto.' },
      { p: 'As fotos vêm editadas?', r: 'Todas as fotos escolhidas vêm com tratamento de cor e luz. Arquivo branco também sob consulta.' },
    ],
    horarios: [
      { dia: 'Segunda a sexta', hora: '10h – 19h (estúdio)' },
      { dia: 'Sábado', hora: 'Eventos (agendado)' },
      { dia: 'Domingo', hora: 'Eventos (agendado)' },
    ],
  },

  {
    id: 'oficina',
    nome: 'Oficina & Serviços Técnicos',
    emoji: '🔧',
    temaSugerido: 'essencial',
    sugestoes: {
      servicos: 'Serviços',
      sobre: 'Por que confiar na gente',
      galeria: 'Na prática',
      depoimentos: 'Clientes atendidos',
      faq: 'Dúvidas frequentes',
      contato: 'Falar com a oficina',
    },
    negocio: {
      nome: 'Oficina do Marcos',
      slogan: 'Serviço rápido, preço honesto',
      headline: 'Seu carro no formato certo, sem susto na conta',
      subheadline:
        'Revisão, freio, suspensão e elétrica com orçamento antes de começar. Garantia de 90 dias nos serviços.',
      telefone: '(11) 3333-1212',
      whatsapp: '5511999990006',
      email: 'servico@oficinadomarcos.com.br',
      endereco: 'Rua do Trabalho, 55 — Tatuapé',
      cidade: 'São Paulo — SP',
      instagram: '@oficinadomarcos',
    },
    hero: {
      titulo: 'Seu carro no formato certo, sem susto na conta',
      texto: 'Orçamento aprovado antes do serviço começar. Garantia de 90 dias e carro limpo na entrega.',
      imagem: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80',
      cta1: 'Orçamento pelo WhatsApp',
      cta2: 'Ver serviços',
    },
    servicos: [
      { icon: '🛠️', nome: 'Revisão completa', desc: 'Troca de óleo, filtros, fluidos e checklist de 40 itens.', preco: 'a partir de R$ 250' },
      { icon: '🛑', nome: 'Freios', desc: 'Pastilhas, discos, sangria e teste de desempenho.', preco: 'a partir de R$ 180' },
      { icon: '🪀', nome: 'Suspensão', desc: 'Amortecedores, bieletas e alinhamento de direção.', preco: 'a partir de R$ 320' },
      { icon: '⚡', nome: 'Elétrica automotiva', desc: 'Diagnóstico computadorizado, alternador e partida.', preco: 'diagnóstico R$ 90' },
      { icon: '❄️', nome: 'Ar-condicionado', desc: 'Recarga, higienização e troca de compressor.', preco: 'a partir de R$ 150' },
    ],
    sobre: {
      titulo: '18 anos consertando o que outros desistem',
      texto:
        'O Marcos começou na garagem de casa e hoje tem uma oficina com6 elevadores e diagnóstico por computador. A regra da casa é antiga e simples: nada começa sem orçamento aprovado e peça original ou de primeira linha. Por isso90% dos clientes voltam.',
      numeros: [
        { valor: '18', label: 'anos de oficina' },
        { valor: '90', label: 'dias de garantia' },
        { valor: '6', label: 'elevadores' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=700&q=80',
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=700&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=700&q=80',
      'https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?w=700&q=80',
      'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Jorge P.', origem: 'Google', texto: 'Orçamento na hora pelo WhatsApp e o serviço saiu no valor combinado. Raro encontrar essa honestidade.' },
      { nome: 'Patrícia L.', origem: 'Indicação', texto: 'Fui indicada e já virei cliente fixa. Freio barulhento resolvido em 1 hora.' },
      { nome: 'Empresa Log+', origem: 'Contrato', texto: 'Mantemos a frota inteira com eles há3 anos. Nunca atrasaram um prazo.' },
    ],
    faq: [
      { p: 'Preciso deixar o carro?', r: 'Sim, o serviço exige o veículo. Avisamos por WhatsApp assim que estiver pronto.' },
      { p: 'Dão garantia?', r: '90 dias ou 10.000 km no que for feito, com nota fiscal do serviço e das peças.' },
      { p: 'Fazem atendimento emergencial?', r: 'Chamado pelo WhatsApp em horário comercial e guincho parceiro24h sob consulta.' },
      { p: 'Aceitam parcelamento?', r: 'Sim: Pix, débito, crédito em até 6x e convênios de frota.' },
    ],
    horarios: [
      { dia: 'Segunda a sexta', hora: '8h – 18h' },
      { dia: 'Sábado', hora: '8h – 13h' },
      { dia: 'Domingo', hora: 'Fechado' },
    ],
  },

  {
    id: 'pet',
    nome: 'Pet Shop & Veterinária',
    emoji: '🐶',
    temaSugerido: 'essencial',
    sugestoes: {
      servicos: 'Serviços para o seu pet',
      sobre: 'Quem cuida do seu pet',
      galeria: 'A casa dos bichinhos',
      depoimentos: 'Tutores felizes',
      faq: 'Dúvidas frequentes',
      contato: 'Agende um horário',
    },
    negocio: {
      nome: 'Patas & Cia',
      slogan: 'Cuidado completo para quem é da família',
      headline: 'Seu pet merece quem entende de verdade',
      subheadline:
        'Banho e tosa, veterinário24h no plantão e ração com entrega em casa. Agende pelo WhatsApp.',
      telefone: '(11) 3333-3434',
      whatsapp: '5511999990007',
      email: 'contato@patasecia.com.br',
      endereco: 'Rua dos Animais, 210 — Santana',
      cidade: 'São Paulo — SP',
      instagram: '@patasecia',
    },
    hero: {
      titulo: 'Seu pet merece quem entende de verdade',
      texto: 'Banho, tosa, consultas e ração com entrega. Aqui seu pet é tratado como família.',
      imagem: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1400&q=80',
      cta1: 'Agendar banho',
      cta2: 'Ver serviços',
    },
    servicos: [
      { icon: '🛁', nome: 'Banho & tosa', desc: 'Hidratação, corte de unha e escovação incluídos.', preco: 'a partir de R$ 70' },
      { icon: '🩺', nome: 'Veterinário', desc: 'Consultas, vacinas e castração com preço fechado.', preco: 'consulta a partir de R$ 150' },
      { icon: '💊', nome: 'Farmácia & ração', desc: 'Medicamentos, ração seca e petiscos com desconto.', preco: 'vário / assinatura' },
      { icon: '🏨', nome: 'Hotelzinho', desc: 'Hospedagem com câmera e passeios diários.', preco: 'a partir de R$ 85/dia' },
      { icon: '🚗', nome: 'Leva e traz', desc: 'Busca do seu pet em casa no bairro.', preco: 'grátis acima de R$ 120' },
    ],
    sobre: {
      titulo: 'A família Patas & Cia',
      texto:
        'Somos uma casa de bairro com veterinário de confiança e equipe que conhece cada pet pelo nome. Trabalhamos com manejo low stress — sem grade, sem contenção desnecessária — e avisamos você por foto durante o banho. Porque a gente também tem pet em casa, sabemos como é deixar.',
      numeros: [
        { valor: '10', label: 'anos com os bichos' },
        { valor: '24h', label: 'plantão de urgência' },
        { valor: '4,9★', label: 'no Google' },
      ],
    },
    galeria: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80',
      'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=700&q=80',
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&q=80',
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=700&q=80',
    ],
    depoimentos: [
      { nome: 'Tâmara R.', origem: 'Google', texto: 'Mandaram foto do Thor durante o banho. Isso mostra que se importam. Voltamos sempre.' },
      { nome: 'Sérgio M.', origem: 'WhatsApp', texto: 'Plantão de madrugada salvou a Nina. Atendimento sério e preço justo.' },
      { nome: 'Larissa C.', origem: 'Instagram', texto: 'Assinei a ração mensal e me esqueci do problema. Chega antes de acabar!' },
    ],
    faq: [
      { p: 'Preciso agendar banho?', r: 'Sim, trabalhamos com horário marcado para não deixar seu pet esperando.' },
      { p: 'Quais vacinas são obrigatórias?', r: 'Antirrábica e v8/v10. Vale trazer a carteirinha na primeira consulta.' },
      { p: 'Vocês atendem emergência?', r: 'Plantão24h por WhatsApp para clientes da casa; para não clientes, indicamos o hospital parceiro.' },
      { p: 'Entregam ração?', r: 'Sim! Entrega grátis no bairro em pedidos acima de R$ 120.' },
    ],
    horarios: [
      { dia: 'Segunda a sexta', hora: '7h30 – 19h' },
      { dia: 'Sábado', hora: '8h – 17h' },
      { dia: 'Domingo', hora: '9h – 13h (só banho)' },
    ],
  },
]

export function segmentoPorId(id) {
  return SEGMENTOS.find((segmento) => segmento.id === id) ?? null
}
