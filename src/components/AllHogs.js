import React, { Component } from 'react';
import Hog from "./Hog";


class AllHogs extends Component {


    render() {
        // console.log(this.props)
        return (
            <div >
                 { this.props.pigInfo.map( hog => <Hog pigInfo={hog} deets={this.moreInfo} key={Math.random()} /> )};
            </div>
            
        );
    }
}


// AllHogs.propTypes = {

// };


export default AllHogs;
