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
    <Drawer>
      <DrawerTrigger>Menu</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>What can we do for you?</DrawerTitle>
          <DrawerDescription>
            We offer a range of services from mobile device unlocks, to repairs,
            buy and sell, key fab programmming and more...
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Contact Us</Button>
          <DrawerClose />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
