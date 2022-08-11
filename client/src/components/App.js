
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// import components
import Homepage from "./homepage/Homepage";
import CompanyDetails from "./mock-pages/CompanyDetails";
import ProductDetails from "./mock-pages/ProductDetails";
import FAQ from "./mock-pages/FAQ";
import Registration from "./Registration";
import RegConfirm from "./RegConfirm";


const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/companydetails" element={<CompanyDetails />} />
        <Route exact path="/productdetails" element={<ProductDetails />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/registration-confirmed" element={<RegConfirm />} />

      </Routes>
    </Router>
    );
}

export default App;
