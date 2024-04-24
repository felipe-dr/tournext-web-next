// -----------------------------------------------------------------------------
// Aula 02.4
import { Box, Image, Text } from "@skynexui/components";
import NextLink from "next/link";

import data from "../data.json";

export async function getStaticProps() {
  return {
    props: {
      posts: data.posts,
    },
  };
}

export default function HomeScreen({ posts }) {
  const infos = {
    nome: "Mario Souto",
    githubUser: "omariosouto",
  };
  // const posts = dados.posts;

  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "800px",
        paddingHorizontal: "16px",
      }}
    >
      <Image
        src={`https://github.com/${infos.githubUser}.png`}
        styleSheet={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          margin: "0 auto",
          border: "2px solid #F9703E",
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{ color: "#F9703E", justifyContent: "center" }}
      >
        {infos.nome}
      </Text>

      <Box
        styleSheet={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginTop: "16px",
          gridGap: "16px",
        }}
      >
        {posts.map(({ title, content, id }) => (
          <Post key={id} title={title} content={content} id={id} />
        ))}
      </Box>
    </Box>
  );
}

function Post({ title, content, id }) {
  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        border: "1px solid #F9703E",
        padding: "16px",
        boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
        transition: ".3s",
        borderRadius: "4px",
        hover: {
          boxShadow: "1px 1px 5px 5px rgba(255,69,0,0.2)",
        },
      }}
    >
      <NextLink href={`posts/${id}`} passHref>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{
            display: " block",
            color: "#F9703E",
            marginBottom: "8px",
          }}
        >
          {title}
        </Text>
      </NextLink>
      <Text>{content.substring(0, 140)}...</Text>
    </Box>
  );
}

// -----------------------------------------------------------------------------
// Aula 02.3
// import React from "react";
// import { Box, TextField, Button } from "@skynexui/components";
// import { useRouter } from "next/router";
// import nookies from "nookies";

// export default function HomeScreen() {
//   const [password, setPassword] = React.useState("12345");
//   const router = useRouter();
//   console.log("HomeScreen", router);

//   return (
//     <Box
//       styleSheet={{
//         border: "1px solid #F9703E",
//         flexDirection: "column",
//         maxWidth: { xs: "100%", sm: "400px" },
//         marginTop: "20%",
//         marginHorizontal: { xs: "16px", sm: "auto" },
//         padding: "32px",
//         borderRadius: "4px",
//         boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
//       }}
//     >
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();

//           if (password) {
//             nookies.set(null, "SECRET_PASSWORD", password, {
//               maxAge: 30 * 24 * 60 * 60,
//               path: "/",
//             });
//             router.push("/area-logada");
//           } else {
//             alert("Informe uma senha!");
//           }
//         }}
//       >
//         <Box styleSheet={{ flexDirection: "column" }}>
//           <TextField
//             label="Qual é a senha secreta?"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" label="Acessar" />
//         </Box>
//       </form>
//     </Box>
//   );
// }

// -----------------------------------------------------------------------------
// Aula 02
// import { Box, Image, Text } from "@skynexui/components";
// import NextLink from "next/link";

// import data from "../data.json";

// export default function HomeScreen() {
//   const infos = {
//     nome: "Mario Souto",
//     githubUser: "omariosouto",
//   };
//   const posts = data.posts;

//   return (
//     <Box
//       styleSheet={{
//         flexDirection: "column",
//         margin: "32px auto",
//         maxWidth: "800px",
//         paddingHorizontal: "16px",
//       }}
//     >
//       <Image
//         src={`https://github.com/${infos.githubUser}.png`}
//         styleSheet={{
//           width: "150px",
//           height: "150px",
//           borderRadius: "50%",
//           margin: "0 auto",
//           border: "2px solid #F9703E",
//         }}
//       />
//       <Text
//         variant="heading1"
//         tag="h1"
//         styleSheet={{ color: "#F9703E", justifyContent: "center" }}
//       >
//         {infos.nome}
//       </Text>

//       <Box
//         styleSheet={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           marginTop: "16px",
//           gridGap: "16px",
//         }}
//       >
//         {posts.map(({ title, content, id }) => (
//           <Post key={id} title={title} content={content} id={id} />
//         ))}
//       </Box>
//     </Box>
//   );
// }

// function Post({ title, content, id }) {
//   return (
//     <Box
//       styleSheet={{
//         flexDirection: "column",
//         border: "1px solid #F9703E",
//         padding: "16px",
//         boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
//         transition: ".3s",
//         borderRadius: "4px",
//         hover: {
//           boxShadow: "1px 1px 5px 5px rgba(255,69,0,0.2)",
//         },
//       }}
//     >
//       <NextLink href={`posts/${id}`} passHref>
//         <Text
//           tag="a"
//           variant="heading4"
//           styleSheet={{
//             display: " block",
//             color: "#F9703E",
//             marginBottom: "8px",
//           }}
//         >
//           {title}
//         </Text>
//       </NextLink>
//       <Text>{content.substring(0, 140)}...</Text>
//     </Box>
//   );
// }

// -----------------------------------------------------------------------------
// Aula 01
// import Link from "next/link";

// function HomePage() {
//   return (
//     <div>
//       Welcome to Next.js!
//       <img src="/images/avatar.png" />
//       <ul>
//         <li>
//           <Link href="/sobre">
//             <a>Ir para a /sobre</a>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default HomePage;
