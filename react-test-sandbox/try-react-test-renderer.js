const { createElement: e } = require('react')
const { create } = require('react-test-renderer')
const { C2 } = require('./components')

const c2 = create(e(C2))
console.log(c2.toTree())
console.log(c2.toJSON())
