export default function Nav() {
  return (
    <nav className="hidden md:flex justify-between md:w-3/4 md:mx-auto  pt-12 text-2xl text-brand-blue">
      <div className="flex space-x-12">
        <a className="hover:underline" href={"#about"}>
          about
        </a>
        <a className="hover:underline" href={"#about"}>
          projects
        </a>
        <a className="hover:underline" href={"#about"}>
          contact
        </a>
      </div>
      <a className="hover:underline" href={"#about"}>
        resume
      </a>
    </nav>
  );
}
