class Meal {
  constructor(
    id,
    title,
    ingredients,
    steps,
    categoryIds,
    affordability,
    complexity,
    imageUrl,
    duration,
    isLactoseFree
  ) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.steps = steps;
    this.categoryIds = categoryIds;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
