
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
    return (
        <main className="container">
            <h1>Discover Delicious Recipes 🍽️</h1>
            <p>Find your next favourite meal with NextBites.</p>

            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                    />
                ))}
            </div>
        </main>
    );
}
