// 3rd Party
import React from 'react';
// Custom
import HighlightSection from './HighlightSection';
import TextSection from './TextSection';
import TitleBar from './TitleBar';
// Style
import './App.css';

export default function App() {
  return (
    <div>
      <TitleBar />
      <main id="section-container">
        <TextSection />
        <HighlightSection />
      </main>
    </div>
  );
}
