import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex space-x-5">
      <Button>Primary Button</Button>
      <Button variant={"secondary"}>Secondary Button</Button>
      <Button variant={"ghost"}>Ghost Button</Button>
    </div>
  );
}
