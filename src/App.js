import { BrowserRouter as Router } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalStyle from "./globalStyles";
import Header from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
