import React from "react";
import "./Search.css";
import { useContext } from "react";
import CartContext from "../Store/cart-context";

const Search = (props) => {
  const ctx = useContext(CartContext);
  const [searchInput, setSearchInput] = React.useState("");
  const submitHandler = (event) => {
    event.preventDefault();
   
    ctx.searchItem(searchInput);
  };
  return (
    
    <div class="input-group rounded">
      <input
        className="form-control"
        type="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search"
        aria-label="Search"
      />
      <div className="input-group-append">
        <button type="button" class="btn btn-outline-primary" onClick={submitHandler} >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
