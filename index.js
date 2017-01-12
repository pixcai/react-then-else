import React, { Component, PropTypes } from 'react'

const propsFilter = ({ condition, tag, ...others }) => others

const withWrapper = tag => {
    if (typeof tag === 'function') tag = tag()
    if (typeof tag !== 'string') tag = 'div'
    return tag
}

export class If extends Component {
    getChildContext() {
        return {
            condition: Boolean(this.props.condition)
        }
    }

    render() {
        return React.createElement(
            withWrapper(this.props.tag),
            propsFilter(this.props)
        )
    }
}

If.propTypes = {
    condition: PropTypes.any.isRequired,
    tag: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
}

class Branch extends Component {
    render() {
        if (this.context.condition !== this.props.condition) {
            return null
        }
        return React.createElement(
            withWrapper(this.props.tag),
            propsFilter(this.props)
        )
    }
}

If.childContextTypes = Branch.contextTypes = {
    condition: PropTypes.bool
}

export const Then = props => <Branch condition={true} {...props} />
export const Else = props => <Branch condition={false} {...props} />

export default {
  If,
  Then,
  Else
}
