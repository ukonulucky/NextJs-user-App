import Head from "next/head"
import style99 from "..//styles/About.module.css"
import { useEffect } from "react"
import { useRouter }  from "next/router"
function about() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
             router.push("/")
         },3000)
  },[])
    return
    <>
         <Head>
            <title>Users | </title>
            <meta name="keywords" content="Users about page" />
        </Head>
        <div>
      
        <h1 className={ style99.about }>About Page</h1>
        <p className={style99.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illo maxime facere impedit nulla repudiandae voluptatum, fuga illum sapiente rem, accusamus, hic molestias tempore optio non amet veniam vitae adipisci.</p>
  </div>
  </>
}

export default about;
