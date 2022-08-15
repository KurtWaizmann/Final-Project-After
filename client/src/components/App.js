// package imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { AnimatePresence, motion } from "framer-motion";

// import components
import BasicHeader from "./BasicHeader";
import Intro from "./Intro";
import Homepage from "./homepage/Homepage";
import CompanyDetails from "./mock-pages/CompanyDetails";
import ProductDetails from "./mock-pages/ProductDetails";
import FAQ from "./mock-pages/FAQ";
import Registration from "./Registration";
import RegConfirm from "./RegConfirm";
import Question1 from "./questionnaire/Question1";
import Question2 from "./questionnaire/Question2";
import Question3 from "./questionnaire/Question3";
import Question4 from "./questionnaire/Question4";
import Question5 from "./questionnaire/Question5";
import Question6 from "./questionnaire/Question6";
import Question7 from "./questionnaire/Question7";
import Question8 from "./questionnaire/Question8";
import Question9 from "./questionnaire/Question9";
import Question10 from "./questionnaire/Question10";
import Interlude1 from "./questionnaire/Interlude1";
import Interlude2 from "./questionnaire/Interlude2";
import QComplete from "./questionnaire/QComplete";
import Results from "./Results";

// animation import
import { pageTransition } from "./AnimationHandlers";

const App = () => {
  const location = useLocation();
  let navInvisible = location.pathname === "/registration";
  console.log(navInvisible)
  return (
    <>
      <GlobalStyles />
      <motion.div initial="out" animate="in" variants={pageTransition}>
          <BasicHeader />
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/companydetails" element={<CompanyDetails />} />
          <Route exact path="/productdetails" element={<ProductDetails />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/registration-confirmed" element={<RegConfirm />} />
          <Route exact path="/question/1" element={<Question1 />} />
          <Route exact path="/question/2" element={<Question2 />} />
          <Route exact path="/question/3" element={<Question3 />} />
          <Route exact path="/question/4" element={<Question4 />} />
          <Route exact path="/question/5" element={<Question5 />} />
          <Route exact path="/question/6" element={<Question6 />} />
          <Route exact path="/question/7" element={<Question7 />} />
          <Route exact path="/question/8" element={<Question8 />} />
          <Route exact path="/question/9" element={<Question9 />} />
          <Route exact path="/question/10" element={<Question10 />} />
          <Route exact path="/question/10" element={<Question10 />} />
          <Route exact path="/interlude/1" element={<Interlude1 />} />
          <Route exact path="/interlude/2" element={<Interlude2 />} />
          <Route exact path="/question/complete" element={<QComplete />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
