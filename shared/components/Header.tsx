import MenuIcon from "./icons/MenuIcon"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-red-500 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-3">
        <div className="flex items-center gap-3">
            <MenuIcon className="w-10 text" />
          </div>
        </div>
      </div>
    </header>
  )
}
