import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    // { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const id = href.replace("#", "");
        scrollTo(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight">
                    NM<span>.</span>
                </a>

                <div className="flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button size="sm" onClick={() => scrollTo("contact")}>
                        Contact Me
                    </Button>
                </div>

                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass mx-4 mt-2 rounded-2xl px-4 py-4 flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button size="sm" onClick={() => { scrollTo("contact"); setIsMobileMenuOpen(false); }}>
                        Contact Me
                    </Button>
                </div>
            )}
        </header>
    );
};