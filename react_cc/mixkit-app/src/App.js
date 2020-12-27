import "./App.css";
import NavgBar from "./NavgBar";
import Selection from "./Selection";
import ContentMain from "./ContentMain";

import { Layout} from "antd";
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <NavgBar />
          <Selection />
        </Header>
        <br/>
        <Content>
          <ContentMain />
        </Content>
        <br/>
        <Footer style={{ textAlign: "center", color:'gray' }}>cc ©2020 Created by cc</Footer>
      </Layout>
    </div>
  );
}

export default App;
