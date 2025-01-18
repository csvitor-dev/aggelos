import { CircleArrowLeft, Send } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface RedirectButtonProps {
  icon: "send" | "back";
  children: string;
  href: string;
  className?: string;
}

export function RedirectButton({
  icon,
  children,
  href,
  className,
}: RedirectButtonProps) {
  return (
    <Button className={className} asChild>
      <Link href={href}>
        {icon === "send" ? <Send /> : <CircleArrowLeft />} {children}
      </Link>
    </Button>
  );
}
