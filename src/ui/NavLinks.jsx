const NavItems = [
  { id: 1, title: "خانه", to: "home" },
  { id: 2, title: "پروژه ها", to: "projects" },
  { id: 3, title: "دسته بندی ها", to: "categories" },
  { id: 4, title: "سوالات متداول", to: "faq" },
  { id: 5, title: "درباره ما", to: "about" },
];
function NavLinks({ onClickLink }) {
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (!section) return;
      const yOffset = -15;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (onClickLink) onClickLink();
  };
  return (
    <ul className="gap-4 hidden lg:flex text-secondary-700 text-lg">
      {NavItems.map(({ to, title }) => (
        <li
          key={to}
          className="hover:text-primary-500 cursor-pointer p-4 transition-all font-bold"
          onClick={() => scrollToSection(to)}
        >
          {title}
        </li>
      ))}
    </ul>
  );
}
export default NavLinks;
