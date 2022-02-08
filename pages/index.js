import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Link from "next/link"

export const getStaticProps = async ()  => {
  const res = await  fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
return {
  props: {
    users: data
     }
  }
}

export default function Home({ users }) {
  
  const info = () => {
   return  users.map(users => (
     <div key={users.id} className="text ">
         <Link href={`/ninjas/${users.id}`} >
    <a>  { users.name }   </a>
     </Link>
     </div>
   ))
  }
  
  const usersList = info()
  return (
    <>
      <Head>
        <title>User | Home</title>
        <meta name="keywords" content="users Home Page" />
      </Head>
    <div>
        <h1>Home Page</h1>
        { usersList }
        
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus, praesentium beatae excepturi tempore quaerat quo porro ipsa eos assumenda officia recusandae? Eos itaque eveniet repellat eius alias officia optio.</p>
      <Link href="ninjas">
        <a>
          See all ninjas
      </a>
      
      </Link>
    
      </div>
      </>
    )
}
