import{Link} from "react-router-dom"


export const Login = () => {

  const move=(e)=>{
        fetch("http://localhost:8080/users")
        .then((d)=>d.json())
        .then((data)=>{
          console.log(data);

          if(e.target.value===data[0].username && e.target.value===data[0].password){
           <Link to="/Orders"></Link>
          }
        })
  }




  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit"  onClick={move}>Login</button>

     

      
    </div>
  );
};
