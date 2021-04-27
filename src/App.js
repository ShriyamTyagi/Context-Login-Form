import React from "react";
import PageContent from "./components/PageContent";
import ThemeProvider from "./components/contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import LanguageProvider from "./components/contexts/LanguageContext";
import './App.css';
function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
     <PageContent>
      <Navbar />
      <Form />
     </PageContent>
     </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
