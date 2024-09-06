import Produto from '../Produto';

const listaProdutos = ({produtos, carregaProdutos}) => {
    return (
        <div>
            {produtos.map( (p)=> (<Produto valor={p} carregaProdutos={carregaProdutos}></Produto>) )}
        </div>
    );
};

export default listaProdutos;