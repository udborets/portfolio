import Link from "next/link";

const NavbarButton = ({ text, navPath }: { text: string; navPath: string }) => {
  return (
    <div className="bg-white p-2 bg-opacity-0 flex w-full">
      <Link href={navPath} className="text-white w-full text-[1rem] hover:tracking-[0.08rem] transition-all duration-[0.5s] ease-out">{text}</Link>
    </div>
  )
}

export default NavbarButton