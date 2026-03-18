# <p align="center">HORIZON TRAVELS</p>

<p align="center">
  <strong>Curadoria de Experiências Extraordinárias: Onde o Luxo Editorial Encontra a Exploração Global.</strong>
</p>

<p align="center">
  <a href="https://horizon-travels.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-HORIZON-c5a059?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/next--intl-4.8.3-green?style=flat-square" alt="next-intl" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.x-ff69b4?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Biome-2.2-764ABC?style=flat-square&logo=biome" alt="Biome" />
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

## 🏗️ Estrutura Arquitetural

```text
├── messages/             # Dicionários de tradução (en.json, pt.json)
├── src/
│   ├── app/
│   │   └── [locale]/     # Next.js App Router (Layouts e Páginas traduzidas)
│   ├── components/
│   │   ├── sections/     # Componentes de seção (Hero, Services, Stats...)
│   │   └── ui/           # Elementos de interface reutilizáveis
│   ├── i18n/             # Configurações de request e mapeamento locale
│   ├── lib/              # Motion variants e utilitários de animação
│   └── proxy.ts          # Middleware inteligente de internacionalização
└── biome.json            # Configuração de qualidade de código
```

---

## 🧪 Engenharia de Qualidade

A consistência do projeto é mantida através de processos rigorosos de build e linting:
- **Zero Strings Hardcoded:** 100% dos textos são extraídos do sistema de i18n.
- **Semantic HTML:** Uso correto de tags e atributos de acessibilidade (como `type="button"` em todos os gatilhos).
- **Responsive Mastery:** Layouts que se transformam de composições editoriais amplas em experiências mobile focadas e limpas.

Para rodar o projeto localmente:
```bash
pnpm install
pnpm dev
```

Para validar o build:
```bash
pnpm build
```

---
<p align="center">
  Designed with intent by <a href="https://www.linkedin.com/in/gui-bus/">guibus.dev</a> &bull; 2026
</p>
