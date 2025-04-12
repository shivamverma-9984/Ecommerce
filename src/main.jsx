import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./pages/ProductDetails";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById("root")).render(
  <MantineProvider>
  <Provider store={store}>
    <Toaster duration={1000} position="top-center" />
    <App />
  </Provider>
  </MantineProvider>
);
