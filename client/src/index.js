import React from "react";
import ReactDOM from "react-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./index.css";
import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" render={(props) => <App {...props} />} />
//       <Redirect from="/" to="/dashboard" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);