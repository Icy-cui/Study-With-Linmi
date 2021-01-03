import { Body} from './style.js';
import Header from './common/header/Header'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Header className="App-header"/>
        <Body>
        </Body>
    </Provider>
  );
}

export default App;
