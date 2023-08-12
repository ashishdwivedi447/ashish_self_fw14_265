export const Pagination = ({ total, selected, onPageChange }) => {
  return <div className="pageContainer">

    <button>next</button>
    
    <div style={{display:"flex", justifyContent:"center",gap:"10px",}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>

    
    <button>prev</button>
  </div>;
};
