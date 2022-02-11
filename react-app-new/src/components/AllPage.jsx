import { NavBar } from "./NavBar";

export const AllPage =({children})=>{
    return(
        <div className="pageClass">
            <NavBar/>
            {children}
            <NavBar/>
        </div>
    );
};