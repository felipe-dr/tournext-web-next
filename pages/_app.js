import { Provider } from "@skynexui/components";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

// -----------------------------------------------------------------------------
// Aula 01
// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <style>{`
//         * {
//           font-family: sans-serif;
//         }
//       `}</style>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
