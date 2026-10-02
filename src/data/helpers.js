export const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeProduct = ({
  id,
  name,
  category,
  categoryName,
  image = null,
  summary,
  description,
  applications = [],
  keyFeatures = [],
  technicalParameters = [],
  selection = [],
  featured = false,
}) => ({
  id,
  slug: slugify(name),
  name,
  category,
  categoryName,
  image,
  summary,
  description,
  applications,
  keyFeatures,
  technicalParameters,
  selection,
  featured,
});
