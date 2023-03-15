import Link from "next/link";

const NavbarButton = ({ text, navPath }: { text: string; navPath: string }) => {
  return (
    <div className="bg-black p-2 bg-opacity-0 hover:bg-opacity-[10%] transition-all duration-[0.8s] ease-out flex">
      <Link href={navPath} className="text-black text-[2rem]">{text}</Link>
    </div>
  )
}

export default NavbarButton