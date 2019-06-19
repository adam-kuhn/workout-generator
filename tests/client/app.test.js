import React from 'react'
import {Provider} from 'react-redux'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../client/components/App'
import {store} from '../../client/index'

Enzyme.configure({adapter: new Adapter()})

test('<App /> renders without crashing', () => {
  const expected = '<Connect(App) />'
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(wrapper.text()).toBe(expected)
})
