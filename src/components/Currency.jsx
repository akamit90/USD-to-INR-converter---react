import { useState } from 'react'
function currency({stats}){
  const [searchInput, setSearchInput] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const convertedValue = searchInput * stats.INR;
    setConvertedValue(convertedValue)
    
  };
   
    return(
       <>
      <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm ">
        <div className="card-body">
        <div className="input-group">
          <input value={searchInput}  type="number" onChange={handleSearchInput} placeholder="Enter amount"/> 
          <span className="input-group-text">USD</span>
          <button className="btn btn-outline-success m-2" onClick={handleSearch} type="submit" >Convert</button>      
          </div>
          </div>
      </div>
    </div>
       <div className="col">
                   <div className="card mb-4 rounded-3 shadow-sm ">
                     <div className="card-body">
                       <h1 className="card-title pricing-card-title">
                       {convertedValue ? `${convertedValue} Indian Rupee` : '0 rupee'}
                        </h1>
                       </div>
                   </div>
                 </div>
                 </>
    )
   }
   
   export default currency;