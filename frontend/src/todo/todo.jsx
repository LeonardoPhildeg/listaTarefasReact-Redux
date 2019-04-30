import React from 'react'
import PageReader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'





export default props => (
    <div>
        <PageReader name='Tarefas' small='Cadastro'></PageReader>
        <TodoForm />
        <TodoList />
    </div>
)
