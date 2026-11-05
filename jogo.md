# 🌲 Sobrevivência na Amazônia: A Jornada de Carlos

Um RPG de texto imersivo jogado diretamente no terminal, desenvolvido em Node.js. Neste jogo, assumes o papel de Carlos, um sobrevivente de uma queda de avião que precisa de atravessar a densa e perigosa selva amazónica para chegar à civilização.

## ✨ Características do Jogo

* **Sistema de Sobrevivência Dinâmico:** Gere os teus recursos vitais (Vida, Fome e Sede). O desgaste da caminhada pune a inanição e a desidratação.
* **Inventário Interativo:** Encontra e utiliza itens essenciais como uma machadinha, um isqueiro, ração militar e um copo de alumínio. As tuas posses ditam as tuas chances de sobrevivência.
* **Eventos Aleatórios:** Enfrenta perigos imprevisíveis a cada turno, desde nuvens de mosquitos venenosos a ataques mortais de onças-pintadas.
* **Múltiplos Cenários:** Explora diferentes locais em cada fase, desde o local do acidente, margens do rio, cavernas escuras, até uma tribo indígena isolada.
* **Decisões com Consequências:** Cada escolha nos locais afeta os teus atributos e os itens que consegues recolher.

## 🛠️ Pré-requisitos

Para correres este jogo no teu computador, precisas de ter o **Node.js** instalado.

* [Download do Node.js](https://nodejs.org/)

## 🚀 Como Instalar e Jogar

1. **Clona ou descarrega o repositório** para a tua máquina.
2. Abre o terminal e navega até à pasta do projeto:
```bash
cd RPG-JovemDEV

```


3. **Instala as dependências** (o jogo utiliza a biblioteca `prompt-sync` para ler os inputs do teclado):
```bash
npm install

```


4. **Inicia o jogo**:
```bash
node jogo.js

```



## 📂 Estrutura do Projeto

A arquitetura do código foi desenhada de forma modular para facilitar a escalabilidade e a manutenção:

* `jogo.js` -> O ficheiro principal que contém o loop do jogo e a lógica de progressão entre fases.
* `estado/`
* `personagem.js` -> Define o inventário, os itens disponíveis e os atributos vitais do Carlos (Vida, Fome, Sede, Veneno).


* `mecanicas/`
* `eventos.js` -> Responsável pelo desgaste de recursos a cada turno (função `passarTurno`) e pelo gerador de números aleatórios dos perigos da selva (`gerarEventoAleatorio`).


* `locais/`
* Ficheiros modulares (`acidente.js`, `rio.js`, `caverna.js`, `tribo.js`, `cidade.js`) que controlam a narrativa e as escolhas do jogador em cada área específica.



## 🎮 Dicas de Sobrevivência

1. **Fome e Sede não são brincadeira:** Se qualquer um destes valores chegar a 0, a tua vida começará a descer drasticamente.
2. **Prepara-te para o pior:** Uma onça pode atacar a qualquer momento. Explora bem os cenários para encontrares armas (como a machadinha) que reduzem o dano sofrido.
3. **Pensa no longo prazo:** Comer agora ou guardar a ração? Pescar e gastar energia ou seguir em frente? As tuas escolhas ditam o teu destino.