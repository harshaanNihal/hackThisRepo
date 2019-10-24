import React from "react"

class UncontrolledForm extends React.Component {
    constructor() {
      super()
      this.state = {
        value: ""
      }
      this.inputValue = React.createRef();
    }
  
    handleChange = () => {
      this.setState({value: this.inputValue.current.value})
    }
  
    render() {
      return (
        <div>
            <p>UncontrolledForm (displays the inputvalue)</p>
          <input onChange = {this.handleChange} type = "text" ref = {this.inputValue}/>
          <h2>{this.state.value}</h2>
        </div>
      )
    }
  }

  export default UncontrolledForm
  