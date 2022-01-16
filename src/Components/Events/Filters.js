import React, { useState, useEffect } from "react";
import {Languages, Categories, Prices} from "../../Helpers/Options";

const Filters = ({ handlefilters,handleclear }) => {
  const [Language, setLanguages] = useState([]);
  const [categorie, setcategories] = useState([]);
  const [price, setprices] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    setLanguages(Languages);
    setcategories(Categories);
    setprices(Prices);
  }, []);
  const handleLanguage = (post) => {
    const productExist = checkedState.find((item) => item.id === post.id);

    if (productExist) {
      setCheckedState(checkedState.filter((item) => item.id !== post.id));
    } else {
      setCheckedState([...checkedState, { ...post }]);
    }
  };
  
  return (
    <div className="filter-section">
      <div className="row header">
        <h2>Filter By</h2>
        <p onClick={() => handleclear()}>Clear All</p>
      </div>
      <details className="filter">
        <summary>
          <h6 className="subtitle">Languages</h6>
        </summary>
        <div className="checkbox pt-3 px-2">
          {Language.map((Lang) => (
            <div className="row" key={Lang.id}>
              <input
                type="checkbox"
                onChange={() => handleLanguage(Lang)}
                id={Lang.Language}
                name={Lang.Language}
              />
              <label htmlFor={Lang.Language}>{Lang.Language}</label>
            </div>
          ))}
        </div>
      </details>
      <details className="filter">
        <summary>
          <h6 className="subtitle">categories</h6>
        </summary>
        <div className="checkbox pt-3 px-2">
          {categorie.map((cat) => (
            <div className="row" key={cat.id}>
              <input
                type="checkbox"
                onChange={() => handleLanguage(cat)}
                id={cat.category}
                name={cat.category}
              />
              <label htmlFor={cat.category}>{cat.category}</label>
            </div>
          ))}
        </div>
      </details>
      <details className="filter">
        <summary>
          <h6 className="subtitle">price</h6>
        </summary>
        <div className="checkbox pt-3 px-2">
          {price.map((pri) => (
            <div className="row" key={pri.id}>
              <input
                type="checkbox"
                onChange={() => handleLanguage(pri)}
                id={pri.price}
              />
              <label htmlFor={pri.price}>{pri.price}</label>
            </div>
          ))}
        </div>
      </details>
      <div className="filter-footer row px-3 py-2">
        <p className="apply" onClick={() => handlefilters(checkedState)}>
          Apply
        </p>
        <p className="cancel" onClick={() => handleclear()}>Cancel</p>
      </div>
    </div>
  );
};

export default Filters;