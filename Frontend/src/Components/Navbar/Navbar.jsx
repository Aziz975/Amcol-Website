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
import { Link } from "react-router-dom";

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
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // scroll detect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // typewriter placeholder
    useEffect(() => {
        const full = placeholders[placeholderIndex];
        let timeout;

        if (!deleting && text === full) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && text === "") {
            setDeleting(false);
            setPlaceholderIndex((i) => (i + 1) % placeholders.length);
        } else {
            timeout = setTimeout(
                () =>
                    setText(
                        deleting
                            ? full.slice(0, text.length - 1)
                            : full.slice(0, text.length + 1)
                    ),
                deleting ? 40 : 70
            );
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, placeholderIndex]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", query);
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
                scrolled ? "shadow-md" : ""
            }`}
        >
            <div
                className={`mx-auto max-w-[1200px] px-5 transition-all duration-300 ${
                    scrolled ? "py-2" : "py-5"
                }`}
            >
                {/* Top row */}
                <div className="flex items-center justify-between">
                    <img
                        src="/images/logo.png"
                        alt="AMCOL logo"
                        className={`w-auto transition-all duration-300 ${
                            scrolled ? "h-10" : "h-14"
                        }`}
                    />

                    {/* Search bar: scroll karne par hat jata hai */}
                    {!scrolled && (
                        <form
                            onSubmit={handleSearch}
                            className="flex w-[550px] overflow-hidden rounded-[20px] border border-black/[0.08] bg-[#f1f1f1] shadow-[5px_5px_6px_0px_rgb(0_0_0/17%)]"
                        >
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    aria-label="Search AMCOL Hardware"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="block h-[37px] w-full max-w-full appearance-none border-0 bg-transparent p-[10px] text-center font-['Roboto',Arial,Tahoma,sans-serif] text-[13px] font-normal text-[#626262] outline-none"
                                />

                                {query === "" && (
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-nowrap font-['Roboto',Arial,Tahoma,sans-serif] text-[13px] text-[#626262]"
                                    >
                                        {text}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                aria-label="Search"
                                className="cursor-pointer border-l border-black/[0.08] bg-[#e6e6e6] px-4 text-[#626262]"
                            >
                                <FaSearch />
                            </button>
                        </form>
                    )}

                    <div className="flex gap-12 text-[#1c2f6b]">
                        <FaUserFriends size={scrolled ? 26 : 32} />
                        <FaShoppingCart size={scrolled ? 26 : 32} />
                    </div>
                </div>

                {/* Links */}
                <nav aria-label="Main navigation">
                    <ul
                        className={`flex overflow-x-auto transition-all duration-300 ${
                            scrolled ? "mt-1 pt-0" : "mt-5 pt-5"
                        }`}
                    >
                        {navLinks.map(({ name, path }) => (
                            <li
                                key={path}
                                className="border-r border-gray-200 last:border-r-0"
                            >
                                <NavLink
                                    to={path}
                                    end={path === "/"}
                                    className={({ isActive }) =>
                                        `relative block whitespace-nowrap px-6 font-bold uppercase transition-all
                                        ${scrolled ? "py-3" : "py-5"}
                                        before:absolute before:left-0 before:-right-px before:h-1 before:transition-colors
                                        ${scrolled ? "before:bottom-0" : "before:-top-5"}
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
            </div>
        </header>
    );
}

export default Navbar;