import React, { useState } from 'react';

const RecipeCard = ({ recipe, onDelete }) => {
    const [showDetails, setShowDetails] = useState(false);

    const totalCalories = recipe.ingredients.reduce((total, ingredient) => total + (ingredient.calories * ingredient.quantity), 0);

    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>Total de calorías: {totalCalories}</p>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Ocultar Detalles' : 'Mostrar Detalles'}
            </button>
            <button onClick={onDelete}>Eliminar Receta</button>
            {showDetails && (
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.name} - {ingredient.quantity} unidades - {ingredient.calories * ingredient.quantity} calorías
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeCard;