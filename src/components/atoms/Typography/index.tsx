// import React from "react";
// //import { ThemeProvider } from "@emotion/react";
// import { ThemeProvider } from "@mui/material/styles";
// import Theme  from "../../../Themes/theme";
// import { Typography } from "@mui/material";

// const TypographyComponent = ({ theme, ...props }: any) => {
//     return (
//       <ThemeProvider theme={Theme}>
//         <Typography {...props}>
//           {props.children}
//         </Typography>
//       </ThemeProvider>
//     );
//   };
  
//   export default TypographyComponent;


import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Theme  from "../../../Themes/theme";

const TypographyComponents = (props:any) => {
  return (
    <ThemeProvider theme={Theme}>
      <Typography variant={props.variant} mb={1} mt={1} {...props}>
        {props.children}
      </Typography>
    </ThemeProvider>
  )
}

export default TypographyComponents;