import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import './index.css'
import App from "./App";
import { createTheme, MantineProvider } from "@mantine/core";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <MantineProvider  withGlobalStyles={false} withNormalizeCSS={false} theme={theme}>
      <App />
    </MantineProvider>
  
);


