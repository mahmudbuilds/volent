
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {toast} from "sonner"
export default function Home() {
  return (
    <div>
      <Button className="cursor-pointer hover:bg-purple-700">Click Me!</Button>
      <p>Hi</p>
    </div>
  );
}
