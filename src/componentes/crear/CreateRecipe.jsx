import React, {useState} from 'react'

const ingredients = [
    { name: 'Tomate', calories: 20 },
    { name: 'Lechuga', calories: 5 },
    { name: 'Pollo', calories: 165 },
];


function CreateRecipe() {
    const [recipeName, setRecipeName] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const addIngredient = (ingredient) => {
        setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }]);
    };

    const updateQuantity = (index, quantity) => {
        const newIngredients = [...selectedIngredients];
        newIngredients[index].quantity = quantity;
        setSelectedIngredients(newIngredients);
    };
    const totalCalories = selectedIngredients.reduce((total, ingredient) => total + (ingredient.calories * ingredient.quantity), 0);
    
    const saveRecipe = () => {
        const recipe = {
            name: recipeName,
            ingredients: selectedIngredients
        };
        const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        savedRecipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(savedRecipes));
        alert('Receta guardada');
    };
    return (
    
        <div>
        <h2>Crear Receta</h2>
        <div>
            <label>
                Nombre de la Receta:
                <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            </label>
        </div>
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <h2>Lista de ingredientes</h2>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.name} - {ingredient.calories} calorías
                            <button onClick={() => addIngredient(ingredient)}>Agregar</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ flex: 1 }}>
                <h2>Ingredientes seleccionados</h2>
                <ul>
                    {selectedIngredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.name} - {ingredient.calories} calorías
                            <input
                                type="number"
                                value={ingredient.quantity}
                                onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                min="1"
                            />
                        </li>
                    ))}
                </ul>
                <div>
                    <h3>Total de calorías: {totalCalories}</h3>
                </div>
                <button onClick={saveRecipe}>Guardar Receta</button>
            </div>
        </div>
    </div>
    
  )
}

export default CreateRecipe

