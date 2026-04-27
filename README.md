# Jujutsu Kaisen RPG System para Foundry VTT v13

Um sistema customizado para Foundry VTT v13 baseado no universo de Jujutsu Kaisen, com uma ficha de personagem elegante em estilo cyberpunk noir.

## Características Principais

### Ficha de Personagem

A ficha de personagem oferece uma interface intuitiva com múltiplas abas:

- **Inventário**: Gerencie equipamentos, itens e armas. Suporta drag-and-drop do Foundry para adicionar itens.
- **Combate**: Visualize todos os itens equipados do personagem em um único lugar.
- **Magias**: Gerencie técnicas de Jujutsu e habilidades mágicas com níveis e custos.
- **Status**: Visualize e edite os atributos
- **Informações**: Dados básicos do personagem (nome, level, idade, gênero, cargo, grau, clã).
- **Biografia**: Editor de texto para notas e história do personagem.
- **Configurações**: Ajustes gerais da ficha.

### Recursos do Sistema

#### Itens

O sistema suporta três tipos de itens:

1. **Equipamento**: Armaduras, acessórios e itens diversos
   - Quantidade, peso, valor
   - Nível de armadura
   - Raridade (Comum, Incomum, Raro, Lendário, Mítico)
   - Efeitos especiais

2. **Magia**: Técnicas de Jujutsu e habilidades mágicas
   - Nível da técnica
   - Custo de energia
   - Tempo de lançamento
   - Alcance e duração
   - Dano e tipo de dano
   - Teste de resistência

3. **Arma**: Armas de combate
   - Dano base
   - Tipo de dano (Corte, Perfuração, Impacto, Mágico, etc.)
   - Alcance
   - Intervalo crítico e multiplicador
   - Propriedades especiais

#### Recursos de Personagem

- **Pontos de Vida**: Barra visual com indicador numérico
- **Exaustão**: Indicadores visuais de cansaço
- **Level**: Exibido em badge no avatar do personagem

### Design Visual

O sistema utiliza uma estética **Cyberpunk Noir Elegante** com:

- Fundo preto profundo com gradientes sutis
- Acentos neon em rosa magenta, ciano e roxo
- Bordas com efeito de glow
- Animações suaves e transições fluidas
- Tipografia monoespaçada para um visual técnico
- Responsividade para diferentes tamanhos de tela

## Instalação

1. Copie a pasta `foundry-system` para o diretório de sistemas do Foundry VTT:
   ```
   Data/systems/jujutsu-kaisen-system/
   ```

2. Reinicie o Foundry VTT

3. Ao criar um novo mundo, selecione "Jujutsu Kaisen RPG System" como sistema

## Uso

### Criar um Personagem

1. No seu mundo, clique em "Create Actor"
2. Selecione "Personagem" como tipo
3. A ficha será aberta automaticamente

### Adicionar Itens

Você pode adicionar itens de três formas:

1. **Via botão "Adicionar Item"**: Clique no botão na aba correspondente (Inventário, Magias, etc.)
2. **Via Drag-and-Drop**: Arraste itens do Foundry diretamente para a ficha
3. **Criando itens individuais**: Crie itens no mundo e adicione-os ao personagem

### Equipar Itens

- Clique no ícone de círculo ao lado de um item para equipá-lo
- Itens equipados aparecem na aba "Combate"
- Itens equipados são destacados com borda rosa

### Editar Atributos

Todos os campos são editáveis:
- Clique em qualquer campo para editar
- Os valores são salvos automaticamente

## Estrutura de Arquivos

```
foundry-system/
├── system.json                    # Configuração do sistema
├── README.md                      # Este arquivo
├── module/
│   ├── jujutsu-system.js         # Arquivo principal do módulo
│   ├── sheets/
│   │   ├── character-sheet.js    # Folha de personagem
│   │   └── item-sheet.js         # Folha de item
│   └── data/
│       ├── actor/
│       │   └── character.js      # Modelo de dados do personagem
│       └── item/
│           ├── equipment.js      # Modelo de dados de equipamento
│           ├── spell.js          # Modelo de dados de magia
│           └── weapon.js         # Modelo de dados de arma
├── templates/
│   ├── actor/
│   │   └── character-sheet.html  # Template da ficha
│   └── item/
│       └── item-sheet.html       # Template de item
├── styles/
│   └── jujutsu-system.css        # Estilos CSS
└── lang/
    ├── pt-BR.json               # Tradução português
    └── en.json                  # Tradução inglês
```

## Personalização

### Modificar Cores

Edite as variáveis CSS em `styles/jujutsu-system.css`:

```css
:root {
  --jk-accent-pink: #ff1493;    /* Rosa magenta */
  --jk-accent-cyan: #00ffff;    /* Ciano */
  --jk-accent-purple: #9d00ff;  /* Roxo */
  --jk-accent-green: #39ff14;   /* Verde neon */
}
```

### Adicionar Novos Atributos

1. Edite `module/data/actor/character.js`
2. Adicione um novo campo no `defineSchema()`
3. Atualize o template `templates/actor/character-sheet.html`

### Adicionar Novos Tipos de Itens

1. Crie um novo arquivo em `module/data/item/`
2. Registre em `module/jujutsu-system.js`
3. Crie um template em `templates/item/`
4. Atualize `system.json`

## Suporte e Contribuições

Para reportar bugs ou sugerir melhorias, entre em contato através do repositório do projeto.

## Licença

MIT License - Sinta-se livre para usar e modificar conforme necessário.

## Créditos

Desenvolvido com ❤️ para a comunidade de Foundry VTT
