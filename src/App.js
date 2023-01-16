import React from "react";
import Content from "./components/Content";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div>
      <WeatherProvider>
        <Content />
      </WeatherProvider>
    </div>
  );
}

export default App;
