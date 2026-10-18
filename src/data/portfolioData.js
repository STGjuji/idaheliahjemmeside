import { portfolioImageDimensions } from './portfolioImageDimensions';

const photoModules = import.meta.glob(
  '../assets/photos/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);

export const galleryCategoriesMeta = [
  { id: 'gravid', name: 'Graviditet' },
  { id: 'familie', name: 'Familie & Børn' },
  { id: 'mini', name: 'Mini Børnesession' },
  { id: 'bryllup', name: 'Bryllup' },
  { id: 'barnedaab', name: 'Barnedåb' },
  { id: 'konfirmation', name: 'Konfirmation' },
  { id: 'modregruppe', name: 'Mødregruppe' },
  { id: 'par', name: 'Parfotografering' },
  { id: 'nyfoedt', name: 'Nyfødt' },
  { id: 'kaeledyr', name: 'Kæledyr' },
  { id: 'portraet', name: 'Portræt' }
];

const categoryById = Object.fromEntries(galleryCategoriesMeta.map((cat) => [cat.id, cat]));

const categoryOrder = galleryCategoriesMeta.map((cat) => cat.id);

const coverOverrides = {
  bryllup: 'BA5A0532.jpg',
  barnedaab: 'BA5A1147.jpg',
  par: '20260624_190721410_iOS.jpg'
};

const photoEntries = Object.entries(photoModules)
  .map(([path, url]) => {
    const parts = path.split('/');
    const categoryId = parts[parts.length - 2];
    const category = categoryById[categoryId];
    if (!category) return null;
    const file = parts[parts.length - 1];
    const [width, height] = portfolioImageDimensions[`${categoryId}/${file}`] ?? [];
    return { file, categoryId, categoryName: category.name, url, width, height, isCover: !!(coverOverrides[categoryId] && coverOverrides[categoryId] === file) };
  })
  .filter(Boolean);

photoEntries.sort((a, b) => {
  const orderDiff = categoryOrder.indexOf(a.categoryId) - categoryOrder.indexOf(b.categoryId);
  if (orderDiff !== 0) return orderDiff;
  const aCover = a.isCover ? -1 : 0;
  const bCover = b.isCover ? -1 : 0;
  if (aCover !== bCover) return aCover - bCover;
  return a.file.localeCompare(b.file, 'da', { numeric: true, sensitivity: 'base' });
});

export const portfolio = photoEntries.map((entry, index) => ({
  id: index + 1,
  title: entry.categoryName,
  category: entry.categoryName,
  categoryId: entry.categoryId,
  location: '',
  width: entry.width,
  height: entry.height,
  image: entry.url
}));

export const galleryCategories = [
  { id: 'Alle', name: 'Alle' },
  ...galleryCategoriesMeta.filter((cat) => photoEntries.some((entry) => entry.categoryId === cat.id))
];

export function getCategoryCover(categoryId) {
  const entry = photoEntries.find((item) => item.categoryId === categoryId);
  return entry ? entry.url : null;
}

export function getCategoryImages(categoryId) {
  return portfolio.filter((item) => item.categoryId === categoryId);
}

export function getPreviewItems(limit = 6) {
  const byCategory = new Map();
  for (const item of portfolio) {
    if (!byCategory.has(item.categoryId)) byCategory.set(item.categoryId, []);
    byCategory.get(item.categoryId).push(item);
  }

  const lists = [...byCategory.values()].map((list) => [...list]);
  const result = [];

  while (result.length < limit) {
    let added = false;
    for (const list of lists) {
      if (list.length) {
        result.push(list.shift());
        added = true;
        if (result.length >= limit) break;
      }
    }
    if (!added) break;
  }

  return result;
}
