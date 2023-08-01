import About from "./components/About";
import Footer from "./components/Footer";
import "../src/index.css"
import Header from "./components/Header";
function App() {
  return (
    <div className="app--container">
      <div className="app-container--two">
      <Header />
      <About />
      <Footer />
      </div>
    </div>

  );
}

export default App;
