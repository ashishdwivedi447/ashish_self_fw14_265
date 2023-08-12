


function Table({value}){
    return(
       
          
              <tr>
                      <td>{value.name}</td>
                      <td>{value.age}</td>
                      <td>{value.address}</td>
                      <td>{value.department}</td>
                      <td>{value.salary}</td>
                      <td>{value.Martial ?"Married":"unmarried" }</td>
                  </tr>

        
    )
}

export {Table};