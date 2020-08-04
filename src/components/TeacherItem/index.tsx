import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {

    return (
        
        <article className="teacher-item">
        
            <header>
                <img src="https://avatars1.githubusercontent.com/u/5264225?s=460&u=bcb30a610e8d9b852599ea025770f4534e7b458d&v=4" alt="Lupércio F. Ferraz"/>
                <div>
                    <strong>Lupércio Ferraz</strong>
                    <span>Computação</span>
                </div>
            </header>
        
            <p>
                Entusiasta das melhores práticas da programação.
                <br/><br/>
                Apaixonado por Java e React.
            </p>
        
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        
        </article>

    );
}

export default TeacherItem;



