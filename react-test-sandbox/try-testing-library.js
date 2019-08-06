const { createElement: e } = require('react')
const { render, fireEvent } = require('@testing-library/react')
require('jsdom-global')()
const { C2 } = require('./components')

const { getAllByText, debug } = render(e(C2))
debug()
fireEvent.click(getAllByText(/count/)[0])
debug()
