import Link from "next/link";

/**
 * Para páginas não muito acessadas, pode-se manter como false, para que o conteúdo só seja baixado, quando ocorrer o evento de hover no link
 * Será possível avaliar somente quando estiver rodando em ambiente final: yarn build && yarn start
 */
export default function LinkPrefetchPage() {
  return (
    <div>
      <li>
        <Link href="/" prefetch={false}>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={false}>
          <a>Sobre</a>
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">
          <a>Link Prefetch</a>
        </Link>
      </li>
    </div>
  );
}
