import { ModeToggle } from "./components/ModeToggle";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen bg-var(--background) dark:bg-var(--background)">
        <h1 className="text-red-500 text-3xl">4twentydev</h1>
        <ModeToggle />
      </main>
    </>
  );
}

export default App;
