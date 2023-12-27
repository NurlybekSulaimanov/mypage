import React, {useEffect} from "react";
import Home from "./components/home";
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
      <Home />
  );
}

export default App;
