import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
function RecipeHistory({ recipes, deleteRecipe }) {

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
