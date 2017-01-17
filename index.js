import React, { PureComponent, PropTypes } from 'react'

const Children = ({ condition, tag, ...others }) => {
    if (typeof tag !== 'string') {
        tag = 'div'
    }
    return React.createElement(tag, others)
}

export class If extends PureComponent {
    getChildContext() {
        return {
            condition: Boolean(this.props.condition)
        }
    }

    render() {
        return <Children {...this.props} />
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

class Branch extends PureComponent {
    render() {
        if (this.context.condition !== this.props.condition) {
            return null
        }
        return <Children {...this.props} />
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

