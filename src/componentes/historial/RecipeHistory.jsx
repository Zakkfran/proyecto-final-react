import React, { useEffect, useState } from 'react';

function RecipeHistory() {
 
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        setRecipes(savedRecipes);
    }, []);

    return (
        <div>
            <h2>Historial de Recetas</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <h3>{recipe.name}</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, idx) => (
                                <li key={idx}>
                                    {ingredient.name} - {ingredient.quantity} unidades - {ingredient.calories * ingredient.quantity} calorías
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
   
}

export default RecipeHistory
