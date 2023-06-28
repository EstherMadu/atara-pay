import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastProvider } from "./hooks/use-toast.jsx";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
