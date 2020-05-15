import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filters extends React.Component {

  handleSelectChange = (event) => {
    this.props.onChangeType(event.target.value);

  };

  render() {
    return (
      <div className="filterWrapper">
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelectChange}>
            <option value="all"> All Hogs </option>
            <option value="greased"> Greased </option>
            <option value="notgreased"> Not Yet Greased </option>
          </select>
        </div>

        <div >
          <button onClick={() => this.props.onSelectGrease()}>
            Filter
          </button>
        </div>
      </div>
    )
  }
}


Filters.propTypes = {

};


export default Filters;
