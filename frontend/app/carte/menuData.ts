/**
 * Données du menu. À remplacer plus tard par Sanity.
 * Prix alignés sur Uber Eats (vérifié le 02/03/2026).
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
            { id: 101, name: 'Chips Crevettes', description: 'Légères et croustillantes, on ne peut plus s\'arrêter', price: '3,50€' },
            { id: 102, name: 'Nems Poulet (2 pcs)', description: 'Faits maison chaque jour, dorés à la perfection et servis avec notre sauce nuoc mam', price: '5,50€' },
            { id: 103, name: 'Nems Porc (2 pcs)', description: 'Faits maison avec du porc haché et des champignons noirs, croustillants à souhait', price: '5,50€' },
            { id: 104, name: 'Nems Crevettes (2 pcs)', description: 'Des crevettes entières enveloppées dans une pâte qui craque à chaque bouchée', price: '5,90€' },
            { id: 105, name: 'Rouleau de Printemps', description: 'Roulé à la main avec crevettes, poulet et menthe fraîche. Frais et généreux', price: '5,90€' },
            { id: 106, name: 'Ha Kao (4 pcs)', description: 'Des raviolis vapeur à la pâte translucide qui laisse deviner la crevette à l\'intérieur', price: '6,50€' },
            { id: 107, name: 'Xiu Mai (4 pcs)', description: 'Des boulettes vapeur aux crevettes qui fondent en bouche', price: '6,50€' },
            { id: 108, name: 'Yakitoris (4 pcs)', description: 'Brochettes grillées au feu, tendres à cœur et légèrement caramélisées', price: '6,50€' },
            { id: 109, name: 'Samoussa Bœuf Épicé', description: 'Pâte feuilletée garnie de bœuf bien relevé. Pour ceux qui aiment le piquant', price: '3,50€' },
            { id: 110, name: 'Samoussa Bœuf Doux', description: 'La même pâte croustillante avec une farce au bœuf douce, sans piment', price: '3,50€' },
            { id: 111, name: 'Beignets de Crevettes (4 pcs)', description: 'Faits maison avec des crevettes entières enrobées d\'une pâte dorée', price: '5,50€' },
            { id: 112, name: 'Tempura Crevettes (4 pcs)', description: 'Une pâte ultra légère à la japonaise qui laisse la crevette fondre en bouche', price: '5,90€' },
            { id: 113, name: 'Pinces de Crabe (4 pcs)', description: 'Panées et croustillantes à l\'extérieur, tendre chair de crabe à l\'intérieur', price: '4,90€' },
            { id: 114, name: 'Crabe Farci', description: 'Une carapace dorée qui cache un mélange de crevettes, carottes et champignons noirs', price: '7,90€' },
            { id: 115, name: 'Salade Poulet', description: 'Une salade complète avec poulet grillé et sauce thaï épicée maison', price: '12,90€' },
            { id: 116, name: 'Salade Crevettes', description: 'La même salade fraîche garnie de crevettes sautées et sauce thaï', price: '13,90€' },
            { id: 117, name: 'Salade Bœuf', description: 'Une salade avec du bœuf sauté et sauce thaï épicée maison', price: '14,90€' },
            { id: 118, name: 'Salade de Papaye Verte', description: 'Une salade thaïe fraîche et acidulée à la papaye verte râpée', price: '11,50€' },
            { id: 119, name: 'Kimchi', description: 'Du chou fermenté à la coréenne, piquant et addictif', price: '5,90€' },
        ],
    },
    {
        id: 2,
        name: 'Spécialités',
        title: 'SPÉCIALITÉS DU CHEF',
        dishes: [
            { id: 201, name: 'Bò Bún Bœuf (+ 2 Nems)', description: 'Le plat le plus commandé chez nous. Du bœuf sauté sur un lit de vermicelles frais avec nos nems maison', price: '18,50€' },
            { id: 202, name: 'Bò Bún Poulet Grillé (+ 2 Nems)', description: 'Du poulet grillé sur vermicelles froids avec nos nems croustillants et des herbes fraîches', price: '17,50€' },
            { id: 203, name: 'Bò Bún Porc Laqué (+ 2 Nems)', description: 'Du porc laqué caramélisé qui se marie parfaitement avec les vermicelles et les cacahuètes', price: '18,50€' },
            { id: 204, name: 'Bò Bún Canard Laqué (+ 2 Nems)', description: 'La version la plus gourmande avec des tranches de canard laqué et nos nems maison', price: '18,90€' },
            { id: 205, name: 'Bò Bún 4 Nems', description: 'Pour les amateurs de nems. Quatre nems faits maison sur vermicelles et crudités', price: '16,50€' },
            { id: 206, name: 'Pad Thaï Poulet', description: 'Le grand classique thaïlandais préparé au wok avec du poulet et des cacahuètes concassées', price: '16,90€' },
            { id: 207, name: 'Pad Thaï Bœuf', description: 'Des nouilles de riz sautées au wok bien chaud avec du bœuf tendre et des cacahuètes', price: '17,90€' },
            { id: 208, name: 'Pad Thaï Crevettes', description: 'Des crevettes caramélisées sur des nouilles de riz au wok avec un filet de citron vert', price: '18,90€' },
            { id: 209, name: 'Pad Thaï Tofu', description: 'La version végétarienne de notre Pad Thaï, avec du tofu doré et des légumes frais', price: '14,50€' },
            { id: 210, name: 'Bánh Hỏi Heo Quay', description: 'De fines galettes de vermicelles servies avec du porc laqué à la peau croustillante', price: '16,90€' },
            { id: 211, name: 'Bánh Hỏi Gà Quay', description: 'Les mêmes galettes de vermicelles accompagnées d\'un poulet laqué juteux et doré', price: '18,50€' },
            { id: 212, name: 'Nouilles Sautées Poulet', description: 'Des nouilles saisies au wok à feu vif avec du poulet doré et des légumes croquants', price: '16,90€' },
            { id: 213, name: 'Nouilles Sautées Bœuf', description: 'Du bœuf tendre sauté avec des nouilles au wok fumant et des légumes croquants', price: '17,50€' },
            { id: 214, name: 'Nouilles Sautées Crevettes', description: 'Des crevettes rosées sautées avec des nouilles au sésame dans un wok fumant', price: '18,90€' },
            { id: 215, name: 'Omelette au Riz Thaï', description: 'Une omelette garnie posée sur notre riz thaï sauté aux épices', price: '14,50€' },
            { id: 216, name: 'Omelette au Riz Cantonais', description: 'Une omelette garnie posée sur notre riz cantonais sauté aux légumes', price: '14,50€' },
            { id: 217, name: 'Riz aux 3 Trésors', description: 'Un plat complet avec du riz sauté, du porc laqué croustillant et du poulet grillé', price: '19,50€' },
        ],
    },
    {
        id: 3,
        name: 'Soupes',
        title: 'NOS SOUPES CHAUDES',
        dishes: [
            { id: 301, name: 'Phở Bœuf', description: 'Notre bouillon est mijoté pendant des heures pour obtenir ce goût profond. Servi avec du bœuf tendre et des herbes fraîches', price: '18,50€' },
            { id: 302, name: 'Soupe Nouilles Poulet', description: 'Un bouillon parfumé qui réchauffe, avec du poulet doré et des nouilles', price: '16,90€' },
            { id: 303, name: 'Soupe Nouilles Bœuf', description: 'Un bouillon riche et profond avec des tranches de bœuf tendre', price: '17,50€' },
            { id: 304, name: 'Soupe Nouilles Crevettes', description: 'Un bouillon délicat avec des crevettes entières et des nouilles', price: '18,90€' },
            { id: 305, name: 'Soupe Nouilles Canard', description: 'Un bouillon corsé avec des morceaux de canard laqué', price: '18,90€' },
            { id: 306, name: 'Soupe Asperges Crabe-Crevette', description: 'Un velouté doux et parfumé avec de la chair de crabe et des crevettes', price: '15,50€' },
            { id: 307, name: 'Udon Poulet', description: 'De grosses nouilles japonaises dans un bouillon chaud avec du poulet doré', price: '16,50€' },
            { id: 308, name: 'Udon Bœuf', description: 'Des nouilles udon épaisses servies dans un bouillon savoureux avec du bœuf', price: '17,90€' },
            { id: 309, name: 'Udon Crevettes', description: 'Des nouilles udon dans un bouillon délicat garni de crevettes entières', price: '18,90€' },
            { id: 310, name: 'Udon Canard', description: 'Des nouilles udon avec des morceaux de canard laqué dans un bouillon corsé', price: '18,50€' },
            { id: 311, name: 'Udon Porc Laqué', description: 'Des nouilles udon servies avec du porc rôti croustillant dans un bouillon fumé', price: '18,50€' },
            { id: 312, name: 'Ramen Poulet', description: 'Des ramen dans un bouillon pimenté à la coréenne avec du poulet grillé', price: '15,90€' },
            { id: 313, name: 'Ramen Bœuf', description: 'Des ramen dans un bouillon pimenté coréen avec du bœuf sauté au wok', price: '17,90€' },
            { id: 314, name: 'Ramen Crevettes', description: 'Des ramen dans un bouillon pimenté coréen avec des crevettes sautées', price: '18,90€' },
        ],
    },
    {
        id: 4,
        name: 'Nos Plats',
        title: 'NOS PLATS',
        dishes: [
            { id: 401, name: 'Poulet Caramel', description: 'Mijoté lentement dans notre sauce caramel maison. Un classique qui plaît à tous', price: '12,90€' },
            { id: 402, name: 'Poulet Curry', description: 'Du poulet mijoté dans une sauce curry parfumée et douce', price: '12,90€' },
            { id: 403, name: 'Poulet au Gingembre', description: 'Sauté au gingembre frais pour un goût parfumé et délicat', price: '12,90€' },
            { id: 404, name: 'Poulet au Poivre', description: 'Une recette familiale vietnamienne, cuisson lente au caramel et poivre', price: '12,90€' },
            { id: 405, name: 'Porc Caramel', description: 'Du porc mijoté dans notre sauce caramel maison, tendre et savoureux', price: '12,90€' },
            { id: 406, name: 'Porc au Poivre', description: 'Du porc sauté avec du poivre noir concassé, parfumé et relevé', price: '12,90€' },
            { id: 407, name: 'Porc au Gingembre', description: 'Du porc sauté au gingembre frais, doux et parfumé', price: '12,90€' },
            { id: 408, name: 'Bœuf aux Oignons', description: 'Du bœuf saisi au wok à la sauce saté avec des oignons bien caramélisés', price: '13,90€' },
            { id: 409, name: 'Crevettes Piquantes', description: 'Des crevettes sautées au wok avec des piments. Bien relevé, pour les amateurs', price: '12,90€' },
            { id: 410, name: 'Crevettes Aigre-Douce', description: 'Des crevettes dans une sauce sucrée-acidulée avec des poivrons et de l\'ananas', price: '14,90€' },
            { id: 411, name: 'Canard Laqué', description: 'Recette cantonaise traditionnelle. La peau croustille, la chair fond en bouche', price: '16,50€' },
            { id: 412, name: 'Porc Laqué Croustillant', description: 'Rôti à la sauce soja avec cinq épices et du miel. La peau craque sous la dent', price: '14,90€' },
        ],
    },
    {
        id: 5,
        name: 'Accompagnements',
        title: 'NOS ACCOMPAGNEMENTS',
        dishes: [
            { id: 501, name: 'Riz Cantonais', description: 'Sauté avec des œufs, du saucisson chinois (lap xuong) et des petits pois', price: '7,50€' },
            { id: 502, name: 'Riz Thaï', description: 'Sauté au poulet avec de la sauce soja épicée et du basilic thaï', price: '7,50€' },
            { id: 503, name: 'Riz Nature Parfumé', description: 'Du riz au jasmin cuit à la vapeur, tout simplement', price: '3,50€' },
            { id: 504, name: 'Nouilles aux Légumes', description: 'Des nouilles sautées au wok avec des légumes de saison', price: '6,90€' },
        ],
    },
    {
        id: 6,
        name: 'Desserts',
        title: 'NOS DESSERTS',
        dishes: [
            { id: 601, name: 'Perles de Coco (2 pcs)', description: 'Nos boules de neige maison à la noix de coco et crème de soja', price: '4,50€' },
            { id: 602, name: 'Beignets Pomme', description: 'Des tranches de pomme en beignet doré avec un voile de sucre glace', price: '3,90€' },
            { id: 603, name: 'Beignets Banane', description: 'De la banane en beignet caramélisé, croustillant et fondant', price: '3,90€' },
            { id: 604, name: 'Nougat Chinois', description: 'Aux cacahuètes, en version molle ou croquante selon votre envie', price: '3,00€' },
            { id: 605, name: 'Nougat aux Sésames (4 pcs)', description: 'Des bouchées croquantes au sésame grillé et sucre', price: '3,70€' },
            { id: 606, name: 'Lychee au Sirop', description: 'Des lychees tendres servis dans leur sirop parfumé', price: '3,90€' },
            { id: 607, name: 'Ananas Frais', description: 'Découpé et servi bien frais', price: '5,90€' },
            { id: 608, name: 'Pastèque de Saison', description: 'Découpée et servie fraîche, selon la saison', price: '5,90€' },
            { id: 609, name: 'Gingembre Confit', description: 'Des tranches de gingembre confites au sucre, sucré et piquant', price: '3,00€' },
            { id: 610, name: 'Roches de Coco', description: 'Des petits rochers croquants à la noix de coco', price: '3,00€' },
            { id: 611, name: 'Gaufrettes Fines', description: 'Des gaufrettes légères et croustillantes', price: '1,90€' },
            { id: 612, name: 'Biscuit Porte-Bonheur', description: 'Le fortune cookie avec son petit message surprise', price: '0,50€' },
        ],
    },
    {
        id: 7,
        name: 'Boissons',
        title: 'NOS BOISSONS',
        dishes: [
            { id: 701, name: 'Coca / Fanta / 7up', description: 'Canette 33cl', price: '3,00€' },
            { id: 702, name: 'Orangina / Oasis / Lipton', description: 'Canette 33cl', price: '3,00€' },
            { id: 703, name: 'Jus de Mangue', description: 'Canette 33cl', price: '3,50€' },
            { id: 704, name: 'Jus de Lychee', description: 'Canette 33cl', price: '3,50€' },
            { id: 705, name: 'Jus de Coco', description: '25cl', price: '4,50€' },
            { id: 706, name: 'Jus de Goyave', description: 'Canette 33cl', price: '3,50€' },
            { id: 707, name: 'MOGU Lychee', description: 'Boisson au lychee avec des morceaux de nata de coco', price: '3,50€' },
            { id: 708, name: 'Lait de Soja', description: 'Boisson végétale douce et onctueuse, 25cl', price: '4,50€' },
            { id: 709, name: 'Red Bull', description: 'Canette 25cl', price: '3,50€' },
            { id: 710, name: 'Eau Cristaline', description: 'Bouteille 50cl', price: '1,90€' },
            { id: 711, name: 'Perrier / Badoit', description: 'Eau gazeuse 50cl', price: '2,50€' },
        ],
    },
]
