import React from 'react';

class ControlledForm extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: "",
            userData: []
        }
        this.inputValue = React.createRef();

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }


    handleChange = (event) => {
      this.setState({inputValue: event.target.value})
    }

    handleClick() {
      fetch(`https://api.github.com/users/${this.state.inputValue}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({ userData: data })
        })
      }

    render() {
        return (
            <div>
                <p>Controlled Form (displays github username and bio)</p>
                <input onChange = {this.handleChange} type = "text" value = {this.state.inputValue} ref = {this.inputValue} />
                <button onClick = {this.handleClick}>Fetch</button>
                <h2>{this.state.userData.name}</h2>
                <h2>{this.state.userData.bio}</h2>
            </div>
        )
    }
}

export default ControlledForm