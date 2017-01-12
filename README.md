# react-then-else
Render component with condition in React

This component turns this

```javascript
render() {
    return (
        <div>
            <Header />
            {this.renderBody()}
            <Footer />
        </div>
    );
},

renderBody() {
    return (this.props.age >= this.props.drinkingAge)
        ? <span class="ok">Have a beer, {this.props.name}!</span>
        : <span class="not-ok">Sorry {this.props.name } you are not old enough.</span>;
}
```

into this

```javascript
render() {
    return (
        <div>
            <Header />
            <If condition={ this.props.age >= this.props.drinkingAge }>
                <Then>
                    <span class="ok">Have a beer, {this.props.name}!</span>
                </Then>
                <Else>
                  <span>Sorry, {this.props.name}, you are not old enough.</span>
                </Else>
            </If>
            <Footer />
        </div>
    );
}
```

## Install

### NPM:

    npm install react-then-else

### Bower:

    bower install react-then-else


## Example

```javascript
import React from 'react';
import { If, Then, Else } from 'react-if';

class Beer extends React.Component {

    render() {
        return (
            <div>
                <If condition={ this.props.age >= 16 } tag='header'>
                    <Then>Have a beer, {this.props.name}!</Then>
                    <Else style={{textAlign: 'center'}} onClick={this.onElseClick}>
                        <span>Sorry, {this.props.name}, you are not old enough.</span>
                        <div>
                            <p>One more</p>
                            <If condition={ this.props.age >= 15 }>
                                <Then>You are 15 years old</Then>
                            </If>
                        </div>
                    </Else>
                    <p>You always see me!</p>
                </If>
            </div>
        );
    }

});
```

```javascript
// ES2015
import { If, Then, Else } from 'react-if';

// CommonJS:
const { If, Then, Else } = require('react-if');
```

## API

### &lt;If /&gt;

| Property         |         Type        |
| ---------------- | ------------------- |
| `condition`      | Boolean             |
| ---------------- | ------------------- |
| `tag`            | String or Function] |
| ---------------- | ------------------- |
| any others props | Any Type            |

If `condition` evaluates to `true`, renders the `<Then />` block will be rendered, otherwise renders the `<Else />` block. Either block may be omitted.

Default, `<If />` and `<Then />` and `<Else />` will wrap children in `div` tag, if you want wrap it in others html tag, you can set property `tag` to your tag name, e.g. `<If condition={true} tag='footer'>` or `<Then tag='h1'>` or `<Else tag='a' onClick={this.onClick}>`

This component can contain any number of `<Then />` or `<Else />` blocks, and you can containe `<If />` in the `<Then />` or `<Else />` blocks.

### &lt;Then /&gt;
If `condition` evaluates to `true`, renders it.

### &lt;Else /&gt;
If `condition` evaluates to `false`, renders it.

## License

GPL-3.0
