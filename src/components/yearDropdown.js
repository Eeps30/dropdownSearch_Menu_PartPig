import React, {Component} from 'react';
import data from './partsList';
import GenerateRows from './generateMakeRows';

class YearDropdown extends Component {
    constructor(props){
        super(props)

        this.makeRows = this.makeRows.bind(this)
    }

    makeRows(props){
        const listOfYears = data.make[this.props.selectedMake].model[this.props.selectedModel].years
        const yearsString = listOfYears.map(String);
        return yearsString.map( (item, index) => <GenerateRows key={index} callback={() => {this.handleChildClick(item)}} label={item}/>)
    }

    handleChildClick(label){
        this.props.yearSelect(label)
    }

    render(){

        return(
            <div>
                {this.makeRows()}
            </div>
        )
    }
}

export default YearDropdown;