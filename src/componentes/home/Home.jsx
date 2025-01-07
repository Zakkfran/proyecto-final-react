import React from 'react'

function Home({setCurrentScreen}) {
  return (
    <div>

      <h1>Tu Receta, A Tu Gusto.</h1>
      <div className="card">


        <button onClick={()=> setCurrentScreen("create-recipe")}>Crear Receta</button>



      </div>
    </div>
  )
}

export default Home







