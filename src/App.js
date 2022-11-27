import Articles from "./components/Articles";
import BuildCommunity from "./components/BuildCommunity";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Numbers from "./components/Numbers";

import "./style/EstilosGenerales.css"
import "./style/Responsive.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Numbers />
      <Articles />
      <BuildCommunity />
      <Footer />
    </div>
  );
}

export default App;
