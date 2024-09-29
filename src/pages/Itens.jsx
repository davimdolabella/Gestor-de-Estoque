import { Link } from "react-router-dom"
import ItensList from "../components/ItensList"
export default function Itens(){
    return(
        <div>
            <h1>Esta é a lista de Itens</h1>
            <Link className="btn btn-outline-danger" to={'/Gestor-de-Estoque/'}>Home</Link>
            <Link className="btn btn-outline-success" to={'/Gestor-de-Estoque/criarItem'}>Criar Novo Item</Link>
            <ItensList/>
        </div>
    )
}