import { useState } from 'react'
import { Pessoa } from './Componentes/pessoa'

function Pessoas() {
    const [pessoas, setPessoas] = useState(getPessoasLocal());
    const [pessoa, setPessoa] = useState({
        "id": 0,
        "nome": "",
        "cpf": "",
        "dataNascimento": "",
        "telefone": ""
    });


    function getPessoasLocal() {
        let pessoasLocal = [];
        for (let i = 0; i < localStorage.length; i++) {
            const pessoa = JSON.parse(localStorage.getItem(localStorage.key(i)));
            pessoasLocal.push(pessoa);
        }
        return pessoasLocal;
    }

    console.log(pessoas);
    function GetDados(id) {
        let pessoaFiltrada= JSON.parse(localStorage.getItem(id));
        setPessoa(pessoaFiltrada);
    }
    return (
        <>
            <h1>Pessoas cadastradas</h1>
            {pessoas.map((p, index) =>
                (<Pessoa key={index} id={p["id"]} nome={p["nome"]} funcaoDados={()=> GetDados(p["id"])} />)
            )}
            {
                pessoa["id"] == 0 ? "" : 
                <div>
                    <div>{pessoa["nome"]}</div>
                    <div>{pessoa["cpf"]}</div>
                    <div>{pessoa["dataNascimento"]}</div>
                    <div>{pessoa["telefone"]}</div>
                </div>
            }
        </>
    );
}

export default Pessoas