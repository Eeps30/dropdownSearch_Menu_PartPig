import React, {Component} from 'react';
import data from './partsList';
import GenerateRows from './generateMakeRows';

class ModelDropdown extends Component {
    constructor(props){
        super(props)

        this.makeRows = this.makeRows.bind(this)
    }

    makeRows(props){
        const listOfModels = Object.keys( data.make[this.props.selectedMake].model )
        return listOfModels.map( (item, index) => <GenerateRows key={index} callback={() => {this.handleChildClick(item)}} label={item}/>)
    }

    handleChildClick(label){
        this.props.modelSelect(label)
    }

    render(){

        return(
            <div>
                {this.makeRows()}
            </div>
        )
    }
}

export default ModelDropdown;