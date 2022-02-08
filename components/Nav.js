import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
function Nav() {
    
       
    return <div>
        <div className="navbar">
            <div className="logo">
                <Image src="/shop.png" width ={300} height={150} />
            </div> 
            <Link href="/">
            <a>
                Home
            </a> 
            </Link>
            <Link href="/about"> 
            <a>
                About Us
            </a>
            </Link>
            <Link href="/ninjas">
            <a>
                Nija listing
            </a>
        </Link>
      </div>
        </div>
        
}

export default Nav;
