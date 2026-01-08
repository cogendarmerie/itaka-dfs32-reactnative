const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function getCategories() {
    try {
        const response = await fetch(`${baseUrl}/list.php?c=list`);
        const data = await response.json();
        return data.drinks;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

export async function getCoktail(id) {
    try {
        const response = await fetch(`${baseUrl}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.drinks ? data.drinks[0] : null;
    } catch (error) {
        console.error('Error fetching cocktail:', error);
        throw error;
    }
}

export async function getCoktailsByCategory(category) {
    try {
        const response = await fetch(`${baseUrl}/filter.php?c=${encodeURIComponent(category)}`);
        const data = await response.json();
        return data.drinks;
    } catch (error) {
        console.error('Error fetching cocktails by category:', error);
        throw error;
    }
}