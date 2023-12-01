export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#262C51] p-5">
      <a href="/">
        <img src="/logo.svg" alt="logo" className="w-10" />
      </a>
      <div className="flex items-center">
        {/* <a
          href="/contacts"
          className="text-white text-sm font-medium mr-4 hover:underline"
        >
          Contacts
        </a>
        <a
          href="/about"
          className="text-white text-sm font-medium mr-4 hover:underline"
        >
          About
        </a> */}
        <a
          href="/"
          className="text-white text-sm font-medium mr-4 hover:underline"
        >
          Home
        </a>
      </div>
    </header>
  );
}
