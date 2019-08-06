const { createElement: e } = require('react')
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const { shallow } = enzyme
const { C1, C2 } = require('./components')

enzyme.configure({ adapter: new Adapter() })

console.log(shallow(e(C2)).debug())
console.log(shallow(e(C2)).find(C1).at(1).dive().debug())
