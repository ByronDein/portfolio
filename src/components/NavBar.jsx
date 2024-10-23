import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="text-3xl underline  text-white">Byron Gonzalez</h1>

            </div>
            <div className=" flex items-center justify-center text-2xl">
                <a href="https://www.linkedin.com/in/byron-gonzalez-oyarce/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="ml-4" color="white" />
                </a>
                <a href="https://github.com/ByronDein" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="ml-4" color="white" />
                </a>
                <FaInstagram className="ml-4" color="white" />
            </div>
        </nav>
    )
}

export default NavBar