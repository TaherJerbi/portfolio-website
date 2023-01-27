export default function Nav() {
  return (
    <nav className="hidden md:flex justify-between md:w-3/4 md:mx-auto  pt-12 text-2xl text-brand-blue ">
      <div className="flex space-x-12">
        <a className="hover:underline font-semibold" href={"#about"}>
          about
        </a>
        <a className="hover:underline font-semibold" href={"#about"}>
          projects
        </a>
        <a className="hover:underline font-semibold" href={"#about"}>
          contact
        </a>
      </div>
      <a className="hover:underline font-semibold" href={"#about"}>
        resume
      </a>
    </nav>
  );
}
