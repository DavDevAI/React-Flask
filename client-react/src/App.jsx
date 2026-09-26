import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0) commenting de state var of the counter 
  //COMO SI ESTA MANDANDO LOS DATOS DESDE EL BACK HAST EL FRONT, AHORA HAY QUE MOSTRARLO AL END USER 
  const [users, setUsers] = useState([]); //definimos un estado, con esta variable de estado, empezando con un arreglo vacio


  //ESTO A CONTINUACION ES UN HOOK LLAMADO USE EFFECT, QUE SE EJECUTA TAN PRONTO UN USER VISITA NUESTRA APLICACION 
  //PARA HACER REQUEST USO fetch api en jsx
  //ESTE HOOK DE USE EFFECT ESENCIALMENTE NOS AYUDARÁ A CONSULTAR DATOS CONSULTAR DATOS DE NUESTRA API DESDE REACT

  useEffect(() => { //es un hook que se ejecuta al final de la renderizacion durante el ciclo de vida al final de renderizarce, ejecuta esa linea de codigo
  //  
  fetch('http://localhost:5000/api/users') // HACER UN REQUEST HTTP DESDE REACT MEDIANTE EL USO DE FETCH API, EN ESTE CASO EL ENDPOINT QUE QUEREMOS CONSULTAR
    .then((res) => res.json()) 
    //.then((data) => console.log(data)); // IMPRIME EN LA CONSOLA LA DATA QUE ESTAMOS REQUESTEANDO DE NUESTRO BACKEND
    //.then((data) => setUsers(data)) EL ERROR AQUI ES QUE DATA NO CONTIENE DIRECTAMENTE LA INFORMACION QUE QUEREMOS SINO MAS BIEN DENTRO DE LA RESPUESTA HAY UNA PROPIEDAD USERS Y ESA ES LA QUE CONTIENE EL ARREGLO DE OBJETOS
    .then(data => setUsers(data.users)); 
    // .catch((error) => console.error('Error fetching data:', error));

    //tan pronto como obtengamos esa info, vamos a setear esa data
  }, ); // Dependency array added



  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>React with Vite + Python with Flask</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <div className="card">
            <h2>Users</h2>
            {users.map((user) => (
              <p key={user.id}>
                  {user.name/* //{user.first_name} {user.last_name} ahorita es una lista de cadenas pero cuando uso flask puedo devolver una lista de objetos */}
              </p>
            ))}    
          </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
