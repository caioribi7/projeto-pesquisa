const PERGUNTAS = {
  florestas: {
    nome: "Florestas",
    icone: "🌲",
    cor: "#2ECC71",
    perguntas: [
      {
        pergunta: "Qual é a maior floresta tropical do mundo?",
        alternativas: ["Floresta Amazônica", "Floresta do Congo", "Floresta de Bornéu", "Floresta da Indonésia"],
        correta: 0,
        explicacao: "A Amazônia é a maior floresta tropical do mundo."
      },
      {
        pergunta: "O que é desmatamento ilegal?",
        alternativas: [
          "Cortar árvores com licença",
          "Cortar árvores sem licença",
          "Plantar árvores na cidade",
          "Fogo que vem da natureza"
        ],
        correta: 1,
        explicacao: "É cortar árvores sem permissão do governo."
      },
      {
        pergunta: "Quanto da Amazônia já foi desmatado?",
        alternativas: ["5%", "17%", "50%", "2%"],
        correta: 1,
        explicacao: "Quase 17% da Amazônia já foi desmatada."
      },
      {
        pergunta: "Qual bioma brasileiro é o mais ameaçado?",
        alternativas: ["Amazônia", "Cerrado", "Mata Atlântica", "Caatinga"],
        correta: 2,
        explicacao: "A Mata Atlântica perdeu quase toda sua mata."
      },
      {
        pergunta: "O que é reflorestamento?",
        alternativas: [
          "Cortar muitas árvores",
          "Plantar árvores de novo",
          "Queimar a vegetação",
          "Extrair madeira legal"
        ],
        correta: 1,
        explicacao: "É plantar árvores onde a mata foi cortada."
      },
      {
        pergunta: "Qual árvore é símbolo nacional do Brasil?",
        alternativas: ["Pau-Brasil", "Ipê", "Jequitibá", "Seringueira"],
        correta: 0,
        explicacao: "O Pau-Brasil é a árvore símbolo do Brasil."
      },
      {
        pergunta: "O que são corredores ecológicos?",
        alternativas: [
          "Estradas dentro de florestas",
          "Áreas que ligam florestas",
          "Caminhos para parar fogo",
          "Trilhas para visitantes"
        ],
        correta: 1,
        explicacao: "Eles ligam partes da floresta para os animais."
      },
      {
        pergunta: "Como se chama quando árvores perdem as folhas?",
        alternativas: ["Caducifólia", "Fotossíntese", "Transpiração", "Germinação"],
        correta: 0,
        explicacao: "É quando as árvores perdem suas folhas."
      },
      {
        pergunta: "Quantas árvores fazem 1 tonelada de papel?",
        alternativas: ["5-10 árvores", "2-3 árvores", "15-20 árvores", "1 árvore"],
        correta: 2,
        explicacao: "Precisa de 15 a 20 árvores para fazer papel."
      },
      {
        pergunta: "O que mais causa incêndios nas florestas?",
        alternativas: [
          "Causado por raios",
          "Causado por pessoas",
          "Causado por vulcões",
          "Causado pelo calor"
        ],
        correta: 1,
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
        pergunta: "Quanto da Terra é coberto por oceanos?",
        alternativas: ["50%", "71%", "80%", "60%"],
        correta: 1,
        explicacao: "Os oceanos cobrem 71% da superfície da Terra."
      },
      {
        pergunta: "O que é a mancha de lixo no Pacífico?",
        alternativas: [
          "Ilha de plástico boiando",
          "Plástico juntado no oceano",
          "Recife de corais artificial",
          "Algas crescendo no mar"
        ],
        correta: 1,
        explicacao: "É muito plástico juntado no Oceano Pacífico."
      },
      {
        pergunta: "Qual o maior animal do oceano?",
        alternativas: ["Tubarão-baleia", "Baleia-azul", "Polvo-gigante", "Lula-colossal"],
        correta: 1,
        explicacao: "A baleia-azul é o maior animal do planeta."
      },
      {
        pergunta: "O que é branqueamento de corais?",
        alternativas: [
          "Morte natural dos corais",
          "Corais perdem a cor",
          "Poluição química nos corais",
          "Algas brancas no mar"
        ],
        correta: 1,
        explicacao: "Corais perdem a cor quando a água esquenta."
      },
      {
        pergunta: "Quanto do oxigênio vem dos oceanos?",
        alternativas: ["30% do ar", "Mais da metade", "10% do ar", "70% do ar"],
        correta: 1,
        explicacao: "O mar produz mais da metade do oxigênio."
      },
      {
        pergunta: "O que é a acidificação dos oceanos?",
        alternativas: [
          "Aquecer a água do mar",
          "Tornar o mar mais ácido",
          "Sujar o mar com ácidos",
          "Secar toda água do mar"
        ],
        correta: 1,
        explicacao: "O mar fica ácido ao absorver CO₂ do ar."
      },
      {
        pergunta: "Quanto tempo o plástico dura no mar?",
        alternativas: ["10 anos", "50 anos", "450 anos", "2 anos"],
        correta: 2,
        explicacao: "O plástico pode ficar 450 anos no mar."
      },
      {
        pergunta: "Qual oceano é o maior do mundo?",
        alternativas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correta: 2,
        explicacao: "O Oceano Pacífico é o maior de todos."
      },
      {
        pergunta: "O que são manguezais?",
        alternativas: [
          "Mata que cresce em água doce",
          "Mata na beira do mar salgado",
          "Recife artificial de pessoas",
          "Duna de areia na praia"
        ],
        correta: 1,
        explicacao: "São matas na beira do mar salgado."
      },
      {
        pergunta: "Qual poluente marinho mais prejudicial?",
        alternativas: ["Areia", "Plástico", "Conchas", "Sal"],
        correta: 1,
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
        pergunta: "O que é efeito estufa?",
        alternativas: [
          "Furar a camada de ozônio",
          "Calor preso na atmosfera",
          "Sujar o solo com veneno",
          "Esquentar a água do mar"
        ],
        correta: 1,
        explicacao: "Efeito estufa prende o calor na atmosfera."
      },
      {
        pergunta: "Qual gás mais esquenta o planeta?",
        alternativas: ["Oxigênio (O₂)", "Gás Carbônico (CO₂)", "Nitrogênio (N₂)", "Hidrogênio (H₂)"],
        correta: 1,
        explicacao: "CO₂ é o gás que mais aquece a Terra."
      },
      {
        pergunta: "O que é o aquecimento global?",
        alternativas: [
          "Terra mais quente naturalmente",
          "Terra mais quente por pessoas",
          "Clima mudando naturalmente",
          "Mar mais quente que antes"
        ],
        correta: 1,
        explicacao: "É a Terra ficando mais quente por poluição."
      },
      {
        pergunta: "Qual a diferença entre tempo e clima?",
        alternativas: [
          "São a mesma coisa",
          "Tempo é hoje; clima são anos",
          "Clima é hoje; tempo são anos",
          "Tempo do mundo; clima local"
        ],
        correta: 1,
        explicacao: "Tempo é hoje. Clima são muitos anos."
      },
      {
        pergunta: "O que são energias renováveis?",
        alternativas: [
          "Sujam a natureza",
          "Nunca acabam na natureza",
          "Acabam rapidinho",
          "Vêm do petróleo"
        ],
        correta: 1,
        explicacao: "Vêm da natureza e nunca se acabam."
      },
      {
        pergunta: "O que mais esquenta a Terra?",
        alternativas: [
          "Cultivar alimentos naturais",
          "Queimar gasolina e carvão",
          "Reciclar latas e papéis",
          "Plantar mudas de árvores"
        ],
        correta: 1,
        explicacao: "Queimar gasolina e carvão aquece o planeta."
      },
      {
        pergunta: "O que é a pegada de carbono?",
        alternativas: [
          "Marca de pé no chão",
          "Gases que produzimos",
          "Carbono que tem no solo",
          "Fumaça que vemos no ar"
        ],
        correta: 1,
        explicacao: "São os gases que jogamos na atmosfera."
      },
      {
        pergunta: "Qual acordo mundial ajuda o clima?",
        alternativas: ["Tratado de Tordesilhas", "Acordo de Paris", "Protocolo de Kyoto", "Carta da ONU"],
        correta: 1,
        explicacao: "Acordo de Paris é para salvar o clima."
      },
      {
        pergunta: "O que é neutralidade de carbono?",
        alternativas: [
          "Soltar mais gás que o normal",
          "Soltar e tirar o mesmo tanto",
          "Não soltar gás nenhum",
          "Só usar carvão de madeira"
        ],
        correta: 1,
        explicacao: "É soltar e tirar a mesma quantidade."
      },
      {
        pergunta: "Quanto a Terra já esquentou desde 1800?",
        alternativas: ["0,5°C", "Cerca de 1,1°C", "5°C", "10°C"],
        correta: 1,
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
        pergunta: "O que significam os 3 Rs?",
        alternativas: [
          "Rezar, Repetir, Renovar",
          "Reduzir, Reutilizar, Reciclar",
          "Recortar, Remendar, Refazer",
          "Repensar, Reprovar, Recomeçar"
        ],
        correta: 1,
        explicacao: "São Reduzir, Reutilizar e Reciclar."
      },
      {
        pergunta: "Quanto tempo uma lata de alumínio dura?",
        alternativas: ["1 ano", "5 anos", "Mais de 100 anos", "200 anos"],
        correta: 2,
        explicacao: "Latas de alumínio duram mais de 100 anos."
      },
      {
        pergunta: "Qual material é mais reciclado no mundo?",
        alternativas: ["Plástico", "Vidro", "Papel", "Alumínio"],
        correta: 2,
        explicacao: "O papel é o material mais reciclado."
      },
      {
        pergunta: "Qual a cor da lixeira para plástico?",
        alternativas: ["Azul", "Vermelho", "Verde", "Amarelo"],
        correta: 1,
        explicacao: "Vermelho é a cor do plástico na coleta seletiva."
      },
      {
        pergunta: "O que é compostagem?",
        alternativas: [
          "Reciclar plásticos",
          "Transformar lixo em adubo",
          "Queimar o lixo",
          "Enterrar os resíduos"
        ],
        correta: 1,
        explicacao: "Compostagem vira lixo orgânico em adubo."
      },
      {
        pergunta: "Quantas vezes o vidro pode ser reciclado?",
        alternativas: ["5 vezes", "10 vezes", "Infinitas vezes", "3 vezes"],
        correta: 2,
        explicacao: "O vidro pode ser reciclado para sempre."
      },
      {
        pergunta: "O que é upcycling?",
        alternativas: [
          "Reciclagem comum",
          "Criar algo melhor com lixo",
          "Jogar lixo no lixo",
          "Queimar lixo para energia"
        ],
        correta: 1,
        explicacao: "É fazer algo melhor com materiais velhos."
      },
      {
        pergunta: "Qual país recicla mais no mundo?",
        alternativas: ["Brasil", "EUA", "Alemanha", "Japão"],
        correta: 2,
        explicacao: "A Alemanha é líder mundial em reciclagem."
      },
      {
        pergunta: "O que são resíduos eletrônicos?",
        alternativas: [
          "Lixo da internet",
          "Aparelhos usados descartados",
          "Cabos de energia",
          "Só pilhas e baterias"
        ],
        correta: 1,
        explicacao: "São aparelhos elétricos que viram lixo."
      },
      {
        pergunta: "Onde jogar pilhas e baterias?",
        alternativas: [
          "Lixo comum",
          "Pontos de coleta",
          "Pia da cozinha",
          "Lixeira azul"
        ],
        correta: 1,
        explicacao: "Pilhas têm veneno e vão em coleta especial."
      }
    ]
  },
  agua: {
    nome: "Água",
    icone: "💧",
    cor: "#3498DB",
    perguntas: [
      {
        pergunta: "Quanta água doce temos para beber?",
        alternativas: ["10%", "Menos de 1%", "5%", "25%"],
        correta: 1,
        explicacao: "Menos de 1% da água é doce e acessível."
      },
      {
        pergunta: "O que é o ciclo da água?",
        alternativas: [
          "Tratamento da água",
          "Água andando na natureza",
          "Movimento das ondas",
          "Água nos canos"
        ],
        correta: 1,
        explicacao: "É a água circulando entre Terra e céu."
      },
      {
        pergunta: "Quantos litros de água uma pessoa gasta por dia?",
        alternativas: ["50 litros", "Cerca de 150 litros", "500 litros", "20 litros"],
        correta: 1,
        explicacao: "Cada pessoa gasta cerca de 150 litros por dia."
      },
      {
        pergunta: "O que é uma bacia hidrográfica?",
        alternativas: [
          "Tanque de água",
          "Área que leva água ao rio",
          "Represa artificial",
          "Região alagada"
        ],
        correta: 1,
        explicacao: "É onde a chuva escorre para um rio."
      },
      {
        pergunta: "Qual doença vem da água suja?",
        alternativas: ["Gripe", "Cólera", "Diabetes", "Asma"],
        correta: 1,
        explicacao: "Cólera é doença de água contaminada."
      },
      {
        pergunta: "O que é o lençol freático?",
        alternativas: [
          "Rio na superfície",
          "Água guardada no subsolo",
          "Lago artificial",
          "Gelo das montanhas"
        ],
        correta: 1,
        explicacao: "É a água que fica debaixo da terra."
      },
      {
        pergunta: "Como economizar água no banho?",
        alternativas: [
          "Banho de 5 minutos",
          "Banho de 20 minutos",
          "Encher a banheira",
          "Ligar dois chuveiros"
        ],
        correta: 0,
        explicacao: "Banho de 5 minutos economiza muita água."
      },
      {
        pergunta: "O que é a água virtual?",
        alternativas: [
          "Água da chuva",
          "Água gasta para fazer coisas",
          "Água destilada",
          "Água mineral"
        ],
        correta: 1,
        explicacao: "É a água usada para produzir alimentos."
      },
      {
        pergunta: "Quantos litros para fazer 1kg de carne?",
        alternativas: ["100 litros", "1.000 litros", "15.000 litros", "50 litros"],
        correta: 2,
        explicacao: "Precisa de 15.000 litros para fazer 1kg de carne."
      },
      {
        pergunta: "O que é dessalinização?",
        alternativas: [
          "Sujar a água doce",
          "Tirar o sal da água do mar",
          "Evaporação natural",
          "Tratar o esgoto"
        ],
        correta: 1,
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
        pergunta: "Qual a principal fonte de energia no Brasil?",
        alternativas: ["Carvão mineral", "Petróleo", "Hidrelétrica", "Nuclear"],
        correta: 2,
        explicacao: "O Brasil usa mais energia das hidrelétricas."
      },
      {
        pergunta: "O que é energia solar?",
        alternativas: [
          "Energia do vento",
          "Luz do sol virada em energia",
          "Energia das marés",
          "Energia nuclear"
        ],
        correta: 1,
        explicacao: "Energia solar vem da luz do sol."
      },
      {
        pergunta: "Qual a vantagem da energia eólica?",
        alternativas: [
          "Polui o ar",
          "É limpa e não polui",
          "É muito cara",
          "Ocupa pouco espaço"
        ],
        correta: 1,
        explicacao: "Energia eólica é limpa e não polui."
      },
      {
        pergunta: "O que é biomassa?",
        alternativas: [
          "Energia do vento",
          "Energia de restos de plantas",
          "Energia nuclear",
          "Energia solar"
        ],
        correta: 1,
        explicacao: "Biomassa usa restos de plantas para energia."
      },
      {
        pergunta: "Qual país mais investe em energia solar?",
        alternativas: ["Brasil", "Alemanha", "China", "Austrália"],
        correta: 2,
        explicacao: "A China é quem mais investe em energia solar."
      },
      {
        pergunta: "O que são combustíveis fósseis?",
        alternativas: [
          "Energia do sol",
          "Restos antigos viram combustível",
          "Biocombustíveis",
          "Energia da água"
        ],
        correta: 1,
        explicacao: "Petróleo e carvão são combustíveis fósseis."
      },
      {
        pergunta: "O que é eficiência energética?",
        alternativas: [
          "Usar mais energia",
          "Gastar menos energia",
          "Desligar tudo",
          "Usar energia nuclear"
        ],
        correta: 1,
        explicacao: "É fazer a mesma coisa com menos energia."
      },
      {
        pergunta: "Qual a maior usina hidrelétrica do Brasil?",
        alternativas: ["Tucuruí", "Itaipu", "Belo Monte", "Sobradinho"],
        correta: 1,
        explicacao: "Itaipu é a maior hidrelétrica do Brasil."
      },
      {
        pergunta: "O que é energia geotérmica?",
        alternativas: [
          "Energia do sol",
          "Calor da Terra vira energia",
          "Energia das ondas",
          "Energia nuclear"
        ],
        correta: 1,
        explicacao: "Usa o calor de dentro da Terra."
      },
      {
        pergunta: "O que é ilha de calor nas cidades?",
        alternativas: [
          "Cidade mais fria que o campo",
          "Cidade mais quente que o campo",
          "Praias artificiais",
          "Só aquecimento global"
        ],
        correta: 1,
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
        pergunta: "O que significa biodiversidade?",
        alternativas: [
          "Só variedade de animais",
          "Toda forma de vida na Terra",
          "Só quantidade de plantas",
          "Só tamanho das florestas"
        ],
        correta: 1,
        explicacao: "É a variedade de vida no planeta."
      },
      {
        pergunta: "Qual país tem a maior biodiversidade?",
        alternativas: ["Estados Unidos", "Brasil", "Índia", "Austrália"],
        correta: 1,
        explicacao: "O Brasil tem a maior biodiversidade do mundo."
      },
      {
        pergunta: "O que é uma espécie endêmica?",
        alternativas: [
          "Espécie do mundo todo",
          "Espécie que só existe num lugar",
          "Espécie invasora",
          "Espécie extinta"
        ],
        correta: 1,
        explicacao: "Só existe em uma região específica."
      },
      {
        pergunta: "Quantas espécies existem no planeta?",
        alternativas: ["1 milhão", "8,7 milhões", "100 mil", "500 milhões"],
        correta: 1,
        explicacao: "Estima-se 8,7 milhões de espécies no planeta."
      },
      {
        pergunta: "O que é extinção de espécies?",
        alternativas: [
          "Bichos mudando de lugar",
          "Espécie que desaparece para sempre",
          "Diminuição de bichos",
          "Mudança de habitat"
        ],
        correta: 1,
        explicacao: "É quando uma espécie some para sempre."
      },
      {
        pergunta: "O que são espécies invasoras?",
        alternativas: [
          "Espécies da região",
          "Espécies que chegam e prejudicam",
          "Animais que migram",
          "Plantas de jardim"
        ],
        correta: 1,
        explicacao: "São bichos ou plantas que invadem outro lugar."
      },
      {
        pergunta: "Qual bioma brasileiro tem mais espécies?",
        alternativas: ["Cerrado", "Mata Atlântica", "Amazônia", "Pantanal"],
        correta: 2,
        explicacao: "A Amazônia tem mais espécies que qualquer bioma."
      },
      {
        pergunta: "O que é seleção natural?",
        alternativas: [
          "Pessoas escolhem espécies",
          "Os mais fortes sobrevivem",
          "Criação de novas espécies",
          "Morte de todas espécies"
        ],
        correta: 1,
        explicacao: "Os seres mais adaptados sobrevivem na natureza."
      },
      {
        pergunta: "Quantas abelhas polinizam 1 hectare?",
        alternativas: ["10 abelhas", "100 abelhas", "Milhares de abelhas", "1 milhão de abelhas"],
        correta: 2,
        explicacao: "Milhares de abelhas são necessárias para polinizar."
      },
      {
        pergunta: "O que é a Lista Vermelha da IUCN?",
        alternativas: [
          "Lista de espécies extintas",
          "Lista de espécies em perigo",
          "Guia de espécies invasoras",
          "Lista de bichos de estimação"
        ],
        correta: 1,
        explicacao: "Mostra quais espécies correm risco de sumir."
      }
    ]
  },
  poluicao: {
    nome: "Poluição",
    icone: "💨",
    cor: "#95A5A6",
    perguntas: [
      {
        pergunta: "O que é poluição do ar?",
        alternativas: [
          "Só fumaça de carros",
          "Sujeira no ar que respiramos",
          "Nuvens escuras",
          "Vento bem forte"
        ],
        correta: 1,
        explicacao: "É sujeira no ar que faz mal à saúde."
      },
      {
        pergunta: "Qual cidade brasileira tem o ar mais poluído?",
        alternativas: ["São Paulo", "Rio de Janeiro", "Manaus", "Belo Horizonte"],
        correta: 0,
        explicacao: "São Paulo tem o ar mais poluído do Brasil."
      },
      {
        pergunta: "O que é chuva ácida?",
        alternativas: [
          "Chuva normal e limpa",
          "Chuva com poluição ácida",
          "Chuva de granizo",
          "Chuva radioativa"
        ],
        correta: 1,
        explicacao: "Chuva ácida tem poluição que forma ácidos."
      },
      {
        pergunta: "Qual a maior fonte de poluição do mar?",
        alternativas: ["Navios", "Atividades em terra", "Turismo", "Pesca"],
        correta: 1,
        explicacao: "80% da poluição do mar vem de terra."
      },
      {
        pergunta: "O que são microplásticos?",
        alternativas: [
          "Plástico reciclável",
          "Pedaços de plástico bem pequenos",
          "Plástico que se desfaz",
          "Sacos e garrafas plásticas"
        ],
        correta: 1,
        explicacao: "São pedacinhos de plástico menores que 5mm."
      },
      {
        pergunta: "O que é poluição do solo?",
        alternativas: [
          "Só lixo no chão",
          "Veneno e lixo no solo",
          "Erosão natural",
          "Terra bem dura"
        ],
        correta: 1,
        explicacao: "É sujeira química e lixo no chão."
      },
      {
        pergunta: "O que é poluição sonora?",
        alternativas: [
          "Som da natureza",
          "Barulho demais das pessoas",
          "Música alta em festas",
          "Som dos animais"
        ],
        correta: 1,
        explicacao: "É muito barulho que faz mal à saúde."
      },
      {
        pergunta: "Qual metal tóxico existe em pilhas?",
        alternativas: ["Ferro", "Cádmio", "Alumínio", "Cobre"],
        correta: 1,
        explicacao: "Cádmio é um metal tóxico em pilhas."
      },
      {
        pergunta: "O que é esgoto não tratado?",
        alternativas: [
          "Água limpa",
          "Sujeira líquida sem tratamento",
          "Água da chuva",
          "Água mineral"
        ],
        correta: 1,
        explicacao: "É esgoto jogado nos rios sem tratamento."
      },
      {
        pergunta: "Quantas pessoas morrem por poluição do ar?",
        alternativas: ["1.000", "100.000", "7 milhões", "1 bilhão"],
        correta: 2,
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
        pergunta: "O que é desenvolvimento sustentável?",
        alternativas: [
          "Crescer sem se importar",
          "Cuidar do hoje sem destruir o amanhã",
          "Parar o desenvolvimento",
          "Só proteger as florestas"
        ],
        correta: 1,
        explicacao: "É crescer sem destruir o futuro."
      },
      {
        pergunta: "Quais são os três pilares da sustentabilidade?",
        alternativas: [
          "Social, Cultural, Político",
          "Ambiental, Social, Econômico",
          "Saúde, Educação, Lazer",
          "Tecnologia, Inovação, Ciência"
        ],
        correta: 1,
        explicacao: "São ambiental, social e econômico."
      },
      {
        pergunta: "O que é consumo consciente?",
        alternativas: [
          "Comprar sem pensar",
          "Escolher sem prejudicar o planeta",
          "Comprar só marcas caras",
          "Comprar tudo que vê"
        ],
        correta: 1,
        explicacao: "É comprar pensando no meio ambiente."
      },
      {
        pergunta: "O que é a Agenda 2030 da ONU?",
        alternativas: [
          "Calendário de eventos",
          "Plano com 17 metas para o mundo",
          "Agenda de reuniões",
          "Plano de reciclagem"
        ],
        correta: 1,
        explicacao: "São 17 metas para um futuro melhor."
      },
      {
        pergunta: "O que é agricultura sustentável?",
        alternativas: [
          "Usar muito veneno",
          "Plantar sem destruir a natureza",
          "Plantar em larga escala",
          "Plantar só uma coisa"
        ],
        correta: 1,
        explicacao: "É produzir alimentos cuidando da natureza."
      },
      {
        pergunta: "O que é uma cidade sustentável?",
        alternativas: [
          "Cidade com muitos carros",
          "Cidade boa para viver e para o planeta",
          "Cidade sem indústrias",
          "Cidade com prédios enormes"
        ],
        correta: 1,
        explicacao: "Une qualidade de vida e cuidado ambiental."
      },
      {
        pergunta: "O que é economia circular?",
        alternativas: [
          "Economia comum",
          "Reutilizar tudo sem gerar lixo",
          "Economia do petróleo",
          "Só reciclar"
        ],
        correta: 1,
        explicacao: "É usar coisas de novo sem desperdiçar."
      },
      {
        pergunta: "O que é certificação ambiental?",
        alternativas: [
          "Multa ambiental",
          "Selo de produto sustentável",
          "Licença para poluir",
          "Registro de área verde"
        ],
        correta: 1,
        explicacao: "Selo que mostra que algo é sustentável."
      },
      {
        pergunta: "Qual o objetivo do ODS 13?",
        alternativas: [
          "Acabar com a pobreza",
          "Combater a mudança do clima",
          "Educação de qualidade",
          "Vida na água"
        ],
        correta: 1,
        explicacao: "ODS 13 é para combater as mudanças climáticas."
      },
      {
        pergunta: "O que significa ESG?",
        alternativas: [
          "Empresa Sem Gerenciamento",
          "Ambiental, Social e Governança",
          "Economia Sustentável Global",
          "Energia Solar Garantida"
        ],
        correta: 1,
        explicacao: "São regras para empresas sustentáveis."
      }
    ]
  },
  fauna: {
    nome: "Animais em Extinção",
    icone: "🦏",
    cor: "#E67E22",
    ordem: 7,
    perguntas: [
      {
        pergunta: "Quantas espécies estão ameaçadas hoje?",
        alternativas: ["1.000", "10.000", "Mais de 40.000", "100.000"],
        correta: 2,
        explicacao: "Mais de 40.000 espécies estão em perigo."
      },
      {
        pergunta: "Qual animal brasileiro luta contra a extinção?",
        alternativas: ["Arara-azul", "Tatu-bola", "Mico-leão-dourado", "Lobo-guará"],
        correta: 2,
        explicacao: "Mico-leão-dourado é símbolo da conservação."
      },
      {
        pergunta: "O que é a IUCN?",
        alternativas: [
          "Instituto de Urbanismo",
          "União de Conservação da Natureza",
          "Organização dos Animais",
          "Fundo Ambiental Global"
        ],
        correta: 1,
        explicacao: "Protege a natureza e as espécies ameaçadas."
      },
      {
        pergunta: "Qual a maior causa de extinção hoje?",
        alternativas: ["Caça de animais", "Perda do lar dos bichos", "Mudanças naturais", "Barulho demais"],
        correta: 1,
        explicacao: "Bichos perdem suas casas pelas ações humanas."
      },
      {
        pergunta: "O que é uma espécie criticamente ameaçada?",
        alternativas: [
          "Espécie sem nenhum risco",
          "Espécie com risco muito alto",
          "Espécie já extinta",
          "Espécie se recuperando"
        ],
        correta: 1,
        explicacao: "Tem risco muito grande de desaparecer."
      },
      {
        pergunta: "Qual animal está ameaçado na Mata Atlântica?",
        alternativas: ["Capivara", "Tamanduá-bandeira", "Muriqui-do-norte", "Tucano"],
        correta: 2,
        explicacao: "Muriqui-do-norte é um dos primatas mais ameaçados."
      },
      {
        pergunta: "O que é a CITES?",
        alternativas: [
          "Controle do comércio de espécies",
          "Lei brasileira de animais",
          "Conferência de energia",
          "Acordo do clima"
        ],
        correta: 0,
        explicacao: "Regula o comércio de espécies ameaçadas."
      },
      {
        pergunta: "Quantas onças-pintadas existem na Amazônia?",
        alternativas: ["Mais de 10.000", "Menos de 500", "Cerca de 2.000", "100.000"],
        correta: 0,
        explicacao: "Existem mais de 10.000 onças na Amazônia."
      },
      {
        pergunta: "O que é extinção em massa?",
        alternativas: [
          "Evento natural e raro",
          "Muitas espécies somem de uma vez",
          "Bichos migrando",
          "Nova espécie surgindo"
        ],
        correta: 1,
        explicacao: "Muitas espécies desaparecem ao mesmo tempo."
      },
      {
        pergunta: "Qual bioma brasileiro perdeu mais espécies?",
        alternativas: ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
        correta: 1,
        explicacao: "A Mata Atlântica perdeu mais de 90% da mata."
      }
    ]
  },
  agricultura: {
    nome: "Agricultura Sustentável",
    icone: "🌾",
    cor: "#8BC34A",
    ordem: 8,
    perguntas: [
      {
        pergunta: "O que é agricultura orgânica?",
        alternativas: [
          "Plantar com veneno",
          "Plantar sem veneno",
          "Plantar em estufas",
          "Plantar com máquinas"
        ],
        correta: 1,
        explicacao: "É cultivar sem usar agrotóxicos."
      },
      {
        pergunta: "O que é rotação de culturas?",
        alternativas: [
          "Plantar sempre a mesma coisa",
          "Trocar o que planta no solo",
          "Deixar o solo descansar",
          "Plantar em círculos"
        ],
        correta: 1,
        explicacao: "Alternar culturas para cuidar do solo."
      },
      {
        pergunta: "O que são agrotóxicos?",
        alternativas: [
          "Adubo natural",
          "Veneno para matar pragas",
          "Sementes modificadas",
          "Água para irrigar"
        ],
        correta: 1,
        explicacao: "São venenos contra pragas na lavoura."
      },
      {
        pergunta: "O que é agrofloresta?",
        alternativas: [
          "Plantar uma só árvore",
          "Misturar árvores com plantação",
          "Floresta preservada",
          "Queimada controlada"
        ],
        correta: 1,
        explicacao: "Planta árvores junto com outras culturas."
      },
      {
        pergunta: "O que é plantio direto?",
        alternativas: [
          "Arar a terra antes",
          "Plantar sem revirar o solo",
          "Plantar em vasos",
          "Só colher"
        ],
        correta: 1,
        explicacao: "Planta sem mexer na terra."
      },
      {
        pergunta: "Qual vantagem da agricultura familiar?",
        alternativas: [
          "Produz em grande escala",
          "Menos dano à natureza",
          "Usa mais veneno",
          "Exporta mais"
        ],
        correta: 1,
        explicacao: "Alimenta o Brasil com menos danos ambientais."
      },
      {
        pergunta: "O que são transgênicos?",
        alternativas: [
          "Seres mudados em laboratório",
          "Plantas da natureza",
          "Adubos orgânicos",
          "Sementes tradicionais"
        ],
        correta: 0,
        explicacao: "São organismos com genes alterados em laboratório."
      },
      {
        pergunta: "O que é agricultura regenerativa?",
        alternativas: [
          "Plantio que estraga o solo",
          "Práticas que curam o solo",
          "Agricultura industrial",
          "Plantar só uma cultura"
        ],
        correta: 1,
        explicacao: "Cuida do solo e recupera a natureza."
      },
      {
        pergunta: "O que são sementes crioulas?",
        alternativas: [
          "Sementes modificadas",
          "Sementes tradicionais dos agricultores",
          "Sementes patenteadas",
          "Sementes importadas"
        ],
        correta: 1,
        explicacao: "Sementes guardadas por agricultores há gerações."
      },
      {
        pergunta: "O que é permacultura?",
        alternativas: [
          "Cultivar sempre a mesma planta",
          "Criar espaços imitando a natureza",
          "Plantar em estufas",
          "Criar animais presos"
        ],
        correta: 1,
        explicacao: "Desenha espaços que imitam a natureza."
      }
    ]
  },
  geologia: {
    nome: "Geologia e Solo",
    icone: "⛰️",
    cor: "#8D6E63",
    ordem: 9,
    perguntas: [
      {
        pergunta: "O que é o solo?",
        alternativas: [
          "Só terra suja",
          "Camada onde as plantas crescem",
          "Rocha pura",
          "Água subterrânea"
        ],
        correta: 1,
        explicacao: "É onde as plantas crescem."
      },
      {
        pergunta: "Quanto tempo para formar 1cm de solo?",
        alternativas: ["1 ano", "10 anos", "100 a 1.000 anos", "1 milhão de anos"],
        correta: 2,
        explicacao: "Leva de 100 a 1.000 anos para formar 1cm."
      },
      {
        pergunta: "O que é erosão do solo?",
        alternativas: [
          "Fertilização natural",
          "Solo sendo levado pela água ou vento",
          "Crescimento de plantas",
          "Terra ficando dura"
        ],
        correta: 1,
        explicacao: "Água e vento levam o solo embora."
      },
      {
        pergunta: "O que é desertificação?",
        alternativas: [
          "Deserto virando floresta",
          "Solo virando deserto",
          "Deserto crescendo naturalmente",
          "Plantar em terra seca"
        ],
        correta: 1,
        explicacao: "Solo fértil vira deserto por ação humana."
      },
      {
        pergunta: "O que são minerais?",
        alternativas: [
          "Só pedras preciosas",
          "Substâncias naturais e sólidas",
          "Restos de plantas",
          "Água congelada"
        ],
        correta: 1,
        explicacao: "São matérias-primas naturais da Terra."
      },
      {
        pergunta: "O que é mineração sustentável?",
        alternativas: [
          "Extrair o máximo possível",
          "Extrair minério sem destruir tudo",
          "Proibir toda mineração",
          "Mineração artesanal"
        ],
        correta: 1,
        explicacao: "Extrair minerais cuidando da natureza."
      },
      {
        pergunta: "O que são aquíferos?",
        alternativas: [
          "Rios na superfície",
          "Água doce guardada no subsolo",
          "Lagos artificiais",
          "Geladeiras naturais"
        ],
        correta: 1,
        explicacao: "São reservas de água debaixo da terra."
      },
      {
        pergunta: "Qual o maior aquífero do Brasil?",
        alternativas: ["Aquífero Guarani", "Aquífero Alter do Chão", "Aquífero Cabeças", "Aquífero Urucuia"],
        correta: 0,
        explicacao: "Aquífero Guarani é um dos maiores do mundo."
      },
      {
        pergunta: "O que é o ciclo das rochas?",
        alternativas: [
          "Processo de construção",
          "Rochas que se transformam",
          "Erosão de montanhas",
          "Movimento das placas"
        ],
        correta: 1,
        explicacao: "Rochas mudam de tipo ao longo do tempo."
      },
      {
        pergunta: "O que são recursos minerais não renováveis?",
        alternativas: [
          "Recursos que se renovam",
          "Minerais que demoram milhões de anos",
          "Recursos infinitos",
          "Materiais recicláveis"
        ],
        correta: 1,
        explicacao: "Demoram milhões de anos para se formar."
      }
    ]
  },
  cidades: {
    nome: "Cidades Verdes",
    icone: "🏙️",
    cor: "#00BCD4",
    ordem: 10,
    perguntas: [
      {
        pergunta: "O que é uma cidade sustentável?",
        alternativas: [
          "Cidade com muitos carros",
          "Cidade que cuida do planeta",
          "Cidade sem prédios",
          "Cidade com indústrias"
        ],
        correta: 1,
        explicacao: "Cidade que equilibra vida boa e natureza."
      },
      {
        pergunta: "O que são áreas verdes urbanas?",
        alternativas: [
          "Estacionamentos",
          "Parques e praças na cidade",
          "Terrenos baldios",
          "Campos de futebol"
        ],
        correta: 1,
        explicacao: "São espaços com natureza dentro da cidade."
      },
      {
        pergunta: "O que é mobilidade urbana sustentável?",
        alternativas: [
          "Usar só carros",
          "Andar sem poluir",
          "Construir estradas",
          "Acabar com ônibus"
        ],
        correta: 1,
        explicacao: "Andar a pé, de bike ou transporte público."
      },
      {
        pergunta: "O que são telhados verdes?",
        alternativas: [
          "Telhado pintado de verde",
          "Telhado com plantas",
          "Telhado de vidro",
          "Jardim no chão"
        ],
        correta: 1,
        explicacao: "Telhado com plantas que ajuda o ambiente."
      },
      {
        pergunta: "O que é cidade-esponja?",
        alternativas: [
          "Cidade que absorve chuva",
          "Cidade submersa",
          "Cidade com lagos",
          "Cidade que flutua"
        ],
        correta: 0,
        explicacao: "Cidade que absorve água da chuva."
      },
      {
        pergunta: "O que são ciclovias?",
        alternativas: [
          "Estrada para carros",
          "Caminho só para bicicletas",
          "Calçada para pessoas",
          "Pista de corrida"
        ],
        correta: 1,
        explicacao: "Espaço seguro para andar de bicicleta."
      },
      {
        pergunta: "Qual cidade brasileira é referência em sustentabilidade?",
        alternativas: ["São Paulo", "Curitiba", "Manaus", "Belo Horizonte"],
        correta: 1,
        explicacao: "Curitiba é modelo de cidade sustentável."
      },
      {
        pergunta: "O que é eficiência energética em prédios?",
        alternativas: [
          "Usar mais energia",
          "Gastar menos energia",
          "Ar condicionado potente",
          "Luzes sempre acesas"
        ],
        correta: 1,
        explicacao: "Prédios que gastam pouca energia."
      },
      {
        pergunta: "O que é coleta seletiva?",
        alternativas: [
          "Misturar todo lixo",
          "Separar o lixo reciclável",
          "Queimar o lixo",
          "Enterrar o lixo"
        ],
        correta: 1,
        explicacao: "Separar lixo que pode ser reciclado."
      },
      {
        pergunta: "O que são corredores verdes urbanos?",
        alternativas: [
          "Avenidas com árvores",
          "Rotas verdes ligando parques",
          "Estradas rurais",
          "Túneis no subsolo"
        ],
        correta: 1,
        explicacao: "Conectam áreas verdes pela cidade."
      }
    ]
  }
};
