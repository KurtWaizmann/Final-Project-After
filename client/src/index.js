// package import
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// component import
import { QuestionProvider } from './components/questionnaire/QuestionContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <QuestionProvider>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </QuestionProvider>
    </Router>
);

