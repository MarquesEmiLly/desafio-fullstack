import { useState } from "react";
import { client } from "../service/client";

export const Modal = () => {
    let name = ''
    let cpf = ''
    let genero = ''
    let email = ''
    let telefone = ''
    const [toggle, setToggle] = useState(false)
    const handleChangeName = (event) => {
        name = event.target.value
    }
    const handleChangeEmail = (event) => {
        email = event.target.value
    }
    const handleChangeGenero = (event) => {
        genero = event.target.value
    }
    const handleChangeTelefone = (event) => {
        telefone = event.target.value
    }
    const handleChangeCPF = (event) => {
        cpf = event.target.value
    }
    const handlerClick = () => {
        setToggle(toggle => !toggle)
    }
    const submit = () => {
        client.post('/table', {
            name,
            email,
            genero,
            cpf,
            telefone,
        }).then((response) => {
            console.log(response.data)
        })
    }
    return (
        <>
            <nav>
                <button onClick={handlerClick} className='abrir'>Abrir Modal!</button>
            </nav>
            {toggle && (
                <section>
                    <header>
                        <h1>Cadastro do aluno</h1>
                        <button onClick={handlerClick} className="close">x</button>
                    </header>
                    <form>
                        <input type="text" placeholder='name' onChange={handleChangeName} />
                        <input type="email" placeholder='email' id="email" onChange={handleChangeEmail} />
                        <input type="tel" id="telefone" required placeholder="(xx) xxxxx-xxxx" onChange={handleChangeTelefone} />
                        <input type="number" placeholder='genero' onChange={handleChangeGenero} />
                        <input type="number" placeholder='Seu CPF' onChange={handleChangeCPF} />
                        <button onClick={submit} className='enviar'>enviar</button>
                    </form>
                </section>
            )}
        </>
    )
}
