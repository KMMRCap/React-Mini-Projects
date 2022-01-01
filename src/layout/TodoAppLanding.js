import React from "react";
import Header from './../common/Header';
import TodoApp from './../components/Todo-App/TodoApp';

const TodoAppLanding = () => {
    return (
        <>
            <Header header='Todo App' />
            <TodoApp />
        </>
    );
}

export default TodoAppLanding;