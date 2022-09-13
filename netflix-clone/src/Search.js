import React from "react";

function Search({onChanges}) {
  
  function change(e){
onChanges(e.target.value)
  } 
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  onChange={change} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;