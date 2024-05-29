import { useState } from 'react';
import './serchbar.scss';

const types = ['buy', 'rent'];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    min: 0,
    max: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="search">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          min={0}
          max={10000000}
          name="minPrice"
          placeholder="Min Price"
        />
        <input
          type="number"
          min={0}
          max={100000000}
          name="maxPrice"
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;