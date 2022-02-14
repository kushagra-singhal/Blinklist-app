import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import './App.css';
import Template from './components/Template/TemplateComponent';
import theme from "./Themes/main";

// import MyLibrary from './components/Pages/MyLibrary';
// import HeaderComponent from './components/organisms/Header';



function App() {
  
  
  
  return(
    <div data-testid="App1" className="App">


    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Template />
      

     
    </ThemeProvider>

    </div>
  );

}





export default App;

