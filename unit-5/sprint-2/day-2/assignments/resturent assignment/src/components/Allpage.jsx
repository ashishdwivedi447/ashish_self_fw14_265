import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { Formadd } from "./Formadd";
import { Resto } from "./Resto";
import "./Resto.css";
import { Button } from 'antd';

export const Allpage = () => {
  const [restom, setresto] = useState([]);
  const [page, setpage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  console.log(restom.length,"1")
  useEffect(() => {
    getData();
  }, [page]);
   
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/Restorent?_page=${page}&_limit=6`).then((d) =>
      d.json()
    );
    setresto(data);
    setFilteredData(data);
  };

  const handleSort = async (title, value) => {
    // window.update();
    
    if (title === "prize" && value === 1){
      setFilteredData((prev) => [...prev.sort((a, b) => a.prize - b.prize)])
    //  setresto((prev) => [...prev.sort((a, b) => a.prize - b.prize)])
    }
    if (title === "prize" && value === -1) {
      setFilteredData((prev) => [...prev.sort((a, b) => b.prize - a.prize)])
     // setresto((prev) => [...prev.sort((a, b) => b.prize - a.prize)])
    }
    else if (title === "rating" && value === 5){   
      setFilteredData(restom.filter((item) => item.rating >= 5));
    }   
    else if (title === "rating" && value === 4) {
      // getData();
      setFilteredData(restom.filter((item) => item.rating >= 4));
      // window.preventDefault();
    }
    else if (title === "rating" && value === 3) {     
      setFilteredData(restom.filter((item) => item.rating >= 3));
    }
    
     else if (title === "rating" && value === 2) {
      setFilteredData(restom.filter((item) => item.rating >= 2));
      console.log(filteredData,"2")
     }
     else if (title === "rating" && value === 1) {
      setFilteredData(restom.filter((item) => item.rating >= 1));  
     }
    }; //people.filter(person => person.age < 60)
  


  return (
    <div className="onepage">
      <div className="right">
        <Formadd getData={getData} />
        <div>
          <Filter handleSort={handleSort} />
          <div className="usegrid">
            {filteredData.map((t) => (
              <Resto food={t} key={t.id} getData={getData} />
            ))}
          </div>
          <div className="page">
        <Button
          disabled={page <= 0}
          onClick={() => {
            setpage(page - 1);
          }}
          danger
        >
          Previous
        </Button>

        <Button       
        //  disabled={page >= Math.floor(restom.length/6)}
          onClick={() => {
            setpage(page + 1);
          }}
        > Next  </Button>
        <p>Page No.{page}</p>
      </div>
      </div>       
      </div>    
    </div>
  );
};
