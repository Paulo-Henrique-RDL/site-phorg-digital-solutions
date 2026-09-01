# PHORG Digital Solutions

Landing page da PHORG Digital Solutions — engenharia de vendas, sistemas proprietários e integração de IA.

## Stack

- **Vite** + **React 18** com TypeScript
- **Tailwind CSS** e componentes **shadcn/ui** sobre Radix
- **React Router** para navegação
- Tipografia: Sora e JetBrains Mono

## Rodando localmente

Requer Node.js 18 ou superior.

```sh
npm install
npm run dev
```

O servidor sobe em `http://localhost:8080`.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build local para conferência |
| `npm run lint` | ESLint sobre o projeto |

## Estrutura

```
src/
  components/   componentes de UI e seções da página
  pages/        Index e NotFound
  hooks/        hooks reutilizáveis
  lib/          utilitários
```
