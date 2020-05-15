import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import AllHogs from "./AllHogs";
import Filters from "./Filters";
import Sort from "./Sort";

class App extends Component {
  constructor() {
    super()

    this.state = {
      allHogs: hogs,
      filters: {
        type: 'all',
        sortH: ""
      }
    }
  }

  changeType = (greaseSelect) => {
    this.setState({ filters: { type: greaseSelect } });
  };

  setType = (newType) => {
    this.setState({ filters: { sortH: newType } });
    // console.log(this.state.filters.sortH, "ffff")
  };
  
  sortHogs = () => {
    if (this.state.filters.sortH === 'pigName') {
      this.byName([...this.state.allHogs])
    } else {
      this.byWeight([...this.state.allHogs])
    }
    // something = this.state.allHogs === 'pigName' ?  this.byName(hogsToSort) :  this.byWeight(hogsToSort);
    // console.log(hogsToSort)
  }

  seperateHogs = () => {
    let greasedHogs = [];
    let notyetgreasedHogs = [];
    hogs.filter(hog => hog.greased ? greasedHogs.push(hog) : notyetgreasedHogs.push(hog)
    );
    // console.log(greasedHogs, notyetgreasedHogs)
    if (this.state.filters.type === 'all') {
      this.setState({allHogs: hogs});
    } else if ( this.state.filters.type === 'greased' ) { 
      this.setState({allHogs: greasedHogs});
    } else { 
      this.setState({allHogs: notyetgreasedHogs});
    }
    
    // this.setState(sort({allHogs}))
  };

  byName = (hogsToSort) => {
    this.setState({allHogs: 
    hogsToSort.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })});  
  }

  byWeight = (hogsToSort) => {
    this.setState({allHogs: hogsToSort.sort(function (a, b) {
      return a.weight - b.weight;
    })
  })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <span>
          <Filters onChangeType={this.changeType} onSelectGrease={this.seperateHogs} />
          <Sort onChangeType={this.setType} onSort={this.sortHogs} />
        </span >
        <AllHogs pigInfo={this.state.allHogs} />
      </div>
    );
  }
}

export default App;
