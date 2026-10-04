
export class Product {
    id = 0;
    name = `sample`;
    price = 0;
    categories = [];

    constructor(id, name, categories, price)
    {
        // checks
        this.id = id;
        this.name = name;
        this.price = price;
        this.categories = (categories === undefined || categories === null) ? [] : categories;
    }

    addCategory(category) {
        // if (category === undefined || category === null) {
        //     console.warn("category cannot be empty");
        //     return this;
        // }
        this.categories.push(category);
        return this;
        // const i = this.categories.indexOf(category)
        // if (i < 0)
        // {
        //     this.categories.push(category);
        //     return this;
        // }
        // console.warn("such category already exists");
        // return this;
    }
    removeCategory(category) {
        // if (category === undefined || category === null) {
        //     console.warn("category cannot be empty");
        //     return 0;
        // }
        if (this.categories.indexOf(category) >= 0)
        {
            this.categories.splice(i);
            return 1;
        }
        console.warn("no such category");
        return 0;
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
    const uniques = [];
    for (const [ct, prs] of groupByCategories(products)) {
        if (prs.length === 1) {
            uniques.push(ct);
        }
    }
    return uniques;
}

export function groupProductsByPriceRange(products) {
    const groups = new Map();
    for (const pr of products) {
        if (!groups.has(pr.price)) {
            groups.set(pr.price, []);
        }
        groups.get(pr.price).push(pr);
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
