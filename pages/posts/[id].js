// -----------------------------------------------------------------------------
// Aula 02.4
import NextLink from "next/link";
import { Box, Text } from "@skynexui/components";
import { useRouter } from "next/router";

// dica dos paths estáticos
export async function getStaticPaths() {
  // const dadosDaAPI = await fetch('https://fakeapi-omariosouto.vercel.app/api/posts')
  //   .then((res) => res.json());

  // const paths = dadosDaAPI.posts.map((postAtual) => {
  //   return { params: { id: `${postAtual.id}` } };
  // })

  return {
    // paths: paths,
    paths: [],
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(`Gerou! ${id}`);
  const dataFromAPI = await fetch(
    `https://fakeapi-omariosouto.vercel.app/api/posts/${id}`
  ).then((res) => res.json());
  const post = dataFromAPI;
  // const post = dados.posts.find((currentPost) => {
  //   if(currentPost.id === id) {
  //     return true;
  //   }
  //   return false;
  // })

  return {
    props: {
      id: post.id,
      title: post.title,
      date: post.date,
      content: post.content,
    },
    revalidate: 60,
  };
}

export default function PostByIdScreen(props) {
  const router = useRouter();
  const post = {
    title: props.title,
    date: props.date,
    content: props.content,
  };

  if (router.isFallback) {
    return "Essa página não existe, ainda!!";
  }

  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "700px",
        paddingHorizontal: "16px",
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{
          color: "#F9703E",
          justifyContent: "center",
          lineHeight: "1.2",
        }}
      >
        {post.title}
      </Text>
      <Text
        styleSheet={{
          color: "#F9703E",
          justifyContent: "center",
          borderBottom: "1px solid #F9703E",
          paddingVertical: "16px",
          marginVertical: "16px",
        }}
      >
        {post.date}
      </Text>

      {/* Área de Conteudo */}
      <Box
        styleSheet={{
          flexDirection: "column",
        }}
      >
        <Text>{post.content}</Text>

        {post.video && (
          <iframe
            style={{ marginTop: "32px", minHeight: "400px" }}
            src={post.video}
          />
        )}
      </Box>

      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: "16px",
          paddingVertical: "16px",
          borderTop: "1px solid #F9703E",
          color: "#F9703E",
        }}
      >
        <NextLink href="/" passHref>
          <Text tag="a" styleSheet={{ hover: { textDecoration: "underline" } }}>
            Voltar para a home
          </Text>
        </NextLink>
      </Box>
    </Box>
  );
}

// -----------------------------------------------------------------------------
// Aula 02
// import { Box, Text } from "@skynexui/components";
// import NextLink from "next/link";
// import { useRouter } from "next/router";

// import data from "../../data.json";

// /**
//  * Necessário para fornecer uma "dica" dos paths estáticos, ou seja,
//  * se consultar uma rota via url do navegador, passará a funcionar,
//  * caso contrário, as rotas não seriam conhecidas
//  */
// export async function getStaticPaths() {
//   // Abordagem manual
//   // const paths = [
//   //   { params: { id: '1' } },
//   //   { params: { id: '2' } },
//   //   { params: { id: '3' } }
//   // ]

//   // Abordagem dinâmica
//   const paths = data.posts.map((postAtual) => {
//     return { params: { id: `${postAtual.id}` } };
//   });
//   console.log("dados:", data);
//   console.log("paths:", paths);

//   return {
//     paths: paths,
//     fallback: false, // false or 'blocking'
//   };
// }

// export async function getStaticProps(context) {
//   console.log("Contexto", context.params.id);
//   const id = context.params.id;

//   const post = data.posts.find((currentPost) => {
//     if (currentPost.id === id) {
//       return true;
//     }
//     return false;
//   });

//   console.log(post);

//   return {
//     props: {
//       id: post.id,
//       title: post.title,
//       date: post.date,
//       content: post.content,
//     },
//   };
// }

// export default function PostByIdScreen(props) {
//   // console.log(props);
//   const router = useRouter();
//   // console.log(router);
//   const post = {
//     title: props.title,
//     date: props.date,
//     content: props.content,
//   };

//   if (router.isFallback) {
//     return "Essa página não existe!";
//   }

//   return (
//     <Box
//       styleSheet={{
//         flexDirection: "column",
//         margin: "32px auto",
//         maxWidth: "700px",
//         paddingHorizontal: "16px",
//       }}
//     >
//       {/* Cabeçalho */}
//       <Text
//         variant="heading2"
//         tag="h1"
//         styleSheet={{
//           color: "#F9703E",
//           justifyContent: "center",
//           lineHeight: "1.2",
//         }}
//       >
//         {post.title}
//       </Text>
//       <Text
//         styleSheet={{
//           color: "#F9703E",
//           justifyContent: "center",
//           borderBottom: "1px solid #F9703E",
//           paddingVertical: "16px",
//           marginVertical: "16px",
//         }}
//       >
//         {post.date}
//       </Text>

//       {/* Área de Conteudo */}
//       <Box
//         styleSheet={{
//           flexDirection: "column",
//         }}
//       >
//         <Text>{post.content}</Text>

//         {post.video && (
//           <iframe
//             style={{ marginTop: "32px", minHeight: "400px" }}
//             src={post.video}
//           />
//         )}
//       </Box>

//       {/* Rodapé */}
//       <Box
//         styleSheet={{
//           marginTop: "16px",
//           paddingVertical: "16px",
//           borderTop: "1px solid #F9703E",
//           color: "#F9703E",
//         }}
//       >
//         <NextLink href="/" passHref>
//           <Text tag="a" styleSheet={{ hover: { textDecoration: "underline" } }}>
//             Voltar para a home
//           </Text>
//         </NextLink>
//       </Box>
//     </Box>
//   );
// }

// -----------------------------------------------------------------------------
// Aula 01
// import Link from "next/link";
// import { useRouter } from "next/router";

// export default function Post() {
//   const router = useRouter();

//   return (
//     <div>
//       Id do post atual: {router.query.id}
//       <ul>
//         <li>
//           <Link href="/">
//             <a>Ir para a home</a>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }
