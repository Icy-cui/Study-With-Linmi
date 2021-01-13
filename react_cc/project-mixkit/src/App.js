// import { Body } from "./style.js";
import Header from "./common/header/Header";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
// router: pages
import Home from "./page/home";
import Detail from "./page/detail";
//detail
import Effect from "./page/detail/Effect";
import Music from "./page/detail/Music";
import Video from "./page/detail/Video";


function App() {
  return (
    <Provider store={store}>
      <div style={{margin:0, padding:0}}>
        <Header className="App-header" />
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
          <Route path="/detail/components/Effect" exact component={Effect}></Route>
          <Route path="/detail/components/Music" exact component={Music}></Route>
          <Route path="/detail/components/Video" exact component={Video}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
