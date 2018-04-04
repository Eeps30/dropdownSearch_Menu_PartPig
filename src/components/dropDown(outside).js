class DropDownContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            makeDropDownisHidden: true,
            modelDropDownisHidden: true,
            yearDropDownisHidden: true,
            dataFromMake: ''
        }

        this.toggleMake = this.toggleMake.bind(this)
        this.toggleModel = this.toggleModel.bind(this)
        this.toggleYear = this.toggleYear.bind(this)
        this.receiveDataFromMake = this.receiveDataFromMake.bind(this)
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

    receiveDataFromMake(childMake){
        this.setState({
            dataFromMake: childMake
        });
    }

    render(){

        return(
            <div className="dropDownContainer">
                <div className="dropDown1">
                    <button onClick={this.toggleMake}>Make</button>
                    {!this.state.makeDropDownisHidden && <MakeDropDown receiveData={this.receiveDataFromMake}/>}
                    <br/>
                    <button onClick={this.toggleModel}>Model</button>
                    {!this.state.modelDropDownisHidden && <ModelDropDown newData={this.state.dataFromMake}/>}
                    <br/>
                    <button onClick={this.toggleYear}>Year</button>
                    {!this.state.yearDropDownisHidden && <YearDropDown/>}
                </div>
            </div>
        );

    }
}