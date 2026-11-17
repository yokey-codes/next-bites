
export type Recipe = {
    id: number;
    title: string;
    cuisine: string;
    minutes: number;
    description: string;
};

export const recipes: Recipe[] = [
    {
        id: 1,
        title: "Margherita Pizza",
        cuisine: "Italian",
        minutes: 25,
        description: "Classic pizza with tomato, mozzarella and basil."
    },
    {
        id: 2,
        title: "Paneer Butter Masala",
        cuisine: "Indian",
        minutes: 35,
        description: "Creamy tomato gravy with delicious paneer."
    },
    {
        id: 3,
        title: "Chicken Biryani",
        cuisine: "Indian",
        minutes: 50,
        description: "Fragrant rice cooked with spices and chicken."
    },
    {
        id: 4,
        title: "Pancakes",
        cuisine: "American",
        minutes: 20,
        description: "Soft and fluffy pancakes for breakfast."
    }
];
