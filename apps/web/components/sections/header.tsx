import { ButtonTheme } from "@/components/theme/button-theme";

export function Header() {
  return (
    <header className="flex justify-between content-center p-4 bg-neutral-200 dark:bg-neutral-900">
      <h1>Aggelos</h1>
      <ButtonTheme />
    </header>
  );
}
