const produto = ({valor}) => {
    return (
        <div className="card">
            <h3 className="titulo">-{valor.nome}</h3>
            <p className="subTitulo">-Preço: {valor.preco}</p>
            <img src={valor.foto} alt="Imagem do Produto" className="imagem"/>
        </div>
    )
}

export default produto;