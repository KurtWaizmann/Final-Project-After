
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// import components
import Homepage from "./Homepage";
import CompanyDetails from "./nonfunctional/CompanyDetails";
import ProductDetails from "./nonfunctional/ProductDetails";
import FAQ from "./nonfunctional/FAQ";


const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/companydetails" element={<CompanyDetails />} />
        <Route exact path="/productdetails" element={<ProductDetails />} />
        <Route exact path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
    );
}

export default App;
