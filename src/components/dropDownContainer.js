import React, {Component} from 'react';
import MakeDropDown from './makeDropdown';
import ModelDropDown from './modelDropdown';
import YearDropDown from './yearDropdown';
import data from './partsList';

class DropDownContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            makeDropDownisHidden: true,
            modelDropDownisHidden: true,
            yearDropDownisHidden: true,
            make: null,
            model: null,
            year: null
        }
        this.toggleMake = this.toggleMake.bind(this)
        this.toggleModel = this.toggleModel.bind(this)
        this.toggleYear = this.toggleYear.bind(this)
        this.catchMakeSelect = this.catchMakeSelect.bind(this)
    }

    toggleMake(){
        this.setState({
            makeDropDownisHidden: !this.state.makeDropDownisHidden
        })
    }

    toggleModel(){
        this.setState({
            modelDropDownisHidden: !this.state.modelDropDownisHidden
        })
    }

    toggleYear(){
        this.setState({
            yearDropDownisHidden: !this.state.yearDropDownisHidden
        })
    }

    getEmptyData(){
        let checkFields = ['make', 'model', 'year']
        for(var i=0; i < checkFields.length; i++){
            if(this.state[checkFields[i]] === null){
                return checkFields[i];
            }
        }
        return false
    }

    getDataChild(){
        if(this.state.make === null){
            return data.make;
        }else if(this.state.model === null){
            return data.make[this.state.make].model;
        }else if(this.state.year === null){
            let yearsData = data.make[this.state.make].model[this.state.model].years
            return yearsData
        }
    }

    catchMakeSelect(selectedMake){
        console.log('parent speaking', selectedMake);
        const caughtMake = selectedMake
        this.setState({
            make: caughtMake
        })
        console.log(this.state.make);
    }

    render(){

        const make = this.state.make
        console.log('new make', make);

        var nextFieldToCheck = this.getEmptyData();
        console.log('field to check: ' + nextFieldToCheck);

        var dataToCheck = this.getDataChild();
        if(dataToCheck.constructor === Array){
            var data = dataToCheck.map(String);
        }else{
            var data = Object.keys( this.getDataChild() );
        }

        return(
            <div className="dropdownContainer">
                <div className="dropdownMake">
                    <button onClick={this.toggleMake}>Make</button>
                    {!this.state.makeDropDownisHidden && <MakeDropDown makeSelect={this.catchMakeSelect}/>}
                </div>
                <div className="dropdownModel">
                    <button onClick={this.toggleModel}>Model</button>
                    {!this.state.modelDropDownisHidden && <ModelDropDown/>}
                </div>
                <div className="dropdownYear">
                    <button onClick={this.toggleYear}>Year</button>
                    {!this.state.yearDropDownisHidden && <YearDropDown/>}
                </div>
            </div>
        )
    }
}

export default DropDownContainer