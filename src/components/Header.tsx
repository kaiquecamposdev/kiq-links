export function Header() {
  return (
    <header className="flex flex-col items-center gap-2 p-6">
      <img
        src="/src/assets/perfil.png"
        alt=""
        className="max-w-28 max-h-28 rounded-full border-[2px] border-zinc-400 transition-transform hover:scale-[1.1]"
      />
      <h2 className="text-center text-lg font-medium leading-relaxed">
        Tenho 18 anos, E sou <strong>Desenvolvedor Web.</strong>
      </h2>
    </header>
  )
}
