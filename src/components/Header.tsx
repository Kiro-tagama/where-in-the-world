import { Link } from "react-router-dom";
export default function Header({theme,setTheme,ligth,dark}:any) {
  return(
    <header className={theme.element}>
      <Link to={"/"} className=" font-bold sm:text-2xl cursor-pointer "
      >Where in the world?</Link>
      {theme == ligth? 
        <button onClick={()=>setTheme(dark)}>
        Dark mode
        </button>:
        <button onClick={()=>setTheme(ligth)}>
          Ligth mode
        </button>
      }
      
    </header>
  )
}