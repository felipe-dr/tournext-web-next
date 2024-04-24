// Exemplo do lado do cliente
import { useRouter } from "next/router";
import data from "../../data.json";

export default function Posts(props) {
  const router = useRouter();
  console.log(router.query);

  // Obtendo o post que possui a data informada como parâmetro
  const posts = data.posts.filter((post) => post.date === router.query.date);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
        ))
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </div>
  );
}

// Exemplo do lado do servidor
// import dados from '../../dados.json';

// export const getServerSideProps = (context) => {
//   const posts = dados.posts.filter((post) => post.date === context.query.date);
//   console.log(context.query);

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// export default function Posts(props) {
//   return (
//     <div>
//       {props.posts.length > 0 ? (
//         props.posts.map((post) => (
//           <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
//         ))
//       ) : (
//         <p>Nenhum post encontrado</p>
//       )}
//     </div>
//   );
// }
