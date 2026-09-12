# 🌤️ Weather Forecast App

Aplicação web moderna e responsiva para consulta de previsão do tempo em tempo real, utilizando a API do OpenWeatherMap.

Projeto desenvolvido para fornecer informações meteorológicas detalhadas de qualquer cidade do mundo. Com uma interface intuitiva e design responsivo, o usuário pode consultar temperatura, umidade, velocidade do vento, nascer e pôr do sol, além de outras informações relevantes.

> **Disciplina**: Webservices  
> **Curso**: Sistemas para Internet  
> **Tipo**: Atividade de Programação Individual

<br>

## 🔍 Prévia

<img src="/img/readme-imgs/readme-img1.png" width="800" alt="Página exemplo1">

<img src="/img/readme-imgs/readme-img2.png" width="800" alt="Página exemplo1">

<br>

## 🌐 Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5.3.8**
- **Bootstrap Icons**
- **Animate.css**
- **OpenWeatherMap API**

<br>

## 📦 Pré-requisitos

- Uma chave API do OpenWeatherMap (gratuita)

<br>

## ✨ Funcionalidades

- 🔍 **Busca de Cidades**: Pesquise o clima e outras informações de qualquer cidade do mundo
- 📝 **Histórico de Buscas**: Guarda até 8 cidades pesquisadas recentemente
- 🎨 **Tema Dinâmico**: O fundo muda de cor baseado na temperatura
- 📱 **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Animações Suaves**: Interface moderna com transições fluidas

<br>

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/hugovrp/weather-forecast.git
cd weather-forecast
```

Configure sua chave API:

```javascript
// Abra o arquivo `js/script.js` e localize a linha:
const API_KEY = 'SUA_CHAVE_API';
```

Após isso, é só abrir o arquivo `index.html` no navegador.

<br>

### 📝 Obtendo sua chave API

1. Acesse [OpenWeatherMap](https://openweathermap.org/)
2. Clique em **Sign Up** no canto superior direito
3. Preencha o formulário de cadastro e confirme seu email
4. Após fazer login, vá até a seção **API Keys**
5. Copie sua chave API (algo como: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

> **⏰ Atenção**: Após gerar sua API Key, pode levar alguns minutos (até 2 horas) para ela ser ativada pelo OpenWeatherMap.

#### 🔐 Segurança da API Key - NÃO COMPARTILHE SUA CHAVE

**Por que não compartilhar?**

1. **Limite de requisições**: A API gratuita do OpenWeatherMap tem um limite de 1.000 chamadas por dia e 60 chamadas por minuto
2. **Uso indevido**: Outras pessoas podem usar sua chave e esgotar seu limite
3. **Segurança**: Sua conta e dados podem ficar comprometidos