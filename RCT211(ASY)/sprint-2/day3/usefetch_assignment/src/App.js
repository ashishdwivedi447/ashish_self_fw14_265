import logo from './logo.svg';
import './App.css';
import useFetch from './Hooks/useFetch';

function App() {

  const {Loading,data,Error}=useFetch("https://api.github.com/search/users?q=masai")
  
  return (
    <div className="App">
     <div>{Loading && "Loading"}</div>
     {data?.length>0 && data?.map((item)=>(
      <>
      <div>{item.login}</div>
      <div> <img src= {item.avatar_url} alt=""/></div>
      </>
     ))}
    </div>
  );
}

export default App;
