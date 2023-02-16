import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { TodosForm } from './components/TodosForm';
import { TodosList } from './components/TodosList';
import { TodosPage } from './pages/TodosPage';

function App() {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized)

  return (
    <div className="App">
    <Header />

      {
        isAuthorized ?  <TodosPage /> : <Login/>
      }
   
    
    </div>
  );
}

export default App;
