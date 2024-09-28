import { Link, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { useItemsContext } from "../context/ItensContext";

export default function EditarItem(){
    const {itens} = useItemsContext()
    const {EditItem} = useItemsContext()
    const {itemId} = useParams()
    const item = itens.find(item => item.id === parseInt(itemId))
    if (!item) {
        return <h1>Item não encontrado</h1>;
    }
    return(
        <div>
            <h1>Editar Item {item.name}</h1>
            <ItemForm formFunction={EditItem} id={item.id} initialValues={item}/>
            <Link className="btn btn-outline-primary" to={'/'}>Home</Link>
        </div>
    )
}