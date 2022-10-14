import { Link } from "react-router-dom";
import {BsFillMoonFill,BsFillSunFill} from "react-icons/all"

export default function Header({theme, selecTheme, upTheme}:any) {
  return(
    <header className={theme.element}>
      <Link to={"/"} className=" font-bold sm:text-2xl cursor-pointer "
      >Where in the world?</Link>
      {selecTheme == "ligth"? 
        <button onClick={()=>upTheme()}>
          <BsFillMoonFill/>
          Dark mode
        </button>:
        <button onClick={()=>upTheme()}>
          <BsFillSunFill/>
          Ligth mode
        </button>
      }
      
    </header>
  )
}