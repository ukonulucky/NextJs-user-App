export const getStaticPaths =  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    const paths = data.map(user => {
        return {
            params: {id:user.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback:false
      }
 }

export const getStaticProps = async (context) => {
    const id = context.params.id
     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
     const data = await res.json()
    return {
        props: {
          user: data
      }
  }
}
function Details({ user }) {
    return <div>
        <h1>Details Page</h1>
      <p> Name:{user.name}</p>
       <p> Email:{user.email}</p>
      <p>City:{ user.address.city } </p>

    </div>;

}

export default Details;
