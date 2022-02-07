import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './App.css';
import Template from './components/Template/TemplateComponent';
import theme from "./Themes/main";
// import MyLibrary from './components/Pages/MyLibrary';

// import TemplateComponent from './components/Template/TemplateComponent';




function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Template  />
        {/* <TemplateComponent /> */}
      </ThemeProvider>
    </div>
  );
}


export default App;

