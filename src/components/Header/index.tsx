import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 border-b flex justify-center items-end py-4">
      <nav className="flex gap-4">
        <Link href="/svg#">Projeto</Link>
        <Link href="/svg#">Sobre</Link>
        <Link href="/svg#">Termos de uso</Link>
        <Link href="/svg#">Motivação</Link>
      </nav>
    </header>
  );
}
