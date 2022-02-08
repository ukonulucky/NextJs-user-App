import Link from 'next/link'

function Notfound() {
    return <div>
        <h1>oooops....... page mot found</h1>
        <p>Go back to the Home Page
            <Link href="/"><a>HOME</a></Link> 
        </p>
  </div>;
}

export default Notfound;
