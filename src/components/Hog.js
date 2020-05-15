import React, { Component } from 'react';



class Hog extends Component {
    constructor() {
        super();
        this.state = {
            showHidden: false
        }
    }

    toSnakeCase = (str) => str.toLowerCase().split(' ').join('_');
    toCaps = (str) => str.toUpperCase();

    moreInfo = () => {
        this.setState({showHidden: !this.state.showHidden })
    }



    render() {

        return (
            <div className="pigTile" onClick={this.moreInfo}>
                <img src={`./hog-imgs/${this.toSnakeCase(this.props.pigInfo.name)}.jpg`} /><br /><br />
                <div className="hoggyText" >
                    {this.toCaps(this.props.pigInfo.name)}<br /><br />
                </div >

                <div className={this.state.showHidden ? "" : "hidden" }>
                   WEIGHT: {this.props.pigInfo.weight} KG <br />
                    GREASY?: {this.props.pigInfo.greased ? "greased" : "not yet greased"}<br />
                    SPECIALTY: {this.props.pigInfo.specialty}<br />
                </div >

            </div>
        );
    }
}




export default Hog;

// {this.props.pigInfo.weight}<br />
// {this.props.pigInfo.greased}<br />
// {this.props.pigInfo.specialty}<br />
