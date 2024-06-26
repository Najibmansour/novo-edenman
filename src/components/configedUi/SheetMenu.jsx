import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuButton from "./MenuButton";
import Link from "next/link";

export function SheetMenu({ navItems }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <MenuButton className="block w-7 lg:hidden lg:w-10" />
        </button>
      </SheetTrigger>
      <SheetContent className="rounded-l-3xl ">
        <div className="grid gap-10 py-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={item.href}
                className="hover-underline-animation  text-xl  font-extrabold tracking-wider text-[#15375A]  after:bg-[#15375A]"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
