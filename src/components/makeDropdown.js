import React, {Component} from 'react';
import data from './partsList';
import GenerateMakeRows from './generateMakeRows';

class MakeDropDown extends Component {
    constructor(props){
        super(props)

        this.makeRows = this.makeRows.bind(this)
        console.log('hello', props);
    }

    makeRows(){
        const listOfMakes = Object.keys( data.make );
        return listOfMakes.map( (item, index) => <GenerateMakeRows key={index} callback={() => {this.handleChildClick(item)}} label={item}/>)
    }

    handleChildClick(label){
        console.log('handle child click', label);
        console.log('props log', this.props);
        this.props.makeSelect(label)
    }

    render(){

        return(
            <div>
                {this.makeRows()}
            </div>
        )
    }
}

export default MakeDropDown;