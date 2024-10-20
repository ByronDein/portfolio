
const Header = () => {
  return (
    <div>
    <nav >
      <ul className="flex row-auto p-10 gap-52 justify-beetwen items-center">
        <h1 className="text-2xl font-bold text-white">Byron Gonzalez</h1>
        <li>
        </li>
        <li>
          <a className="font-bold text-white underline" href="/">Inicio</a>
        </li>
        <li>
          <a className="font-bold text-white underline" href="/about">Acerca de mi</a>
        </li>
        <li>
          <a className="font-bold text-white underline" href="/contact">Contacto</a>
        </li>
        <li>
          <a className="font-bold text-white underline" href="/contact">Proyectos</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Header