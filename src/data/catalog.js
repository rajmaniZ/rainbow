import { categories } from "./categories.js";
import { upsProducts } from "./products/ups.js";
import { upsComponentProducts } from "./products/upsComponents.js";
import { batteryProducts } from "./products/batteries.js";
import { stabilizerProducts } from "./products/stabilizers.js";
import { inverterProducts } from "./products/inverters.js";
import { solarProducts } from "./products/solar.js";
import { automationComponentProducts } from "./products/automationComponents.js";
import { wiringAccessoryProducts } from "./products/wiringAccessories.js";
import { electricalBoxProducts } from "./products/electricalBoxes.js";
import { wireConduitProducts } from "./products/wiresConduits.js";
import { lightingProducts } from "./products/lighting.js";
import { fanProducts } from "./products/fans.js";
import { bellProducts } from "./products/bells.js";

export const products = [
  ...upsProducts,
  ...upsComponentProducts,
  ...batteryProducts,
  ...stabilizerProducts,
  ...inverterProducts,
  ...solarProducts,
  ...wiringAccessoryProducts,
  ...electricalBoxProducts,
  ...wireConduitProducts,
  ...lightingProducts,
  ...fanProducts,
  ...bellProducts,
];

export const productById = Object.fromEntries(
  products.map((product) => [product.id, product]),
);

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
);

export const getProductById = (id) => productById[id] ?? null;

export const getProductBySlug = (slug) => productBySlug[slug] ?? null;

export const getProductsByCategory = (category) =>
  products.filter((product) => product.category === category);

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured === true);

export const validateProducts = () => {
  const errors = [];

  products.forEach((product, index) => {
    if (!product.id) {
      errors.push(`Product at index ${index} is missing an id.`);
    }

    if (!product.name) {
      errors.push(`Product at index ${index} is missing a name.`);
    }

    if (!product.slug) {
      errors.push(`Product "${product.name || index}" is missing a slug.`);
    }

    if (!product.category) {
      errors.push(`Product "${product.name || index}" is missing a category.`);
    }

    if (!product.categoryName) {
      errors.push(
        `Product "${product.name || index}" is missing categoryName.`,
      );
    }

    if (!Array.isArray(product.applications)) {
      errors.push(
        `Product "${product.name || index}" has invalid applications.`,
      );
    }

    if (!Array.isArray(product.keyFeatures)) {
      errors.push(
        `Product "${product.name || index}" has invalid keyFeatures.`,
      );
    }

    if (!Array.isArray(product.technicalParameters)) {
      errors.push(
        `Product "${product.name || index}" has invalid technicalParameters.`,
      );
    }

    if (!Array.isArray(product.selection)) {
      errors.push(`Product "${product.name || index}" has invalid selection.`);
    }

    if (typeof product.featured !== "boolean") {
      errors.push(
        `Product "${product.name || index}" has invalid featured value.`,
      );
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};

export const validateProductIds = () => {
  const seen = new Set();
  const duplicates = [];

  products.forEach((product) => {
    if (seen.has(product.id)) {
      duplicates.push(product.id);
    } else {
      seen.add(product.id);
    }
  });

  return {
    valid: duplicates.length === 0,
    duplicates,
  };
};

export const validateProductSlugs = () => {
  const seen = new Set();
  const duplicates = [];

  products.forEach((product) => {
    if (seen.has(product.slug)) {
      duplicates.push(product.slug);
    } else {
      seen.add(product.slug);
    }
  });

  return {
    valid: duplicates.length === 0,
    duplicates,
  };
};

export const validateProductCategories = () => {
  const categoryIds = new Set(categories.map((category) => category.id));

  const invalidProducts = products
    .filter((product) => !categoryIds.has(product.category))
    .map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category,
    }));

  return {
    valid: invalidProducts.length === 0,
    invalidProducts,
  };
};

export const validateProductReferences = () => {
  const errors = [];

  products.forEach((product) => {
    if (!productById[product.id]) {
      errors.push(`Missing ID reference for "${product.name}".`);
    }

    if (!productBySlug[product.slug]) {
      errors.push(`Missing slug reference for "${product.name}".`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};

export const validateCatalog = () => {
  const productValidation = validateProducts();
  const idValidation = validateProductIds();
  const slugValidation = validateProductSlugs();
  const categoryValidation = validateProductCategories();
  const referenceValidation = validateProductReferences();

  return {
    valid:
      productValidation.valid &&
      idValidation.valid &&
      slugValidation.valid &&
      categoryValidation.valid &&
      referenceValidation.valid,

    products: productValidation,
    ids: idValidation,
    slugs: slugValidation,
    categories: categoryValidation,
    references: referenceValidation,
  };
};

export const productStatistics = products.reduce(
  (stats, product) => {
    stats.total += 1;

    if (!stats.byCategory[product.category]) {
      stats.byCategory[product.category] = 0;
    }

    stats.byCategory[product.category] += 1;

    if (product.featured) {
      stats.featured += 1;
    }

    if (product.image) {
      stats.withImages += 1;
    } else {
      stats.withoutImages += 1;
    }

    return stats;
  },
  {
    total: 0,
    featured: 0,
    withImages: 0,
    withoutImages: 0,
    byCategory: {},
  },
);

export const catalogStatistics = {
  categories: categories.length,
  products: products.length,
  featuredProducts: productStatistics.featured,
  productsWithImages: productStatistics.withImages,
  productsWithoutImages: productStatistics.withoutImages,
  productsByCategory: productStatistics.byCategory,
};
