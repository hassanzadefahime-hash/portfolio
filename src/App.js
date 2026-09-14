import MainLayout from "./components/layout/MainLayout";
import { useEffect, useState } from "react";

const App = () => {
  const [mode, setMode] = useState();
  useEffect(() => {
    setMode("dark");
  }, []);
  const handleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };
  return <MainLayout mode={mode} handleMode={handleMode}></MainLayout>;
};
export default App;
