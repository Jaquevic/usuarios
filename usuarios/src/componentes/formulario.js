import { TextField, Button } from "@mui/material"
import { useState } from 'react'
import Alert from '@mui/material/Alert';

export const Formulario = ({ }) => {
    const [id, setId] = useState(getId());
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setData] = useState("");
    const [telefone, setTelefone] = useState("");

    function getId(){
        const numeroDeItens = localStorage.length;
        if(numeroDeItens==null){
            return 1;
        }
        return numeroDeItens+1;
    }
    return (
        <>
        <form action="">
            <div className="paiForm">
                <TextField id="id" placeholder="id" variant="outlined" value={id} />
                <TextField id="nome" placeholder="Nome" variant="outlined" onChange={(e)=> setNome(e.target.value)}/>
                <TextField id="CPF" placeholder="CPF" variant="outlined" onChange={(e)=> setCpf(e.target.value)} />
                <TextField id="Data_nascimento" placeholder="Data Nascimento" onChange={(e)=> setData(e.target.value)} variant="outlined"/>
                <TextField id="telefone" placeholder="Telefone" onChange={(e)=> setTelefone(e.target.value)} variant="outlined" />
            </div>
            <Button onClick={()=>{
                if(nome && cpf && dataNascimento && telefone){
                    window.localStorage.setItem(id,JSON.stringify({"id" : id, "nome" : nome, "cpf" : cpf, "dataNascimento": dataNascimento, "telefone" : telefone}) )
                    window.location.reload();
                }
            }}>Salvar</Button>
        </form>
        <Alert severity="warning" className="alerta">Preencha todos os dados.</Alert>
        </>
    )
}