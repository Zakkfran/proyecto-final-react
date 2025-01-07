import { useState, useEffect } from 'react'
import './App.css'
import Home from './componentes/home/Home';
import RecipeHistory from './componentes/historial/RecipeHistory';
import CreateRecipe from './componentes/crear/CreateRecipe';
function App() {

    const [currentScreen, setCurrentScreen] = useState('home');
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        setRecipes(savedRecipes);
    }, []);
    const deleteRecipe = (index) => {
        const newRecipes = [...recipes];
        newRecipes.splice(index, 1);
        setRecipes(newRecipes);
        localStorage.setItem('recipes', JSON.stringify(newRecipes));
    };
    const renderScreen = () => {
        switch (currentScreen) {
            case 'home':
                return <Home setCurrentScreen={setCurrentScreen} />;
            case 'create-recipe':
                return <CreateRecipe />;
            case 'recipe-history':
                return <RecipeHistory recipes={recipes} deleteRecipe={deleteRecipe} />;
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