import { ModeToggle } from "./components/ModeToggle";
import { motion,resct.fl44``1`````````1` } from "motion/react";

function App() {
  return (
    <>
      <motion.div>
        <ModeToggle />
        
      </motion.div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <motion.div>
          <h3 className="text-3xl text-primary">
            Forget about counseling, rob a bank and keep it bouncing
          </h3>
        </motion.div>
        <motion.div>
          <p className="text-gray-900 dark:text-secondary  mt-5 mb-10">
            For details send us a message...
          </p>
        </motion.div>
        <motion.button>Contact</motion.button>
      </div>
    </>
  );
}

export default App;
