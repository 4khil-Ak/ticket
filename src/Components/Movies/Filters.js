import React, { useState, useEffect } from "react";

const Languages = [
  { Language: "Tamil", id: "Tamil" },
  { Language: "English", id: "English" },
  { Language: "Hindi", id: "Hindi" },
  { Language: "Malayalam,", id: "Malayalam" },
  { Language: "Telugu", id: "Telugu" },
  { Language: "Kannada", id: "Kannada" },
  { Language: "Bengali", id: "Bengali" },
];
const categories = [
  { category: "performance", id: "performance" },
  { category: "Music Show", id: "Music_Show" },
  { category: "Kids", id: "Kids" },
  { category: "Comedy", id: "Comedy" },
  { category: "Online Streaming", id: "Online Streaming" },
  { category: "Workshops", id: "Workshops" },
  { category: "Spirtuality", id: "Spirtuality" },
  { category: "Screening", id: "Screening" },
  { category: "Outdoor Events", id: "Outdoor_Events" },
  { category: "Kids Allowed", id: "Kids_Allowed" },
];
const prices = [
  { price: "free", id: "free",start:"free"},
  { price: "0 - 500", id: "low" ,start:"low"},
  { price: "500 - 2000", id: "medium",start:"medium" },
  { price: "Above 2000", id: "high" ,start:"high"},
];

const Filters = ({ handlefilters,handleclear }) => {
  const [Language, setLanguages] = useState([]);
  const [categorie, setcategories] = useState([]);
  const [price, setprices] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    setLanguages(Languages);
    setcategories(categories);
    setprices(prices);
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