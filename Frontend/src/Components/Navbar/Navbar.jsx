// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaSearch, FaUserFriends, FaShoppingCart } from "react-icons/fa";

// const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/products" },
//     { name: "Construction", path: "/construction" },
//     { name: "Industrial", path: "/industrial" },
//     { name: "Departments", path: "/departments" },
//     { name: "Contact Us", path: "/contact-us" },
//     { name: "How to Order", path: "/how-to-order" },
// ];

// function Navbar() {
//     const [query, setQuery] = useState("");

//     const handleSearch = (e) => {
//         e.preventDefault();
//         console.log("Searching for:", query);
//     };

//     return (
//         <header className="mx-auto max-w-[1200px] p-5">
//             {/* Top row */}
//             <div className="flex items-center justify-between">
//                 <img src="/images/logo.png" alt="AMCOL logo" className="h-14 w-auto" />
//                 <form
//                     onSubmit={handleSearch}
//                     className="flex w-[550px] overflow-hidden rounded-full bg-gray-100 shadow-lg"
//                 >
//                     <input
//                         type="text"
//                         placeholder="Search AMCOL Hardware"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         className="flex-1 bg-transparent p-1 h-[37px] text-center text-[13px] outline-none"
//                     />
//                     <button type="submit" className="bg-gray-200 px-4 cursor-pointer">
//                         <FaSearch />
//                     </button>
//                 </form>

//                 <div className="flex gap-12 text-[#1c2f6b]">
//                     <FaUserFriends size={32} />
//                     <FaShoppingCart size={32} />
//                 </div>
//             </div>

//             {/* Links */}
//             <nav aria-label="Main navigation">
//                 <ul className="mt-5 flex overflow-x-auto pt-5">
//                     {navLinks.map(({ name, path }) => (
//                         <li key={path} className="border-r border-gray-200 last:border-r-0">
//                             <NavLink
//                                 to={path}
//                                 end={path === "/"}
//                                 className={({ isActive }) =>
//                                     `relative block whitespace-nowrap px-6 py-5 font-bold uppercase transition-colors
//                                     before:absolute before:-top-5 before:left-0 before:-right-px before:h-1 before:transition-colors
//                                     ${
//                                         isActive
//                                             ? "text-[#e31837] before:bg-[#e31837]"
//                                             : "text-gray-700 before:bg-transparent hover:text-[#e31837] hover:before:bg-[#e31837]"
//                                     }`
//                                 }
//                             >
//                                 {name}
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;








import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUserFriends, FaShoppingCart } from "react-icons/fa";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Construction", path: "/construction" },
    { name: "Industrial", path: "/industrial" },
    { name: "Departments", path: "/departments" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "How to Order", path: "/how-to-order" },
];

const placeholders = [
    "Looking for masks? Sanitizer? Oxygen concentrator?",
    "Looking for Appliances? Electronics?",
    "Pumps? We have lots of pumps...",
    "Water tanks, pipes and fittings too...",
    "You can literally find anything here...",
];

function Navbar() {
    const [query, setQuery] = useState("");
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [visible, setVisible] = useState(true); // true = open, false = closed

    useEffect(() => {
        let timeout;
        const id = setInterval(() => {
            setVisible(false); // close
            timeout = setTimeout(() => {
                setPlaceholderIndex((i) => (i + 1) % placeholders.length); // swap text while closed
                setVisible(true); // open
            }, 400);
        }, 4000);
        return () => {
            clearInterval(id);
            clearTimeout(timeout);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", query);
    };

    return (
        <header className="mx-auto max-w-[1200px] p-5">
            {/* Top row */}
            <div className="flex items-center justify-between">
                <img src="/images/logo.png" alt="AMCOL logo" className="h-14 w-auto" />

                <form
                    onSubmit={handleSearch}
                    className="flex w-[550px] overflow-hidden rounded-full bg-gray-100 shadow-lg"
                >
                    <div className="relative flex-1">
                        <input
                            type="text"
                            aria-label="Search AMCOL Hardware"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="h-[37px] w-full bg-transparent p-1 text-center text-[13px] text-gray-600 outline-none"
                        />

                        {query === "" && (
                            <span
                                aria-hidden="true"
                                className={`pointer-events-none absolute inset-0 flex origin-center items-center justify-center text-[13px] text-gray-500 transition-all duration-[400ms] ${
                                    visible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                                }`}
                            >
                                {placeholders[placeholderIndex]}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        aria-label="Search"
                        className="cursor-pointer border-l border-gray-300 bg-gray-200 px-4 text-gray-500"
                    >
                        <FaSearch />
                    </button>
                </form>

                <div className="flex gap-12 text-[#1c2f6b]">
                    <FaUserFriends size={32} />
                    <FaShoppingCart size={32} />
                </div>
            </div>

            {/* Links */}
            <nav aria-label="Main navigation">
                <ul className="mt-5 flex overflow-x-auto pt-5">
                    {navLinks.map(({ name, path }) => (
                        <li key={path} className="border-r border-gray-200 last:border-r-0">
                            <NavLink
                                to={path}
                                end={path === "/"}
                                className={({ isActive }) =>
                                    `relative block whitespace-nowrap px-6 py-5 font-bold uppercase transition-colors
                                    before:absolute before:-top-5 before:left-0 before:-right-px before:h-1 before:transition-colors
                                    ${
                                        isActive
                                            ? "text-[#e31837] before:bg-[#e31837]"
                                            : "text-gray-700 before:bg-transparent hover:text-[#e31837] hover:before:bg-[#e31837]"
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;