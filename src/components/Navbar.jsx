import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navbarItems = [ { label: "Home", link: "/" }, { label: "Generate", link: "/generate" }, { label: "Contact", link: "/contact" } ];

    const navigate = useNavigate()

    return (
        <>
            {/* Navbar */}
            <nav className="flex flex-row justify-between items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">

                {/* Logo */}
                <div className="flex flex-row items-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-black overflow-hidden flex items-center justify-center">
                        <img
                            src="/image.png"
                            alt="Logo"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    <p className="ml-2 font-bold text-xl">
                        ThumbForge
                    </p>
                </div>


                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8">
                    {navbarItems.map((item) => (
                        <NavLink
                            key={item.link}
                            to={item.link}
                            className={({ isActive }) => ` text-lg cursor-pointer transition ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-black" } `}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>


                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate('/login')}>
                        Login
                    </button>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate('/login')}>
                        Sign Up
                    </button>
                </div>


                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-3xl"
                >
                    ☰
                </button>

            </nav>


            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="
                        fixed
                        inset-0
                        bg-black/40
                        z-40
                    "
                />
            )}


            {/* Mobile Sidebar */}
            <div
                className={`
                    fixed
                    top-0
                    left-0
                    h-full
                    w-72
                    bg-white
                    z-50
                    shadow-xl
                    transform
                    transition-transform
                    duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >

                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-5 border-b">

                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                                src="/image.png"
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="ml-2 font-bold text-lg">
                            ThumbForge
                        </p>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-2xl"
                    >
                        ✕
                    </button>

                </div>


                {/* Sidebar Navigation */}
                <div className="flex flex-col p-6 gap-6">

                    {navbarItems.map((item) => (
                        <NavLink
                            key={item.link}
                            to={item.link}
                            onClick={() => setIsOpen(false)}
                            className="
                                text-lg
                                cursor-pointer
                                text-gray-700
                                hover:text-black
                                transition
                            "
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 mt-4">

                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => { setIsOpen(false); navigate('/login'); }}>
                            Login
                        </button>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => { setIsOpen(false); navigate('/login'); }}>
                            Sign Up
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Navbar;