import { useState } from 'react'
import './App.css'
import Home from './componentes/home/Home';
import RecipeHistory from './componentes/historial/RecipeHistory';
import CreateRecipe from './componentes/crear/createrecipe';
function App() {
 
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
      switch (currentScreen) {
          case 'home':
              return < Home />;
          case 'create-recipe':
              return <CreateRecipe />;
          case 'recipe-history':
            return <RecipeHistory />;
          default:
              return < Home />;
      }
  };

  return (
      <div>
          <button onClick={() => setCurrentScreen('home')}>Home</button>
          <button onClick={() => setCurrentScreen('create-recipe')}>Crear Receta</button>
          <button onClick={() => setCurrentScreen('recipe-history')}>Hitorial Receta</button>
          {renderScreen()}
      </div>
  );
 
};

export default App;