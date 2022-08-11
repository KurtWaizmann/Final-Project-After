import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ParallaxProvider } from 'react-scroll-parallax';
import { QuestionProvider } from './components/questionnaire/QuestionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QuestionProvider>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </QuestionProvider>
);

