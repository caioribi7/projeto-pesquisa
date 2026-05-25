const PERGUNTAS = {
  florestas: {
    nome: "Florestas",
    icone: "🌲",
    cor: "#2ECC71",
    perguntas: [
      {
        pergunta: "Qual é a maior floresta tropical do mundo?",
        alternativas: ["Floresta Amazônica", "Floresta do Congo", "Floresta da Borneo", "Floresta da Indonésia"],
        correta: 0,
        explicacao: "A Amazônia é a maior floresta tropical do mundo, cobrindo cerca de 5,5 milhões de km²."
      },
      {
        pergunta: "O que é desmatamento ilegal?",
        alternativas: [
          "Corte de árvores autorizado pelo governo",
          "Remoção de florestas sem permissão legal",
          "Plantio de novas árvores em áreas urbanas",
          "Incêndios naturais em florestas"
        ],
        correta: 1,
        explicacao: "Desmatamento ilegal é a remoção de vegetação nativa sem autorização dos órgãos ambientais competentes."
      },
      {
        pergunta: "Quantos por cento da Amazônia foi desmatado até hoje?",
        alternativas: ["5%", "Cerca de 17%", "50%", "2%"],
        correta: 1,
        explicacao: "Aproximadamente 17% da Floresta Amazônica foi desmatada, segundo dados do INPE."
      },
      {
        pergunta: "Qual bioma brasileiro é o mais ameaçado atualmente?",
        alternativas: ["Amazônia", "Cerrado", "Mata Atlântica", "Caatinga"],
        correta: 2,
        explicacao: "A Mata Atlântica perdeu mais de 90% de sua cobertura original, sendo o bioma mais ameaçado do Brasil."
      },
      {
        pergunta: "O que é reflorestamento?",
        alternativas: [
          "Corte de árvores nativas",
          "Plantio de árvores em áreas desmatadas",
          "Queimada controlada",
          "Extrair madeira legalmente"
        ],
        correta: 1,
        explicacao: "Reflorestamento é o plantio de árvores em áreas que foram desmatadas para recuperar a vegetação."
      },
      {
        pergunta: "Qual árvore é símbolo nacional do Brasil?",
        alternativas: ["Pau-Brasil", "Ipê", "Jequitibá", "Seringueira"],
        correta: 0,
        explicacao: "O Pau-Brasil foi declarado árvore nacional pela Lei nº 6.607/1978."
      },
      {
        pergunta: "O que são corredores ecológicos?",
        alternativas: [
          "Estradas abertas em florestas nativas",
          "Áreas que conectam fragmentos florestais",
          "Corredores feitos para conter incêndios",
          "Trilhas turísticas em parques"
        ],
        correta: 1,
        explicacao: "Corredores ecológicos são áreas que conectam fragmentos de vegetação para permitir o fluxo de espécies."
      },
      {
        pergunta: "Qual o nome do fenômeno de árvores que perdem folhas em uma estação?",
        alternativas: ["Caducifólia", "Fotossíntese", "Transpiração", "Germinação"],
        correta: 0,
        explicacao: "Caducifólia é a queda sazonal de folhas em certas espécies de árvores."
      },
      {
        pergunta: "Quantas árvores são necessárias para produzir 1 tonelada de papel?",
        alternativas: ["5-10 árvores", "2-3 árvores", "15-20 árvores", "1 árvore"],
        correta: 2,
        explicacao: "São necessárias cerca de 15 a 20 árvores para produzir 1 tonelada de papel virgem."
      },
      {
        pergunta: "Qual a principal causa dos incêndios florestais no Brasil?",
        alternativas: ["Raios", "Ação humana", "Erupções vulcânicas", "Combustão espontânea"],
        correta: 1,
        explicacao: "A maioria dos incêndios florestais no Brasil é causada por ação humana, intencional ou acidental."
      }
    ]
  },
  oceanos: {
    nome: "Oceanos",
    icone: "🌊",
    cor: "#1ABC9C",
    perguntas: [
      {
        pergunta: "Qual a porcentagem da superfície da Terra coberta por oceanos?",
        alternativas: ["50%", "71%", "80%", "60%"],
        correta: 1,
        explicacao: "Os oceanos cobrem aproximadamente 71% da superfície da Terra."
      },
      {
        pergunta: "O que é a Grande Mancha de Lixo do Pacífico?",
        alternativas: [
          "Uma ilha de plástico flutuante no oceano",
          "Uma concentração de detritos plásticos no oceano",
          "Um recife de corais artificial",
          "Uma região com proliferação de algas"
        ],
        correta: 1,
        explicacao: "É uma enorme concentração de plástico e detritos no Oceano Pacífico, formada por correntes oceânicas."
      },
      {
        pergunta: "Qual o maior animal do oceano?",
        alternativas: ["Tubarão-baleia", "Baleia-azul", "Polvo-gigante", "Lula-colossal"],
        correta: 1,
        explicacao: "A baleia-azul é o maior animal do planeta, podendo atingir 30 metros de comprimento."
      },
      {
        pergunta: "O que é branqueamento de corais?",
        alternativas: [
          "Morte natural dos corais pelo envelhecimento",
          "Descoloração dos corais devido ao estresse térmico",
          "Poluição química nos recifes de corais",
          "Crescimento excessivo de algas brancas"
        ],
        correta: 1,
        explicacao: "O branqueamento ocorre quando corais expulsam algas simbióticas devido ao aumento da temperatura da água."
      },
      {
        pergunta: "Quanto do oxigênio da Terra é produzido pelos oceanos?",
        alternativas: ["30%", "Mais de 50%", "10%", "70%"],
        correta: 1,
        explicacao: "O fitoplâncton marinho produz mais de 50% do oxigênio da atmosfera terrestre."
      },
      {
        pergunta: "O que é a acidificação dos oceanos?",
        alternativas: [
          "Aquecimento da água do mar",
          "Aumento da acidez causado por absorção de CO₂",
          "Poluição da água por ácidos industriais",
          "Evaporação excessiva dos oceanos"
        ],
        correta: 1,
        explicacao: "Os oceanos absorvem CO₂ da atmosfera, formando ácido carbônico e aumentando a acidez da água."
      },
      {
        pergunta: "Quantos anos leva para um plástico se decompor no oceano?",
        alternativas: ["10 anos", "50 anos", "Até 450 anos", "2 anos"],
        correta: 2,
        explicacao: "O plástico pode levar até 450 anos para se decompor no ambiente marinho."
      },
      {
        pergunta: "Qual oceano é o maior do mundo?",
        alternativas: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correta: 2,
        explicacao: "O Oceano Pacífico é o maior, cobrindo aproximadamente 165 milhões de km²."
      },
      {
        pergunta: "O que são manguezais?",
        alternativas: [
          "Florestas que crescem em água doce",
          "Ecossistemas costeiros com vegetação adaptada ao sal",
          "Recifes artificiais feitos pelo homem",
          "Grandes dunas de areia do litoral"
        ],
        correta: 1,
        explicacao: "Manguezais são ecossistemas de transição entre terra e mar, com plantas adaptadas à água salgada."
      },
      {
        pergunta: "Qual poluente marinho mais prejudicial?",
        alternativas: ["Areia", "Plástico", "Conchas", "Sal"],
        correta: 1,
        explicacao: "O plástico é o poluente mais prejudicial, ingerido por animais marinhos e entrando na cadeia alimentar."
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
          "Destruição da camada de ozônio na atmosfera",
          "Fenômeno natural que retém calor na atmosfera",
          "Poluição do solo causada por agrotóxicos",
          "Aquecimento direto dos oceanos"
        ],
        correta: 1,
        explicacao: "O efeito estufa é um fenômeno natural onde gases retêm parte do calor solar, mantendo o planeta aquecido."
      },
      {
        pergunta: "Qual o principal gás de efeito estufa emitido por atividades humanas?",
        alternativas: ["Oxigênio", "Dióxido de Carbono (CO₂)", "Nitrogênio", "Hidrogênio"],
        correta: 1,
        explicacao: "O CO₂ é o principal gás de efeito estufa emitido pela queima de combustíveis fósseis."
      },
      {
        pergunta: "O que é o aquecimento global?",
        alternativas: [
          "Aumento natural da temperatura do planeta",
          "Aumento da temperatura média da Terra devido a atividades humanas",
          "Variação climática normal que sempre existiu",
          "Aquecimento que ocorre apenas nos oceanos"
        ],
        correta: 1,
        explicacao: "Aquecimento global é o aumento da temperatura média do planeta causado pelo acúmulo de gases estufa."
      },
      {
        pergunta: "Qual a diferença entre tempo e clima?",
        alternativas: [
          "São a mesma coisa",
          "Tempo é o estado atmosférico momentâneo; clima é a média de longo prazo",
          "Clima é diário; tempo é anual",
          "Tempo é global; clima é local"
        ],
        correta: 1,
        explicacao: "Tempo é o estado atmosférico em um momento específico. Clima é o padrão de longo prazo (30 anos+)."
      },
      {
        pergunta: "O que são energias renováveis?",
        alternativas: [
          "Energias que poluem muito",
          "Fontes de energia que se regeneram naturalmente",
          "Energias que acabam rápido",
          "Combustíveis fósseis"
        ],
        correta: 1,
        explicacao: "Energias renováveis vêm de fontes naturais que se regeneram, como sol, vento e água."
      },
      {
        pergunta: "Qual atividade humana mais contribui para o aquecimento global?",
        alternativas: [
          "Práticas de agricultura orgânica",
          "Queima de combustíveis fósseis",
          "Reciclagem de resíduos sólidos",
          "Plantio de árvores nativas"
        ],
        correta: 1,
        explicacao: "A queima de combustíveis fósseis para energia e transporte é a maior fonte de emissões de CO₂."
      },
      {
        pergunta: "O que é a pegada de carbono?",
        alternativas: [
          "Marca de pé no chão",
          "Total de emissões de gases estufa causadas por uma atividade",
          "Carbono presente no solo",
          "Tipo de poluição visual"
        ],
        correta: 1,
        explicacao: "Pegada de carbono é a medida total de emissões de gases de efeito estufa geradas por uma atividade."
      },
      {
        pergunta: "Qual acordo internacional visa combater as mudanças climáticas?",
        alternativas: ["Tratado de Tordesilhas", "Acordo de Paris", "Protocolo de Kyoto", "Carta da ONU"],
        correta: 1,
        explicacao: "O Acordo de Paris (2015) é um tratado global para limitar o aquecimento a 1,5-2°C."
      },
      {
        pergunta: "O que é neutralidade de carbono?",
        alternativas: [
          "Emitir mais carbono que o normal",
          "Equilibrar emissões com remoção de carbono",
          "Parar completamente de emitir carbono",
          "Usar apenas carvão vegetal"
        ],
        correta: 1,
        explicacao: "Neutralidade de carbono significa equilibrar as emissões com a remoção de carbono da atmosfera."
      },
      {
        pergunta: "Quanto a temperatura global já aumentou desde a Revolução Industrial?",
        alternativas: ["0,5°C", "Cerca de 1,1°C", "5°C", "10°C"],
        correta: 1,
        explicacao: "A temperatura média global já aumentou aproximadamente 1,1°C desde a era pré-industrial."
      }
    ]
  },
  reciclagem: {
    nome: "Reciclagem",
    icone: "♻️",
    cor: "#F39C12",
    perguntas: [
      {
        pergunta: "O que significa os 3 Rs da sustentabilidade?",
        alternativas: [
          "Rezar, Repetir, Renovar",
          "Reduzir, Reutilizar, Reciclar",
          "Recortar, Remendar, Refazer",
          "Repensar, Reprovar, Recomeçar"
        ],
        correta: 1,
        explicacao: "Os 3 Rs são: Reduzir (consumir menos), Reutilizar (usar novamente), Reciclar (transformar)."
      },
      {
        pergunta: "Quanto tempo leva para uma lata de alumínio se decompor na natureza?",
        alternativas: ["1 ano", "5 anos", "Mais de 100 anos", "200 anos"],
        correta: 2,
        explicacao: "Latas de alumínio levam de 100 a 500 anos para se decompor na natureza."
      },
      {
        pergunta: "Qual material é o mais reciclado no mundo?",
        alternativas: ["Plástico", "Vidro", "Papel", "Alumínio"],
        correta: 2,
        explicacao: "O papel é o material mais reciclado, com taxas de reciclagem acima de 60% em muitos países."
      },
      {
        pergunta: "Qual a cor da lixeira de reciclagem para plástico?",
        alternativas: ["Azul", "Vermelho", "Verde", "Amarelo"],
        correta: 1,
        explicacao: "A cor vermelha é usada para plástico na coleta seletiva padrão do Brasil."
      },
      {
        pergunta: "O que é compostagem?",
        alternativas: [
          "Processo de reciclar plásticos",
          "Transformação de resíduos orgânicos em adubo",
          "Queima de lixo",
          "Enterrar resíduos sólidos"
        ],
        correta: 1,
        explicacao: "Compostagem é a decomposição controlada de matéria orgânica para produzir fertilizante natural."
      },
      {
        pergunta: "Quantas vezes o vidro pode ser reciclado?",
        alternativas: ["5 vezes", "10 vezes", "Infinitas vezes", "3 vezes"],
        correta: 2,
        explicacao: "O vidro é 100% reciclável e pode ser reciclado infinitamente sem perder qualidade."
      },
      {
        pergunta: "O que é upcycling?",
        alternativas: [
          "Reciclagem tradicional",
          "Transformar resíduos em produtos de maior valor",
          "Jogar lixo no lixo",
          "Queimar resíduos para energia"
        ],
        correta: 1,
        explicacao: "Upcycling é o reaproveitamento criativo de materiais para criar produtos de maior valor."
      },
      {
        pergunta: "Qual país é líder mundial em reciclagem?",
        alternativas: ["Brasil", "EUA", "Alemanha", "Japão"],
        correta: 2,
        explicacao: "A Alemanha tem a maior taxa de reciclagem do mundo, com cerca de 68% dos resíduos reciclados."
      },
      {
        pergunta: "O que são resíduos eletrônicos?",
        alternativas: [
          "Lixo digital da internet",
          "Aparelhos eletrônicos descartados",
          "Cabos de energia",
          "Pilhas e baterias apenas"
        ],
        correta: 1,
        explicacao: "Resíduos eletrônicos (e-lixo) são equipamentos elétricos e eletrônicos descartados."
      },
      {
        pergunta: "Qual o destino correto de pilhas e baterias?",
        alternativas: [
          "Lixo comum",
          "Pontos de coleta específicos",
          "Pia da cozinha",
          "Lixeira azul"
        ],
        correta: 1,
        explicacao: "Pilhas e baterias contêm metais pesados tóxicos e devem ser descartadas em pontos de coleta especiais."
      }
    ]
  },
  agua: {
    nome: "Água",
    icone: "💧",
    cor: "#3498DB",
    perguntas: [
      {
        pergunta: "Qual porcentagem da água da Terra é doce e disponível para consumo?",
        alternativas: ["10%", "Menos de 1%", "5%", "25%"],
        correta: 1,
        explicacao: "Menos de 1% da água do planeta é doce e acessível para consumo humano."
      },
      {
        pergunta: "O que é o ciclo da água?",
        alternativas: [
          "Processo de tratamento de água",
          "Circulação contínua da água na natureza",
          "Movimento das ondas",
          "Caminho da água nos canos"
        ],
        correta: 1,
        explicacao: "O ciclo da água é o movimento contínuo da água entre atmosfera, solo e oceanos."
      },
      {
        pergunta: "Quantos litros de água uma pessoa consome por dia em média no Brasil?",
        alternativas: ["50L", "Cerca de 150L", "500L", "20L"],
        correta: 1,
        explicacao: "O consumo médio diário de água por pessoa no Brasil é de aproximadamente 150 litros."
      },
      {
        pergunta: "O que é uma bacia hidrográfica?",
        alternativas: [
          "Tanque de armazenamento de água",
          "Região onde a água da chuva escoa para um rio principal",
          "Represa artificial",
          "Área alagada"
        ],
        correta: 1,
        explicacao: "Bacia hidrográfica é a área onde a água da chuva escoa para um rio principal e seus afluentes."
      },
      {
        pergunta: "Qual doença está relacionada à água contaminada?",
        alternativas: ["Gripe", "Cólera", "Diabetes", "Asma"],
        correta: 1,
        explicacao: "Cólera é uma doença infecciosa intestinal transmitida por água ou alimentos contaminados."
      },
      {
        pergunta: "O que é o lençol freático?",
        alternativas: [
          "Rio superficial",
          "Reservatório de água subterrâneo",
          "Lago artificial",
          "Gelo das montanhas"
        ],
        correta: 1,
        explicacao: "Lençol freático é a camada de água subterrânea que abastece poços e nascentes."
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
        explicacao: "Reduzir o banho para 5 minutos economiza até 70 litros de água por banho."
      },
      {
        pergunta: "O que é a água virtual?",
        alternativas: [
          "Água de chuva",
          "Água usada indiretamente para produzir bens e serviços",
          "Água destilada",
          "Água mineral"
        ],
        correta: 1,
        explicacao: "Água virtual é a quantidade de água usada na produção de alimentos e produtos."
      },
      {
        pergunta: "Quantos litros de água são necessários para produzir 1kg de carne bovina?",
        alternativas: ["100L", "1.000L", "15.000L", "50L"],
        correta: 2,
        explicacao: "São necessários cerca de 15.000 litros de água para produzir 1kg de carne bovina."
      },
      {
        pergunta: "O que é dessalinização?",
        alternativas: [
          "Poluição da água doce",
          "Processo de remover sal da água do mar",
          "Evaporação natural",
          "Tratamento de esgoto"
        ],
        correta: 1,
        explicacao: "Dessalinização remove o sal da água do mar para torná-la própria para consumo."
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
        explicacao: "O Brasil tem uma matriz energética predominantemente hidrelétrica, com mais de 60% da energia vindo de hidrelétricas."
      },
      {
        pergunta: "O que é energia solar?",
        alternativas: [
          "Energia do vento",
          "Energia da luz do sol convertida em eletricidade",
          "Energia das marés",
          "Energia nuclear"
        ],
        correta: 1,
        explicacao: "Energia solar é a conversão da luz do sol em eletricidade através de painéis fotovoltaicos."
      },
      {
        pergunta: "Qual a vantagem da energia eólica?",
        alternativas: [
          "Polui o ar",
          "É renovável e não emite gases estufa",
          "É muito cara",
          "Ocupa pouco espaço"
        ],
        correta: 1,
        explicacao: "Energia eólica é limpa, renovável e não emite gases de efeito estufa durante a operação."
      },
      {
        pergunta: "O que é biomassa?",
        alternativas: [
          "Energia do vento",
          "Energia de material orgânico renovável",
          "Energia nuclear",
          "Energia solar"
        ],
        correta: 1,
        explicacao: "Biomassa é energia obtida de matéria orgânica como madeira, cana-de-açúcar e resíduos agrícolas."
      },
      {
        pergunta: "Qual país mais investe em energia solar?",
        alternativas: ["Brasil", "Alemanha", "China", "Austrália"],
        correta: 2,
        explicacao: "A China é o maior investidor em energia solar do mundo, com capacidade instalada líder global."
      },
      {
        pergunta: "O que são combustíveis fósseis?",
        alternativas: [
          "Energia do sol",
          "Combustíveis formados por matéria orgânica ao longo de milhões de anos",
          "Biocombustíveis",
          "Energia hidrelétrica"
        ],
        correta: 1,
        explicacao: "Combustíveis fósseis (petróleo, carvão, gás) são formados por restos de organismos ao longo de eras geológicas."
      },
      {
        pergunta: "O que é eficiência energética?",
        alternativas: [
          "Usar mais energia",
          "Fazer mais com menos energia",
          "Desligar tudo",
          "Usar energia nuclear"
        ],
        correta: 1,
        explicacao: "Eficiência energética é realizar a mesma tarefa consumindo menos energia."
      },
      {
        pergunta: "Qual a maior usina hidrelétrica do Brasil?",
        alternativas: ["Tucuruí", "Itaipu", "Belo Monte", "Sobradinho"],
        correta: 1,
        explicacao: "A Usina de Itaipu, na fronteira Brasil-Paraguai, é uma das maiores hidrelétricas do mundo."
      },
      {
        pergunta: "O que é energia geotérmica?",
        alternativas: [
          "Energia do sol",
          "Calor do interior da Terra usado para gerar energia",
          "Energia das ondas",
          "Energia nuclear"
        ],
        correta: 1,
        explicacao: "Energia geotérmica utiliza o calor natural do interior da Terra para gerar eletricidade."
      },
      {
        pergunta: "O que é o efeito ilha de calor urbana?",
        alternativas: [
          "Cidade mais fria que o campo",
          "Áreas urbanas mais quentes que regiões rurais vizinhas",
          "Praias artificiais",
          "Aquecimento global apenas em cidades"
        ],
        correta: 1,
        explicacao: "Ilhas de calor ocorrem em cidades devido à substituição de vegetação por concreto e asfalto."
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
          "Apenas variedade de animais",
          "Variedade de vida em todas as suas formas",
          "Número de plantas",
          "Quantidade de florestas"
        ],
        correta: 1,
        explicacao: "Biodiversidade é a variedade de vida no planeta, incluindo plantas, animais, microrganismos e ecossistemas."
      },
      {
        pergunta: "Qual país tem a maior biodiversidade do mundo?",
        alternativas: ["Estados Unidos", "Brasil", "Índia", "Austrália"],
        correta: 1,
        explicacao: "O Brasil possui a maior biodiversidade do planeta, com mais de 20% das espécies mundiais."
      },
      {
        pergunta: "O que é uma espécie endêmica?",
        alternativas: [
          "Espécie encontrada em todo o mundo",
          "Espécie exclusiva de uma região geográfica",
          "Espécie invasora",
          "Espécie extinta"
        ],
        correta: 1,
        explicacao: "Espécie endêmica é aquela que ocorre naturalmente apenas em uma região específica."
      },
      {
        pergunta: "Quantas espécies existem estimadamente no planeta?",
        alternativas: ["1 milhão", "8,7 milhões", "100 mil", "500 milhões"],
        correta: 1,
        explicacao: "Estima-se que existam cerca de 8,7 milhões de espécies no planeta, mas a maioria não foi descoberta."
      },
      {
        pergunta: "O que é extinção de espécies?",
        alternativas: [
          "Migração de animais",
          "Desaparecimento completo de uma espécie",
          "Redução populacional",
          "Mudança de habitat"
        ],
        correta: 1,
        explicacao: "Extinção é o desaparecimento total de uma espécie, quando não restam mais indivíduos vivos."
      },
      {
        pergunta: "O que são espécies invasoras?",
        alternativas: [
          "Espécies nativas da região",
          "Espécies introduzidas que prejudicam o ecossistema local",
          "Animais migratórios",
          "Plantas ornamentais"
        ],
        correta: 1,
        explicacao: "Espécies invasoras são organismos introduzidos em um ambiente onde não são nativos e causam danos."
      },
      {
        pergunta: "Qual bioma brasileiro tem a maior biodiversidade?",
        alternativas: ["Cerrado", "Mata Atlântica", "Amazônia", "Pantanal"],
        correta: 2,
        explicacao: "A Amazônia é o bioma com maior biodiversidade do planeta, abrigando milhões de espécies."
      },
      {
        pergunta: "O que é seleção natural?",
        alternativas: [
          "Seres humanos escolhem espécies",
          "Sobrevivência dos mais adaptados ao ambiente",
          "Criação artificial de espécies",
          "Extinção em massa"
        ],
        correta: 1,
        explicacao: "Seleção natural é o processo onde organismos mais adaptados ao ambiente têm maior chance de sobreviver."
      },
      {
        pergunta: "Quantas abelhas são necessárias para polinizar 1 hectare de lavoura?",
        alternativas: ["10", "100", "Milhares", "1 milhão"],
        correta: 2,
        explicacao: "Milhares de abelhas são necessárias para polinizar adequadamente lavouras como maçã e café."
      },
      {
        pergunta: "O que é a Lista Vermelha da IUCN?",
        alternativas: [
          "Lista de espécies extintas",
          "Catálogo de espécies ameaçadas de extinção",
          "Guia de espécies invasoras",
          "Lista de animais domésticos"
        ],
        correta: 1,
        explicacao: "A Lista Vermelha da IUCN (União Internacional para Conservação da Natureza) classifica espécies ameaçadas de extinção."
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
          "Apenas fumaça de carros",
          "Presença de substâncias nocivas na atmosfera",
          "Nuvens escuras",
          "Vento forte"
        ],
        correta: 1,
        explicacao: "Poluição do ar é a contaminação da atmosfera por substâncias químicas, partículas ou material biológico nocivo."
      },
      {
        pergunta: "Qual cidade brasileira teve o ar mais poluído em 2024?",
        alternativas: ["São Paulo", "Rio de Janeiro", "Manaus", "Belo Horizonte"],
        correta: 0,
        explicacao: "São Paulo frequentemente lidera rankings de poluição do ar no Brasil devido à frota de veículos."
      },
      {
        pergunta: "O que é chuva ácida?",
        alternativas: [
          "Chuva com pH neutro",
          "Precipitação com ácidos formados por poluentes atmosféricos",
          "Chuva de granizo",
          "Chuva radioativa"
        ],
        correta: 1,
        explicacao: "Chuva ácida ocorre quando poluentes como SO₂ e NOₓ reagem na atmosfera formando ácidos."
      },
      {
        pergunta: "Qual a maior fonte de poluição dos oceanos?",
        alternativas: ["Navios", "Atividades terrestres (80%)", "Turismo", "Pesca"],
        correta: 1,
        explicacao: "Cerca de 80% da poluição marinha vem de atividades terrestres, como agricultura e indústria."
      },
      {
        pergunta: "O que são microplásticos?",
        alternativas: [
          "Plásticos recicláveis",
          "Fragmentos plásticos menores que 5mm",
          "Plásticos biodegradáveis",
          "Embalagens plásticas"
        ],
        correta: 1,
        explicacao: "Microplásticos são fragmentos de plástico menores que 5mm, originados da decomposição de plásticos maiores."
      },
      {
        pergunta: "O que é poluição do solo?",
        alternativas: [
          "Apenas lixo visível",
          "Contaminação do solo por substâncias químicas ou resíduos",
          "Erosão natural",
          "Compactação do solo"
        ],
        correta: 1,
        explicacao: "Poluição do solo é a contaminação por produtos químicos, metais pesados, agrotóxicos e resíduos sólidos."
      },
      {
        pergunta: "O que é poluição sonora?",
        alternativas: [
          "Barulho natural da natureza",
          "Ruído excessivo causado por atividades humanas que prejudica a saúde",
          "Música alta em festas",
          "Som dos animais"
        ],
        correta: 1,
        explicacao: "Poluição sonora é o excesso de ruído que causa danos à saúde física e mental."
      },
      {
        pergunta: "Qual metal pesado é tóxico e encontrado em pilhas?",
        alternativas: ["Ferro", "Cádmio", "Alumínio", "Cobre"],
        correta: 1,
        explicacao: "O cádmio é um metal pesado altamente tóxico presente em pilhas e baterias."
      },
      {
        pergunta: "O que é o esgoto não tratado?",
        alternativas: [
          "Água limpa",
          "Resíduos líquidos descartados sem tratamento adequado",
          "Água da chuva",
          "Água mineral"
        ],
        correta: 1,
        explicacao: "Esgoto não tratado contém dejetos humanos e químicos que contaminam rios e aquíferos."
      },
      {
        pergunta: "Quantas pessoas morrem por ano devido à poluição do ar?",
        alternativas: ["1.000", "100.000", "7 milhões", "1 bilhão"],
        correta: 2,
        explicacao: "A OMS estima que cerca de 7 milhões de mortes prematuras por ano são causadas pela poluição do ar."
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
          "Crescer economicamente a qualquer custo",
          "Suprir necessidades atuais sem comprometer as futuras gerações",
          "Parar o desenvolvimento",
          "Apenas proteger florestas"
        ],
        correta: 1,
        explicacao: "Desenvolvimento sustentável atende às necessidades do presente sem comprometer as gerações futuras."
      },
      {
        pergunta: "Quais são os três pilares da sustentabilidade?",
        alternativas: [
          "Social, Cultural e Político",
          "Ambiental, Social e Econômico",
          "Saúde, Educação e Lazer",
          "Tecnologia, Inovação e Ciência"
        ],
        correta: 1,
        explicacao: "Os três pilares da sustentabilidade são: ambiental, social e econômico."
      },
      {
        pergunta: "O que é consumo consciente?",
        alternativas: [
          "Comprar sem pensar",
          "Escolher produtos considerando impactos ambientais e sociais",
          "Comprar apenas marcas caras",
          "Consumir tudo que se vê"
        ],
        correta: 1,
        explicacao: "Consumo consciente é a escolha de produtos e serviços considerando seus impactos socioambientais."
      },
      {
        pergunta: "O que é a Agenda 2030 da ONU?",
        alternativas: [
          "Calendário de eventos",
          "Plano global com 17 Objetivos de Desenvolvimento Sustentável",
          "Agenda de reuniões ambientais",
          "Plano de reciclagem"
        ],
        correta: 1,
        explicacao: "A Agenda 2030 é um plano global da ONU com 17 ODS para alcançar um futuro sustentável."
      },
      {
        pergunta: "O que é agricultura sustentável?",
        alternativas: [
          "Agricultura com muitos agrotóxicos",
          "Produção de alimentos sem degradar o meio ambiente",
          "Agricultura em larga escala",
          "Plantio apenas de soja"
        ],
        correta: 1,
        explicacao: "Agricultura sustentável produz alimentos respeitando o meio ambiente e a justiça social."
      },
      {
        pergunta: "O que é uma cidade sustentável?",
        alternativas: [
          "Cidade com muitos carros",
          "Cidade planejada para equilibrar desenvolvimento e qualidade de vida",
          "Cidade sem indústrias",
          "Cidade com arranha-céus"
        ],
        correta: 1,
        explicacao: "Cidades sustentáveis buscam equilibrar crescimento urbano com qualidade ambiental e social."
      },
      {
        pergunta: "O que é economia circular?",
        alternativas: [
          "Economia tradicional",
          "Modelo que elimina resíduos mantendo materiais em uso contínuo",
          "Economia baseada em petróleo",
          "Reciclagem apenas"
        ],
        correta: 1,
        explicacao: "Economia circular mantém produtos e materiais em uso pelo maior tempo possível, reduzindo resíduos."
      },
      {
        pergunta: "O que é certificação ambiental?",
        alternativas: [
          "Multa ambiental",
          "Selos que atestam práticas sustentáveis de produtos/empresas",
          "Licença para poluir",
          "Registro de áreas verdes"
        ],
        correta: 1,
        explicacao: "Certificações ambientais como FSC e ISO 14001 atestam práticas sustentáveis de produtos e empresas."
      },
      {
        pergunta: "Qual o objetivo do ODS 13?",
        alternativas: [
          "Erradicar a pobreza",
          "Ação contra a mudança global do clima",
          "Educação de qualidade",
          "Vida na água"
        ],
        correta: 1,
        explicacao: "O ODS 13 visa tomar medidas urgentes para combater as mudanças climáticas e seus impactos."
      },
      {
        pergunta: "O que é ESG?",
        alternativas: [
          "Empresa Sem Gerenciamento",
          "Environmental, Social and Governance (Ambiental, Social e Governança)",
          "Economia Sustentável Global",
          "Energia Solar Garantida"
        ],
        correta: 1,
        explicacao: "ESG são critérios ambientais, sociais e de governança usados para avaliar a sustentabilidade de empresas."
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
        pergunta: "Quantas espécies são estimadas como ameaçadas de extinção atualmente?",
        alternativas: ["1.000", "10.000", "Mais de 40.000", "100.000"],
        correta: 2,
        explicacao: "Mais de 40.000 espécies estão listadas como ameaçadas na Lista Vermelha da IUCN."
      },
      {
        pergunta: "Qual animal brasileiro é símbolo da luta contra a extinção?",
        alternativas: ["Arara-azul", "Tatu-bola", "Mico-leão-dourado", "Lobo-guará"],
        correta: 2,
        explicacao: "O mico-leão-dourado é um símbolo da conservação no Brasil, após décadas de esforços para salvá-lo."
      },
      {
        pergunta: "O que é a IUCN?",
        alternativas: [
          "Instituto de Urbanismo e Conservação",
          "União Internacional para Conservação da Natureza",
          "Organização Mundial dos Animais",
          "Fundo Ambiental Global"
        ],
        correta: 1,
        explicacao: "A IUCN é a principal autoridade global sobre o status de conservação de espécies."
      },
      {
        pergunta: "Qual a principal causa da extinção de espécies hoje?",
        alternativas: ["Caça esportiva", "Perda de habitat", "Mudanças naturais", "Poluição sonora"],
        correta: 1,
        explicacao: "A perda de habitat devido a atividades humanas é a principal causa de extinção de espécies."
      },
      {
        pergunta: "O que é uma espécie criticamente ameaçada?",
        alternativas: [
          "Espécie sem risco",
          "Espécie com risco extremamente alto de extinção na natureza",
          "Espécie já extinta",
          "Espécie em recuperação"
        ],
        correta: 1,
        explicacao: "Criticamente ameaçada é a categoria mais grave antes da extinção na natureza."
      },
      {
        pergunta: "Qual animal está criticamente ameaçado na Mata Atlântica?",
        alternativas: ["Capivara", "Tamanduá-bandeira", "Muriqui-do-norte", "Tucano"],
        correta: 2,
        explicacao: "O muriqui-do-norte é um dos primatas mais ameaçados do mundo, restrito à Mata Atlântica."
      },
      {
        pergunta: "O que é a CITES?",
        alternativas: [
          "Tratado sobre comércio internacional de espécies ameaçadas",
          "Lei de proteção animal brasileira",
          "Conferência sobre energia",
          "Acordo climático global"
        ],
        correta: 0,
        explicacao: "CITES regula o comércio internacional de espécies ameaçadas de extinção."
      },
      {
        pergunta: "Quantas onças-pintadas restam na Amazônia?",
        alternativas: ["10.000+", "Menos de 500", "Cerca de 2.000", "100.000"],
        correta: 0,
        explicacao: "Estima-se que existam mais de 10.000 onças-pintadas na Amazônia brasileira."
      },
      {
        pergunta: "O que é extinção em massa?",
        alternativas: [
          "Evento natural raro",
          "Extinção de várias espécies em curto período geológico",
          "Migração de espécies",
          "Nova espécie surgindo"
        ],
        correta: 1,
        explicacao: "Extinção em massa é a perda de um grande número de espécies em um período geologicamente curto."
      },
      {
        pergunta: "Qual bioma brasileiro perdeu mais espécies?",
        alternativas: ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
        correta: 1,
        explicacao: "A Mata Atlântica perdeu mais de 90% de sua área original, causando a maior perda de espécies."
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
          "Agricultura com agrotóxicos",
          "Cultivo sem fertilizantes sintéticos ou pesticidas",
          "Plantio em estufas",
          "Agricultura mecanizada"
        ],
        correta: 1,
        explicacao: "Agricultura orgânica dispensa insumos sintéticos, usando métodos naturais de cultivo."
      },
      {
        pergunta: "O que é rotação de culturas?",
        alternativas: [
          "Plantar sempre a mesma cultura",
          "Alternar diferentes culturas no mesmo solo",
          "Deixar o solo descansar",
          "Plantar em círculos"
        ],
        correta: 1,
        explicacao: "Rotação de culturas alterna plantações para preservar nutrientes do solo e evitar pragas."
      },
      {
        pergunta: "O que são agrotóxicos?",
        alternativas: [
          "Fertilizantes naturais",
          "Produtos químicos para controle de pragas",
          "Sementes modificadas",
          "Irrigação artificial"
        ],
        correta: 1,
        explicacao: "Agrotóxicos são produtos químicos usados para controlar pragas, ervas daninhas e doenças."
      },
      {
        pergunta: "O que é agrofloresta?",
        alternativas: [
          "Plantio de uma única árvore",
          "Sistema que integra árvores com cultivos agrícolas",
          "Floresta nativa preservada",
          "Queimada controlada"
        ],
        correta: 1,
        explicacao: "Agrofloresta combina árvores com culturas agrícolas, imitando ecossistemas naturais."
      },
      {
        pergunta: "O que é o plantio direto?",
        alternativas: [
          "Arar a terra antes de plantar",
          "Plantar sem revolver o solo",
          "Plantar em vasos",
          "Apenas colher"
        ],
        correta: 1,
        explicacao: "Plantio direto preserva a estrutura do solo ao não revolver a terra antes do plantio."
      },
      {
        pergunta: "Qual a vantagem da agricultura familiar?",
        alternativas: [
          "Produz em grande escala",
          "Gera menos impacto ambiental e mais empregos",
          "Usa mais agrotóxicos",
          "Exporta mais"
        ],
        correta: 1,
        explicacao: "Agricultura familiar é responsável por grande parte dos alimentos no Brasil com menor impacto ambiental."
      },
      {
        pergunta: "O que são transgênicos?",
        alternativas: [
          "Organismos geneticamente modificados em laboratório",
          "Plantas nativas",
          "Fertilizantes orgânicos",
          "Sementes crioulas"
        ],
        correta: 0,
        explicacao: "Transgênicos são organismos com material genético alterado artificialmente."
      },
      {
        pergunta: "O que é a agricultura regenerativa?",
        alternativas: [
          "Agricultura que degrada o solo",
          "Práticas que restauram a saúde do solo e ecossistemas",
          "Agricultura industrial",
          "Monocultura"
        ],
        correta: 1,
        explicacao: "Agricultura regenerativa visa restaurar ecossistemas, melhorar o solo e sequestrar carbono."
      },
      {
        pergunta: "O que são sementes crioulas?",
        alternativas: [
          "Sementes transgênicas",
          "Sementes tradicionais adaptadas localmente por agricultores",
          "Sementes patenteadas",
          "Sementes importadas"
        ],
        correta: 1,
        explicacao: "Sementes crioulas são variedades tradicionais cultivadas e selecionadas por agricultores ao longo de gerações."
      },
      {
        pergunta: "O que é permacultura?",
        alternativas: [
          "Cultura permanente de uma planta",
          "Sistema de design ecológico para assentamentos humanos sustentáveis",
          "Agricultura em estufas",
          "Criação de animais confinados"
        ],
        correta: 1,
        explicacao: "Permacultura é um sistema de design que cria habitats humanos sustentáveis imitando ecossistemas naturais."
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
          "Apenas terra suja",
          "Camada superficial da crosta terrestre onde as plantas crescem",
          "Rocha pura",
          "Água subterrânea"
        ],
        correta: 1,
        explicacao: "O solo é a camada superior da crosta terrestre, formada por minerais, matéria orgânica e organismos."
      },
      {
        pergunta: "Quantos anos leva para formar 1cm de solo fértil?",
        alternativas: ["1 ano", "10 anos", "100 a 1.000 anos", "1 milhão de anos"],
        correta: 2,
        explicacao: "A formação de 1cm de solo fértil pode levar de 100 a 1.000 anos."
      },
      {
        pergunta: "O que é erosão do solo?",
        alternativas: [
          "Fertilização natural",
          "Desgaste do solo pela água, vento ou atividades humanas",
          "Crescimento de plantas",
          "Compactação do solo"
        ],
        correta: 1,
        explicacao: "Erosão é o processo de desgaste e transporte de partículas do solo por agentes naturais."
      },
      {
        pergunta: "O que é desertificação?",
        alternativas: [
          "Transformação de desertos em florestas",
          "Degradação do solo em regiões áridas tornando-o improdutivo",
          "Expansão natural de desertos",
          "Plantio em áreas secas"
        ],
        correta: 1,
        explicacao: "Desertificação é a degradação do solo em áreas secas, causada por atividades humanas e mudanças climáticas."
      },
      {
        pergunta: "O que são minerais?",
        alternativas: [
          "Apenas pedras preciosas",
          "Substâncias naturais sólidas com composição química definida",
          "Restos de plantas",
          "Água congelada"
        ],
        correta: 1,
        explicacao: "Minerais são substâncias naturais, inorgânicas, com estrutura cristalina e composição química definida."
      },
      {
        pergunta: "O que é mineração sustentável?",
        alternativas: [
          "Extrair o máximo possível",
          "Extração de minerais com menor impacto ambiental possível",
          "Proibição total da mineração",
          "Mineração artesanal"
        ],
        correta: 1,
        explicacao: "Mineração sustentável busca equilibrar extração mineral com preservação ambiental e responsabilidade social."
      },
      {
        pergunta: "O que são aquíferos?",
        alternativas: [
          "Rios superficiais",
          "Reservatórios de água subterrânea em formações rochosas",
          "Lagos artificiais",
          "Geladeiras naturais"
        ],
        correta: 1,
        explicacao: "Aquíferos são formações geológicas que armazenam e transmitem água subterrânea."
      },
      {
        pergunta: "Qual o maior aquífero do Brasil?",
        alternativas: ["Aquífero Guarani", "Aquífero Alter do Chão", "Aquífero Cabeças", "Aquífero Urucuia"],
        correta: 0,
        explicacao: "O Aquífero Guarani é um dos maiores do mundo, estendendo-se por Brasil, Argentina, Paraguai e Uruguai."
      },
      {
        pergunta: "O que é o ciclo das rochas?",
        alternativas: [
          "Processo de construção civil",
          "Transformação contínua entre rochas magmáticas, sedimentares e metamórficas",
          "Erosão de montanhas",
          "Movimento das placas tectônicas"
        ],
        correta: 1,
        explicacao: "O ciclo das rochas descreve como os três tipos de rocha se transformam uns nos outros ao longo do tempo."
      },
      {
        pergunta: "O que são recursos minerais não renováveis?",
        alternativas: [
          "Recursos que se regeneram rapidamente",
          "Minerais que levam milhões de anos para se formar",
          "Recursos infinitos",
          "Materiais recicláveis"
        ],
        correta: 1,
        explicacao: "Recursos minerais não renováveis levam milhões de anos para se formar, sendo finitos na escala humana."
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
          "Cidade planejada para equilíbrio entre desenvolvimento e qualidade ambiental",
          "Cidade sem prédios",
          "Cidade com indústrias"
        ],
        correta: 1,
        explicacao: "Cidades sustentáveis buscam equilibrar crescimento econômico com justiça social e preservação ambiental."
      },
      {
        pergunta: "O que são áreas verdes urbanas?",
        alternativas: [
          "Estacionamentos",
          "Parques, praças e jardins que melhoram a qualidade de vida na cidade",
          "Terrenos baldios",
          "Campos de futebol"
        ],
        correta: 1,
        explicacao: "Áreas verdes urbanas proporcionam benefícios ambientais, sociais e de saúde para a população."
      },
      {
        pergunta: "O que é mobilidade urbana sustentável?",
        alternativas: [
          "Usar apenas carros",
          "Sistemas de transporte que priorizam deslocamentos com baixo impacto ambiental",
          "Construir mais estradas",
          "Proibir transportes públicos"
        ],
        correta: 1,
        explicacao: "Mobilidade sustentável prioriza transportes públicos, bicicletas e deslocamentos a pé."
      },
      {
        pergunta: "O que são telhados verdes?",
        alternativas: [
          "Telhados pintados de verde",
          "Coberturas vegetais em edifícios que trazem benefícios ambientais",
          "Telhados de vidro",
          "Jardins no chão"
        ],
        correta: 1,
        explicacao: "Telhados verdes são coberturas com vegetação que melhoram o isolamento térmico e reduzem enchentes."
      },
      {
        pergunta: "O que é o conceito de 'cidade-esponja'?",
        alternativas: [
          "Cidade que absorve água da chuva para prevenir enchentes",
          "Cidade submersa",
          "Cidade com muitos lagos",
          "Cidade que flutua"
        ],
        correta: 0,
        explicacao: "Cidades-esponja usam infraestrutura verde para absorver e gerenciar águas pluviais naturalmente."
      },
      {
        pergunta: "O que são ciclovias?",
        alternativas: [
          "Estradas para carros",
          "Espaços exclusivos para circulação de bicicletas",
          "Calçadas para pedestres",
          "Pistas de corrida"
        ],
        correta: 1,
        explicacao: "Ciclovias são espaços segregados para bicicletas, promovendo mobilidade ativa e reduzindo emissões."
      },
      {
        pergunta: "Qual cidade brasileira é referência em sustentabilidade urbana?",
        alternativas: ["São Paulo", "Curitiba", "Manaus", "Belo Horizonte"],
        correta: 1,
        explicacao: "Curitiba é referência mundial em planejamento urbano sustentável, com seu sistema de transporte e áreas verdes."
      },
      {
        pergunta: "O que é eficiência energética em edifícios?",
        alternativas: [
          "Usar mais energia",
          "Projetar construções que consomem menos energia",
          "Instalar ar condicionado potente",
          "Deixar luzes acesas"
        ],
        correta: 1,
        explicacao: "Edifícios eficientes usam design e tecnologias para minimizar o consumo de energia."
      },
      {
        pergunta: "O que é coleta seletiva urbana?",
        alternativas: [
          "Juntar todo o lixo junto",
          "Separação de resíduos recicláveis na fonte para coleta diferenciada",
          "Queimar lixo",
          "Enterrar resíduos"
        ],
        correta: 1,
        explicacao: "Coleta seletiva separa resíduos recicláveis dos orgânicos e rejeitos na própria fonte geradora."
      },
      {
        pergunta: "O que são corredores verdes urbanos?",
        alternativas: [
          "Avenidas arborizadas",
          "Rotas ecológicas que conectam áreas verdes na cidade",
          "Estradas rurais",
          "Túneis subterrâneos"
        ],
        correta: 1,
        explicacao: "Corredores verdes conectam parques e áreas verdes, permitindo deslocamento de fauna e flora."
      }
    ]
  }
};
