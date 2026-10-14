import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR" data-theme="dark">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('connections-theme')==='\\\"light\\\"')document.documentElement.dataset.theme='light'}catch(e){}",
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
