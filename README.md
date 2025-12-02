# 🌤️ Weather Forecast App

Aplicação web moderna e responsiva para consulta de previsão do tempo em tempo real, utilizando a API do OpenWeatherMap.

![Status](https://img.shields.io/badge/Status-Ativo-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para fornecer informações meteorológicas detalhadas de qualquer cidade do mundo. Com uma interface intuitiva e design responsivo, o usuário pode consultar temperatura, umidade, velocidade do vento, nascer e pôr do sol, além de outras informações relevantes.


> **Disciplina**: Webservice  
> **Curso**: Sistemas para Internet  
> **Tipo**: Atividade de Programação Individual
> 
---

### ✨ Funcionalidades

- 🔍 **Busca de Cidades**: Pesquise o clima de qualquer cidade do mundo
- 📊 **Informações Detalhadas**: Temperatura atual, máxima, mínima, sensação térmica, umidade, pressão, visibilidade e muito mais
- 🌅 **Horários do Sol**: Visualize os horários de nascer e pôr do sol
- 📝 **Histórico de Buscas**: Guarda até 8 cidades pesquisadas recentemente
- 🎨 **Tema Dinâmico**: O fundo muda de cor baseado na temperatura
- 📱 **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Animações Suaves**: Interface moderna com transições fluidas

---

## 🌐 Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6+)
- Bootstrap 5.3.8
- Bootstrap Icons
- Animate.css
- OpenWeatherMap API

---

## 🚀 Como Usar

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet
- Uma chave API do OpenWeatherMap (gratuita)

### 📝 Passo 1: Obter sua API Key

1. Acesse [OpenWeatherMap](https://openweathermap.org/)
2. Clique em **Sign Up** no canto superior direito
3. Preencha o formulário de cadastro e confirme seu email
4. Após fazer login, vá até a seção **API Keys**
5. Copie sua chave API (algo como: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

> **⏰ Atenção**: Após gerar sua API Key, pode levar alguns minutos (até 2 horas) para ela ser ativada pelo OpenWeatherMap.

### 📝 Passo 2: Configurar o Projeto

1. **Clone ou baixe este repositório**
   ```bash
   git clone https://github.com/seu-usuario/weather-forecast.git
   cd weather-forecast
   ```

2. **Configure sua API Key**
   
   Abra o arquivo `js/script.js` e localize a linha:
   ```javascript
   const API_KEY = 'SUA_CHAVE_API';
   ```
   
   Substitua `'SUA_CHAVE_API'` pela sua chave API:
   ```javascript
   const API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
   ```

3. **Abra o arquivo `index.html` no navegador**
   
   Você pode simplesmente dar um duplo clique no arquivo ou usar um servidor local.

## 🔐 Segurança da API Key

### ⚠️ IMPORTANTE - NÃO COMPARTILHE SUA CHAVE

**Por que não compartilhar?**

1. **Limite de requisições**: A API gratuita do OpenWeatherMap tem um limite de 1.000 chamadas por dia e 60 chamadas por minuto
2. **Uso indevido**: Outras pessoas podem usar sua chave e esgotar seu limite
3. **Segurança**: Sua conta e dados podem ficar comprometidos

### 🛡️ Boas Práticas

- ✅ Nunca faça commit da sua API Key para repositórios públicos no GitHub
- ✅ Use variáveis de ambiente em projetos maiores
- ✅ Considere usar um backend para esconder a chave em aplicações de produção
- ✅ Monitore o uso da sua chave no painel do OpenWeatherMap

---

## 🤝 Contribuindo

Este é um projeto acadêmico, mas sugestões são bem-vindas:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é um trabalho acadêmico desenvolvido para a disciplina de **Webservices** do curso de **Sistemas para Internet**.

---

## 👨‍💻 Autor

**Hugo Vinícius Rodrigues Pereira**


[![GitHub](https://img.shields.io/badge/GitHub-hugovrp-black?style=flat-square&logo=github)](https://github.com/hugovrp)

