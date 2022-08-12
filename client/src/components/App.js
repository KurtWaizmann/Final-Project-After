
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// import components
import Homepage from "./homepage/Homepage";
import CompanyDetails from "./mock-pages/CompanyDetails";
import ProductDetails from "./mock-pages/ProductDetails";
import FAQ from "./mock-pages/FAQ";
import Registration from "./Registration";
import RegConfirm from "./RegConfirm";
import Question1 from "./questionnaire/Question1";
import Question2 from "./questionnaire/Question2";
import Question3 from "./questionnaire/Question3";
import Results from "./Results";

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
        <Route exact path="/question-one" element={<Question1/>} />
        <Route exact path="/question-two" element={<Question2/>} />
        <Route exact path="/question-three" element={<Question3/>} />
        <Route exact path="/results" element={<Results/>} />
      </Routes>
    </Router>
    );
}

export default App;
