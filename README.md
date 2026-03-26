# <p align="center">HORIZON</p>

<img src="https://github.com/gui-bus/portfolio/blob/master/public/projects/horizon.png?raw=true" width="100%" alt="Thumbnail Horizon">

<p align="center">
  <img alt="React" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/React.svg">
  <img alt="NextJS" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/NextJS.svg">
  <img alt="Typescript" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Typescript.svg">
  <img alt="Tailwind" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/TailwindCSS.svg">
  <img alt="Framer Motion" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Framer%20Motion.svg">
  <img alt="Phosphor Icons" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Phosphor%20Icons.svg">
  <img alt="Biome" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Biome.svg">
  <img alt="Husky" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Husky.svg">
  <img alt="Conventional Commits" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Conventional%20Commits.svg">
  <img alt="Gemini" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Gemini.svg">
  <img alt="Windsurf" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Windsurf.svg">
</p>

---

## 📖 Panorama Geral

O **HORIZON** é uma landing page de alto padrão para uma agência de viagens boutique. O projeto foi desenvolvido para transcender o design convencional de turismo, adotando uma estética de **Magazine Editorial** que prioriza a narrativa visual, o espaço em branco estratégico e uma tipografia serifada luxuosa.

### 🎯 Diferenciais Estratégicos
- **Estética Boutique & Luxo:** Design inspirado em publicações de alta costura, utilizando uma paleta de cores Creme (#FDFCFB), Ardósia e Dourado Fosco.
- **Experiência Imersiva:** Transições cinematográficas e efeitos de paralaxe que guiam o usuário através de uma jornada visual.
- **Internacionalização Nativa:** Sistema de tradução completo (PT/EN) integrado via cookies, mantendo URLs limpas e SEO amigável.

---

## ✨ Ecossistema de Funcionalidades

### 🎞️ Narrativa Visual (Hero & Reveal)
- **Beyond the Horizon:** Um cabeçalho monumental que utiliza tipografia editorial para estabelecer a autoridade da marca.
- **Mask Reveal:** Uma transição artística entre seções que utiliza máscaras dinâmicas para revelar paisagens cinematográficas.

### 🗺️ Curadoria de Destinos & Serviços
- **Interactive Portfolio:** Showcase de destinos com navegação por gatilho e revelação, permitindo uma exploração fluida das localizações.
- **Panorama Editorial:** Seção de serviços em tela cheia com composições assimétricas que destacam a expertise da agência.
- **Selected Experiences:** Sistema de filtragem por categorias para pacotes de viagem específicos.

### 📊 Storytelling de Dados
- **Asymmetric Impact Mural:** Estatísticas apresentadas como "Data Art", utilizando tipografia monumental para quantificar o sucesso da agência.

---

## 🛠️ Deep Dive Tecnológico

### Arquitetura de Internacionalização
O projeto utiliza o **next-intl** com uma estratégia de detecção via middleware (proxy):
- **Clean URLs:** O idioma é gerenciado via cookie `NEXT_LOCALE`, eliminando a necessidade de prefixos como `/pt` ou `/en` na barra de endereço.
- **Dynamic Routing:** Utilização da estrutura `[locale]` no App Router para pré-renderização de mensagens no servidor.

### Performance e Estilização
- **Tailwind CSS v4:** Explora as novas capacidades da engine v4 para uma gestão de temas mais performática e declarativa.
- **Framer Motion:** Orquestração de animações complexas baseadas em viewport e scroll progress, garantindo 60fps em interações de luxo.
- **Biome:** Pipeline de linting e formatação ultra-rápido que garante a integridade e padronização do código.

---
<p align="center">
  Designed with intent by <a href="https://www.linkedin.com/in/gui-bus/">guibus.dev</a> &bull; 2026
</p>
