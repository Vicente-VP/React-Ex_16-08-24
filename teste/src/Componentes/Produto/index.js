import {MdDelete} from 'react-icons/md';
import axios from 'axios';

const produto = ({valor, carregaProdutos}) => {
    return (
        <div className="card">
            <h3 className="titulo">-{valor.nome}</h3>
            <p className="subTitulo">-Preço: {valor.preco}</p>
            <img src={valor.foto} alt="Imagem do Produto" className="imagem"/>
            <p className="subTitulo">-Descrição: {valor.descricao}</p>
            <MdDelete className="icone" onClick={()=>remover(valor.id)}></MdDelete>
        </div>
    )
    function remover(id){
        let api = 'https://app-api-tapwm.onrender.com/api/produtos';
        axios.delete(`${api}/${id}`)
        .then(()=>{
            carregaProdutos();
        });
    }
    
}


export default produto;