
export default function ErrorPage({err}){
    if(err){

        let statuscode = err.request.status
        console.log(err)
        if(statuscode === 400){
            return(
                <section className="badRequest">
                <h3>Bad request</h3>
                <img className="badReqImg" src="../../src/assets/400.png" alt="Bad request" />
                </section>
            )
        }
    }
    
    return(
        <section className="errorPage">
            <img className="notfoundImg" src="../../src/assets/404.jpeg" alt="Page not found" />
        </section>
    )
}