# enzyme-sandbox

## Setting React

Note: Based [js-practice-swing-example](https://github.com/syossan27-sandbox/js-practice-swing-example)

`$ npm install --save-dev babel-preset-es2015 babel-preset-react`

edit package.json.

```
"scripts": {
  "build": "browserify --debug index.jsx --outfile bundle.js -t [ babelify --presets [ es2015 react ] ]"
}
```

## Setting Test

### install mocha & setting babel

`$ npm install -g mocha`

`$ npm install --save-dev babel-register chai`

add this code to package.json.

```
"scripts": {
  "test": "mocha --compilers js:babel-register"
}
```

make .babelrc.

```
{
  "presets": ["es2015", "react"]
}
```

### install enzyme

`$ npm install --save-dev enzyme`

## Make Test File

```
$ mkdir test
$ cd test
$ touch test.js
```

example test.js

```
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {

  it('should render three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });

  it('should render an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).to.be.true;
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.be.true;
  });

});
```

## Create Qiita article!
[ReactのテストをEnzymeで書いてみよう](http://qiita.com/syossan27/items/4a66b4fe5d6c19a4df84)
