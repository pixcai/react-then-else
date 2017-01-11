import React, { Component } from 'react'
import Cond, { True, False } from '../..'

class App extends Component {
    constructor () {
        super()
        this.state = {
            value: true
        }
        this.onChangeCond = this.onChangeCond.bind(this)
    }

    onChangeCond () {
        this.setState({
            value: !this.state.value
        })
    }

    render () {
        return (
            <div>
                <Cond value={this.state.value}>
                    <h1>Any</h1>
                </Cond>
                <Cond value={this.state.value}>
                    <True>
                        <h1>True</h1>
                    </True>
                </Cond>
                <Cond value={this.state.value}>
                    <False>
                        <h1>False</h1>
                    </False>
                </Cond>
                <button onClick={this.onChangeCond}>Change Cond</button>
            </div>
        )
    }
}

export default <App />
