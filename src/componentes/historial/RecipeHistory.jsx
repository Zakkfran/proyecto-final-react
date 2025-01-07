import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
function RecipeHistory() {
 
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
   
    return (
        <div>
            <h2>Historial de Recetas</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                <RecipeCard
                            recipe={recipe}
                            onDelete={() => deleteRecipe(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
   
}

export default RecipeHistory
