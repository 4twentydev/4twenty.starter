import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavDrawer = () => {
  return (
    <>
      <div>
        <Drawer>
          <div className="fixed top-0 left-0 mx-auto justify-center items-center">
            <DrawerTrigger>Menu</DrawerTrigger>
          </div>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>What can we do for you?</DrawerTitle>
              <DrawerDescription>
                We offer a range of services from mobile device unlocks, to
                repairs, buy and sell, key fab programmming and more...
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Contact Us</Button>
              <DrawerClose />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default NavDrawer;
