import React, { Component, PropTypes } from 'react'

class BranchComponent extends Component {
    render () {
        return this.props.cond(Boolean(this.context.value))
    }
}

BranchComponent.contextTypes = {
    value: PropTypes.bool
}

const makeBranch = cond => {
    return class Branch extends Component {
        render () {
            return <BranchComponent cond={value => cond === value ? this.props.children : null} />
        }
    }
}

export const True = makeBranch(true)
export const False = makeBranch(false)

export default class CondComponent extends Component {
    getChildContext () {
        return {
            value: this.props.value
        }
    }

    render () {
        return this.props.children
    }
}

CondComponent.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.element
}

CondComponent.childContextTypes = {
    value: PropTypes.bool
}
