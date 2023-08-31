import { useContext } from "react";
import TodosContainer from "./components/TodosContainer";
import { AppModeContext } from "./context/AppModeContext";

function App() {
  const {isDarkMode} = useContext(AppModeContext)
  return (
    <main className={`min-h-screen transition px-4 ${isDarkMode ? "darkApp" : "lightApp"} z-0 flex justify-center pt-[7vh]`}>
      <TodosContainer/>
    </main>
  );
}

export default App;
