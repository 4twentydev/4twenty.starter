import { ModeToggle } from "./components/ModeToggle";
import NavDrawer from "./components/NavDrawer";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 text-3xl">4twentydev</h1>
      </main>
      <ModeToggle />
      <NavDrawer />
    </>
  );
}

export default App;
