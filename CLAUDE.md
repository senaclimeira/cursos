# CLAUDE.md — cursos-senac-limeira

## Visão Geral

Portal de cursos técnicos do Senac Limeira. Atualmente exibe informações de um único curso (Técnico em Desenvolvimento de Sistemas), mas será refatorado para suportar múltiplos cursos.

- **Framework:** React 19 + Vite 7
- **Roteamento:** React Router DOM 7 (HashRouter)
- **CSS:** Bootstrap 5.3 + CSS customizado (`index.css`)
- **Ícones:** Lucide React
- **Deploy:** GitHub Pages via `gh-pages` (`base: '/cursos-senac-limeira/'`)

---

## Estrutura Atual

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router + Navbar com links fixos de um curso
├── App.css
├── index.css             # Variáveis CSS, estilos globais, .btn-tech, acordeão
└── pages/
    ├── ucs.jsx           # 15 UCs com acordeão (conteúdo hardcoded no JSX)
    ├── avaliacao.jsx     # Critérios de avaliação (hardcoded)
    ├── faltas.jsx        # Tabela de faltas das 15 UCs (hardcoded)
    ├── informacoes.jsx   # Informações gerais do curso (hardcoded)
    ├── bibliografia.jsx  # 24+ livros com cards (hardcoded)
    └── downloads.jsx     # 17 ferramentas com links (hardcoded)
```

### Roteamento atual (HashRouter)

| Rota          | Componente   |
|---------------|--------------|
| `/`           | Ucs          |
| `/avaliacao`  | Avaliacao    |
| `/faltas`     | Faltas       |
| `/informacoes`| Informacoes  |
| `/bibliografia`| Bibliografia|
| `/downloads`  | Downloads    |

---

## Adequações Planejadas

### 1. Suporte a Múltiplos Cursos

- Criar um arquivo de configuração central dos cursos (ex: `src/data/cursos.js`) com metadados de cada curso: `id`, `slug`, `nome`, `descricao`, `icone`, `cor`, etc.
- Cada curso terá suas próprias páginas de conteúdo carregadas via rota dinâmica: `/:cursoSlug/ucs`, `/:cursoSlug/faltas`, etc.
- O `App.jsx` passa a ter rotas dinâmicas aninhadas por curso.

### 2. Conteúdo em Arquivos `.md` Externos

- Todo o conteúdo das páginas (UCs, avaliação, faltas, informações, bibliografia, downloads) será extraído do JSX e salvo em arquivos `.md` dentro de `public/cursos/<slug>/`.
- Os arquivos `.md` são lidos em runtime via `fetch()` (pois estão em `public/`, ficam acessíveis como assets estáticos).
- Usar `react-markdown` para renderizar o conteúdo Markdown nos componentes.
- Estrutura de pastas de conteúdo:
  ```
  public/
  └── cursos/
      └── desenvolvimento-sistemas/
          ├── ucs.md
          ├── avaliacao.md
          ├── faltas.md
          ├── informacoes.md
          ├── bibliografia.md
          └── downloads.md
  ```

### 3. Transformar Conteúdo Atual em `.md`

- Extrair todo o conteúdo hardcoded dos arquivos `src/pages/*.jsx` e converter para Markdown.
- Cada página terá seu arquivo `.md` correspondente no diretório `public/cursos/desenvolvimento-sistemas/`.

### 4. Página Inicial com Cards dos Cursos

- Criar uma nova página `src/pages/Home.jsx` como rota `/`.
- Exibe cards para cada curso registrado em `src/data/cursos.js`.
- Cada card mostra: nome do curso, descrição curta, ícone/cor identificadora e link para `/:cursoSlug/ucs`.
- Design responsivo com grid Bootstrap.

### 5. Manter e Melhorar o Layout Atual

- Manter a identidade visual: cores (`--primary: #6366f1`), `.btn-tech`, acordeões coloridos.
- Adaptar o `Navbar` para ser contextual: na Home mostra o título do portal; dentro de um curso mostra o nome do curso + links das seções.
- Adicionar breadcrumb ou link "Voltar aos cursos" nas páginas internas.
- Revisar responsividade mobile se necessário.

---

## Arquitetura Alvo

```
src/
├── main.jsx
├── App.jsx                     # Rotas: / e /:cursoSlug/*
├── App.css
├── index.css
├── data/
│   └── cursos.js               # Array com metadados de todos os cursos
├── components/
│   ├── Navbar.jsx              # Navbar dinâmico (Home vs. curso)
│   └── MarkdownPage.jsx        # Componente genérico que faz fetch + renderiza .md
└── pages/
    ├── Home.jsx                # Cards dos cursos
    └── curso/
        ├── Ucs.jsx
        ├── Avaliacao.jsx
        ├── Faltas.jsx
        ├── Informacoes.jsx
        ├── Bibliografia.jsx
        └── Downloads.jsx

public/
└── cursos/
    └── desenvolvimento-sistemas/
        ├── ucs.md
        ├── avaliacao.md
        ├── faltas.md
        ├── informacoes.md
        ├── bibliografia.md
        └── downloads.md
```

### Roteamento Alvo

| Rota                                  | Componente          |
|---------------------------------------|---------------------|
| `/`                                   | Home (cards)        |
| `/:cursoSlug/ucs`                     | Ucs                 |
| `/:cursoSlug/avaliacao`               | Avaliacao           |
| `/:cursoSlug/faltas`                  | Faltas              |
| `/:cursoSlug/informacoes`             | Informacoes         |
| `/:cursoSlug/bibliografia`            | Bibliografia        |
| `/:cursoSlug/downloads`               | Downloads           |

---

## Convenções e Decisões Técnicas

- **HashRouter** mantido para compatibilidade com GitHub Pages (sem servidor, sem suporte a `BrowserRouter`).
- **Fetch de `.md`** feito com `useEffect` dentro de cada página, baseado no `cursoSlug` obtido via `useParams()`.
- **`react-markdown`** para renderização (instalar como dependência).
- **`src/data/cursos.js`** é a fonte de verdade dos cursos cadastrados — adicionar novo curso = adicionar entrada nesse arquivo + criar pasta em `public/cursos/<slug>/`.
- Conteúdo `.md` pode incluir HTML limitado se necessário para estruturas complexas (tabelas de faltas, acordeões de UCs).
- Manter os componentes visuais especializados (ex: acordeão de UCs, tabela de faltas) como componentes React que **leem dados de `.md` ou `.json`**, não renderizando Markdown puro se a estrutura exigir interatividade (ex: acordeão expansível).

---

## Comandos Úteis

```bash
npm run dev       # Desenvolvimento local
npm run build     # Build para produção
npm run deploy    # Build + deploy para GitHub Pages
npm run lint      # Verificação ESLint
```

---

## Observações

- O `base` no `vite.config.js` está como `/cursos-senac-limeira/` — manter para não quebrar o deploy atual.
- `_faltas.jsx` é um arquivo duplicado/backup — pode ser removido.
- Bootstrap JS está incluído via `bootstrap.bundle.min.js` no `main.jsx` (necessário para o acordeão e o menu mobile).
