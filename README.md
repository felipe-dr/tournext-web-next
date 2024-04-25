# Tournext Web Next

## Glossário do NextJS

- **Static**

  - Por padrão
  - Só vai usar o `next export`, em casos onde TUDO é pré-renderizado
  - `getStaticProps`: versão com menos recursos

- **SSG(Static Site Generation)**:

  - `getStaticProps`
    - `revalidate`: true [npm run build && npm start]
  - **Incremental Static Generation** [npm run build && npm start]
    - fallback: true || 'blocking' e o getStaticPaths vem vazio ou com somente alguns itens

- **SSR(Server Side Render)**:
  - `getServerSideProps`
  - Se tiver dentro da pasta `/api` é uma API Route e é SSR

## Tempo de build entre as abordagens do nextjs

```md
- SSG (next export) [4 posts]: 7.89s.
- SSG (next export) [1000 posts]: 27.23s.
- ISG (next build) [1000 posts]: 3.10s.
```
