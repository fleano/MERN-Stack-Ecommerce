import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box sx={{ position: "sticky", top: 0 }}>
        <Header />
      </Box>
      <Box sx={{ height: "100vh" }}></Box>
      <Footer />
    </div>
  );
}

export default App;
