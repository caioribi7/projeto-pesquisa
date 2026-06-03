const PERGUNTAS = {
  florestas: {
    nome: "Florestas",
    icone: "🌲",
    cor: "#2ECC71",
    perguntas: [
      {
        pergunta: "Em uma aula sobre florestas, qual é a maior floresta tropical do mundo?",
        alternativas: [
          "Floresta Amazônica",
          "Floresta do Congo",
          "Floresta de Bornéu",
          "Floresta da Indonésia"
        ],
        correta: 0,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "A Amazônia é a maior floresta tropical do mundo."
      },
      {
        pergunta: "Em uma aula sobre florestas, como podemos explicar desmatamento ilegal?",
        alternativas: [
          "Cortar árvores com licença",
          "Cortar árvores sem licença",
          "Plantar árvores na cidade",
          "Fogo que vem da natureza"
        ],
        correta: 1,
        dica: "Observe se a ação respeita regras e permissão das autoridades.",
        explicacao: "É cortar árvores sem permissão do governo."
      },
      {
        pergunta: "Em uma aula sobre florestas, quanto da Amazônia já foi desmatado?",
        alternativas: [
          "5%",
          "17%",
          "50%",
          "2%"
        ],
        correta: 1,
        dica: "Pense em perda de vegetação e em lugares muito ocupados por pessoas.",
        explicacao: "Quase 17% da Amazônia já foi desmatada."
      },
      {
        pergunta: "Em uma aula sobre florestas, qual bioma brasileiro é o mais ameaçado?",
        alternativas: [
          "Amazônia",
          "Cerrado",
          "Mata Atlântica",
          "Caatinga"
        ],
        correta: 2,
        dica: "Pense em perda de vegetação e em lugares muito ocupados por pessoas.",
        explicacao: "A Mata Atlântica perdeu quase toda sua mata."
      },
      {
        pergunta: "Em uma aula sobre florestas, como podemos explicar reflorestamento?",
        alternativas: [
          "Cortar muitas árvores",
          "Plantar árvores de novo",
          "Queimar a vegetação",
          "Extrair madeira legal"
        ],
        correta: 1,
        dica: "Procure a alternativa ligada a recuperar uma área com novas plantas.",
        explicacao: "É plantar árvores onde a mata foi cortada."
      },
      {
        pergunta: "Em uma aula sobre florestas, qual árvore é símbolo nacional do Brasil?",
        alternativas: [
          "Pau-Brasil",
          "Ipê",
          "Jequitibá",
          "Seringueira"
        ],
        correta: 0,
        dica: "Pense no que melhor protege florestas e melhora a vida dos seres vivos.",
        explicacao: "O Pau-Brasil é a árvore símbolo do Brasil."
      },
      {
        pergunta: "Em uma aula sobre florestas, como podemos explicar corredores ecológicos?",
        alternativas: [
          "Estradas dentro de florestas",
          "Áreas que ligam florestas",
          "Caminhos para parar fogo",
          "Trilhas para visitantes"
        ],
        correta: 1,
        dica: "Imagine caminhos seguros que conectam áreas naturais separadas.",
        explicacao: "Eles ligam partes da floresta para os animais."
      },
      {
        pergunta: "Em uma aula sobre florestas, como chamamos as árvores que perdem as folhas em certas épocas?",
        alternativas: [
          "Caducifólia",
          "Fotossíntese",
          "Transpiração",
          "Germinação"
        ],
        correta: 0,
        dica: "Lembre que algumas plantas mudam durante o ano para economizar energia e água.",
        explicacao: "É quando as árvores perdem suas folhas."
      },
      {
        pergunta: "Em uma aula sobre florestas, cerca de quantas árvores podem ser usadas para produzir 1 tonelada de papel?",
        alternativas: [
          "5-10 árvores",
          "2-3 árvores",
          "15-20 árvores",
          "1 árvore"
        ],
        correta: 2,
        dica: "Pense na matéria-prima usada para fabricar papel.",
        explicacao: "Precisa de 15 a 20 árvores para fazer papel."
      },
      {
        pergunta: "Em uma aula sobre florestas, O que mais causa incêndios nas florestas?",
        alternativas: [
          "Causado por raios",
          "Causado por pessoas",
          "Causado por vulcões",
          "Causado pelo calor"
        ],
        correta: 1,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "Pessoas causam a maioria dos incêndios florestais."
      }
    ]
  },
  oceanos: {
    nome: "Oceanos",
    icone: "🌊",
    cor: "#1ABC9C",
    perguntas: [
      {
        pergunta: "Ao estudar os oceanos, quanto da Terra é coberto por oceanos?",
        alternativas: [
          "50%",
          "71%",
          "80%",
          "60%"
        ],
        correta: 1,
        dica: "Compare água e terra no planeta: a água ocupa a maior parte.",
        explicacao: "Os oceanos cobrem 71% da superfície da Terra."
      },
      {
        pergunta: "Ao estudar os oceanos, como podemos explicar a mancha de lixo no Pacífico?",
        alternativas: [
          "Ilha de plástico boiando",
          "Plástico juntado no oceano",
          "Recife de corais artificial",
          "Algas crescendo no mar"
        ],
        correta: 1,
        dica: "Pense no material que demora muito para se decompor e aparece em rios e mares.",
        explicacao: "É muito plástico juntado no Oceano Pacífico."
      },
      {
        pergunta: "Ao estudar os oceanos, qual o maior animal do oceano?",
        alternativas: [
          "Tubarão-baleia",
          "Baleia-azul",
          "Polvo-gigante",
          "Lula-colossal"
        ],
        correta: 1,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "A baleia-azul é o maior animal do planeta."
      },
      {
        pergunta: "Ao estudar os oceanos, como podemos explicar branqueamento de corais?",
        alternativas: [
          "Morte natural dos corais",
          "Corais perdem a cor",
          "Poluição química nos corais",
          "Algas brancas no mar"
        ],
        correta: 1,
        dica: "Pense no efeito do aquecimento da água sobre seres vivos sensiveis.",
        explicacao: "Corais perdem a cor quando a água esquenta."
      },
      {
        pergunta: "Ao estudar os oceanos, quanto do oxigênio vem dos oceanos?",
        alternativas: [
          "30% do ar",
          "Mais da metade",
          "10% do ar",
          "70% do ar"
        ],
        correta: 1,
        dica: "Lembre que seres microscopicos tambem produzem oxigênio pela fotossintese.",
        explicacao: "O mar produz mais da metade do oxigênio."
      },
      {
        pergunta: "Ao estudar os oceanos, como podemos explicar a acidificação dos oceanos?",
        alternativas: [
          "Aquecer a água do mar",
          "Tornar o mar mais ácido",
          "Sujar o mar com ácidos",
          "Secar toda água do mar"
        ],
        correta: 1,
        dica: "Procure a ideia de mudança química causada por gases absorvidos pela água.",
        explicacao: "O mar fica ácido ao absorver CO₂ do ar."
      },
      {
        pergunta: "Ao estudar os oceanos, quanto tempo o plástico dura no mar?",
        alternativas: [
          "10 anos",
          "50 anos",
          "450 anos",
          "2 anos"
        ],
        correta: 2,
        dica: "Pense no que melhor protege oceanos e melhora a vida dos seres vivos.",
        explicacao: "O plástico pode ficar 450 anos no mar."
      },
      {
        pergunta: "Ao estudar os oceanos, qual oceano é o maior do mundo?",
        alternativas: [
          "Atlântico",
          "Índico",
          "Pacífico",
          "Ártico"
        ],
        correta: 2,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "O Oceano Pacífico é o maior de todos."
      },
      {
        pergunta: "Ao estudar os oceanos, como podemos explicar manguezais?",
        alternativas: [
          "Mata que cresce em água doce",
          "Mata na beira do mar salgado",
          "Recife artificial de pessoas",
          "Duna de areia na praia"
        ],
        correta: 1,
        dica: "Pense em áreas entre rio e mar, com água salgada ou salobra.",
        explicacao: "São matas na beira do mar salgado."
      },
      {
        pergunta: "Ao estudar os oceanos, qual poluente marinho mais prejudicial?",
        alternativas: [
          "Areia",
          "Plástico",
          "Conchas",
          "Sal"
        ],
        correta: 1,
        dica: "Pense no material que demora muito para se decompor e aparece em rios e mares.",
        explicacao: "O plástico é o pior poluente do mar."
      }
    ]
  },
  clima: {
    nome: "Clima",
    icone: "🌡️",
    cor: "#E74C3C",
    perguntas: [
      {
        pergunta: "Pensando no clima da Terra, como podemos explicar efeito estufa?",
        alternativas: [
          "Furar a camada de ozônio",
          "Calor preso na atmosfera",
          "Sujar o solo com veneno",
          "Esquentar a água do mar"
        ],
        correta: 1,
        dica: "Pense em uma camada que segura calor; o problema e o excesso.",
        explicacao: "Efeito estufa prende o calor na atmosfera."
      },
      {
        pergunta: "Pensando no clima da Terra, qual gás mais esquenta o planeta?",
        alternativas: [
          "Oxigênio (O₂)",
          "Gás Carbônico (CO₂)",
          "Nitrogênio (N₂)",
          "Hidrogênio (H₂)"
        ],
        correta: 1,
        dica: "Observe qual opcao fala de gases liberados por atividades humanas.",
        explicacao: "CO₂ é o gás que mais aquece a Terra."
      },
      {
        pergunta: "Pensando no clima da Terra, como podemos explicar o aquecimento global?",
        alternativas: [
          "Terra mais quente naturalmente",
          "Terra mais quente por pessoas",
          "Clima mudando naturalmente",
          "Mar mais quente que antes"
        ],
        correta: 1,
        dica: "Procure a alternativa que relaciona aumento de temperatura e acoes humanas.",
        explicacao: "É a Terra ficando mais quente por poluição."
      },
      {
        pergunta: "Pensando no clima da Terra, qual a diferença entre tempo e clima?",
        alternativas: [
          "São a mesma coisa",
          "Tempo é hoje; clima são anos",
          "Clima é hoje; tempo são anos",
          "Tempo do mundo; clima local"
        ],
        correta: 1,
        dica: "Tempo muda no dia a dia; clima e observado por muitos anos.",
        explicacao: "Tempo é hoje. Clima são muitos anos."
      },
      {
        pergunta: "Pensando no clima da Terra, como podemos explicar energias renováveis?",
        alternativas: [
          "Sujam a natureza",
          "Nunca acabam na natureza",
          "Acabam rapidinho",
          "Vêm do petróleo"
        ],
        correta: 1,
        dica: "Pense em fontes que a natureza repoe continuamente.",
        explicacao: "Vêm da natureza e nunca se acabam."
      },
      {
        pergunta: "Pensando no clima da Terra, qual atividade humana mais aumenta o aquecimento do planeta?",
        alternativas: [
          "Cultivar alimentos naturais",
          "Queimar gasolina e carvão",
          "Reciclar latas e papéis",
          "Plantar mudas de árvores"
        ],
        correta: 1,
        dica: "Observe qual opcao fala de gases liberados por atividades humanas.",
        explicacao: "Queimar gasolina e carvão aquece o planeta."
      },
      {
        pergunta: "Pensando no clima da Terra, como podemos explicar a pegada de carbono?",
        alternativas: [
          "Marca de pé no chão",
          "Gases que produzimos",
          "Carbono que tem no solo",
          "Fumaça que vemos no ar"
        ],
        correta: 1,
        dica: "Observe qual opcao fala de gases liberados por atividades humanas.",
        explicacao: "São os gases que jogamos na atmosfera."
      },
      {
        pergunta: "Pensando no clima da Terra, qual acordo mundial ajuda o clima?",
        alternativas: [
          "Tratado de Tordesilhas",
          "Acordo de Paris",
          "Protocolo de Kyoto",
          "Carta da ONU"
        ],
        correta: 1,
        dica: "Procure o acordo internacional ligado a metas climaticas atuais.",
        explicacao: "Acordo de Paris é para salvar o clima."
      },
      {
        pergunta: "Pensando no clima da Terra, como podemos explicar neutralidade de carbono?",
        alternativas: [
          "Soltar mais gás que o normal",
          "Soltar e tirar o mesmo tanto",
          "Não soltar gás nenhum",
          "Só usar carvão de madeira"
        ],
        correta: 1,
        dica: "Observe qual opcao fala de gases liberados por atividades humanas.",
        explicacao: "É soltar e tirar a mesma quantidade."
      },
      {
        pergunta: "Pensando no clima da Terra, quanto a Terra já esquentou desde 1800?",
        alternativas: [
          "0,5°C",
          "Cerca de 1,1°C",
          "5°C",
          "10°C"
        ],
        correta: 1,
        dica: "Pense no que melhor protege clima e melhora a vida dos seres vivos.",
        explicacao: "A Terra já esquentou cerca de 1,1°C."
      }
    ]
  },
  reciclagem: {
    nome: "Reciclagem",
    icone: "♻️",
    cor: "#F39C12",
    perguntas: [
      {
        pergunta: "Na oficina de reciclagem da escola, O que significam os 3 Rs?",
        alternativas: [
          "Rezar, Repetir, Renovar",
          "Reduzir, Reutilizar, Reciclar",
          "Recortar, Remendar, Refazer",
          "Repensar, Reprovar, Recomeçar"
        ],
        correta: 1,
        dica: "Pense em transformar materiais usados em novos produtos.",
        explicacao: "São Reduzir, Reutilizar e Reciclar."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, quanto tempo uma lata de alumínio dura?",
        alternativas: [
          "1 ano",
          "5 anos",
          "Mais de 100 anos",
          "200 anos"
        ],
        correta: 2,
        dica: "Pense no que melhor protege reciclagem e melhora a vida dos seres vivos.",
        explicacao: "Latas de alumínio duram mais de 100 anos."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, qual material é mais reciclado no mundo?",
        alternativas: [
          "Plástico",
          "Vidro",
          "Papel",
          "Alumínio"
        ],
        correta: 2,
        dica: "Pense na matéria-prima usada para fabricar papel.",
        explicacao: "O papel é o material mais reciclado."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, qual a cor da lixeira para plástico?",
        alternativas: [
          "Azul",
          "Vermelho",
          "Verde",
          "Amarelo"
        ],
        correta: 1,
        dica: "Pense no que melhor protege reciclagem e melhora a vida dos seres vivos.",
        explicacao: "Vermelho é a cor do plástico na coleta seletiva."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, como podemos explicar compostagem?",
        alternativas: [
          "Reciclar plásticos",
          "Transformar lixo em adubo",
          "Queimar o lixo",
          "Enterrar os resíduos"
        ],
        correta: 1,
        dica: "Pense no material que demora muito para se decompor e aparece em rios e mares.",
        explicacao: "Compostagem vira lixo orgânico em adubo."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, quantas vezes o vidro pode voltar para a reciclagem?",
        alternativas: [
          "5 vezes",
          "10 vezes",
          "Infinitas vezes",
          "3 vezes"
        ],
        correta: 2,
        dica: "Pense no que melhor protege reciclagem e melhora a vida dos seres vivos.",
        explicacao: "O vidro pode ser reciclado para sempre."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, como podemos explicar upcycling?",
        alternativas: [
          "Reciclagem comum",
          "Criar algo melhor com lixo",
          "Jogar lixo no lixo",
          "Queimar lixo para energia"
        ],
        correta: 1,
        dica: "Pense no que melhor protege reciclagem e melhora a vida dos seres vivos.",
        explicacao: "É fazer algo melhor com materiais velhos."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, qual país recicla mais no mundo?",
        alternativas: [
          "Brasil",
          "EUA",
          "Alemanhã",
          "Japão"
        ],
        correta: 2,
        dica: "Pense em transformar materiais usados em novos produtos.",
        explicacao: "A Alemanhã é líder mundial em reciclagem."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, como podemos explicar resíduos eletrônicos?",
        alternativas: [
          "Lixo da internet",
          "Aparelhos usados descartados",
          "Cabos de energia",
          "Só pilhas e baterias"
        ],
        correta: 1,
        dica: "Pense no material que demora muito para se decompor e aparece em rios e mares.",
        explicacao: "São aparelhos elétricos que viram lixo."
      },
      {
        pergunta: "Na oficina de reciclagem da escola, Onde jogar pilhas e baterias?",
        alternativas: [
          "Lixo comum",
          "Pontos de coleta",
          "Pia da cozinha",
          "Lixeira azul"
        ],
        correta: 1,
        dica: "Pense no que melhor protege reciclagem e melhora a vida dos seres vivos.",
        explicacao: "Pilhas têm veneno e vão em coleta especial."
      }
    ]
  },
  água: {
    nome: "Água",
    icone: "💧",
    cor: "#3498DB",
    perguntas: [
      {
        pergunta: "Ao investigar o uso da água, Quanta água doce temos para beber?",
        alternativas: [
          "10%",
          "Menos de 1%",
          "5%",
          "25%"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "Menos de 1% da água é doce e acessível."
      },
      {
        pergunta: "Ao investigar o uso da água, como podemos explicar o ciclo da água?",
        alternativas: [
          "Tratamento da água",
          "Água andando na natureza",
          "Movimento das ondas",
          "Água nos canos"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "É a água circulando entre Terra e céu."
      },
      {
        pergunta: "Ao investigar o uso da água, cerca de quantos litros uma pessoa pode gastar por dia?",
        alternativas: [
          "50 litros",
          "Cerca de 150 litros",
          "500 litros",
          "20 litros"
        ],
        correta: 1,
        dica: "Observe qual opcao fala de gases liberados por atividades humanas.",
        explicacao: "Cada pessoa gasta cerca de 150 litros por dia."
      },
      {
        pergunta: "Ao investigar o uso da água, como podemos explicar uma bacia hidrográfica?",
        alternativas: [
          "Tanque de água",
          "Área que leva água ao rio",
          "Represa artificial",
          "Região alagada"
        ],
        correta: 1,
        dica: "Pense no que melhor protege água e melhora a vida dos seres vivos.",
        explicacao: "É onde a chuva escorre para um rio."
      },
      {
        pergunta: "Ao investigar o uso da água, qual doença vem da água suja?",
        alternativas: [
          "Gripe",
          "Cólera",
          "Diabetes",
          "Asma"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "Cólera é doença de água contaminada."
      },
      {
        pergunta: "Ao investigar o uso da água, como podemos explicar o lençol freático?",
        alternativas: [
          "Rio na superfície",
          "Água guardada no subsolo",
          "Lago artificial",
          "Gelo das montanhas"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "É a água que fica debaixo da terra."
      },
      {
        pergunta: "Ao investigar o uso da água, como economizar água no banho?",
        alternativas: [
          "Banho de 5 minutos",
          "Banho de 20 minutos",
          "Encher a banheira",
          "Ligar dois chuveiros"
        ],
        correta: 0,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "Banho de 5 minutos economiza muita água."
      },
      {
        pergunta: "Ao investigar o uso da água, como podemos explicar a água virtual?",
        alternativas: [
          "Água da chuva",
          "Água gasta para fazer coisas",
          "Água destilada",
          "Água mineral"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "É a água usada para produzir alimentos."
      },
      {
        pergunta: "Ao investigar o uso da água, cerca de quantos litros podem ser usados para produzir 1 kg de carne?",
        alternativas: [
          "100 litros",
          "1.000 litros",
          "15.000 litros",
          "50 litros"
        ],
        correta: 2,
        dica: "Pense no que melhor protege água e melhora a vida dos seres vivos.",
        explicacao: "Precisa de 15.000 litros para fazer 1kg de carne."
      },
      {
        pergunta: "Ao investigar o uso da água, como podemos explicar dessalinização?",
        alternativas: [
          "Sujar a água doce",
          "Tirar o sal da água do mar",
          "Evaporação natural",
          "Tratar o esgoto"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "Tira o sal do mar para virar água potável."
      }
    ]
  },
  energia: {
    nome: "Energia",
    icone: "⚡",
    cor: "#F1C40F",
    perguntas: [
      {
        pergunta: "Pensando nas fontes de energia, qual a principal fonte de energia no Brasil?",
        alternativas: [
          "Carvão mineral",
          "Petróleo",
          "Hidrelétrica",
          "Nuclear"
        ],
        correta: 2,
        dica: "Compare fontes que poluem muito com fontes mais limpas.",
        explicacao: "O Brasil usa mais energia das hidrelétricas."
      },
      {
        pergunta: "Pensando nas fontes de energia, como podemos explicar energia solar?",
        alternativas: [
          "Energia do vento",
          "Luz do sol virada em energia",
          "Energia das marés",
          "Energia nuclear"
        ],
        correta: 1,
        dica: "Compare fontes que poluem muito com fontes mais limpas.",
        explicacao: "Energia solar vem da luz do sol."
      },
      {
        pergunta: "Pensando nas fontes de energia, qual a vantagem da energia eólica?",
        alternativas: [
          "Polui o ar",
          "É limpa e não polui",
          "É muito cara",
          "Ocupa pouco espaço"
        ],
        correta: 1,
        dica: "Compare fontes que poluem muito com fontes mais limpas.",
        explicacao: "Energia eólica é limpa e não polui."
      },
      {
        pergunta: "Pensando nas fontes de energia, como podemos explicar biomassa?",
        alternativas: [
          "Energia do vento",
          "Energia de restos de plantas",
          "Energia nuclear",
          "Energia solar"
        ],
        correta: 1,
        dica: "Compare fontes que poluem muito com fontes mais limpas.",
        explicacao: "Biomassa usa restos de plantas para energia."
      },
      {
        pergunta: "Pensando nas fontes de energia, qual país mais investe em energia solar?",
        alternativas: [
          "Brasil",
          "Alemanhã",
          "China",
          "Austrália"
        ],
        correta: 2,
        dica: "Compare fontes que poluem muito com fontes mais limpas.",
        explicacao: "A China é quem mais investe em energia solar."
      },
      {
        pergunta: "Pensando nas fontes de energia, como podemos explicar combustíveis fósseis?",
        alternativas: [
          "Energia do sol",
          "Restos antigos viram combustível",
          "Biocombustíveis",
          "Energia da água"
        ],
        correta: 1,
        dica: "Pense no que melhor protege energia e melhora a vida dos seres vivos.",
        explicacao: "Petróleo e carvão são combustíveis fósseis."
      },
      {
        pergunta: "Pensando nas fontes de energia, como podemos explicar eficiência energética?",
        alternativas: [
          "Usar mais energia",
          "Gastar menos energia",
          "Desligar tudo",
          "Usar energia nuclear"
        ],
        correta: 1,
        dica: "Compare fontes que poluem muito com fontes mais limpas.",
        explicacao: "É fazer a mesma coisa com menos energia."
      },
      {
        pergunta: "Pensando nas fontes de energia, qual a maior usina hidrelétrica do Brasil?",
        alternativas: [
          "Tucuruí",
          "Itaipu",
          "Belo Monte",
          "Sobradinho"
        ],
        correta: 1,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "Itaipu é a maior hidrelétrica do Brasil."
      },
      {
        pergunta: "Pensando nas fontes de energia, como podemos explicar energia geotérmica?",
        alternativas: [
          "Energia do sol",
          "Calor da Terra vira energia",
          "Energia das ondas",
          "Energia nuclear"
        ],
        correta: 1,
        dica: "Compare fontes que poluem muito com fontes mais limpas.",
        explicacao: "Usa o calor de dentro da Terra."
      },
      {
        pergunta: "Pensando nas fontes de energia, como podemos explicar ilha de calor nas cidades?",
        alternativas: [
          "Cidade mais fria que o campo",
          "Cidade mais quente que o campo",
          "Praias artificiais",
          "Só aquecimento global"
        ],
        correta: 1,
        dica: "Pense em solucoes que melhoram a vida das pessoas e reduzem impactos ambientais.",
        explicacao: "Cidades são mais quentes que o campo."
      }
    ]
  },
  biodiversidade: {
    nome: "Biodiversidade",
    icone: "🧬",
    cor: "#9B59B6",
    perguntas: [
      {
        pergunta: "Ao observar a biodiversidade, O que significa biodiversidade?",
        alternativas: [
          "Só variedade de animais",
          "Toda forma de vida na Terra",
          "Só quantidade de plantas",
          "Só tamanho das florestas"
        ],
        correta: 1,
        dica: "Pense na variedade de seres vivos em um ambiente.",
        explicacao: "É a variedade de vida no planeta."
      },
      {
        pergunta: "Ao observar a biodiversidade, qual país tem a maior biodiversidade?",
        alternativas: [
          "Estados Unidos",
          "Brasil",
          "Índia",
          "Austrália"
        ],
        correta: 1,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "O Brasil tem a maior biodiversidade do mundo."
      },
      {
        pergunta: "Ao observar a biodiversidade, como podemos explicar uma espécie endêmica?",
        alternativas: [
          "Espécie do mundo todo",
          "Espécie que só existe num lugar",
          "Espécie invasora",
          "Espécie extinta"
        ],
        correta: 1,
        dica: "Pense no que melhor protege biodiversidade e melhora a vida dos seres vivos.",
        explicacao: "Só existe em uma região específica."
      },
      {
        pergunta: "Ao observar a biodiversidade, Quantas espécies existem no planeta?",
        alternativas: [
          "1 milhão",
          "8,7 milhões",
          "100 mil",
          "500 milhões"
        ],
        correta: 1,
        dica: "Pense no que melhor protege biodiversidade e melhora a vida dos seres vivos.",
        explicacao: "Estima-se 8,7 milhões de espécies no planeta."
      },
      {
        pergunta: "Ao observar a biodiversidade, como podemos explicar extinção de espécies?",
        alternativas: [
          "Bichos mudando de lugar",
          "Espécie que desaparece para sempre",
          "Diminuição de bichos",
          "Mudança de habitat"
        ],
        correta: 1,
        dica: "Pense no que melhor protege biodiversidade e melhora a vida dos seres vivos.",
        explicacao: "É quando uma espécie some para sempre."
      },
      {
        pergunta: "Ao observar a biodiversidade, como podemos explicar espécies invasoras?",
        alternativas: [
          "Espécies da região",
          "Espécies que chegam e prejudicam",
          "Animais que migram",
          "Plantas de jardim"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "São bichos ou plantas que invadem outro lugar."
      },
      {
        pergunta: "Ao observar a biodiversidade, qual bioma brasileiro tem mais espécies?",
        alternativas: [
          "Cerrado",
          "Mata Atlântica",
          "Amazônia",
          "Pantanal"
        ],
        correta: 2,
        dica: "Pense no que melhor protege biodiversidade e melhora a vida dos seres vivos.",
        explicacao: "A Amazônia tem mais espécies que qualquer bioma."
      },
      {
        pergunta: "Ao observar a biodiversidade, como podemos explicar seleção natural?",
        alternativas: [
          "Pessoas escolhem espécies",
          "Os mais fortes sobrevivem",
          "Criação de novas espécies",
          "Morte de todas espécies"
        ],
        correta: 1,
        dica: "Pense no que melhor protege biodiversidade e melhora a vida dos seres vivos.",
        explicacao: "Os seres mais adaptados sobrevivem na natureza."
      },
      {
        pergunta: "Ao observar a biodiversidade, cerca de quantas abelhas podem ajudar a polinizar 1 hectare?",
        alternativas: [
          "10 abelhas",
          "100 abelhas",
          "Milhares de abelhas",
          "1 milhão de abelhas"
        ],
        correta: 2,
        dica: "Pense no que melhor protege biodiversidade e melhora a vida dos seres vivos.",
        explicacao: "Milhares de abelhas são necessárias para polinizar."
      },
      {
        pergunta: "Ao observar a biodiversidade, como podemos explicar a Lista Vermelha da IUCN?",
        alternativas: [
          "Lista de espécies extintas",
          "Lista de espécies em perigo",
          "Guia de espécies invasoras",
          "Lista de bichos de estimação"
        ],
        correta: 1,
        dica: "Pense no que melhor protege biodiversidade e melhora a vida dos seres vivos.",
        explicacao: "Mostra quais espécies correm risco de sumir."
      }
    ]
  },
  poluição: {
    nome: "Poluição",
    icone: "💨",
    cor: "#95A5A6",
    perguntas: [
      {
        pergunta: "Ao analisar a poluição no ambiente, como podemos explicar poluição do ar?",
        alternativas: [
          "Só fumaça de carros",
          "Sujeira no ar que respiramos",
          "Nuvens escuras",
          "Vento bem forte"
        ],
        correta: 1,
        dica: "Procure a opcao que mostra sujeira ou contaminação prejudicando seres vivos.",
        explicacao: "É sujeira no ar que faz mal à saúde."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, qual cidade brasileira tem o ar mais poluído?",
        alternativas: [
          "São Paulo",
          "Rio de Janeiro",
          "Manaus",
          "Belo Horizonte"
        ],
        correta: 0,
        dica: "Pense em solucoes que melhoram a vida das pessoas e reduzem impactos ambientais.",
        explicacao: "São Paulo tem o ar mais poluído do Brasil."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, como podemos explicar chuva ácida?",
        alternativas: [
          "Chuva normal e limpa",
          "Chuva com poluição ácida",
          "Chuva de granizo",
          "Chuva radioativa"
        ],
        correta: 1,
        dica: "Procure a opcao que mostra sujeira ou contaminação prejudicando seres vivos.",
        explicacao: "Chuva ácida tem poluição que forma ácidos."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, qual a maior fonte de poluição do mar?",
        alternativas: [
          "Navios",
          "Atividades em terra",
          "Turismo",
          "Pesca"
        ],
        correta: 1,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "80% da poluição do mar vem de terra."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, como podemos explicar microplásticos?",
        alternativas: [
          "Plástico reciclável",
          "Pedaços de plástico bem pequenos",
          "Plástico que se desfaz",
          "Sacos e garrafas plásticas"
        ],
        correta: 1,
        dica: "Pense no que melhor protege poluição e melhora a vida dos seres vivos.",
        explicacao: "São pedacinhos de plástico menores que 5mm."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, como podemos explicar poluição do solo?",
        alternativas: [
          "Só lixo no chão",
          "Veneno e lixo no solo",
          "Erosão natural",
          "Terra bem dura"
        ],
        correta: 1,
        dica: "Pense no material que demora muito para se decompor e aparece em rios e mares.",
        explicacao: "É sujeira química e lixo no chão."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, como podemos explicar poluição sonora?",
        alternativas: [
          "Som da natureza",
          "Barulho demais das pessoas",
          "Música alta em festas",
          "Som dos animais"
        ],
        correta: 1,
        dica: "Procure a opcao que mostra sujeira ou contaminação prejudicando seres vivos.",
        explicacao: "É muito barulho que faz mal à saúde."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, qual metal tóxico existe em pilhas?",
        alternativas: [
          "Ferro",
          "Cádmio",
          "Alumínio",
          "Cobre"
        ],
        correta: 1,
        dica: "Pense no que melhor protege poluição e melhora a vida dos seres vivos.",
        explicacao: "Cádmio é um metal tóxico em pilhas."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, como podemos explicar esgoto não tratado?",
        alternativas: [
          "Água limpa",
          "Sujeira líquida sem tratamento",
          "Água da chuva",
          "Água mineral"
        ],
        correta: 1,
        dica: "Pense no que melhor protege poluição e melhora a vida dos seres vivos.",
        explicacao: "É esgoto jogado nos rios sem tratamento."
      },
      {
        pergunta: "Ao analisar a poluição no ambiente, Quantas pessoas morrem por poluição do ar?",
        alternativas: [
          "1.000",
          "100.000",
          "7 milhões",
          "1 bilhão"
        ],
        correta: 2,
        dica: "Procure a opcao que mostra sujeira ou contaminação prejudicando seres vivos.",
        explicacao: "7 milhões de pessoas morrem por ar poluído."
      }
    ]
  },
  sustentabilidade: {
    nome: "Sustentabilidade",
    icone: "🌍",
    cor: "#27AE60",
    perguntas: [
      {
        pergunta: "Pensando em atitudes sustentáveis, como podemos explicar desenvolvimento sustentável?",
        alternativas: [
          "Crescer sem se importar",
          "Cuidar do hoje sem destruir o amanhã",
          "Parar o desenvolvimento",
          "Só proteger as florestas"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "É crescer sem destruir o futuro."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, quais são os três pilares da sustentabilidade?",
        alternativas: [
          "Social, Cultural, Político",
          "Ambiental, Social, Econômico",
          "Saúde, Educação, Lazer",
          "Tecnologia, Inovação, Ciência"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "São ambiental, social e econômico."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, como podemos explicar consumo consciente?",
        alternativas: [
          "Comprar sem pensar",
          "Escolher sem prejudicar o planeta",
          "Comprar só marcas caras",
          "Comprar tudo que vê"
        ],
        correta: 1,
        dica: "Pense no que melhor protege sustentabilidade e melhora a vida dos seres vivos.",
        explicacao: "É comprar pensando no meio ambiente."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, como podemos explicar a Agenda 2030 da ONU?",
        alternativas: [
          "Calendário de eventos",
          "Plano com 17 metas para o mundo",
          "Agenda de reuniões",
          "Plano de reciclagem"
        ],
        correta: 1,
        dica: "Pense no que melhor protege sustentabilidade e melhora a vida dos seres vivos.",
        explicacao: "São 17 metas para um futuro melhor."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, como podemos explicar agricultura sustentável?",
        alternativas: [
          "Usar muito veneno",
          "Plantar sem destruir a natureza",
          "Plantar em larga escala",
          "Plantar só uma coisa"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "É produzir alimentos cuidando da natureza."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, como podemos explicar uma cidade sustentável?",
        alternativas: [
          "Cidade com muitos carros",
          "Cidade boa para viver e para o planeta",
          "Cidade sem indústrias",
          "Cidade com prédios enormes"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "Une qualidade de vida e cuidado ambiental."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, como podemos explicar economia circular?",
        alternativas: [
          "Economia comum",
          "Reutilizar tudo sem gerar lixo",
          "Economia do petróleo",
          "Só reciclar"
        ],
        correta: 1,
        dica: "Pense no que melhor protege sustentabilidade e melhora a vida dos seres vivos.",
        explicacao: "É usar coisas de novo sem desperdiçar."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, como podemos explicar certificação ambiental?",
        alternativas: [
          "Multa ambiental",
          "Selo de produto sustentável",
          "Licença para poluir",
          "Registro de área verde"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "Selo que mostra que algo é sustentável."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, qual o objetivo do ODS 13?",
        alternativas: [
          "Acabar com a pobreza",
          "Combater a mudança do clima",
          "Educação de qualidade",
          "Vida na água"
        ],
        correta: 1,
        dica: "Pense no que melhor protege sustentabilidade e melhora a vida dos seres vivos.",
        explicacao: "ODS 13 é para combater as mudanças climáticas."
      },
      {
        pergunta: "Pensando em atitudes sustentáveis, O que significa ESG?",
        alternativas: [
          "Empresa Sem Gerenciamento",
          "Ambiental, Social e Governança",
          "Economia Sustentável Global",
          "Energia Solar Garantida"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "São regras para empresas sustentáveis."
      }
    ]
  },
  fauna: {
    nome: "Animais em Extinção",
    icone: "🦏",
    cor: "#E67E22",
    perguntas: [
      {
        pergunta: "Ao estudar animais ameaçados, Quantas espécies estão ameaçadas hoje?",
        alternativas: [
          "1.000",
          "10.000",
          "Mais de 40.000",
          "100.000"
        ],
        correta: 2,
        dica: "Pense no que melhor protege animais em extinção e melhora a vida dos seres vivos.",
        explicacao: "Mais de 40.000 espécies estão em perigo."
      },
      {
        pergunta: "Ao estudar animais ameaçados, qual animal brasileiro luta contra a extinção?",
        alternativas: [
          "Arara-azul",
          "Tatu-bola",
          "Mico-leão-dourado",
          "Lobo-guará"
        ],
        correta: 2,
        dica: "Compare tamanho, habitat e risco de desaparecer.",
        explicacao: "Mico-leão-dourado é símbolo da conservação."
      },
      {
        pergunta: "Ao estudar animais ameaçados, como podemos explicar a IUCN?",
        alternativas: [
          "Instituto de Urbanismo",
          "União de Conservação da Natureza",
          "Organização dos Animais",
          "Fundo Ambiental Global"
        ],
        correta: 1,
        dica: "Pense no que melhor protege animais em extinção e melhora a vida dos seres vivos.",
        explicacao: "Protege a natureza e as espécies ameaçadas."
      },
      {
        pergunta: "Ao estudar animais ameaçados, qual a maior causa de extinção hoje?",
        alternativas: [
          "Caça de animais",
          "Perda do lar dos bichos",
          "Mudanças naturais",
          "Barulho demais"
        ],
        correta: 1,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "Bichos perdem suas casas pelas ações humanas."
      },
      {
        pergunta: "Ao estudar animais ameaçados, como podemos explicar uma espécie criticamente ameaçada?",
        alternativas: [
          "Espécie sem nenhum risco",
          "Espécie com risco muito alto",
          "Espécie já extinta",
          "Espécie se recuperando"
        ],
        correta: 1,
        dica: "Pense no que melhor protege animais em extinção e melhora a vida dos seres vivos.",
        explicacao: "Tem risco muito grande de desaparecer."
      },
      {
        pergunta: "Ao estudar animais ameaçados, qual animal está ameaçado na Mata Atlântica?",
        alternativas: [
          "Capivara",
          "Tamanduá-bandeira",
          "Muriqui-do-norte",
          "Tucano"
        ],
        correta: 2,
        dica: "Compare tamanho, habitat e risco de desaparecer.",
        explicacao: "Muriqui-do-norte é um dos primatas mais ameaçados."
      },
      {
        pergunta: "Ao estudar animais ameaçados, como podemos explicar a CITES?",
        alternativas: [
          "Controle do comércio de espécies",
          "Lei brasileira de animais",
          "Conferência de energia",
          "Acordo do clima"
        ],
        correta: 0,
        dica: "Pense no que melhor protege animais em extinção e melhora a vida dos seres vivos.",
        explicacao: "Regula o comércio de espécies ameaçadas."
      },
      {
        pergunta: "Ao estudar animais ameaçados, cerca de quantas onças-pintadas existem na Amazônia?",
        alternativas: [
          "Mais de 10.000",
          "Menos de 500",
          "Cerca de 2.000",
          "100.000"
        ],
        correta: 0,
        dica: "Pense no que melhor protege animais em extinção e melhora a vida dos seres vivos.",
        explicacao: "Existem mais de 10.000 onças na Amazônia."
      },
      {
        pergunta: "Ao estudar animais ameaçados, como podemos explicar extinção em massa?",
        alternativas: [
          "Evento natural e raro",
          "Muitas espécies somem de uma vez",
          "Bichos migrando",
          "Nova espécie surgindo"
        ],
        correta: 1,
        dica: "Pense no que melhor protege animais em extinção e melhora a vida dos seres vivos.",
        explicacao: "Muitas espécies desaparecem ao mesmo tempo."
      },
      {
        pergunta: "Ao estudar animais ameaçados, qual bioma brasileiro perdeu mais espécies?",
        alternativas: [
          "Amazônia",
          "Mata Atlântica",
          "Cerrado",
          "Pantanal"
        ],
        correta: 1,
        dica: "Pense em perda de vegetação e em lugares muito ocupados por pessoas.",
        explicacao: "A Mata Atlântica perdeu mais de 90% da mata."
      }
    ]
  },
  agricultura: {
    nome: "Agricultura Sustentável",
    icone: "🌾",
    cor: "#8BC34A",
    perguntas: [
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar agricultura orgânica?",
        alternativas: [
          "Plantar com veneno",
          "Plantar sem veneno",
          "Plantar em estufas",
          "Plantar com máquinas"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "É cultivar sem usar agrotóxicos."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar rotação de culturas?",
        alternativas: [
          "Plantar sempre a mesma coisa",
          "Trocar o que planta no solo",
          "Deixar o solo descansar",
          "Plantar em círculos"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Alternar culturas para cuidar do solo."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar agrotóxicos?",
        alternativas: [
          "Adubo natural",
          "Veneno para matar pragas",
          "Sementes modificadas",
          "Água para irrigar"
        ],
        correta: 1,
        dica: "Observe qual opcao fala de gases liberados por atividades humanas.",
        explicacao: "São venenos contra pragas na lavoura."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar agrofloresta?",
        alternativas: [
          "Plantar uma só árvore",
          "Misturar árvores com plantação",
          "Floresta preservada",
          "Queimada controlada"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Planta árvores junto com outras culturas."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar plantio direto?",
        alternativas: [
          "Arar a terra antes",
          "Plantar sem revirar o solo",
          "Plantar em vasos",
          "Só colher"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Planta sem mexer na terra."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, qual vantagem da agricultura familiar?",
        alternativas: [
          "Produz em grande escala",
          "Menos dano à natureza",
          "Usa mais veneno",
          "Exporta mais"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Alimenta o Brasil com menos danos ambientais."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar transgênicos?",
        alternativas: [
          "Seres mudados em laboratório",
          "Plantas da natureza",
          "Adubos orgânicos",
          "Sementes tradicionais"
        ],
        correta: 0,
        dica: "Pense no que melhor protege agricultura sustentável e melhora a vida dos seres vivos.",
        explicacao: "São organismos com genes alterados em laboratório."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar agricultura regenerativa?",
        alternativas: [
          "Plantio que estraga o solo",
          "Práticas que curam o solo",
          "Agricultura industrial",
          "Plantar só uma cultura"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Cuida do solo e recupera a natureza."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar sementes crioulas?",
        alternativas: [
          "Sementes modificadas",
          "Sementes tradicionais dos agricultores",
          "Sementes patenteadas",
          "Sementes importadas"
        ],
        correta: 1,
        dica: "Pense no que melhor protege agricultura sustentável e melhora a vida dos seres vivos.",
        explicacao: "Sementes guardadas por agricultores há gerações."
      },
      {
        pergunta: "Em uma horta ou fazenda sustentável, como podemos explicar permacultura?",
        alternativas: [
          "Cultivar sempre a mesma planta",
          "Criar espaços imitando a natureza",
          "Plantar em estufas",
          "Criar animais presos"
        ],
        correta: 1,
        dica: "Pense no que melhor protege agricultura sustentável e melhora a vida dos seres vivos.",
        explicacao: "Desenha espaços que imitam a natureza."
      }
    ]
  },
  geologia: {
    nome: "Geologia e Solo",
    icone: "⛰️",
    cor: "#8D6E63",
    perguntas: [
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar o solo?",
        alternativas: [
          "Só terra suja",
          "Camada onde as plantas crescem",
          "Rocha pura",
          "Água subterrânea"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "É onde as plantas crescem."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, quanto tempo para formar 1cm de solo?",
        alternativas: [
          "1 ano",
          "10 anos",
          "100 a 1.000 anos",
          "1 milhão de anos"
        ],
        correta: 2,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Leva de 100 a 1.000 anos para formar 1cm."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar erosão do solo?",
        alternativas: [
          "Fertilização natural",
          "Solo sendo levado pela água ou vento",
          "Crescimento de plantas",
          "Terra ficando dura"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "Água e vento levam o solo embora."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar desertificação?",
        alternativas: [
          "Deserto virando floresta",
          "Solo virando deserto",
          "Deserto crescendo naturalmente",
          "Plantar em terra seca"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Solo fértil vira deserto por ação humana."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar minerais?",
        alternativas: [
          "Só pedras preciosas",
          "Substâncias naturais e sólidas",
          "Restos de plantas",
          "Água congelada"
        ],
        correta: 1,
        dica: "Pense no que melhor protege geologia e solo e melhora a vida dos seres vivos.",
        explicacao: "São matérias-primas naturais da Terra."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar mineração sustentável?",
        alternativas: [
          "Extrair o máximo possível",
          "Extrair minério sem destruir tudo",
          "Proibir toda mineração",
          "Mineração artesanal"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "Extrair minerais cuidando da natureza."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar aquíferos?",
        alternativas: [
          "Rios na superfície",
          "Água doce guardada no subsolo",
          "Lagos artificiais",
          "Geladeiras naturais"
        ],
        correta: 1,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "São reservas de água debaixo da terra."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, qual o maior aquífero do Brasil?",
        alternativas: [
          "Aquífero Guarani",
          "Aquífero Alter do Chão",
          "Aquífero Cabeças",
          "Aquífero Urucuia"
        ],
        correta: 0,
        dica: "Compare a ideia de tamanho ou quantidade, sem se deixar levar pelo nome mais conhecido.",
        explicacao: "Aquífero Guarani é um dos maiores do mundo."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar o ciclo das rochas?",
        alternativas: [
          "Processo de construção",
          "Rochas que se transformam",
          "Erosão de montanhas",
          "Movimento das placas"
        ],
        correta: 1,
        dica: "Observe processos lentos da natureza, como desgaste, camadas e formação do solo.",
        explicacao: "Rochas mudam de tipo ao longo do tempo."
      },
      {
        pergunta: "Ao investigar o solo e as rochas, como podemos explicar recursos minerais não renováveis?",
        alternativas: [
          "Recursos que se renovam",
          "Minerais que demoram milhões de anos",
          "Recursos infinitos",
          "Materiais recicláveis"
        ],
        correta: 1,
        dica: "Pense em fontes que a natureza repoe continuamente.",
        explicacao: "Demoram milhões de anos para se formar."
      }
    ]
  },
  cidades: {
    nome: "Cidades Verdes",
    icone: "🏙️",
    cor: "#00BCD4",
    perguntas: [
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar uma cidade sustentável?",
        alternativas: [
          "Cidade com muitos carros",
          "Cidade que cuida do planeta",
          "Cidade sem prédios",
          "Cidade com indústrias"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "Cidade que equilibra vida boa e natureza."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar áreas verdes urbanas?",
        alternativas: [
          "Estacionamentos",
          "Parques e praças na cidade",
          "Terrenos baldios",
          "Campos de futebol"
        ],
        correta: 1,
        dica: "Pense em solucoes que melhoram a vida das pessoas e reduzem impactos ambientais.",
        explicacao: "São espaços com natureza dentro da cidade."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar mobilidade urbana sustentável?",
        alternativas: [
          "Usar só carros",
          "Andar sem poluir",
          "Construir estradas",
          "Acabar com ônibus"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "Andar a pé, de bike ou transporte público."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar telhados verdes?",
        alternativas: [
          "Telhado pintado de verde",
          "Telhado com plantas",
          "Telhado de vidro",
          "Jardim no chão"
        ],
        correta: 1,
        dica: "Pense em cuidar do solo, da água e dos alimentos ao mesmo tempo.",
        explicacao: "Telhado com plantas que ajuda o ambiente."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar cidade-esponja?",
        alternativas: [
          "Cidade que absorve chuva",
          "Cidade submersa",
          "Cidade com lagos",
          "Cidade que flutua"
        ],
        correta: 0,
        dica: "Observe se a alternativa protege rios, evita desperdicio ou melhora o tratamento.",
        explicacao: "Cidade que absorve água da chuva."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar ciclovias?",
        alternativas: [
          "Estrada para carros",
          "Caminho só para bicicletas",
          "Calçada para pessoas",
          "Pista de corrida"
        ],
        correta: 1,
        dica: "Pense no que melhor protege cidades verdes e melhora a vida dos seres vivos.",
        explicacao: "Espaço seguro para andar de bicicleta."
      },
      {
        pergunta: "Pensando em cidades mais verdes, qual cidade brasileira é referência em sustentabilidade?",
        alternativas: [
          "São Paulo",
          "Curitiba",
          "Manaus",
          "Belo Horizonte"
        ],
        correta: 1,
        dica: "Pense em usar recursos hoje sem prejudicar as pessoas de amanhã.",
        explicacao: "Curitiba é modelo de cidade sustentável."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar eficiência energética em prédios?",
        alternativas: [
          "Usar mais energia",
          "Gastar menos energia",
          "Ar condicionado potente",
          "Luzes sempre acesas"
        ],
        correta: 1,
        dica: "Observe qual opcao fala de gases liberados por atividades humanas.",
        explicacao: "Prédios que gastam pouca energia."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar coleta seletiva?",
        alternativas: [
          "Misturar todo lixo",
          "Separar o lixo reciclável",
          "Queimar o lixo",
          "Enterrar o lixo"
        ],
        correta: 1,
        dica: "Pense no material que demora muito para se decompor e aparece em rios e mares.",
        explicacao: "Separar lixo que pode ser reciclado."
      },
      {
        pergunta: "Pensando em cidades mais verdes, como podemos explicar corredores verdes urbanos?",
        alternativas: [
          "Avenidas com árvores",
          "Rotas verdes ligando parques",
          "Estradas rurais",
          "Túneis no subsolo"
        ],
        correta: 1,
        dica: "Pense em solucoes que melhoram a vida das pessoas e reduzem impactos ambientais.",
        explicacao: "Conectam áreas verdes pela cidade."
      }
    ]
  }
};
