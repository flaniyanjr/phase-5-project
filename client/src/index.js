import React from "react";
import App from "./components/App";
import "./styling/index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ReactDOM from "react-dom/client";
import GameLibrary from "./components/GameLibrary"
import LoginPage from "./components/LoginPage";
import SignupForm from "./components/SignupForm";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/gamelibrary",
          element: <GameLibrary />,
        },
        {
            path: "/signupform",
            element: <SignupForm />
        }
      ]
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router= {router}/>
);








// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
