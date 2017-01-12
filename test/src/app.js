import React, { Component } from 'react'
import { If, Then, Else } from '../..'

class App extends Component {
    constructor() {
        super()
        this.state = {
            condition: true,
            toggle: true
        }
        this.onConditionChange = this.onConditionChange.bind(this)
        this.onToggleChange = this.onToggleChange.bind(this)
    }

    onConditionChange() {
        this.setState({
            condition: !this.state.condition
        })
    }

    onToggleChange() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <If condition={this.state.condition} style={{ background: 'lightgrey' }}>
                    <h1>ALWAYS SEE ME</h1>
                    <Then tag='h2'>
                        This is <span style={{ color: 'blue'}}>Then</span>
                        <p>Amazing</p>
                    </Then>
                    <Else>
                        <h2>This is <span style={{ color: 'red' }}>Else</span></h2>
                        <If condition={this.state.toggle}>
                            <Then onClick={() => alert('Congratulations')}>
                                <h2>Congratulations</h2>
                            </Then>
                            <button onClick={this.onToggleChange}>Toggle Me</button>
                        </If>
                    </Else>
                </If>
                <button onClick={this.onConditionChange}>Change Condition</button>
            </div>
        )
    }
}

export default <App />
