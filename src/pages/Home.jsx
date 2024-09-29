import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";

export default function Home(){
    return(
        <div>
            
            <Dashboard/>
            <Link className="btn btn-outline-primary" to={'itens'}>Itens</Link>
        </div>
    )
}