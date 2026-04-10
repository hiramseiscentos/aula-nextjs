'use client'

import { useState } from 'react';

import Botao from './botao';

import styles from './page.module.css';

function Exemplo04() {
    // O hook useState gerencia o valor do contador
    const [contador, setContador] = useState(0);

    const excluir = () => setContador('excluir');
    const listar = () => setContador('listar');
    const editar = () => setContador('editar');
    const cadastrar = () => setContador('cadastrar');
    const cancelar = () => setContador('cancelar');
    

    return (
        <div className={styles.container}>
            <h1>Exemplo 4 - Uso de componentes</h1>
            <h2>O valor atual é: {contador}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="excluir" aoClicar={excluir} acao={'excluir'} />
            <Botao texto="listar" aoClicar={listar} acao={'listar'} />
            <Botao texto="editar" aoClicar={editar} acao={'editar'} />
            <Botao texto="cadastrar" aoClicar={cadastrar} acao={'cadastrar'} />
            <Botao texto="cancelar" aoClicar={cancelar} acao={'cancelar'} />
        </div>
    );
}

export default Exemplo04;