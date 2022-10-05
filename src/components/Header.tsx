import { Link } from "react-router-dom";
export default function Header(props:any) {
  return(
    <header className=" h-[10vh] flex items-center">
      <Link to={"/"} className=" font-bold sm:text-2xl cursor-pointer "
      >Where in the world?</Link>
      <button>
        Dark mode
      </button>
    </header>
  )
}