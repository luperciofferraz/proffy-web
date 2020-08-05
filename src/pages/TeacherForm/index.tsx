import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>

                <fieldset>

                    <legend>Seus dados</legend>                    

                    <Input name="name" label="Nome completo" />

                    <Input name="avatar" label="Avatar" />

                    <Input name="whatsapp" label="Whatsapp" />

                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>

                    <legend>Sobre a aula</legend>                    

                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[

                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },

                        ]}
                    />

                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <fieldset>

                    <legend>
                        
                        Horários Disponíveis

                        <button type="button">

                            + Novo horário

                        </button>    

                    </legend> 

                    <div className="schedule-item">
                        
                        <Select 
                            name="week_day" 
                            label="Dia da semana" 
                            options={[

                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda-Feira' },
                                { value: '2', label: 'Terça-Feira' },
                                { value: '3', label: 'Quarta-Feira' },
                                { value: '4', label: 'Quinta-Feira' },
                                { value: '5', label: 'Sexta-Feira' },
                                { value: '6', label: 'Sábado' },

                            ]}
                        /> 

                        <Input name="from" label="Das" type="time" />

                        <Input name="to" label="Até" type="time" />
                    
                    </div>                   

                </fieldset>

                <footer>

                    <p>

                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados

                    </p>
                    <button type="button">

                        Salvar cadastro

                    </button>

                </footer>

            </main>




        </div>
    );
}

export default TeacherForm;