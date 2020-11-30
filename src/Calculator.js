import React, {Component} from 'react'

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    add = () => {
        const getAddTotal = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState({
            num1: 0,
            num2: 0,
            sum: getAddTotal
        })
    }

    render(){
        return(
            <div className="container">
                <div className="add">
                    <h1>Add with React!</h1>
                    <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type="number"
                    name="num2"
                    placeholder="Enter your first number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={this.add}>=</button>
                    <h3>Addition results go here!</h3>
                    <p>{this.state.sum}</p>
                </div>
            </div>
        )
    }
}

export default Calculator