import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ModeToggle } from "./components/ModeToggle";
import NavDrawer from "./components/NavDrawer";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen bg-gray-600">
        <div className="fixed top-0 right-0 border-red-500">
          <DropdownMenu />
        </div>
        <h1 className="text-red-500 text-3xl">4twentydev</h1>
        <ModeToggle />
        <div className="flex justify-between items-center">
          <div className="fixed top-0 left-0 w-full h-10">
            <NavDrawer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
