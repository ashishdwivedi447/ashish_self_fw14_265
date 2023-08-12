import React ,{useState,useEffect}from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("category");
  
  const [category, setCategory] = useState(initialGenreParams || []);

  const handlecategoryChange = (e) => {
    const option = e.target.value;
   
    let newCategory = [...category];
    if (category.includes(option)) {
     
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
    
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
  
    if (category ) {
      const params={}
      category &&(params.category=category)
     
      setSearchParams(params);
    }
  }, [category, setSearchParams, ]);
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog"    defaultChecked={category.includes("Analog")}  onChange={handlecategoryChange} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital"    defaultChecked={category.includes("Digital")}  onChange={handlecategoryChange}  />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph"    defaultChecked={category.includes("Chronograph")}  onChange={handlecategoryChange}  />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
