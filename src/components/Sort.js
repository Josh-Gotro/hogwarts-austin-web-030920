import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Sort extends Component {

    handleChange = (event) => {
        this.props.onChangeType(event.target.value);
      };

    render() {
        return (
            <div  className="filterWrapper">
                <div className="field">
                    <select name="type" id="type" onChange={this.handleChange}>
                        <option value="pigName"> Name </option>/option>
                        <option value="pigWeight"> Weight </option>
                    </select>
                </div>
                <div >
                    <button onClick={() => this.props.onSort()}>
                        Sort By
                    </button>
                </div>
            </div>
        );
    }
}


Sort.propTypes = {

};


export default Sort;



