
export class Product {
    id = 0;
    name = `sample`;
    price = 0;
    categories = [];

    constructor(id, name, categories = [], price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.categories = categories;
    }

    addCategory(category) {
        if (!category || this.categories.includes(category)) {
            return false;
        }
        this.categories.push(category);
        return true;
    }
    removeCategory(category) {
        const i = this.categories.indexOf(category);
        if (i < 0) {
            return false;
        }
        this.categories.splice(i, 1);
        return true;
    }
    get categoryCount() {
        return this.categories.length;
    }
};

export function groupProductsByCategory(products) {
    const groups = new Map();
    for (const pr of products) {
        for (const ct of pr.categories) {
            if (!groups.has(ct)) {
                groups.set(ct, []);
            }
            groups.get(ct).push(pr);
        }
    }
    return groups;
}

export function getUniqueCategories(products) {
    const categories = new Set();
    for (const pr of products) {
        for (const ct of pr.categories) {
            categories.add(ct);
        }
    }
    return [...categories];
}

export function groupProductsByPriceRange(products)
{
    const groups = new Map([
        ['Cheap', []],
        ['Medium', []],
        ['Expensive', []]
    ]);

    for (const pr of products) {
        if (pr.price < 100) {
            groups.get('Cheap').push(pr);
        } else if (pr.price < 500)  {
            groups.get('Medium').push(pr);
        } else {
            groups.get('Expensive').push(pr);
        }
    }
    return groups;
}

export function findProductsByCategory(products, category) {
    const having = [];
    for (const pr of products) {
        if (pr.categories.indexOf(category) >= 0) {
            having.push(pr);
        }
    }
    return having;
}

export function findProductsAbovePrice(products, price) {
    const above = [];
    for (const pr of products) {
        if (pr.price > price) {
            above.push(pr);
        }
    }
    return above;
}

let pr = new Product(1, 'tomato', [], 123.45);

console.log(pr.categoryCount);
console.log(pr.addCategory("tomato"));
console.log(pr.categoryCount);
console.log(pr.addCategory("tomato"));
