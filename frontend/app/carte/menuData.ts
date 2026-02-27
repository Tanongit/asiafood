/**
 * Données du menu. À remplacer plus tard par Sanity.
 *
 * Chaque catégorie a :
 * - id : identifiant unique
 * - name : nom affiché dans la barre de navigation
 * - title : titre affiché dans la bannière de section
 * - dishes : la liste des plats de cette catégorie
 *
 * Chaque plat a :
 * - id : identifiant unique
 * - name : nom du plat
 * - description : courte description
 * - price : prix en euros
 */

export type Dish = {
    id: number
    name: string
    description: string
    price: string
}

export type Category = {
    id: number
    name: string
    title: string
    dishes: Dish[]
}

export const menuCategories: Category[] = [
    {
        id: 1,
        name: 'Entrées',
        title: 'NOS ENTRÉES',
        dishes: [
            { id: 101, name: 'Chips Crevettes', description: 'Légères, dorées et croustillantes. On ne peut plus s\'arrêter', price: '3,50€' },
            { id: 102, name: 'Nems Poulet (2 pcs)', description: 'Poulet fondant enveloppé d\'une pâte croustillante, sauce maison à côté', price: '5,50€' },
            { id: 103, name: 'Nems Porc (2 pcs)', description: 'Porc haché, champignons noirs, roulés et frits jusqu\'à la perfection', price: '5,50€' },
            { id: 104, name: 'Nems Crevettes (2 pcs)', description: 'Crevettes parfumées sous une croûte qui craque à chaque bouchée', price: '6,50€' },
            { id: 105, name: 'Rouleau de Printemps (1 pc)', description: 'Crevettes, menthe fraîche et vermicelles dans une feuille de riz transparente', price: '5,50€' },
            { id: 106, name: 'Ha Kao (4 pcs)', description: 'Raviolis vapeur à la crevette, pâte fine et translucide', price: '6,50€' },
            { id: 107, name: 'Xiu Mai (4 pcs)', description: 'Boulettes vapeur aux crevettes, moelleuses et savoureuses', price: '6,50€' },
            { id: 108, name: 'Samoussas Poulet (4 pcs)', description: 'Pâte feuilletée croustillante, farce au poulet légèrement épicée', price: '5,50€' },
            { id: 109, name: 'Tempura Crevettes (5 pcs)', description: 'Crevettes en beignet ultra léger, dorées à la japonaise', price: '7,50€' },
            { id: 110, name: 'Kimchi', description: 'Chou fermenté façon coréenne, relevé et addictif', price: '4,00€' },
        ],
    },
    {
        id: 2,
        name: 'Spécialités',
        title: 'NOS SPÉCIALITÉS',
        dishes: [
            { id: 201, name: 'Bò Bún Bœuf', description: 'Notre best-seller. Bœuf sauté, vermicelles, nems, crudités et nuoc mam maison', price: '13,50€' },
            { id: 202, name: 'Bò Bún Poulet', description: 'Poulet grillé, vermicelles froids, nems croustillants, herbes fraîches et cacahuètes', price: '13,50€' },
            { id: 203, name: 'Bò Bún Porc', description: 'Porc caramélisé sur vermicelles, garni de nems et cacahuètes concassées', price: '13,50€' },
            { id: 204, name: 'Bò Bún Canard', description: 'Canard laqué effiloché sur vermicelles, nems, crudités et cacahuètes concassées', price: '14,50€' },
            { id: 205, name: 'Pad Thaï Poulet', description: 'Nouilles de riz sautées au wok avec poulet, œuf brouillé, pousses de soja et cacahuètes', price: '13,50€' },
            { id: 206, name: 'Pad Thaï Crevettes', description: 'Crevettes caramélisées, nouilles de riz au wok, citron vert et cacahuètes pilées', price: '14,50€' },
            { id: 207, name: 'Bánh Hỏi Heo Quay', description: 'Fines galettes de vermicelles accompagnées de porc rôti à la peau croustillante', price: '13,50€' },
            { id: 208, name: 'Nouilles Sautées Poulet', description: 'Nouilles sautées au wok à feu vif, poulet doré et légumes croquants', price: '12,50€' },
            { id: 209, name: 'Nouilles Sautées Crevettes', description: 'Crevettes rosées, nouilles parfumées au sésame, sautées au wok fumant', price: '13,50€' },
            { id: 211, name: 'Nouilles Sautées Bœuf', description: 'Bœuf tendre sauté au wok avec nouilles et légumes croquants', price: '13,50€' },
            { id: 210, name: 'Riz aux 3 Trésors', description: 'Poulet, crevettes et porc réunis sur un riz sauté aux petits légumes', price: '14,50€' },
        ],
    },
    {
        id: 3,
        name: 'Soupes',
        title: 'NOS SOUPES CHAUDES',
        dishes: [
            { id: 301, name: 'Phở Bœuf', description: 'Bouillon mijoté pendant 12 heures, bœuf tendre, nouilles de riz et herbes fraîches', price: '12,50€' },
            { id: 303, name: 'Udon Poulet', description: 'Épaisses nouilles japonaises dans un bouillon chaud, morceaux de poulet doré', price: '12,50€' },
            { id: 304, name: 'Udon Bœuf', description: 'Tranches de bœuf fondantes, nouilles udon et bouillon riche en saveurs', price: '12,50€' },
            { id: 305, name: 'Udon Crevettes', description: 'Crevettes entières dans un bouillon délicat, nouilles épaisses et légumes', price: '13,50€' },
            { id: 306, name: 'Udon Canard', description: 'Canard laqué effiloché sur nouilles udon, bouillon corsé et parfumé', price: '14,50€' },
            { id: 307, name: 'Ramen', description: 'Nouilles ramen dans un bouillon pimenté à la coréenne. Pour ceux qui aiment le feu', price: '13,50€' },
        ],
    },
    {
        id: 4,
        name: 'Nos Plats',
        title: 'NOS PLATS',
        dishes: [
            { id: 401, name: 'Porc au Caramel', description: 'Morceaux de porc mijotés dans une sauce caramel onctueuse, servis avec du riz', price: '12,50€' },
            { id: 402, name: 'Bœuf aux Oignons', description: 'Bœuf tendre sauté au wok avec des oignons caramélisés et sauce soja', price: '13,50€' },
            { id: 403, name: 'Poulet Piquant', description: 'Émincé de poulet sauté avec piments frais et légumes croquants. Ça réveille', price: '12,50€' },
            { id: 404, name: 'Poulet Citronnelle', description: 'Poulet parfumé à la citronnelle fraîche, doux et aromatique', price: '12,50€' },
            { id: 405, name: 'Canard Laqué', description: 'Peau caramélisée et croustillante, chair tendre et juteuse. Servi avec riz parfumé', price: '15,50€' },
            { id: 406, name: 'Crevettes Aigre-Douce', description: 'Crevettes sautées dans une sauce sucrée-acidulée avec poivrons et ananas', price: '14,50€' },
            { id: 407, name: 'Tofu aux Légumes', description: 'Tofu doré et croustillant, sauté avec des légumes de saison au wok', price: '11,50€' },

        ],
    },
    {
        id: 5,
        name: 'Accompagnements',
        title: 'NOS ACCOMPAGNEMENTS',
        dishes: [
            { id: 501, name: 'Riz Cantonais', description: 'Riz sauté avec œuf, petits pois, carottes et oignons nouveaux', price: '7,50€' },
            { id: 502, name: 'Riz Thaï', description: 'Riz sauté à la thaïlandaise au poulet, légumes et basilic thaï', price: '7,50€' },
            { id: 503, name: 'Riz Blanc', description: 'Idéal en accompagnement', price: '3,00€' },
            { id: 504, name: 'Nouilles aux Légumes', description: 'Nouilles sautées au wok avec un mélange de légumes colorés', price: '6,50€' },
        ],
    },
    {
        id: 6,
        name: 'Desserts',
        title: 'NOS DESSERTS',
        dishes: [
            { id: 601, name: 'Perles de Coco', description: 'Petites billes de tapioca fourrées à la noix de coco râpée', price: '5,00€' },
            { id: 602, name: 'Beignets Pomme', description: 'Tranches de pomme enrobées et frites, saupoudrées de sucre glace', price: '5,50€' },
            { id: 603, name: 'Beignets Banane', description: 'Banane entière en beignet doré et caramélisé', price: '5,50€' },
            { id: 604, name: 'Nougat Chinois', description: 'Confiserie traditionnelle aux cacahuètes, version molle ou croquante', price: '4,50€' },
            { id: 605, name: 'Tiramisu', description: 'Couches de mascarpone et biscuit imbibé de café', price: '6,00€' },
        ],
    },
    {
        id: 7,
        name: 'Boissons',
        title: 'NOS BOISSONS',
        dishes: [
            { id: 701, name: 'Coca / Fanta / Sprite', description: 'Canette 33cl', price: '2,50€' },
            { id: 702, name: 'Jus de Mangue', description: 'Sucré et tropical. Canette 33cl', price: '3,00€' },
            { id: 703, name: 'Jus de Lychee', description: 'Doux et floral. Canette 33cl', price: '3,00€' },
            { id: 704, name: 'Jus de Coco', description: 'Eau de coco naturelle. Canette 33cl', price: '3,00€' },
            { id: 705, name: 'Jus de Goyave', description: 'Fruité et vitaminé. Canette 33cl', price: '3,00€' },
            { id: 706, name: 'Lait de Soja', description: 'Boisson végétale douce et onctueuse', price: '3,00€' },
        ],
    },
]
