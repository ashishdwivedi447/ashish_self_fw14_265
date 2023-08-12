const nav=["services","Projects","About"]

export const Links=()=>{


    return <div className="links">
        {nav.map(e=>{
      return <a href="" >{e}</a>
        })

        }
    </div>
}