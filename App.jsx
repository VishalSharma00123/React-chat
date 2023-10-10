import { useState } from "react";
import "./App.css";
import Chat from "./component/chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./component/RootLayout";
import Whatsapp from "./component/Whatsapp";
import Home from "./component/Home";

const router = createBrowserRouter([
  {
    path: "/", //it is a absolute after
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/chatbot", element: <Chat /> },
      { path: "/whatsappbot", element: <Whatsapp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
