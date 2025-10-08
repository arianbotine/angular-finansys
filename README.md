# 💰 FinanSys - Sistema de Gestão Financeira

<div align="center">
  <img src="https://img.shields.io/badge/Angular-18.2.0-red?style=for-the-badge&logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-5.5.4-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.3-purple?style=for-the-badge&logo=bootstrap" alt="Bootstrap">
  <img src="https://img.shields.io/badge/PrimeNG-17.18.9-orange?style=for-the-badge" alt="PrimeNG">
</div>

<div align="center">
  <h3>Sistema completo para controle de finanças pessoais e empresariais</h3>
  <p>Uma aplicação Angular moderna com arquitetura escalável e interface intuitiva</p>
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Arquitetura](#-arquitetura)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

**FinanSys** é um sistema completo de gestão financeira desenvolvido em Angular 18, projetado para oferecer controle total sobre receitas e despesas. A aplicação utiliza uma arquitetura modular escalável com lazy loading, proporcionando excelente performance e experiência do usuário.

### ✨ Principais Características

- 🏗️ **Arquitetura Modular**: Organizada em módulos lazy-loaded
- 🎨 **Interface Moderna**: Design responsivo com Bootstrap 5 + PrimeNG
- 📊 **Dashboards Interativos**: Gráficos dinâmicos com Chart.js
- 🔄 **CRUD Completo**: Operações completas de Create, Read, Update, Delete
- 📱 **Responsivo**: Compatível com dispositivos móveis e desktop
- 🚀 **Performance**: Otimizada com Angular 18 e bundling moderno

---

## 🚀 Funcionalidades

### 💳 Gestão de Categorias

- ✅ Cadastro de categorias de receita e despesa
- ✅ Edição e exclusão de categorias
- ✅ Listagem com busca e filtros
- ✅ Validações de formulário em tempo real

### 💰 Controle de Lançamentos

- ✅ Registro de receitas e despesas
- ✅ Associação com categorias
- ✅ Controle de status (Pago/Pendente)
- ✅ Campos de data com máscara
- ✅ Formatação automática de valores monetários

### 📊 Relatórios e Dashboards

- ✅ Gráficos de pizza por categoria
- ✅ Filtros por mês e ano
- ✅ Resumos financeiros
- ✅ Visualização de tendências
- ✅ Exportação de dados

### 🎛️ Funcionalidades Técnicas

- ✅ Lazy Loading de módulos
- ✅ Formulários reativos com validação
- ✅ Componentes base reutilizáveis
- ✅ Service layer com padrão Repository
- ✅ In-Memory Web API para desenvolvimento
- ✅ Navegação com breadcrumbs
- ✅ Mensagens de feedback (Toastr)

---

## 🛠️ Tecnologias

### 🎯 Core

- **[Angular 18.2.0](https://angular.io/)** - Framework principal
- **[TypeScript 5.5.4](https://www.typescriptlang.org/)** - Linguagem de programação
- **[RxJS 7.8.1](https://rxjs.dev/)** - Programação reativa

### 🎨 UI/UX

- **[Bootstrap 5.3.3](https://getbootstrap.com/)** - Framework CSS
- **[PrimeNG 17.18.9](https://primeng.org/)** - Componentes UI avançados
- **[PrimeIcons 7.0.0](https://primefaces.org/primeicons/)** - Biblioteca de ícones
- **[Chart.js 4.4.4](https://www.chartjs.org/)** - Gráficos interativos

### 🔧 Utilitários

- **[date-fns 4.1.0](https://date-fns.org/)** - Manipulação de datas
- **[angular-imask 7.6.1](https://imask.js.org/)** - Máscaras de input
- **[currency-formatter 1.5.9](https://www.npmjs.com/package/currency-formatter)** - Formatação monetária
- **[Toastr 2.1.4](https://github.com/CodeSeven/toastr)** - Notificações

### 🧪 Desenvolvimento

- **[Angular CLI 18.2.0](https://cli.angular.io/)** - Ferramenta de desenvolvimento
- **[ESLint 9.11.1](https://eslint.org/)** - Linting de código
- **[Karma 6.4.4](https://karma-runner.github.io/)** - Test runner
- **[Jasmine 5.3.0](https://jasmine.github.io/)** - Framework de testes

---

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (incluído com Node.js)
- **Git** ([Download](https://git-scm.com/))

### ✅ Verificando as Versões

```bash
node --version  # deve retornar v18.0.0 ou superior
npm --version   # deve retornar 9.0.0 ou superior
git --version   # qualquer versão recente
```

---

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/arianbotine/angular-finansys.git
cd angular-finansys
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Execute a Aplicação

```bash
npm start
```

A aplicação estará disponível em: **http://localhost:4200/**

---

## 📱 Como Usar

### 🏠 Navegação Principal

1. **Dashboard/Relatórios** - Página inicial com visão geral financeira
2. **Categorias** - Gestão de categorias de receita e despesa
3. **Lançamentos** - Registro e controle de movimentações financeiras

### 💼 Fluxo de Trabalho Recomendado

1. **Configure as Categorias**: Acesse "Categorias" e crie suas categorias personalizadas
2. **Registre os Lançamentos**: Em "Lançamentos", adicione suas receitas e despesas
3. **Acompanhe os Relatórios**: Visualize gráficos e relatórios no Dashboard

### 🎯 Dicas de Uso

- Use categorias específicas para melhor controle
- Mantenha os lançamentos sempre atualizados
- Utilize os filtros de data nos relatórios
- Aproveite as máscaras automáticas nos campos de valor

---

## 🏗️ Arquitetura

### 📦 Estrutura Modular

```
src/app/
├── core/                   # Módulo core da aplicação
│   └── components/         # Componentes compartilhados (navbar)
├── pages/                  # Módulos de funcionalidades
│   ├── categories/         # Gestão de categorias
│   ├── entries/           # Gestão de lançamentos
│   └── reports/           # Relatórios e dashboards
├── shared/                # Recursos compartilhados
│   ├── components/        # Componentes base reutilizáveis
│   ├── models/           # Modelos de dados
│   └── services/         # Serviços base
```

### 🎯 Padrões Arquiteturais

- **🏛️ Repository Pattern**: `BaseResourceService` para operações CRUD
- **🧬 Component Inheritance**: Classes base para formulários e listagens
- **📦 Lazy Loading**: Carregamento sob demanda dos módulos
- **🔄 Reactive Forms**: Formulários reativos com validação
- **📡 Service Layer**: Camada de serviços para comunicação com API

### 🗂️ Componentes Base

- **`BaseResourceFormComponent`**: Classe base para formulários CRUD
- **`BaseResourceListComponent`**: Classe base para listagens
- **`BaseResourceService`**: Serviço base para operações de API
- **`BaseResourceModel`**: Modelo base para entidades

---

## 📝 Scripts Disponíveis

### Desenvolvimento

```bash
npm start              # Inicia servidor de desenvolvimento
npm run watch          # Build com watch mode
npm run lint          # Executa linting do código
```

### Build e Deploy

```bash
npm run build          # Build de produção
npm run build:dev      # Build de desenvolvimento
```

### Testes

```bash
npm test              # Executa testes unitários
npm run e2e           # Executa testes end-to-end
```

---

## 📂 Estrutura do Projeto

```
angular-finansys/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 core/                 # Módulo principal
│   │   ├── 📁 pages/                # Páginas da aplicação
│   │   │   ├── 📁 categories/       # Módulo de categorias
│   │   │   ├── 📁 entries/          # Módulo de lançamentos
│   │   │   └── 📁 reports/          # Módulo de relatórios
│   │   ├── 📁 shared/               # Recursos compartilhados
│   │   └── 📁 environments/         # Configurações de ambiente
│   ├── 📁 assets/                   # Recursos estáticos
│   └── 📄 index.html               # Página principal
├── 📄 angular.json                 # Configuração do Angular CLI
├── 📄 package.json                 # Dependências e scripts
├── 📄 tsconfig.json               # Configuração TypeScript
├── 📄 eslint.config.js           # Configuração ESLint
└── 📄 README.md                  # Este arquivo
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

### 1. Fork o Projeto

```bash
git clone https://github.com/seu-usuario/angular-finansys.git
```

### 2. Crie uma Branch

```bash
git checkout -b feature/nova-funcionalidade
```

### 3. Faça suas Alterações

```bash
git commit -m "Adiciona nova funcionalidade"
```

### 4. Push para a Branch

```bash
git push origin feature/nova-funcionalidade
```

### 5. Abra um Pull Request

### 🐛 Reportando Bugs

Para reportar bugs, abra uma [issue](https://github.com/arianbotine/angular-finansys/issues) com:

- Descrição detalhada do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Informações do ambiente (OS, Node.js, npm)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Arian Botine**

- GitHub: [@arianbotine](https://github.com/arianbotine)
- LinkedIn: [Arian Botine](https://linkedin.com/in/arianbotine)

---

## 🙏 Agradecimentos

- [Angular Team](https://angular.io/team) - Pelo excelente framework
- [PrimeNG](https://primeng.org/) - Pela biblioteca de componentes
- [Bootstrap](https://getbootstrap.com/) - Pelo framework CSS
- [Chart.js](https://www.chartjs.org/) - Pela biblioteca de gráficos

---

<div align="center">
  <p>Feito com ❤️ e ☕ por <strong>Arian Botine</strong></p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
