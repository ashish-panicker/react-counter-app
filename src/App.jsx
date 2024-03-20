import Body from './Body'
import counterStore from './store/index.'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={counterStore}>
      <Body />
    </Provider>
  )
}

export default App
