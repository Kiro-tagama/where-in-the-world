import { Link } from "react-router-dom";
export default function Header(props:any) {
  return(
    <header>
      <Link to={"/"} className=" font-bold text-lg cursor-pointer"
      >Where in the world?</Link>
      <button>
        Dark mode
      </button>
    </header>
  )
}