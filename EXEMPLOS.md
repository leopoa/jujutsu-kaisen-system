# Exemplos de Uso - Sistema Jujutsu Kaisen

Este documento fornece exemplos de como usar o sistema Jujutsu Kaisen RPG para Foundry VTT.

## Criando um Personagem

### Dados Básicos

Ao criar um novo personagem, você pode definir:

- **Nome**: O nome do seu personagem
- **Level**: Nível de poder (1-100)
- **Idade**: Idade do personagem
- **Gênero**: Masculino, Feminino, Outro
- **Cargo**: Posição na organização (Ex: Estudante, Mestre, Executor)
- **Grau**: Classificação de poder (Ex: Grau 1, Grau 2, Especial)
- **Clã**: Clã ou organização (Ex: Clã Zenin, Clã Kamo)

### Atributos

O sistema possui 8 atributos principais:

| Atributo | Descrição | Uso Típico |
|----------|-----------|-----------|
| Força | Poder físico bruto | Dano em combate corpo a corpo |
| Agilidade | Velocidade e reflexos | Esquiva e iniciativa |
| Vigor | Resistência física | Pontos de vida e resistência |
| Destreza | Precisão e controle | Ataques à distância |
| Percepção | Capacidade sensorial | Detectar emboscadas |
| Inteligência | Raciocínio e conhecimento | Usar técnicas complexas |
| Jujutsu | Controle de energia mágica | Usar técnicas de Jujutsu |
| Vontade | Determinação mental | Resistir a efeitos mentais |

### Exemplo de Personagem

```
Nome: Yuji Itadori
Level: 15
Idade: 16 anos
Gênero: Masculino
Cargo: Estudante
Grau: Grau 2
Clã: Sem clã

Atributos:
- Força: 14
- Agilidade: 15
- Vigor: 16
- Destreza: 13
- Percepção: 12
- Inteligência: 11
- Jujutsu: 18
- Vontade: 16
```

## Adicionando Itens

### Equipamento

Exemplo de equipamento:

```
Nome: Uniforme de Executor
Tipo: Equipamento
Quantidade: 1
Peso: 2 kg
Valor: 500 moedas
Raridade: Incomum
Armadura: 2
Efeitos: +1 em Percepção durante combate
Descrição: Uniforme padrão dos executores de Jujutsu
```

### Armas

Exemplo de arma:

```
Nome: Espada Katana
Tipo: Arma
Dano: 8
Tipo de Dano: Corte
Peso: 1.2 kg
Valor: 800 moedas
Raridade: Raro
Alcance: Corpo a corpo
Intervalo Crítico: 18-20
Multiplicador Crítico: 2
Propriedades: Versátil, Afiada
Descrição: Uma katana de aço de alta qualidade
```

### Magias (Técnicas de Jujutsu)

Exemplo de magia:

```
Nome: Expansão de Domínio
Tipo: Magia
Level: 5
Custo: 50 energia
Tempo de Lançamento: 1 ação
Alcance: 20 metros
Duração: 1 minuto
Componentes: Energia mágica concentrada
Dano: 15
Tipo de Dano: Mágico
Teste de Resistência: Vontade (CD 15)
Escola: Jujutsu
Descrição: Cria um domínio que afeta todos os inimigos dentro do alcance
```

## Gerenciando Combate

### Equipar Itens

1. Vá para a aba "Inventário"
2. Clique no ícone de círculo ao lado do item
3. O item será marcado como equipado
4. Itens equipados aparecem automaticamente na aba "Combate"

### Visualizar Equipamento em Combate

Na aba "Combate", você verá:

- Todas as armas equipadas com seu dano
- Todos os equipamentos com sua armadura
- Todas as técnicas de Jujutsu equipadas

### Exemplo de Combate

```
EQUIPAMENTO EM COMBATE:

Armas:
- Espada Katana (Dano: 8)

Equipamento:
- Uniforme de Executor (Armadura: 2)

Técnicas:
- Expansão de Domínio (Dano: 15)
- Ataque Direto (Dano: 12)
```

## Usando Magias

### Adicionar Técnicas de Jujutsu

1. Vá para a aba "Magias"
2. Clique em "Adicionar Magia"
3. Preencha os dados da técnica
4. Clique em equipar para usá-la em combate

### Tipos de Técnicas

O sistema suporta diferentes escolas de Jujutsu:

- **Técnicas Ofensivas**: Ataques diretos com dano
- **Técnicas Defensivas**: Proteção e resistência
- **Técnicas de Suporte**: Buffs e efeitos positivos
- **Técnicas de Controle**: Limitação de movimento

## Editando Biografia

A aba "Biografia" permite escrever a história do seu personagem:

- Antecedentes
- Motivações
- Relacionamentos
- Objetivos
- Notas de campanha

Exemplo:

```
Yuji Itadori é um jovem estudante de Jujutsu que engoliu um dedo de Sukuna,
tornando-se um recipiente do Rei das Maldições. Apesar disso, mantém sua
humanidade e busca ajudar outros através do Jujutsu.

Objetivos:
- Dominar o poder de Sukuna
- Proteger seus amigos
- Encontrar uma forma de se livrar da maldição
```

## Dicas e Truques

### Drag-and-Drop

Você pode arrastar itens do Foundry diretamente para a ficha:

1. Crie um item no seu mundo
2. Arraste-o para a aba "Inventário" da ficha
3. O item será adicionado automaticamente

### Edição Rápida

Todos os campos são editáveis:
- Clique em um campo para editar
- Pressione Enter para salvar
- Os valores são salvos automaticamente

### Organização de Itens

Organize seus itens por raridade:
- **Comum**: Itens básicos
- **Incomum**: Itens melhorados
- **Raro**: Itens poderosos
- **Lendário**: Itens muito raros
- **Mítico**: Itens únicos

## Troubleshooting

### Itens não aparecem

- Certifique-se de que o item foi criado no tipo correto (Equipment, Spell, Weapon)
- Verifique se o item foi adicionado ao personagem correto
- Recarregue a ficha (F5)

### Valores não salvam

- Certifique-se de que o campo está ativo
- Pressione Enter após editar
- Verifique o console do navegador para erros

### Ficha não carrega

- Verifique se o sistema está instalado corretamente
- Recarregue o Foundry
- Verifique se há erros no console do navegador

## Próximos Passos

1. Crie seus personagens
2. Adicione itens e técnicas
3. Comece a jogar!
4. Customize o sistema conforme necessário

Divirta-se no universo de Jujutsu Kaisen! ⚡
