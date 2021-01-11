// import { Body } from "./style.js";
import Header from "./common/header/Header";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

// router: pages
import Home from "./page/home";
import Detail from "./page/detail";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Header className="App-header" />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
