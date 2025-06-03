
export const Pessoa= ({id, nome, funcaoDados})=>{
    return(
        <button id={id} onClick={(e)=> funcaoDados(e)}>
            <p>{nome}</p>
        </button>
    );
}