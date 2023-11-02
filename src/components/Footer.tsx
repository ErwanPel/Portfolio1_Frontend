export default function Footer() {
  return (
    <footer className="h-[200px]  text-lgTextMax dark:text-blTextMax text-base flex flex-col gap-y-4 items-center w-screen bg-lgBackground dark:bg-blBackground  justify-center">
      <p>
        Made by <strong>Erwan Pellerin</strong> with{" "}
        <span className="text-lgTextMin dark:text-blTextMin text-lg">♥</span>
      </p>
      <p>©Copyright 2023 - Erwan Pellerin</p>
    </footer>
  );
}
