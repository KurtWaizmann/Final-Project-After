
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// import components
import Homepage from "./Homepage";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </Router>
    );
}

export default App;
