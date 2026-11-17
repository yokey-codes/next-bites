
import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Cooking Time: {recipe.minutes} minutes</p>
        </div>
    );
}
