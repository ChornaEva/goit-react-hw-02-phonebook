import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
