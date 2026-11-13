/* ============ BRACHET V2 — app.js ============ */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const I=k=>`img/${k}.jpg`;
const POS={bois:"50% 85%",pierre:"50% 70%",fontaine:"50% 60%",portail:"50% 55%",cheminee:"50% 60%",interieur:"50% 70%",artisan:"50% 45%",deco:"50% 50%"};
const img=(k,cls='',alt='')=>`<div class="ph ${cls}"><img src="${I(k)}" alt="${alt}" style="object-position:${POS[k]||'50% 50%'}"></div>`;

const PIMG=p=>`img/p/${p.img}.jpg`;
const HASIMG=new Set(typeof PIMGS!=='undefined'?PIMGS:[]);
function pimg(p,cls=''){return HASIMG.has(p.img)?`<div class="ph ${cls}"><img src="${PIMG(p)}" alt="${p.t}" loading="lazy"></div>`:`<div class="ph pph ${cls}"><div><span>Réf. ${p.ref}</span><b>${p.t}</b><i>Photo du parc</i></div></div>`;}
function ptag(p){return `<span class="tag ${p.k==='ancien'?'old':'new'}">${p.k==='ancien'?'Ancien':'Réédition'}</span>`;}
function pcard(p){return `<a class="pcard zoom" href="#piece-${p.id}" data-k="${p.k}" data-cat="${p.cat}">${pimg(p)}<div class="pc-b"><div class="pc-m"><span>${CATS[p.cat].title}</span>${ptag(p)}</div><h4>${p.t}</h4><p>${p.ref!=='—'?'Réf. '+p.ref+' · ':''}${p.d[0]||'Dimensions sur demande'}</p>${p.stock?'<em>En stock</em>':''}</div></a>`;}

/* ---------------- DATA ---------------- */
const CATS={
 cheminees:{n:"I",title:"Cheminées",sub:"Le cœur battant des grandes demeures",img:"cheminee",alt:["interieur","parc","artisan","hero","bois"],
  univers:["Manoirs","Bastides","Châteaux","Hôtels particuliers"],
  intro:"Manteaux sculptés Louis XV, foyers rustiques de bastides, cheminées de châteaux en pierre ou en marbre : chaque cheminée Brachet porte la mémoire des soirées qu'elle a réchauffées.",
  story:["Un foyer qui a traversé trois siècles","Démontée pierre par pierre dans un manoir, numérotée, restaurée dans notre atelier, elle a retrouvé un grand salon face au Luberon. C'est cela, une cheminée ancienne : une architecture qui voyage.","On n'achète pas une cheminée, on adopte une histoire."],
  insp:[["Le salon de château","Manteau monumental, trumeau et parquet Versailles.","cheminee"],["La bastide d'hiver","Pierre locale, foyer profond, tomettes anciennes.","interieur"],["L'hôtel particulier","Marbre, moulures et lumière du Nord.","bois"]],
  prods:[["CH-1724","Cheminée Louis XV à coquille","XVIII<sup>e</sup>","Pierre calcaire","L. 182 cm"],["CH-1688","Cheminée de château Louis XIII","XVII<sup>e</sup>","Pierre de Bourgogne","L. 240 cm"],["CH-1802","Cheminée Directoire","Début XIX<sup>e</sup>","Marbre blanc","L. 128 cm"],["CH-1850","Cheminée de bastide","XIX<sup>e</sup>","Pierre du Gard","L. 156 cm"]]},
 fontaines:{n:"II",title:"Fontaines",sub:"Le chant de l'eau dans les cours de Provence",img:"fontaine",alt:["hotel","deco","parc","villa","pierre"],
  univers:["Jardins méditerranéens","Cours intérieures","Domaines prestigieux"],
  intro:"Fontaines murales, vasques de domaine, bassins de village et auges monolithes : l'eau est la première des architectures du Sud. Nos fontaines donnent une voix aux jardins.",
  story:["Le murmure des domaines","Sous les platanes, une vasque usée par deux siècles de pluie et de mains. Installée au centre d'une cour, elle devient aussitôt le lieu où l'on se retrouve.","Une fontaine ancienne, c'est le temps qui coule."],
  insp:[["La cour pavée","Fontaine centrale, calade et oliviers.","fontaine"],["Le patio d'hôtel","Fontaine, citronniers et ombre fraîche.","hotel"],["Le jardin de buis","Bassin, buis taillés et vases d'Anduze.","deco"]],
  prods:[["FO-0412","Fontaine de cour à vasque","XIX<sup>e</sup>","Pierre calcaire","Ø 160 cm"],["FO-0388","Fontaine murale à mascaron","XVIII<sup>e</sup>","Pierre de Provence","H. 190 cm"],["FO-0455","Bassin octogonal de domaine","XIX<sup>e</sup>","Pierre froide","Ø 280 cm"],["FO-0470","Auge monolithe","XIX<sup>e</sup>","Calcaire dur","L. 210 cm"]]},
 portails:{n:"III",title:"Portails",sub:"La première impression d'une propriété",img:"portail",alt:["hero","parc","fontaine","villa","deco"],
  univers:["Entrées monumentales","Fer forgé","Propriétés d'exception"],
  intro:"Portails en fer forgé, grilles de domaine, piliers de pierre couronnés de pots à feu : l'entrée annonce la demeure. Nous rassemblons des ensembles complets, prêts à être restaurés et adaptés.",
  story:["L'art d'annoncer","Une allée de platanes, deux piliers de pierre dorée, une grille forgée à la main au XIX<sup>e</sup> siècle : avant même la maison, le portail raconte qui l'habite.","Une entrée se franchit une fois, elle se souvient toujours."],
  insp:[["L'allée de domaine","Piliers monumentaux et grille à deux vantaux.","portail"],["La bastide","Portillon forgé et murs de pierre sèche.","hero"],["Le château","Grille d'honneur et couronnement.","parc"]],
  prods:[["PO-0219","Portail de domaine à deux vantaux","XIX<sup>e</sup>","Fer forgé","L. 380 cm"],["PO-0233","Paire de piliers à pots à feu","XVIII<sup>e</sup>","Pierre calcaire","H. 290 cm"],["PO-0250","Grille d'honneur","XIX<sup>e</sup>","Fer forgé","L. 460 cm"],["PO-0261","Portillon de jardin","XIX<sup>e</sup>","Fer forgé","L. 110 cm"]]},
 pierre:{n:"IV",title:"Carrelage & Dallages",sub:"Des sols qui ont une mémoire",img:"pierre",alt:["villa","interieur","artisan","hotel","parc"],
  univers:["Architecture","Restauration","Patrimoine"],
  intro:"Dalles de Bourgogne, tomettes anciennes, carreaux de Provence et de Bourgogne, parefeuilles et tuiles canal : des lots homogènes pour restaurer à l'identique ou donner une âme à une construction neuve. Taille sur plan en Estaillades et savonnière.",
  story:["Des sols qui ont une mémoire","Une dalle ancienne porte l'usure des pas, la douceur de la cire et la lumière de siècles de soleil. Aucun matériau neuf ne sait reproduire cette profondeur.","La patine ne s'imite pas, elle se transmet."],
  insp:[["La terrasse de bastide","Grandes dalles en opus romain.","villa"],["La cuisine provençale","Tomettes et évier en pierre.","interieur"],["La restauration","Taille sur plan à l'identique.","artisan"]],
  prods:[["PI-1001","Dalles de Bourgogne anciennes","XIX<sup>e</sup>","Calcaire","Lots 20 à 300 m²"],["PI-1014","Tomettes hexagonales","XIX<sup>e</sup>","Terre cuite","Lots disponibles"],["PI-1030","Évier de bastide","XIX<sup>e</sup>","Pierre","L. 120 cm"],["PI-1045","Pierre d'Estaillades taillée","Création","Estaillades","Sur plan"]]},
 bois:{n:"V",title:"Bois & Parquets",sub:"La chaleur des maisons anciennes",img:"bois",alt:["interieur","cheminee","hero","artisan","pierre"],
  univers:["Univers chaleureux","Maisons anciennes","Authenticité"],
  intro:"Parquets Versailles, points de Hongrie, planchers de chêne, poutres et portes anciennes : le bois patiné apporte une chaleur que seul le temps sait donner.",
  story:["Le chêne qui a vu passer les générations","Les panneaux Versailles se démontent, se numérotent et se poncent juste assez pour garder leur histoire. Reposés, ils réchauffent une pièce comme aucun parquet neuf.","Le bois ancien a appris le silence des grandes maisons."],
  insp:[["Le salon Versailles","Panneaux de chêne et boiseries.","bois"],["La salle à manger","Poutres apparentes et tomettes.","interieur"],["Le grand salon","Cheminée de pierre et parquet.","cheminee"]],
  prods:[["BO-0507","Parquet Versailles en chêne","XIX<sup>e</sup>","Chêne massif","Panneaux 100 cm"],["BO-0521","Plancher de chêne large","XIX<sup>e</sup>","Chêne","Lots disponibles"],["BO-0533","Poutres anciennes","XVIII<sup>e</sup>–XIX<sup>e</sup>","Chêne","Sur demande"],["BO-0540","Porte de bastide","XVIII<sup>e</sup>","Noyer","H. 220 cm"]]},
 decoration:{n:"VI",title:"Décoration",sub:"Les pièces qui signent un lieu",img:"deco",alt:["parc","fontaine","villa","hotel","portail"],
  univers:["Jardins","Intérieurs","Objets d'architecture"],
  intro:"Jarres, vases d'Anduze, statues, colonnes, chapiteaux, balustres et éléments d'architecture : les détails qui transforment une belle maison en demeure inoubliable.",
  story:["Le détail qui fait la demeure","Une vasque au bout d'une allée de buis, un chapiteau sur une console, une statue au détour d'un jardin : ce sont ces pièces que l'on retient.","Le luxe est dans le détail qui a une histoire."],
  insp:[["Le jardin de buis","Vasques, statues et auge sculptée.","deco"],["L'entrée","Colonnes, chapiteaux et console de pierre.","parc"],["La terrasse","Jarres, balustres et lanternes.","villa"]],
  prods:[["DE-0601","Paire de vasques à guirlandes","XIX<sup>e</sup>","Pierre","H. 110 cm"],["DE-0615","Statue de jardin","XIX<sup>e</sup>","Pierre calcaire","H. 160 cm"],["DE-0622","Colonne à chapiteau corinthien","XVIII<sup>e</sup>","Pierre","H. 280 cm"],["DE-0640","Auge sculptée","XIX<sup>e</sup>","Pierre","L. 180 cm"]]}
 ,eviers:{n:"VII",title:"Éviers & Auges",sub:"La pierre au quotidien des maisons d'autrefois",img:"interieur",alt:["fontaine","deco","villa","pierre","parc"],
  univers:["Cuisines","Jardins","Terrasses & buanderies"],
  intro:"Éviers de bastide taillés dans un seul bloc, auges de ferme, bacs et abreuvoirs : des pièces de pierre façonnées pour l'usage, devenues des éléments de caractère pour une cuisine, une buanderie ou un jardin.",
  story:["Un bloc de pierre, des générations de gestes","Creusé à la main dans un seul bloc, l'évier de bastide a vu passer des générations de cuisinières. Reposé dans une cuisine contemporaine ou transformé en bassin de jardin, il garde la douceur de la pierre polie par l'usage.","Ce que l'usage a poli, aucune machine ne le reproduit."],
  insp:[["La cuisine de bastide","Évier monolithe, tomettes et étagères de chêne.","interieur"],["Le jardin d'eau","Auge de pierre transformée en bassin.","fontaine"],["La terrasse","Auge plantée de lavande et d'oliviers.","villa"]],
  prods:[]}
 ,taille:{n:"VIII",title:"Taille de pierre",sub:"Le savoir-faire de l'atelier",img:"artisan",alt:["fontaine","pierre","portail","hero","parc"],
  univers:["Sur mesure","Restauration","Vieille pierre & pierre neuve"],
  intro:"Fontaines, piliers, bassins, ronds de puits : l'atelier taille sur plan la vieille pierre et la pierre neuve (Estaillades, savonnière, pierre du Gard), pour restaurer à l'identique ou créer la pièce qui manque.",
  story:["La main, l'outil et la pierre","Une fontaine hexagonale pour la commune de Villelaure, un bassin de 3 mètres en pierre savonnière, des piliers montés en harpe : chaque commande part d'un plan et finit sous le ciseau du tailleur.","Ce qui manque à une demeure, l'atelier sait le tailler."],
  insp:[["La fontaine sur plan","Dessinée avec vous, taillée à l'atelier.","fontaine"],["Le pilier d'entrée","Monté en harpe, à la hauteur de votre portail.","portail"],["La restauration","Remplacer à l'identique une pierre abîmée.","pierre"]],
  prods:[]}
};

const CASES=[
 {cat:"Bastides",title:"Une bastide du XVIII<sup>e</sup> retrouve son âme",short:"Bastide du Luberon",lieu:"Luberon",img:"villa",gal:["hero","pierre","cheminee"],
  desc:"Restauration complète d'une bastide du XVIII<sup>e</sup> siècle : terrasse, salon et cour retrouvent des matériaux d'époque.",
  long:"Les propriétaires souhaitaient rendre à la bastide la terrasse qu'elle avait perdue au fil des rénovations. Nous avons réuni un lot homogène de dalles de Bourgogne, une balustrade de pierre et, pour le grand salon, une cheminée Louis XV restaurée à l'atelier. L'architecte du patrimoine a validé chaque pièce avant la pose.",
  used:[["pierre","Dalles de Bourgogne","≈ 300 m²"],["cheminees","Cheminée Louis XV","Grand salon"],["fontaines","Fontaine de cour","Cour d'honneur"]],
  res:[["300 m²","de dalles anciennes"],["4 mois","de chantier"],["100 %","matériaux de réemploi"]],
  quote:"Brachet a trouvé exactement ce que la maison attendait. On a l'impression que la terrasse a toujours été là.",who:"Les propriétaires",role:"Bastide, Luberon"},
 {cat:"Villas",title:"Villa contemporaine, âme ancienne",short:"Villa de la Côte d'Azur",lieu:"Côte d'Azur",img:"interieur",gal:["bois","pierre","deco"],
  desc:"Une architecture contemporaine réchauffée par des sols en terre cuite ancienne, des poutres de chêne et un évier de bastide.",
  long:"Pour cette villa neuve, l'architecte cherchait à éviter l'effet « maison neuve ». Tomettes hexagonales, poutres anciennes et évier monolithe ont donné aux pièces de vie une profondeur immédiate.",
  used:[["pierre","Tomettes hexagonales","180 m²"],["bois","Poutres anciennes","12 pièces"],["pierre","Évier de bastide","Cuisine"]],
  res:[["180 m²","de tomettes"],["12","poutres anciennes"],["3","pièces signature"]],
  quote:"Le contraste entre l'architecture d'aujourd'hui et les matériaux d'hier fait toute la force du lieu.",who:"Cabinet d'architecture",role:"Villa, Côte d'Azur"},
 {cat:"Châteaux",title:"Le grand salon d'un château retrouve sa cheminée",short:"Château en Drôme provençale",lieu:"Drôme",img:"cheminee",gal:["bois","portail","hero"],
  desc:"Restitution des cheminées du grand salon et de la bibliothèque, et pose d'un parquet Versailles d'époque.",
  long:"Les cheminées d'origine avaient disparu au XX<sup>e</sup> siècle. Après étude des proportions des pièces, nous avons proposé deux manteaux d'époque compatibles, puis un parquet Versailles en chêne pour la bibliothèque.",
  used:[["cheminees","Cheminée Louis XIII","Grand salon"],["bois","Parquet Versailles","120 m²"],["portails","Paire de piliers","Entrée"]],
  res:[["2","cheminées monumentales"],["120 m²","de parquet Versailles"],["XVII<sup>e</sup>","siècle restitué"]],
  quote:"Une connaissance rare des pièces d'époque, et un vrai sens des proportions.",who:"Les propriétaires",role:"Château, Drôme"},
 {cat:"Hôtels",title:"La cour d'honneur d'un hôtel particulier",short:"Boutique-hôtel à Avignon",lieu:"Avignon",img:"hotel",gal:["fontaine","villa","deco"],
  desc:"La cour d'un hôtel cinq étoiles se pare d'une fontaine centrale et d'un dallage ancien.",
  long:"L'hôtel voulait que la cour devienne le cœur de l'expérience client. Une fontaine de domaine à mascarons, un dallage de cour et des vases complètent désormais l'architecture de l'hôtel particulier.",
  used:[["fontaines","Fontaine à mascarons","Cour"],["pierre","Dallage de cour","220 m²"],["decoration","Vases & jarres","Terrasse"]],
  res:[["1","fontaine signature"],["220 m²","de cour"],["5★","hôtellerie"]],
  quote:"Nos clients photographient d'abord la fontaine. Elle est devenue l'image de l'hôtel.",who:"Direction de l'hôtel",role:"Hôtel 5★, Avignon"},
 {cat:"Jardins",title:"Un jardin méditerranéen de domaine",short:"Domaine des Alpilles",lieu:"Alpilles",img:"deco",gal:["fontaine","portail","villa"],
  desc:"Un jardin structuré autour d'une auge sculptée, de vasques, d'une statue et d'un bassin.",
  long:"Le paysagiste souhaitait des pièces capables de structurer le jardin dès la première saison. Vasques à guirlandes, statue et auge sculptée dialoguent avec les buis et la lavande.",
  used:[["decoration","Vasques à guirlandes","Paire"],["decoration","Statue de jardin","Allée"],["fontaines","Bassin octogonal","Parterre"]],
  res:[["2","vasques monumentales"],["1","statue d'époque"],["1","auge sculptée"]],
  quote:"Le jardin semble avoir toujours été là. C'est exactement ce que nous cherchions.",who:"Paysagiste",role:"Domaine, Alpilles"},
 {cat:"International",title:"Une demeure provençale au bord du Léman",short:"Demeure à Genève",lieu:"Suisse",img:"portail",gal:["hero","cheminee","pierre"],
  desc:"Un client genevois recrée l'esprit d'une bastide : livraison internationale de pièces monumentales.",
  long:"Portail, cheminée et dalles ont été préparés, emballés et livrés en un seul convoi. Nos équipes ont coordonné le transport et la réception avec l'entreprise locale.",
  used:[["portails","Portail en fer forgé","Entrée"],["cheminees","Cheminée de bastide","Salon"],["pierre","Dalles anciennes","Terrasse"]],
  res:[["1","convoi international"],["24 t","de pierre livrées"],["0","casse"]],
  quote:"La Provence est arrivée chez nous en parfait état. Un accompagnement impeccable.",who:"Le propriétaire",role:"Demeure, Genève"}
];

const TESTI=[
 {q:"Brachet a trouvé exactement ce que la maison attendait. On a l'impression que la terrasse a toujours été là.",w:"Les propriétaires",r:"Bastide · Luberon",img:"villa"},
 {q:"Pour un architecte, c'est rare d'avoir un interlocuteur qui connaît aussi bien les pièces que les contraintes du chantier.",w:"Architecte du patrimoine",r:"Aix-en-Provence",img:"artisan"},
 {q:"Nos clients photographient d'abord la fontaine. Elle est devenue l'image de l'hôtel.",w:"Direction de l'hôtel",r:"Hôtel 5★ · Avignon",img:"hotel"},
 {q:"La Provence est arrivée chez nous en parfait état. Un accompagnement impeccable, de la sélection à la livraison.",w:"Le propriétaire",r:"Demeure · Genève",img:"portail"},
 {q:"Le parc est une source d'inspiration incroyable. On vient pour une cheminée, on repart avec un projet entier.",w:"Décoratrice d'intérieur",r:"Paris",img:"cheminee"}
];

const ARTS=[
 {cat:"Architecture provençale",t:"Bastide, mas, château : lire l'architecture provençale",d:"Reconnaître les grandes typologies de demeures du Sud et leurs matériaux.",img:"hero",r:"8 min"},
 {cat:"Cheminées",t:"Dater une cheminée ancienne : le guide des styles",d:"De Louis XIII au Directoire, les signes qui ne trompent pas.",img:"cheminee",r:"6 min"},
 {cat:"Fontaines",t:"Installer une fontaine ancienne dans son jardin",d:"Fondations, circuit d'eau, orientation : les règles d'un beau projet.",img:"fontaine",r:"7 min"},
 {cat:"Matériaux anciens",t:"Dalles de Bourgogne : pourquoi elles sont inimitables",d:"Origine, patine, pose et entretien d'un matériau mythique.",img:"pierre",r:"5 min"},
 {cat:"Rénovation",t:"Rénover une bastide sans la trahir",d:"Les erreurs à éviter et les matériaux à privilégier.",img:"interieur",r:"9 min"},
 {cat:"Jardins",t:"Le jardin méditerranéen, une architecture du végétal",d:"Buis, oliviers, eau et pierre : composer un jardin intemporel.",img:"deco",r:"6 min"}
];
const PLAN={
 "Architecture provençale":["Bastide, mas, château : les différences","Les toitures en tuiles canal","Les génoises provençales","La calade : histoire et technique","Les couleurs des façades du Luberon","L'hôtel particulier aixois","Les pigeonniers de Provence","Les cabanons et bories","Bâtir avec le mistral","Les villages perchés du Luberon","Les escaliers de pierre","Fenêtres et volets provençaux","Le patrimoine de Cavaillon","Restaurer une façade à la chaux"],
 "Matériaux anciens":["Dalles de Bourgogne : le guide complet","Tomettes anciennes : choisir et poser","Pierre d'Estaillades","La pierre de savonnière","Terre cuite ancienne ou neuve ?","Reconnaître une vraie pierre ancienne","Les éviers en pierre","Les auges monolithes","Le réemploi, geste écologique","Entretenir une dalle ancienne","Les carreaux de ciment d'époque","Les marbres de cheminée","Comment est trié un lot de dalles","La pierre froide de Bourgogne"],
 "Bastides":["Acheter une bastide : la check-list","Les plus belles bastides de Provence","Bastide du XVIIIe : les éléments d'origine","Aménager une cuisine de bastide","La terrasse de bastide idéale","Bastide et piscine","Les allées de platanes","Les chapelles de domaine","La bastide contemporaine","Décorer une bastide sans cliché","Les cours de ferme","La bastide en hiver","Budget d'une restauration","Les bastides d'hôtes"],
 "Fontaines":["Installer une fontaine ancienne","Fontaine murale ou centrale ?","Les fontaines de village","Le circuit d'eau fermé","Les mascarons : symbolique","Entretenir une fontaine en pierre","Fontaines et biodiversité","Les bassins octogonaux","Une fontaine dans un patio","Les vasques anciennes","Fontaines de château célèbres","Le bruit de l'eau au jardin","Fontaine et éclairage","Restaurer une fontaine"],
 "Cheminées":["Dater une cheminée ancienne","Les styles Louis XIII à Louis XVI","Installer une cheminée ancienne","Cheminée et insert","Les cheminées de château","Marbre ou pierre ?","Démontage et remontage","Les trumeaux","La cheminée de bastide","Cheminée et normes actuelles","Les plaques de cheminée","Restaurer un manteau sculpté","La cheminée d'extérieur","Les grandes cheminées de cuisine"],
 "Jardins":["Le jardin méditerranéen","Les vases d'Anduze","Buis et topiaires","Allées et graviers","Les oliviers centenaires","Les statues de jardin","Le jardin de curé","Murets en pierre sèche","Les pergolas","Les restanques","Les jardins des Alpilles","Éclairer un jardin","Les portails de domaine","Composer avec la lavande","Le potager de bastide"],
 "Rénovation":["Rénover sans trahir","Les erreurs courantes","Travailler avec un architecte du patrimoine","Aides et fiscalité du patrimoine","Les enduits à la chaux","Poser un parquet Versailles ancien","Isoler une maison ancienne","Récupérer les matériaux d'origine","Planifier un chantier","Les artisans du patrimoine","Avant / après : 10 transformations","Rénover une cuisine provençale","La salle de bains en pierre"]
};

const LIB=[
 {n:"Dalle de Bourgogne ancienne",f:"Pierre",u:["Intérieur","Extérieur"],e:"Ancien",img:"pierre",dim:"40×40 à 60×80 cm, opus romain",ep:"3 à 5 cm",fin:"Patinée, vieillie naturelle",or:"Bourgogne (récupération)",gel:"Non gélive"},
 {n:"Tomette hexagonale",f:"Terre cuite",u:["Intérieur"],e:"Ancien",img:"interieur",dim:"16 cm hexagonale",ep:"2 cm",fin:"Cirée, patinée",or:"Provence (récupération)",gel:"Intérieur uniquement"},
 {n:"Pierre d'Estaillades",f:"Pierre",u:["Intérieur","Extérieur"],e:"Création",img:"artisan",dim:"Sur plan",ep:"Sur plan",fin:"Layée, bouchardée, adoucie",or:"Vaucluse",gel:"Selon banc"},
 {n:"Pierre de savonnière",f:"Pierre",u:["Intérieur","Extérieur"],e:"Création",img:"artisan",dim:"Sur plan",ep:"Sur plan",fin:"Adoucie, sculptée",or:"France",gel:"Selon banc"},
 {n:"Parquet Versailles en chêne",f:"Bois",u:["Intérieur"],e:"Ancien",img:"bois",dim:"Panneaux 100×100 cm",ep:"2,2 à 2,8 cm",fin:"Poncé léger, huilé ou ciré",or:"France (récupération)",gel:"—"},
 {n:"Poutres de chêne",f:"Bois",u:["Intérieur"],e:"Ancien",img:"interieur",dim:"Longueurs 2 à 8 m",ep:"Sections variées",fin:"Brossées, traitées",or:"France (récupération)",gel:"—"},
 {n:"Cheminée en pierre",f:"Pierre",u:["Intérieur"],e:"Ancien",img:"cheminee",dim:"L. 120 à 240 cm",ep:"—",fin:"Restaurée à l'atelier",or:"France",gel:"—"},
 {n:"Fer forgé de portail",f:"Métal",u:["Extérieur"],e:"Ancien",img:"portail",dim:"L. 110 à 460 cm",ep:"—",fin:"Décapé, traité, patiné",or:"France",gel:"Traitement anticorrosion"},
 {n:"Fontaine & vasque",f:"Pierre",u:["Extérieur"],e:"Ancien",img:"fontaine",dim:"Ø 100 à 280 cm",ep:"—",fin:"Patine d'origine",or:"Provence",gel:"Non gélive"},
 {n:"Vasques & statues",f:"Ornement",u:["Extérieur"],e:"Ancien",img:"deco",dim:"H. 45 à 180 cm",ep:"—",fin:"Patine d'origine",or:"France",gel:"Selon pièce"},
 {n:"Dallage de cour",f:"Pierre",u:["Extérieur"],e:"Ancien",img:"hotel",dim:"Formats mixtes",ep:"4 à 8 cm",fin:"Patinée",or:"Provence",gel:"Non gélive"},
 {n:"Balustres & colonnes",f:"Ornement",u:["Extérieur","Intérieur"],e:"Ancien",img:"villa",dim:"H. 60 à 280 cm",ep:"—",fin:"Patine d'origine",or:"France",gel:"Selon pièce"}
];
const LOTS=[["DAA007","Dalles de Bourgogne","Sur demande","Opus · 3 à 5 cm","g"],["DDA006","Dalles de Montpellier","Sur demande","≈ 50 × 70 cm","g"],["DAA001","Parefeuille ancien terre cuite","Sur demande","20–23 × 35–37 cm","g"],["TUA001","Tuiles canal provençales","Sur demande","L. 50 cm","o"],["DAN007","Dalle de Limeyrat vieillie","Sur demande","Larg. 40 / 50 / 60 cm","g"],["PLA001","Plancher ancien en chêne","Sur demande","Dimensions variables","g"],["PLA002","Parquet ancien en chêne","Sur demande","Dimensions variables","o"],["VP04","Fontaine en vieille pierre","1 pièce, en stock","2,20 × 1,50 m","r"]];
const RES=[["Catalogue professionnel","Toutes les familles de pièces, formats et usages.","catalogue"],["Fiches techniques","Dimensions, épaisseurs, finitions, compatibilités.","catalogue"],["Guides de pose","Dalles, tomettes, parquets anciens : bonnes pratiques.","catalogue"],["Textures haute définition","Pour vos perspectives et planches d'ambiance.","catalogue"],["Blocs DWG / BIM","Cheminées, fontaines et portails pour vos plans.","catalogue"],["Book de réalisations","Références par typologie de projet.","catalogue"]];

const TOUR=[
 {t:"L'entrée du domaine",k:"portail",tags:["Portails","Piliers","Fer forgé"],d:"Le parcours commence entre deux piliers de pierre. Les portails et grilles de domaine sont présentés en situation, à l'échelle réelle.",hs:[[50,30,"Couronnement forgé","Volutes et fleurons d'origine, XIX<sup>e</sup> siècle.","portails"],[84,48,"Pilier à pot à feu","Pierre calcaire dressée, couronnement sculpté.","portails"]],me:[35,135]},
 {t:"L'allée des fontaines",k:"fontaine",tags:["Fontaines","Vasques","Bassins"],d:"Sous les platanes, fontaines de cour, vasques et bassins de domaine murmurent ensemble. Toutes sont présentées en eau.",hs:[[64,46,"Fontaine à mascarons","Quatre visages sculptés, vasque supérieure à godrons.","fontaines"],[40,78,"Bassin de domaine","Margelle moulurée, patine et mousses d'origine.","fontaines"]],me:[99,126]},
 {t:"La galerie des cheminées",k:"parc",pos:"18% 50%",sc:1.6,tags:["Cheminées","Manteaux","Foyers"],d:"Des manteaux Louis XIII aux cheminées de bastide, chaque cheminée est montée à blanc pour juger les proportions avant de choisir.",hs:[[60,42,"Manteau à cartouche","Pierre calcaire sculptée, XVIII<sup>e</sup> siècle.","cheminees"],[84,62,"Fer forgé & piliers","Grilles et piliers présentés en situation.","portails"]],me:[43,75]},
 {t:"Les lots de pierre",k:"pierre",tags:["Dalles","Tomettes","Éviers"],d:"Dalles de Bourgogne, tomettes, dallages de cour : les lots sont triés par teinte, épaisseur et patine, pour des surfaces homogènes.",hs:[[60,74,"Dalle de Bourgogne","Opus romain, patine naturelle, non gélive.","pierre"],[78,52,"Seuils monolithes","Marches et seuils de pierre d'origine.","pierre"]],me:[174,124]},
 {t:"Le jardin des ornements",k:"deco",tags:["Vasques","Statues","Auges"],d:"Vasques à guirlandes, statues, colonnes et auges sculptées : les pièces qui signent un jardin ou une entrée.",hs:[[50,42,"Vasque à guirlandes","Pierre sculptée, paire disponible.","decoration"],[78,40,"Statue de Pomone","Pierre calcaire, XIX<sup>e</sup> siècle.","decoration"],[58,80,"Auge à coquille","Décor sculpté, pièce monolithe.","decoration"]],me:[117,63]},
 {t:"L'atelier de taille",k:"artisan",tags:["Estaillades","Savonnière","Sur mesure"],d:"Dans l'atelier, la pierre d'Estaillades et la savonnière sont taillées sur plan : restauration à l'identique ou création dans l'esprit des maîtres d'autrefois.",hs:[[62,62,"Taille au ciseau","Volute sculptée à la main.","pierre"],[64,38,"Chapiteau en cours","Création sur plan pour un chantier.","pierre"]],me:[183,50]}
];

const CFG={
 dem:[["bastide","Bastide","XVIII<sup>e</sup>–XIX<sup>e</sup>"],["mas","Mas","Provence rurale"],["chateau","Château","Manoir, domaine"],["villa","Villa","Contemporaine"],["hotel","Hôtel","Boutique, domaine"],["village","Maison de village","Luberon, Alpilles"]],
 piece:[["salon","Salon"],["cuisine","Cuisine"],["terrasse","Terrasse"],["jardin","Jardin"],["entree","Entrée"],["cour","Cour"]],
 amb:[["minerale","Lumière minérale","#e6dccb"],["boisee","Chaleur boisée","#8c6a45"],["majeste","Majesté classique","#cdbb9c"],["med","Jardin méditerranéen","#7d8166"]]
};
const CFG_MAIN={salon:"cheminee",cuisine:"interieur",terrasse:"villa",jardin:"deco",entree:"portail",cour:"fontaine"};
const CFG_AMB={minerale:["pierre","fontaine","hotel","villa"],boisee:["bois","interieur","artisan","cheminee"],majeste:["cheminee","portail","hero","bois"],med:["deco","fontaine","villa","hero"]};
const CFG_PAL={minerale:[["#F3EFE7","Pierre"],["#D7C4A3","Travertin"],["#b9a88a","Calcaire"],["#8e8a7c","Gris lauze"],["#6E7257","Olivier"]],boisee:[["#e8dcc6","Lin"],["#b98a5a","Chêne miel"],["#8c6a45","Noyer"],["#a85f3d","Tomette"],["#3b2a1a","Fer"]],majeste:[["#F3EFE7","Marbre"],["#d8c7a6","Pierre"],["#A17440","Bronze"],["#7a6a55","Patine"],["#111111","Charbon"]],med:[["#efe6d3","Chaux"],["#9aa07f","Olive"],["#8d7fb0","Lavande"],["#c99a63","Terre"],["#5b6a4c","Buis"]]};
const CFG_MAT={
 salon:[["cheminees","Cheminée ancienne","Pièce maîtresse du salon"],["bois","Parquet Versailles","Chaleur et noblesse"],["pierre","Dallage de pierre","Alternative minérale"]],
 cuisine:[["pierre","Tomettes anciennes","Sol chaleureux et résistant"],["pierre","Évier de bastide","Pièce monolithe"],["bois","Poutres anciennes","Charpente apparente"]],
 terrasse:[["pierre","Dalles de Bourgogne","Non gélives, patine unique"],["decoration","Balustrade de pierre","Garde-corps d'époque"],["decoration","Jarres & vasques","Végétalisation"]],
 jardin:[["fontaines","Bassin ou fontaine","Le chant de l'eau"],["decoration","Statues & vasques","Points focaux"],["pierre","Auge sculptée","Pièce de caractère"]],
 entree:[["portails","Portail forgé","L'annonce de la demeure"],["portails","Piliers de pierre","Entrée monumentale"],["pierre","Dallage d'allée","Accueil minéral"]],
 cour:[["fontaines","Fontaine centrale","Cœur de la cour"],["pierre","Dallage de cour","Calade ou opus"],["decoration","Vasques & agrumes","Mise en scène"]]
};
let cfg={dem:"bastide",piece:"salon",amb:"majeste"};

const PROOF=[["30","ans+","d'expérience"],["8 000","m²","de parc d'exposition"],["3","lieux","parc + 2 points de vente"],["8","univers","de pièces d'exception"],["FR","+ intl","livraison France & étranger"]];
const SHOTS=[["hero","kb1","Plan 01","Le Luberon au crépuscule"],["fontaine","kb3","Plan 02","L'allée des fontaines"],["cheminee","kb2","Plan 03","Un salon de château"],["parc","kb1","Plan 04","Le parc · 8 000 m²"],["villa","kb4","Plan 05","Une terrasse de bastide"]];

/* ---------------- RENDER HELPERS ---------------- */
function hcards(keys){return Object.entries(CATS).filter(([k])=>!keys||keys.includes(k)).map(([k,c])=>`<a class="hcard zoom" href="#${k}">${img(c.img)}<div class="shade"></div><div class="ct"><span class="n">${c.n}.</span><h3>${c.title}</h3><p>${c.sub}</p><span class="go"><i></i>Entrer dans l'univers</span></div></a>`).join('');}
function artCard(a,i,big){return `<article class="art zoom rv d${i%3} ${big?'big':''}">${img(a.img)}<span class="cat">${a.cat}</span><h3>${a.t}</h3><p>${a.d}</p><p class="note" style="margin-top:12px;letter-spacing:.14em;text-transform:uppercase;font-size:.6rem">Lecture ${a.r}</p></article>`;}
function caseCard(c,i){return `<a class="case zoom rv d${i%3}" href="#projet-${i+1}" data-cat="${c.cat}">${img(c.img)}<div class="m"><span>${c.cat}</span><span>${c.lieu}</span></div><h3>${c.short}</h3><p>${c.desc}</p></a>`;}
function testiHTML(){return TESTI.map((t,i)=>`<div class="tq ${i?'':'on'}">${img(t.img)}<div><div class="stars">★★★★★</div><blockquote>${t.q}</blockquote><div class="who"><b>${t.w}</b><span>${t.r}</span></div></div></div>`).join('');}

/* static */
$('#proof').innerHTML=PROOF.map((p,i)=>`<div class="rv d${i}"><div class="n">${p[0]}<sup>${p[1]}</sup></div><div class="l">${p[2]}</div></div>`).join('');
$('#hcols').innerHTML=hcards(['cheminees','fontaines','portails','pierre','bois','decoration']);$('#hcols2').innerHTML=hcards();$('#hcols2').lastElementChild.classList.add('wide');
$('#mq').innerHTML=("Pierre d'Estaillades<span>✦</span>Cheminées Louis XV<span>✦</span>Fontaines de domaine<span>✦</span>Tomettes anciennes<span>✦</span>Fer forgé<span>✦</span>Dalles de Bourgogne<span>✦</span>Parquets Versailles<span>✦</span>").repeat(4);
$('#home-cases').innerHTML=CASES.slice(1,4).map((c,i)=>caseCard(c,i+1)).join('');
$('#home-mag').innerHTML=ARTS.slice(0,3).map((a,i)=>artCard(a,i,i===0)).join('');
$('#mag-all').innerHTML=ARTS.map((a,i)=>artCard(a,i,i%3===0)).join('');
$('#insta').innerHTML=["villa","cheminee","fontaine","artisan","bois","portail"].map(k=>img(k,'zoom')).join('');
let tot=0;$('#plan').innerHTML=Object.entries(PLAN).map(([k,v])=>{tot+=v.length;return `<h5>${k} · ${v.length}</h5><ol>${v.map(x=>`<li>${x}</li>`).join('')}</ol>`}).join('');$('#pc').textContent=tot;
const rc=["Toutes",...new Set(CASES.map(c=>c.cat))];
$('#rtabs').innerHTML=rc.map((c,i)=>`<button class="tab ${i?'':'on'}" data-rc="${c}">${c}</button>`).join('');
$('#rgrid').innerHTML=CASES.map(caseCard).join('');
['#testi','#testi2'].forEach(s=>$(s).innerHTML=testiHTML());
['#tdots','#tdots2'].forEach(s=>$(s).innerHTML=TESTI.map((_,i)=>`<button class="${i?'':'on'}" data-ti="${i}" aria-label="Témoignage ${i+1}"></button>`).join(''));
$('#zones').innerHTML=TOUR.map((s,i)=>`<a class="zone zoom rv d${i%3}" href="#parc" data-st="${i}">${img(s.k)}<p class="roman" style="margin-top:16px">${['I','II','III','IV','V','VI'][i]}.</p><h4 style="margin-top:4px">${s.t}</h4><p>${s.d}</p></a>`).join('');

/* ---------------- CATEGORY PAGE ---------------- */
function renderCat(k){
 const list=PRODUCTS.filter(p=>p.cat===k);
 const c=CATS[k],others=Object.entries(CATS).filter(([x])=>x!==k);
 $('#p-cat').innerHTML=`
 <div class="phero">${img(c.img)}<div class="veil"></div><div class="wrap phero-in"><div class="crumbs"><a href="#accueil">Accueil</a> / <a href="#collections">Collections</a> / ${c.title}</div><p class="kicker l">Univers ${c.n}</p><h1 class="h-xxl" style="margin-top:18px">${c.title}</h1><p class="lead it" style="color:rgba(243,239,231,.85);max-width:560px;margin-top:18px">${c.sub}</p><div class="univers">${c.univers.map(u=>`<span>${u}</span>`).join('')}</div></div></div>
 <section class="sec"><div class="narrow center"><p class="kicker rv">Présentation</p><div class="sep rv"></div><p class="manifesto rv d1" style="font-size:clamp(1.6rem,2.8vw,2.5rem)">${c.intro}</p></div></section>
 <section class="sec-s" style="padding-top:0"><div class="wrap gal">${[c.img,...c.alt].map((x,i)=>`<div class="ph clip rv g${i+1}" data-lb="${x}"><img src="${I(x)}" alt="" style="object-position:${POS[x]||'50% 50%'}"></div>`).join('')}</div></section>
 <section class="story">${img(c.img)}<div class="story-t dark"><p class="kicker">Une histoire</p><h2 class="h-l" style="margin-top:16px">${c.story[0]}</h2><p class="on-dark" style="margin-top:24px">${c.story[1]}</p><p class="quote">${c.story[2]}</p></div></section>
 <section class="sec"><div class="wrap"><div class="head"><div><p class="kicker rv">Inspirations</p><h2 class="h-l rv d1" style="margin-top:14px">Trois manières <span class="it">de l'imaginer</span></h2></div><a class="link rv" href="#inspiration">Composer ma planche</a></div>
  <div class="insp">${c.insp.map((s,i)=>`<div class="rv d${i} zoom">${img(s[2])}<h4>${s[0]}</h4><p>${s[1]}</p></div>`).join('')}</div></div></section>
 ${!list.length?`<section class="sec trav"><div class="narrow center"><p class="kicker">Au parc en ce moment</p><h2 class="h-l" style="margin-top:14px">Pièces visibles <span class="it">au parc</span></h2><p class="body-l" style="margin:24px auto 0;max-width:620px">Le stock d'éviers et d'auges se renouvelle au fil des arrivages : les pièces disponibles se découvrent au parc de Cavaillon. Dites-nous ce que vous cherchez, nous vous envoyons les photos des pièces en stock.</p><div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:34px"><button class="btn btn-dark" data-open="devis" data-ref="${c.title}"><span>Recevoir les pièces disponibles</span></button><button class="btn" data-open="visite"><span>Réserver une visite du parc</span></button></div></div></section>`:''}${list.length?`<section class="sec trav"><div class="wrap"><div class="head"><div><p class="kicker">Au parc en ce moment</p><h2 class="h-l" style="margin-top:14px">${list.length} pièce${list.length>1?'s':''} <span class="it">${k==='taille'?"réalisées par l'atelier":'disponibles'}</span></h2></div>${list.length>2?`<div class="chips" data-pf><span class="chip on" data-v="">Toutes</span><span class="chip" data-v="ancien">Ancien</span><span class="chip" data-v="réédition">Réédition</span></div>`:''}</div>
  <div class="pgrid">${list.map(pcard).join('')}</div><p class="note" style="margin-top:34px">Pièces uniques ou en série limitée : prix et disponibilités sur demande. <a class="link" href="#catalogue" style="margin-left:10px">Tout le catalogue</a></p></div></section>`:''}
 <section class="cta-final" style="min-height:70vh">${img(c.alt[0])}<div class="veil"></div><div class="wrap in"><p class="kicker l">Votre projet</p><h2 class="h-xl" style="margin:16px auto 0;max-width:16ch">Trouvons ensemble <span class="it">la pièce juste</span></h2><div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:40px"><button class="btn btn-fill" data-open="devis"><span>Demander un devis</span></button><button class="btn" data-open="visite"><span>Voir les pièces au parc</span></button></div></div></section>
 <section class="sec-s"><div class="wrap"><p class="kicker" style="margin-bottom:30px">Autres univers</p><div class="cgrid">${others.map(([kk,o])=>`<a class="hcard zoom" href="#${kk}">${img(o.img)}<div class="shade"></div><div class="ct"><span class="n">${o.n}.</span><h3>${o.title}</h3><span class="go"><i></i>Découvrir</span></div></a>`).join('')}</div></div></section>`;
}

/* ---------------- CASE PAGE ---------------- */
function renderCase(i){
 const c=CASES[i],nx=CASES[(i+1)%CASES.length];
 $('#p-projet').innerHTML=`
 <div class="case-hero">${img(c.img)}<div class="veil"></div><div class="wrap in"><div class="crumbs"><a href="#accueil">Accueil</a> / <a href="#realisations">Réalisations</a> / ${c.short}</div><span class="badge">${c.cat} · ${c.lieu}</span><h1 class="h-xl" style="margin-top:22px;max-width:16ch">${c.title}</h1></div></div>
 <section class="sec"><div class="wrap case-grid"><aside class="rv"><dl><div><dt>Typologie</dt><dd>${c.cat}</dd></div><div><dt>Lieu</dt><dd>${c.lieu}</dd></div><div><dt>Interlocuteur</dt><dd>${c.who}</dd></div><div><dt>Univers</dt><dd>${[...new Set(c.used.map(u=>CATS[u[0]].title))].join(', ')}</dd></div></dl></aside>
  <div class="rv d1"><p class="kicker">Le projet</p><p class="manifesto" style="font-size:clamp(1.6rem,2.6vw,2.4rem);margin-top:18px">${c.desc}</p><p class="body-l" style="margin-top:26px">${c.long}</p></div></div>
  <div class="wrap case-gal"><div class="ph tall clip rv"><img src="${I(c.img)}" alt="" style="object-position:${POS[c.img]||'50% 50%'}"></div>${c.gal.slice(0,2).map((g,j)=>`<div class="ph clip rv d${j+1}"><img src="${I(g)}" alt="" style="object-position:${POS[g]||'50% 50%'}"></div>`).join('')}</div>
  <div class="wrap"><div class="ba rv" data-ba><div class="ph before"><img src="${I(c.img)}" alt=""></div><div class="ph after"><img src="${I(c.img)}" alt=""></div><span class="lab l">Avant</span><span class="lab r">Après</span><div class="handle"></div><input type="range" min="0" max="100" value="50" aria-label="Avant / après"></div></div></section>
 <section class="sec-s dark"><div class="wrap"><p class="kicker center" style="margin-bottom:40px">Résultats</p><div class="results">${c.res.map(r=>`<div><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div></div></section>
 <section class="sec"><div class="wrap"><p class="kicker">Pièces utilisées</p><h2 class="h-l" style="margin:14px 0 40px">Les matériaux <span class="it">du projet</span></h2><div class="used">${c.used.map(u=>`<a href="#${u[0]}"><span>${CATS[u[0]].title}</span><b>${u[1]}</b><p class="note">${u[2]}</p></a>`).join('')}</div>
  <p class="kicker" style="margin-top:90px">Déroulé du chantier</p><div class="timeline" style="margin-top:30px"><div><h4>Visite &amp; brief</h4><p>Relevé, contraintes patrimoniales et ambiance.</p></div><div><h4>Sélection au parc</h4><p>Choix des pièces, réservation des lots.</p></div><div><h4>Atelier</h4><p>Restauration, compléments taillés sur plan.</p></div><div><h4>Livraison &amp; pose</h4><p>Transport soigné, suivi avec l'entreprise.</p></div></div></div></section>
 <section class="sec dark"><div class="narrow center"><div class="stars">★★★★★</div><p class="manifesto" style="margin-top:20px">« ${c.quote} »</p><p class="kicker" style="margin-top:30px">${c.who} · ${c.role}</p><p class="note" style="margin-top:14px">Témoignage d'illustration, à remplacer par un avis client réel et validé.</p></div></section>
 <a class="cta-final" href="#projet-${(i+1)%CASES.length+1}" style="min-height:70vh">${img(nx.img)}<div class="veil"></div><div class="wrap in"><p class="kicker l">Projet suivant</p><h2 class="h-xl" style="margin-top:16px">${nx.short}</h2><span class="link" style="margin-top:30px;color:var(--pierre)">Découvrir</span></div></a>`;
}

/* ---------------- PIECE PAGE ---------------- */
function renderPiece(id){
 const p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0],c=CATS[p.cat];
 const sim=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
 const txt=p.ref==='Fabrication'?"Réalisation de notre atelier de taille de pierre. Dimensions, pierre et finitions s'adaptent à votre projet, d'après vos plans ou nos dessins.":p.k==='ancien'?"Pièce ancienne authentique, sélectionnée et contrôlée par nos équipes. Chaque pièce ancienne est unique : sa patine, sa teinte et ses dimensions exactes se découvrent au parc.":"Réédition réalisée dans les règles de l'art, d'après des modèles anciens. Dimensions et finitions adaptables sur demande.";
 const idx=PRODUCTS.indexOf(p),prev=PRODUCTS[(idx-1+PRODUCTS.length)%PRODUCTS.length],next=PRODUCTS[(idx+1)%PRODUCTS.length];
 $('#p-piece').innerHTML=`<section class="piece"><div class="wrap piece-in">
  <div class="piece-ph">${pimg(p,'big')}</div>
  <div class="piece-t"><div class="crumbs"><a href="#accueil">Accueil</a> / <a href="#catalogue">Catalogue</a> / <a href="#${p.cat}">${c.title}</a></div>
   <div class="pc-m" style="justify-content:flex-start;gap:10px">${ptag(p)}${p.stock?'<span class="tag stock">En stock</span>':''}</div>
   <h1 class="h-l" style="margin:18px 0 8px">${p.t}</h1><p class="kicker">${p.ref!=='—'?'Réf. '+p.ref:'Référence sur demande'}</p>
   <dl class="specs"><div><dt>Univers</dt><dd><a href="#${p.cat}">${c.title}</a></dd></div><div><dt>Type</dt><dd>${p.k==='ancien'?'Pièce ancienne':'Réédition / fabrication'}</dd></div>${p.d.map(x=>{const m=x.match(/^(Foyer · )?(Largeur|Hauteur|Longueur|Diamètre|Profondeur)( [a-zé ]+?)? ([\d,]+ ?m|[\d,]+ cm)$/i);return m?`<div><dt>${(m[1]?'Foyer · ':'')+m[2]+(m[3]||'')}</dt><dd>${m[4]}</dd></div>`:`<div><dt>Détail</dt><dd>${x}</dd></div>`}).join('')}</dl>
   <p class="body-l">${txt}</p>
   <div style="display:flex;gap:12px;flex-wrap:wrap;margin:30px 0"><button class="btn btn-dark" data-open="devis" data-ref="${p.ref!=='—'?p.ref+' · ':''}${p.t}"><span>Demander cette pièce</span></button><button class="btn" data-open="visite" data-ref="${p.ref!=='—'?p.ref+' · ':''}${p.t}"><span>La voir au parc</span></button></div>
   <ul class="reassure"><li>Visible au parc de Cavaillon, 8 000 m²</li><li>Livraison en France et à l'international</li><li>Conseil, métrés et accompagnement de nos équipes</li></ul>
   <div class="piece-nav"><a href="#piece-${prev.id}">← Pièce précédente</a><a href="https://www.brachet-anciensmateriaux.fr/collection/${p.col}" target="_blank" rel="noopener">Fiche sur le site actuel ↗</a><a href="#piece-${next.id}">Pièce suivante →</a></div>
  </div></div></section>
  ${sim.length?`<section class="sec-s" style="padding-top:20px"><div class="wrap"><div class="head" style="margin-bottom:30px"><p class="kicker">Dans le même univers</p><a class="link" href="#${p.cat}">Voir l'univers ${c.title}</a></div><div class="pgrid">${sim.map(pcard).join('')}</div></div></section>`:''}`;
}
let catF={c:'',k:'',q:''};
function renderCatalogue(){
 const l=PRODUCTS.filter(p=>(!catF.c||p.cat===catF.c)&&(!catF.k||p.k===catF.k)&&(!catF.q||(p.t+' '+p.ref+' '+p.d.join(' ')).toLowerCase().includes(catF.q)));
 $('#cat-count').textContent=l.length+' pièce'+(l.length>1?'s':'');
 $('#cat-all').innerHTML=l.length?l.map(pcard).join(''):'<p class="note">Aucune pièce ne correspond. Contactez-nous : le parc compte bien plus de pièces que le catalogue en ligne.</p>';
}
$('#cat-univ').innerHTML='<span class="chip on" data-cu="">Tous les univers</span>'+Object.entries(CATS).map(([k,c])=>`<span class="chip" data-cu="${k}">${c.title} <small>${PRODUCTS.filter(p=>p.cat===k).length||'au parc'}</small></span>`).join('');
$('#cat-q').addEventListener('input',e=>{catF.q=e.target.value.toLowerCase().trim();renderCatalogue();});
document.addEventListener('click',e=>{
 const u=e.target.closest('[data-cu]');if(u){catF.c=u.dataset.cu;$$('[data-cu]').forEach(x=>x.classList.toggle('on',x===u));renderCatalogue();}
 const t=e.target.closest('[data-ck]');if(t){catF.k=t.dataset.ck;$$('[data-ck]').forEach(x=>x.classList.toggle('on',x===t));renderCatalogue();}
 const f=e.target.closest('[data-pf] .chip');if(f){const box=f.parentElement;$$('.chip',box).forEach(x=>x.classList.toggle('on',x===f));$$('.pcard',box.closest('.wrap')).forEach(c=>c.style.display=(!f.dataset.v||c.dataset.k===f.dataset.v)?'':'none');}
});
renderCatalogue();
$('#home-pieces').innerHTML=[18,1,22,40,19,9].map(i=>PRODUCTS.find(p=>p.id===i)).filter(Boolean).map(pcard).join('');

/* ---------------- ROUTER ---------------- */
const PAGES=['accueil','maison','collections','catalogue','parc','realisations','inspiration','architectes','magazine','contact'];
const TITLES={maison:'La Maison',collections:'Collections',catalogue:'Catalogue',parc:'Visiter le Parc',realisations:'Réalisations',inspiration:"Configurateur d'inspiration",architectes:'Espace Pro',magazine:'Magazine',contact:'Contact'};
let current='';
function route(){
 let h=(location.hash||'#accueil').slice(1)||'accueil';
 document.body.classList.remove('menu-open');
 let id;
 if(CATS[h]){renderCat(h);id='p-cat';}
 else if(/^projet-[1-6]$/.test(h)){renderCase(+h.split('-')[1]-1);id='p-projet';}
 else if(/^piece-\d+$/.test(h)){renderPiece(+h.split('-')[1]);id='p-piece';}
 else{if(!PAGES.includes(h))h='accueil';id='p-'+h;}
 $$('.page').forEach(p=>p.classList.toggle('on',p.id===id));
 $$('.menu a[data-r]').forEach(a=>a.classList.toggle('act',a.dataset.r===h||(CATS[h]&&a.dataset.r==='collections')||(h.startsWith('projet')&&a.dataset.r==='realisations')||(h.startsWith('piece')&&a.dataset.r==='catalogue')));
 window.scrollTo(0,0);
 document.title=(h.startsWith('piece-')?(PRODUCTS.find(p=>p.id===+h.split('-')[1])||{t:''}).t+' · ':CATS[h]?CATS[h].title+' · ':h.startsWith('projet')?CASES[+h.split('-')[1]-1].short+' · ':TITLES[h]?TITLES[h]+' · ':'')+'Brachet · La Maison Provençale du Patrimoine Architectural';
 current=h;document.body.classList.toggle('on-tour',h==='parc');document.body.classList.toggle('light-top',h.startsWith('piece-')||h==='architectes');
 if(h==='parc')tourGo(+(sessionStore.st||0),true),sessionStore.st=0;
 if(h==='inspiration')renderBoard();
 requestAnimationFrame(()=>{observe($('#'+id));bindBA($('#'+id));onScroll();});
}
const sessionStore={};
addEventListener('hashchange',route);

/* ---------------- REVEAL ---------------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.id==='big-m2')countTo(e.target,8000,'<sup>m²</sup>');}}),{threshold:.12});
function observe(r){$$('.rv:not(.in),.clip:not(.in),.lines:not(.in)',r).forEach(e=>io.observe(e));}
function countTo(el,t,suf){let s=null;const f=ts=>{s=s||ts;const p=Math.min((ts-s)/2200,1),v=Math.round(t*(1-Math.pow(1-p,4)));el.innerHTML=v.toLocaleString('fr-FR')+suf;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f);}

/* ---------------- HEADER + PARALLAX ---------------- */
const nav=$('#nav'),ribbon=$('#ribbon');
function onScroll(){
 const y=scrollY;nav.classList.toggle('solid',y>60);nav.style.top=y>60?'0px':ribbon.offsetHeight+'px';
 const pb=$('#park-bg');if(pb&&current==='accueil'){const r=pb.parentElement.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)pb.style.transform=`translateY(${(r.top)*-.12}px)`;}
 const ph=$('.page.on .phero .ph, .page.on .case-hero .ph');if(ph&&y<innerHeight)ph.style.transform=`translateY(${y*.3}px)`;
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);
$('#burger').onclick=()=>document.body.classList.toggle('menu-open');

/* ---------------- CINEMATIC HERO ---------------- */
$('#shots').innerHTML=SHOTS.map((s,i)=>`<div class="shot ${i?'':'on'}"><img src="${I(s[0])}" class="${s[1]}" alt=""></div>`).join('');
$('#segs').innerHTML=SHOTS.map(()=>'<span><i></i></span>').join('');
let shot=0,shotT;
function playShot(i){
 const sh=$$('#shots .shot'),sg=$$('#segs span');
 sh.forEach((s,j)=>{s.classList.toggle('on',j===i);if(j===i){const im=s.firstElementChild;im.style.animation='none';im.offsetWidth;im.style.animation='';}});
 sg.forEach((s,j)=>{s.className=j<i?'done':j===i?'on':'';const ii=s.firstElementChild;ii.style.animation='none';ii.offsetWidth;ii.style.animation='';});
 const cap=$('#cap');cap.style.opacity=0;setTimeout(()=>{cap.innerHTML=`<small>${SHOTS[i][2]}</small>${SHOTS[i][3]}`;cap.style.opacity=1},500);
 clearTimeout(shotT);shotT=setTimeout(()=>{shot=(i+1)%SHOTS.length;playShot(shot)},7000);
}

/* ---------------- FILM MODE ---------------- */
const FILM=[["card","Brachet présente","La Maison Provençale<br>du Patrimoine Architectural"],["hero","Au pied du Luberon, depuis plus de trente ans…"],["fontaine","…des pièces qui ont traversé les siècles…"],["card","8 000 m²","Un parc à ciel ouvert"],["parc","Cheminées, fontaines, portails, colonnes…"],["artisan","Restaurées et taillées dans notre atelier."],["cheminee","Elles retrouvent une demeure."],["villa","Et commencent une nouvelle histoire."],["card","Les matériaux qui traversent les siècles","BRACHET · Cavaillon · 04 90 78 28 12"]];
let filmT=[],filmRAF;
function openFilm(){
 const f=$('#film'),fr=$('#frame');f.classList.add('open');document.body.style.overflow='hidden';
 fr.innerHTML=FILM.map(s=>s[0]==='card'?`<div class="card"><small>${s[1]}</small><p>${s[2]}</p></div>`:`<div class="shot"><img src="${I(s[0])}" alt=""></div>`).join('');
 const els=[...fr.children],dur=6400,total=dur*FILM.length,t0=performance.now();
 FILM.forEach((s,i)=>filmT.push(setTimeout(()=>{els.forEach((e,j)=>e.classList.toggle('on',j===i));const sub=$('#fsub');sub.classList.remove('on');if(s[0]!=='card')setTimeout(()=>{sub.textContent=s[1];sub.classList.add('on')},700);},i*dur)));
 filmT.push(setTimeout(closeFilm,total+600));
 const tick=n=>{const e=n-t0;$('#fprog').style.width=Math.min(e/total*100,100)+'%';const s=Math.floor(e/1000);$('#ftc').textContent=`00:${String(Math.min(s,59)).padStart(2,'0')}`;filmRAF=requestAnimationFrame(tick)};filmRAF=requestAnimationFrame(tick);
}
function closeFilm(){filmT.forEach(clearTimeout);filmT=[];cancelAnimationFrame(filmRAF);$('#film').classList.remove('open');document.body.style.overflow='';$('#fsub').classList.remove('on');}
$('#film-x').onclick=closeFilm;

/* ---------------- HSCROLL ---------------- */
document.addEventListener('click',e=>{const b=e.target.closest('[data-h]');if(b){const hs=$('#hcols');hs.scrollBy({left:+b.dataset.h*hs.clientWidth*.6,behavior:'smooth'});}});
(function(){let down=false,sx=0,sl=0,el=null,moved=false;
 document.addEventListener('pointerdown',e=>{el=e.target.closest('.hscroll');if(!el||e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=el.scrollLeft;});
 document.addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>5)moved=true;el.scrollLeft=sl-dx;});
 document.addEventListener('pointerup',()=>{down=false;});
 document.addEventListener('click',e=>{if(moved&&e.target.closest('.hscroll')){e.preventDefault();moved=false;}},true);
})();

/* ---------------- BEFORE / AFTER ---------------- */
function bindBA(r){$$('[data-ba] input',r).forEach(i=>i.oninput=()=>i.parentElement.style.setProperty('--p',i.value+'%'));}

/* ---------------- TESTIMONIALS ---------------- */
let ti=0;function showT(i){ti=i;['#testi','#testi2'].forEach(s=>$$(s+' .tq').forEach((q,j)=>q.classList.toggle('on',j===i)));$$('[data-ti]').forEach(b=>b.classList.toggle('on',+b.dataset.ti===i));}
setInterval(()=>showT((ti+1)%TESTI.length),8000);

/* ---------------- VIRTUAL TOUR ---------------- */
$('#tour-st').innerHTML=TOUR.map((s,i)=>`<div class="st" data-i="${i}"><img src="${I(s.k)}" alt="${s.t}" style="object-position:${s.pos||POS[s.k]||'50% 50%'};${s.sc?`transform:scale(${s.sc});transform-origin:${s.pos}`:''}">${s.hs.map(h=>`<span class="hs" style="left:${h[0]}%;top:${h[1]}%"><b></b><span class="pop"><b>${h[2]}</b>${h[3]}<br><a href="#${h[4]}">Voir l'univers</a></span></span>`).join('')}</div>`).join('');
$('#tbar').innerHTML=TOUR.map((s,i)=>`<button data-st="${i}">${['I','II','III','IV','V','VI'][i]}. Station<b>${s.t}</b></button>`).join('');
let tcur=-1;
function tourGo(i,instant){
 i=(i+TOUR.length)%TOUR.length;if(i===tcur&&!instant)return;
 const sts=$$('#tour-st .st');
 sts.forEach((s,j)=>{s.classList.remove('leave');if(j===tcur&&!instant){s.classList.remove('on');s.classList.add('leave');}else if(j!==i)s.classList.remove('on');});
 sts[i].classList.add('on');$$('.hs',sts[i]).forEach(h=>h.classList.remove('open'));
 tcur=i;const s=TOUR[i],inf=$('#tinfo');inf.classList.add('out');
 setTimeout(()=>{inf.innerHTML=`<div class="num">0${i+1}<span style="font-size:.3em;color:rgba(243,239,231,.5)"> / 06</span></div><h2>${s.t}</h2><p>${s.d}</p><div class="tags">${s.tags.map(t=>`<span>${t}</span>`).join('')}</div><button class="btn btn-fill btn-sm" data-open="visite"><span>Voir sur place</span></button>`;inf.classList.remove('out')},instant?0:450);
 $$('#tbar button').forEach((b,j)=>b.classList.toggle('on',j===i));
 $$('#plan-svg .z').forEach(z=>z.classList.toggle('on',+z.dataset.z===i));
 const me=$('#me');me.setAttribute('cx',s.me[0]);me.setAttribute('cy',s.me[1]);
}
$('#tprev').onclick=()=>tourGo(tcur-1);$('#tnext').onclick=()=>tourGo(tcur+1);
$('#tour').addEventListener('mousemove',e=>{const st=$('#tour-st .st.on img');if(!st)return;const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;const sc=TOUR[tcur].sc||1;st.style.transform=`scale(${sc*1.06}) translate(${-x*2.4}%,${-y*2.4}%)`;});
$('#tour').addEventListener('click',e=>{const h=e.target.closest('.hs');if(h&&e.target.tagName==='B'&&!e.target.closest('.pop')){$$('.hs').forEach(x=>x!==h&&x.classList.remove('open'));h.classList.toggle('open');}});
$('#plan-svg').addEventListener('click',e=>{const z=e.target.closest('.z');if(z)tourGo(+z.dataset.z);});
addEventListener('keydown',e=>{if(current!=='parc')return;if(e.key==='ArrowRight')tourGo(tcur+1);if(e.key==='ArrowLeft')tourGo(tcur-1);});
(function(){let sx=null;const t=$('#tour');t.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});t.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)tourGo(tcur+(dx<0?1:-1));sx=null;});})();

/* ---------------- CONFIGURATOR ---------------- */
$$('.opt-grid').forEach(g=>{const k=g.dataset.k;g.innerHTML=CFG[k].map(o=>k==='amb'?`<button class="opt sw ${cfg[k]===o[0]?'on':''}" data-c="${k}" data-v="${o[0]}"><i style="background:${o[2]}"></i>${o[1]}</button>`:`<button class="opt ${cfg[k]===o[0]?'on':''}" data-c="${k}" data-v="${o[0]}">${o[1]}${o[2]?`<small>${o[2]}</small>`:''}</button>`).join('');});
function lab(k,v){return CFG[k].find(o=>o[0]===v)[1];}
function renderBoard(){
 const main=CFG_MAIN[cfg.piece],pool=[main,...CFG_AMB[cfg.amb],'parc','hero','fontaine','bois'];const ims=[...new Set(pool)].slice(0,6);
 const pal=CFG_PAL[cfg.amb],mats=CFG_MAT[cfg.piece];
 const dem=lab('dem',cfg.dem).replace(/<[^>]+>/g,''),pc=lab('piece',cfg.piece),am=lab('amb',cfg.amb);
 const txt={minerale:"une lumière douce sur des matières claires : pierre calcaire, dalles patinées, chaux et eau",boisee:"la chaleur du chêne ancien, des tomettes et des poutres, des tons miel et terre",majeste:"des proportions classiques, des pièces sculptées et la noblesse de la pierre et du bronze",med:"le dialogue de la pierre, de l'eau et du végétal : buis, oliviers, lavande et vasques"}[cfg.amb];
 $('#board-wrap').innerHTML=`<div class="fadein"><p class="kicker">Votre planche d'inspiration</p><h2 class="board-title" style="margin-top:12px">${dem} · ${pc}<br><span class="it gold">${am}</span></h2>
 <div class="board">${ims.map((k,i)=>`<div class="ph b${i+1}"><img src="${I(k)}" alt="" style="object-position:${POS[k]||'50% 50%'}"></div>`).join('')}<div class="swatches">${pal.map(p=>`<div style="background:${p[0]};color:${isDark(p[0])?'#F3EFE7':'#111'}">${p[1]}<br>${p[0]}</div>`).join('')}</div></div>
 <div class="board-txt"><div><p class="kicker">Notre lecture</p><p class="lead" style="margin-top:14px;color:var(--encre)">${LANG==='en'?`For the ${({bastide:"bastide",mas:"farmhouse",chateau:"château",villa:"villa",hotel:"hotel",village:"village house"})[cfg.dem]}, we imagine ${({salon:"a living room",cuisine:"a kitchen",terrasse:"a terrace",jardin:"a garden",entree:"an entrance",cour:"a courtyard"})[cfg.piece]} that plays on ${{minerale:"soft light on pale materials: limestone, patinated flagstones, lime and water",boisee:"the warmth of antique oak, tomettes and beams, in honey and earth tones",majeste:"classical proportions, carved pieces and the nobility of stone and bronze",med:"the dialogue of stone, water and plants: boxwood, olive trees, lavender and urns"}[cfg.amb]}. The pieces shown are available at the park or can be sourced for you.`:`Pour ${/^[AEIOUÉH]/.test(dem)?"l'":'la '}${dem.toLowerCase()==='château'||dem.toLowerCase()==='mas'||dem.toLowerCase()==='hôtel'?dem.toLowerCase():dem.toLowerCase()}, nous imaginons ${pc==='Entrée'?"une entrée":pc==='Cour'?'une cour':pc==='Terrasse'?'une terrasse':pc==='Cuisine'?'une cuisine':pc==='Jardin'?'un jardin':'un salon'} qui joue ${txt}. Les pièces ci-contre sont disponibles au parc ou peuvent être recherchées pour vous.`}</p>
 <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:30px"><button class="btn btn-dark" data-open="planche"><span>Recevoir cette planche</span></button><button class="btn" data-open="visite"><span>Voir les pièces au parc</span></button></div></div>
 <div><p class="kicker">Matériaux &amp; pièces recommandés</p><ul class="mat-list" style="margin-top:10px">${mats.map(m=>`<li><div><b>${m[1]}</b><br><span>${m[2]}</span></div><a href="#${m[0]}">${CATS[m[0]].title} →</a></li>`).join('')}</ul></div></div></div>`;
}
function isDark(h){const n=parseInt(h.slice(1),16);return ((n>>16)*.299+((n>>8)&255)*.587+(n&255)*.114)<140;}
document.addEventListener('click',e=>{const o=e.target.closest('[data-c]');if(!o)return;cfg[o.dataset.c]=o.dataset.v;$$(`[data-c="${o.dataset.c}"]`).forEach(b=>b.classList.toggle('on',b===o));renderBoard();});

/* ---------------- PRO SPACE ---------------- */
const proj=new Map();
function proTab(t){$$('#pronav button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));$$('.pro-tab').forEach(p=>p.classList.toggle('on',p.dataset.t===t));if(t==='proj')renderProj();window.scrollTo({top:0,behavior:'smooth'});}
$('#pronav').addEventListener('click',e=>{const b=e.target.closest('button');if(b)proTab(b.dataset.t);});
$('#feed').innerHTML=LIB.slice(0,5).map((m,i)=>`<li>${img(m.img)}<div><b style="font-weight:400">${m.n}</b><small>${m.f} · ${m.u.join(' / ')} · ${['Arrivé cette semaine','Nouveau lot','Restauré à l\'atelier','Disponible','Nouveau lot'][i]}</small></div></li>`).join('');
function renderLib(){
 const q=$('#lq').value.toLowerCase(),f1=$('#lf1').value,f2=$('#lf2').value,f3=$('#lf3').value;
 const list=LIB.map((m,i)=>[m,i]).filter(([m])=>(!q||(m.n+m.f+m.fin).toLowerCase().includes(q))&&(!f1||m.f===f1)&&(!f2||m.u.includes(f2))&&(!f3||m.e===f3));
 $('#libg').innerHTML=list.length?list.map(([m,i])=>`<div class="mcard">${img(m.img)}<div class="b"><span>${m.f} · ${m.e}</span><h5>${m.n}</h5><p>${m.u.join(' / ')} · ${m.dim}</p></div><div class="acts"><button data-fiche="${i}">Fiche technique</button><button data-add="${i}" class="${proj.has(i)?'added':''}">${proj.has(i)?'✓ Ajouté':'+ Projet'}</button></div></div>`).join(''):'<div class="empty" style="grid-column:1/-1">Aucun matériau ne correspond à ces filtres.</div>';
}
['#lq','#lf1','#lf2','#lf3'].forEach(s=>$(s).addEventListener('input',renderLib));
function renderProj(){
 $('#pcount').textContent=proj.size;$('#k2').textContent=proj.size;
 $('#plist').innerHTML=proj.size?[...proj.entries()].map(([i,q])=>`<div class="proj-item">${img(LIB[i].img)}<div><b style="font-family:var(--sub);font-weight:400">${LIB[i].n}</b><br><span class="note">${LIB[i].f} · ${LIB[i].dim}</span></div><input value="${q}" data-q="${i}" placeholder="Quantité (m², pièces)"><button data-rm="${i}" aria-label="Retirer">✕</button></div>`).join(''):'<div class="empty">Votre projet est vide. Ajoutez des matériaux depuis la <b>Bibliothèque</b>.</div>';
}
function projSummary(){const n=$('#pname').value||'Projet',l=$('#ploc').value;return `${n}${l?' ('+l+')':''}\n`+[...proj.entries()].map(([i,q])=>`- ${LIB[i].n}${q?' : '+q:''}`).join('\n');}
document.addEventListener('input',e=>{if(e.target.dataset.q!==undefined)proj.set(+e.target.dataset.q,e.target.value);});
document.addEventListener('click',e=>{
 const a=e.target.closest('[data-add]');if(a){const i=+a.dataset.add;proj.has(i)?proj.delete(i):proj.set(i,'');renderLib();renderProj();}
 const r=e.target.closest('[data-rm]');if(r){proj.delete(+r.dataset.rm);renderProj();renderLib();}
 const f=e.target.closest('[data-fiche]');if(f){const m=LIB[+f.dataset.fiche];openModal(`<div class="fiche">${img(m.img)}<div class="t"><span class="kicker">${m.f} · ${m.e}</span><h3 class="h-l" style="margin-top:10px">${m.n}</h3><dl><dt>Usage</dt><dd>${m.u.join(' / ')}</dd><dt>Dimensions</dt><dd>${m.dim}</dd><dt>Épaisseur</dt><dd>${m.ep}</dd><dt>Finitions</dt><dd>${m.fin}</dd><dt>Origine</dt><dd>${m.or}</dd><dt>Gel</dt><dd>${m.gel}</dd></dl><p class="note">Fiche d'illustration, à compléter avec les données techniques de Brachet.</p><div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px"><button class="btn btn-fill btn-sm" data-add="${f.dataset.fiche}" onclick="closeModal()"><span>Ajouter au projet</span></button><button class="btn btn-sm" data-open="echantillons" data-ref="${m.n}"><span>Échantillon</span></button></div></div></div>`);}
 const tb=e.target.closest('[data-tab]');if(tb){e.preventDefault();proTab(tb.dataset.tab);}
});
$('#psend').onclick=()=>{if(!proj.size){proTab('lib');return;}openForm('devis',projSummary());};
$('#pcopy').onclick=async()=>{const ok=$('#pok');try{await navigator.clipboard.writeText(projSummary());ok.textContent='Récapitulatif copié dans le presse-papiers.';}catch(_){ok.innerHTML='<pre style="white-space:pre-wrap;font:inherit">'+projSummary()+'</pre>';}ok.classList.add('show');};
$('#lots').innerHTML=`<tr><th>Réf.</th><th>Matériau</th><th>Quantité</th><th>Format</th><th>Statut</th><th></th></tr>`+LOTS.map(l=>`<tr><td>${l[0]}</td><td><b>${l[1]}</b></td><td>${l[2]}</td><td>${l[3]}</td><td><span class="dot" style="background:${{g:'#6E7257',o:'#A17440',r:'#a33'}[l[4]]}"></span>${{g:'Disponible',o:'Selon arrivages',r:'Pièce unique'}[l[4]]}</td><td><button class="link" data-open="reserver" data-ref="${l[0]} · ${l[1]}" style="border-bottom-color:var(--bronze)">Réserver</button></td></tr>`).join('');
$('#resg').innerHTML=RES.map(r=>`<div class="card-w"><svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg><h4 style="margin:0">${r[0]}</h4><p>${r[1]}</p><button class="link" data-open="${r[2]}" data-ref="${r[0]}" style="align-self:flex-start">Recevoir</button></div>`).join('');
renderLib();renderProj();

/* ---------------- BOOKING ---------------- */
function booking(dId,sId,btnId,okId,dark){
 const d=$(dId),s=$(sId),now=new Date(),js=LANG==='en'?['Sun','Mon','Tue','Wed','Thu','Fri','Sat']:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];let list=[],k=1;while(list.length<6){const dt=new Date(now);dt.setDate(now.getDate()+k++);if(dt.getDay())list.push(dt);}
 d.innerHTML=list.map((dt,i)=>`<button class="day ${i?'':'on'}" data-sat="${dt.getDay()===6?1:0}" style="${dark?'':'border-color:var(--line)'}">${js[dt.getDay()]}<b>${dt.getDate()}</b>${dt.toLocaleDateString(LANG==='en'?'en-GB':'fr-FR',{month:'short'})}</button>`).join('');
 const fill=sat=>{s.innerHTML=(sat?['8h30','9h30','10h30','11h30']:['8h30','10h00','11h00','14h00','15h00','16h00','16h30','17h00']).map(x=>LANG==='en'?x.replace('h',':'):x).map((x,i)=>`<button class="slot ${i===1?'on':''}" style="${dark?'':'border-color:var(--line)'}">${x}</button>`).join('')};fill(0);
 d.onclick=e=>{const b=e.target.closest('.day');if(!b)return;$$('.day',d).forEach(x=>x.classList.toggle('on',x===b));fill(+b.dataset.sat)};
 s.onclick=e=>{const b=e.target.closest('.slot');if(!b)return;$$('.slot',s).forEach(x=>x.classList.toggle('on',x===b))};
 $(btnId).onclick=()=>{const day=$('.day.on',d),sl=$('.slot.on',s),ok=$(okId);ok.innerHTML=L(`Créneau choisi : <b>${day.firstChild.textContent} ${day.querySelector('b').textContent} ${day.lastChild.textContent} à ${sl.textContent}</b>. Dans le site en ligne, il sera réservé dans l'agenda de Brachet, avec une confirmation par e-mail et SMS.`,`Slot selected: <b>${day.firstChild.textContent} ${day.querySelector('b').textContent} ${day.lastChild.textContent} at ${sl.textContent}</b>. On the live site, it will be booked in Brachet's calendar, with confirmation by e-mail and text message.`);ok.classList.add('show');};
}
booking('#days','#slots','#book','#book-ok',true);booking('#days2','#slots2','#book2','#book2-ok',false);

/* ---------------- MODALS & FORMS ---------------- */
const modal=$('#modal'),mbox=$('#mbox'),mc=$('#mc');
function openModal(h,light){mc.innerHTML=h;mbox.classList.toggle('light',!!light);modal.classList.add('open');document.body.style.overflow='hidden';}
function closeModal(){modal.classList.remove('open');document.body.style.overflow='';}
window.closeModal=closeModal;
$('#mx').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeFilm();closeAI();}});
function openForm(type,ref){
 const T={devis:["Demande de devis","Un conseiller vous répond sous 48 h ouvrées."],rdv:["Prendre rendez-vous","Au parc de Cavaillon, en visio ou sur votre chantier."],visite:["Réserver une visite du parc","Une visite accompagnée de 8 000 m² de pièces d'exception."],projet:["Déposer un projet","Plans, programme et calendrier : nous préparons une sélection dédiée."],catalogue:["Ressources professionnelles","Recevez les documents par e-mail."],echantillons:["Commander des échantillons","Échantillons de pierre, terre cuite et bois envoyés à votre agence."],reserver:["Réserver un lot","Mise de côté du lot pendant vos études."],planche:["Recevoir votre planche d'inspiration","Votre planche et nos conseils, par e-mail, avec un rappel d'un conseiller si vous le souhaitez."]}[type]||["Contact",""];
 const extra={
  rdv:`<div class="fld full"><label>Format</label><div class="chips" data-chips><span class="chip on">Au parc</span><span class="chip">En visio</span><span class="chip">Sur chantier</span></div></div><div class="fld"><label>Date souhaitée</label><input type="date"></div><div class="fld"><label>Moment</label><select><option>Matin</option><option>Après-midi</option><option>Samedi matin</option></select></div>`,
  visite:`<div class="fld"><label>Date souhaitée</label><input type="date"></div><div class="fld"><label>Nombre de personnes</label><select><option>1</option><option>2</option><option>3 à 5</option><option>Plus de 5</option></select></div><div class="fld full"><label>Ce que vous souhaitez voir</label><div class="chips" data-chips><span class="chip on">Cheminées</span><span class="chip">Fontaines</span><span class="chip">Portails</span><span class="chip">Pierre</span><span class="chip">Bois</span><span class="chip">Décoration</span></div></div>`,
  projet:`<div class="fld"><label>Agence</label><input></div><div class="fld"><label>Programme</label><select><option>Bastide / mas</option><option>Villa</option><option>Château</option><option>Hôtel</option><option>Jardin</option></select></div><div class="fld"><label>Surface</label><input placeholder="m²"></div><div class="fld"><label>Démarrage</label><input type="month"></div><div class="fld full"><label>Plans / visuels</label><input type="file" multiple></div>`,
  echantillons:`<div class="fld"><label>Agence</label><input></div><div class="fld"><label>Adresse de livraison</label><input></div>`,
  catalogue:`<div class="fld"><label>Profession</label><select><option>Architecte</option><option>Architecte d'intérieur</option><option>Décorateur</option><option>Paysagiste</option><option>Entreprise</option></select></div><div class="fld"><label>Agence</label><input></div>`,
  devis:`<div class="fld"><label>Univers</label><select><option>Projet global</option><option>Cheminée</option><option>Fontaine</option><option>Portail</option><option>Pierre &amp; dallages</option><option>Bois &amp; parquets</option><option>Décoration</option></select></div><div class="fld"><label>Échéance</label><select><option>Moins de 3 mois</option><option>3 à 6 mois</option><option>6 à 12 mois</option></select></div>`,
  planche:`<div class="fld full"><label>Votre planche</label><input value="${lab('dem',cfg.dem).replace(/<[^>]+>/g,'')} · ${lab('piece',cfg.piece)} · ${lab('amb',cfg.amb)}" readonly></div>`
 }[type]||'';
 openModal(`<div class="form-box"><p class="kicker">Maison Brachet</p><h3 class="h-l" style="margin:14px 0 10px">${T[0]}</h3><p class="on-dark" style="margin-bottom:34px">${T[1]}</p><form class="form" data-form="${type}"><div class="fld"><label>Nom</label><input required></div><div class="fld"><label>Téléphone</label><input type="tel" required></div><div class="fld full"><label>E-mail</label><input type="email" required></div>${extra}<div class="fld full"><label>Message</label><textarea>${ref?(type==='devis'&&ref.includes('\n')?'Projet :\n':'Concerne : ')+ref:''}</textarea></div><div class="full"><button class="btn btn-fill" type="submit"><span>Envoyer</span></button></div></form><div class="form-ok">Merci. <b>Dans le site en ligne</b>, votre demande sera transmise à l'équipe Brachet, qui vous recontacte rapidement (04 90 78 28 12).</div></div>`);
}
document.addEventListener('submit',e=>{const f=e.target.closest('form[data-form]');if(!f)return;e.preventDefault();f.style.display='none';const ok=f.nextElementSibling;if(ok&&ok.classList.contains('form-ok'))ok.classList.add('show');});

/* global clicks */
document.addEventListener('click',e=>{
 const op=e.target.closest('[data-open]');if(op){e.preventDefault();openForm(op.dataset.open,op.dataset.ref);return;}
 if(e.target.closest('[data-film]'))openFilm();
 if(e.target.closest('[data-ai]'))openAI();
 const ch=e.target.closest('.chip');if(ch&&ch.parentElement.hasAttribute('data-chips'))$$('.chip',ch.parentElement).forEach(c=>c.classList.toggle('on',c===ch));
 const t=e.target.closest('[data-ti]');if(t)showT(+t.dataset.ti);
 const r=e.target.closest('[data-rc]');if(r){$$('[data-rc]').forEach(b=>b.classList.toggle('on',b===r));$$('#rgrid .case').forEach(c=>c.classList.toggle('hide',r.dataset.rc!=='Toutes'&&c.dataset.cat!==r.dataset.rc));}
 const st=e.target.closest('[data-st]');if(st){if(current==='parc'){e.preventDefault();tourGo(+st.dataset.st);window.scrollTo({top:0,behavior:'smooth'});}else{sessionStore.st=+st.dataset.st;if(st.dataset.go||st.closest('.zone')){location.hash='parc';}}}
 const lb=e.target.closest('[data-lb]');if(lb)openModal(`<div class="ph" style="height:84vh"><img src="${I(lb.dataset.lb)}" alt="" style="object-fit:contain;background:#000"></div>`);
});

/* ---------------- ASSISTANT ---------------- */
const ai=$('#ai'),aib=$('#ai-b');let aiOn=false,lead={};
function openAI(){ai.classList.add('open');$('#ai-fab').style.display='none';if(!aiOn){aiOn=true;flow('start');}}
function closeAI(){ai.classList.remove('open');$('#ai-fab').style.display='';}
$('#ai-close').onclick=closeAI;
function say(t,c='bot'){const m=document.createElement('div');m.className='msg '+c;m.innerHTML=t;aib.appendChild(m);aib.scrollTop=1e6;}
function typing(cb,ms=700){const t=document.createElement('div');t.className='msg bot';t.innerHTML='<span class="typing"><i></i><i></i><i></i></span>';aib.appendChild(t);aib.scrollTop=1e6;setTimeout(()=>{t.remove();cb()},ms);}
function opts(l){const o=document.createElement('div');o.className='opts';l.forEach(([x,n])=>{const b=document.createElement('button');b.className='aopt';b.textContent=x;b.onclick=()=>{o.remove();say(x,'me');n();};o.appendChild(b)});aib.appendChild(o);aib.scrollTop=1e6;}
const REC=()=>({cheminees:L("Pour un grand salon, je vous oriente vers nos <b>cheminées Louis XV en pierre</b> : elles s'accordent idéalement avec un parquet Versailles.","For a grand salon, I recommend our <b>Louis XV stone fireplaces</b>: they pair beautifully with Versailles parquet."),fontaines:L("Pour une cour ou un jardin, nos <b>fontaines de cour à vasque</b> et nos <b>bassins de domaine</b> sont les pièces les plus demandées.","For a courtyard or garden, our <b>courtyard fountains</b> and <b>estate basins</b> are the most sought-after pieces."),portails:L("Pour une entrée de propriété, l'ensemble <b>portail forgé + paire de piliers en pierre</b> crée l'effet le plus fort.","For a property entrance, a <b>wrought-iron gate with a pair of stone pillars</b> makes the strongest statement."),pierre:L("Pour une terrasse ou un sol, les <b>dalles de Bourgogne</b> et nos <b>tomettes</b> sont disponibles en lots homogènes.","For a terrace or floor, <b>Burgundy flagstones</b> and our <b>tomettes</b> are available in matching lots."),bois:L("Pour réchauffer une pièce, le <b>parquet Versailles en chêne ancien</b> est notre signature.","To warm a room, <b>antique oak Versailles parquet</b> is our signature."),decoration:L("Pour signer un jardin, pensez aux <b>vasques</b>, aux statues et aux auges sculptées.","To give a garden its signature, think <b>urns</b>, statues and carved troughs."),taille:L("Notre <b>atelier de taille</b> réalise fontaines, piliers et bassins sur plan, en vieille pierre ou en pierre neuve.","Our <b>carving workshop</b> makes fountains, pillars and basins to plan, in old or new stone.")});
function flow(s){({
 start:()=>typing(()=>{say(L("Bonjour, je suis <b>Brachet Conseil</b>. Je vous aide à trouver les matériaux et pièces anciennes adaptés à votre demeure. Quel est votre projet ?","Hello, I'm <b>Brachet Advisor</b>. I help you find the antique materials and pieces that suit your home. What is your project?"));opts([[L("Je rénove une demeure","I'm renovating a home"),()=>{lead.t=L('Rénovation','Renovation');flow('who')}],[L("Je construis","I'm building"),()=>{lead.t=L('Construction','New build');flow('who')}],[L("Je cherche une pièce précise","I'm looking for a specific piece"),()=>flow('univ')],[L("Visiter le parc","Visit the park"),()=>flow('visite')]]);}),
 who:()=>typing(()=>{say(L("Vous êtes…","You are…"));opts([[L("Propriétaire","Owner"),()=>{lead.w=L('Propriétaire','Owner');flow('univ')}],[L("Architecte / décorateur","Architect / decorator"),()=>{lead.w=L('Professionnel','Professional');flow('pro')}],[L("Hôtelier","Hotelier"),()=>{lead.w=L('Hôtelier','Hotelier');flow('univ')}]]);}),
 pro:()=>typing(()=>{say(L("Bienvenue. L'<b>Espace Pro</b> vous donne accès à la bibliothèque de matériaux, aux fiches techniques, aux disponibilités des lots et aux échantillons.","Welcome. The <b>Trade Area</b> gives you access to the materials library, data sheets, lot availability and samples."));opts([[L("Ouvrir l'Espace Pro","Open the Trade Area"),()=>{location.hash='architectes';flow('end')}],[L("Continuer ici","Continue here"),()=>flow('univ')]]);}),
 univ:()=>typing(()=>{say(L("Quel univers vous intéresse en priorité ?","Which collection interests you most?"));opts(Object.entries(CATS).map(([k,c])=>[c.title,()=>{lead.u=k;flow('rec')}]));}),
 rec:()=>typing(()=>{say(REC()[lead.u]+` <a class="link" href="#${lead.u}" style="font-size:.58rem">${L("Voir l'univers","See the collection")}</a>`);setTimeout(()=>{say(L("Quelle est votre échéance ?","What is your timeframe?"));opts([[L("Moins de 3 mois","Less than 3 months"),()=>{lead.d=L('< 3 mois','< 3 months');flow('qual')}],[L("3 à 6 mois","3 to 6 months"),()=>{lead.d=L('3 à 6 mois','3–6 months');flow('qual')}],[L("Plus tard","Later"),()=>{lead.d=L('> 6 mois','> 6 months');flow('qual')}]]);},500)},900),
 qual:()=>typing(()=>{say(`${L('Récapitulatif','Summary')} : <b>${lead.t||L('Projet','Project')}</b>${lead.w?' · '+lead.w:''} · ${CATS[lead.u].title} · ${L('échéance','timeframe')} ${lead.d}.`,'bot card');say(L("Le plus efficace est d'en parler avec un conseiller. Que préférez-vous ?","The best next step is to talk to an advisor. What would you prefer?"));opts([[L("Visite du parc","A park visit"),()=>{openForm('visite',CATS[lead.u].title);flow('end')}],[L("Un devis","A quote"),()=>{openForm('devis',CATS[lead.u].title);flow('end')}],[L("Être rappelé","A call-back"),()=>flow('call')]]);}),
 visite:()=>typing(()=>{say(L("Le parc (8 000 m², Cavaillon) est ouvert du <b>lundi au vendredi</b>, 8h–12h / 13h30–17h30, et le <b>samedi matin</b>.","The park (8,000 m², Cavaillon) is open <b>Monday to Friday</b>, 8:00–12:00 / 13:30–17:30, and on <b>Saturday morning</b>."));opts([[L("Réserver une visite","Book a visit"),()=>{openForm('visite');flow('end')}],[L("Visite virtuelle","Virtual tour"),()=>{location.hash='parc';flow('end')}]]);}),
 call:()=>typing(()=>{say(L("Laissez-moi votre numéro : un conseiller vous rappelle (lun–ven, 8h–17h30).","Leave me your number: an advisor will call you back (Mon–Fri, 8:00–17:30)."));lead.wait=1;}),
 end:()=>typing(()=>{say(L("C'est noté. Vous pouvez aussi nous joindre au <b>04 90 78 28 12</b>. Puis-je vous aider pour autre chose ?","Noted. You can also reach us on <b>+33 4 90 78 28 12</b>. Can I help with anything else?"));opts([[L("Recommencer","Start again"),()=>{lead={};flow('start')}]]);})
})[s]();}
$('#ai-f').addEventListener('submit',e=>{e.preventDefault();const i=$('#ai-in'),v=i.value.trim();if(!v)return;i.value='';say(v,'me');
 if(lead.wait){lead.wait=0;typing(()=>say(L("Merci ! <b>Dans le site en ligne</b>, votre demande de rappel sera transmise immédiatement à l'équipe.","Thank you! <b>On the live site</b>, your call-back request will be sent to the team straight away.")));return;}
 const t=v.toLowerCase();
 if(/horaire|ouvert|visite|adresse|parc|hours|open|visit|address|park/.test(t))return flow('visite');
 if(/prix|tarif|devis|combien|price|cost|quote/.test(t))return typing(()=>{say(L("Chaque pièce ancienne est unique : les prix sont communiqués sur demande, selon la pièce, la quantité et la livraison.","Every antique piece is unique: prices are given on request, depending on the piece, quantity and delivery."));opts([[L("Demander un devis","Request a quote"),()=>{openForm('devis');flow('end')}]]);});
 if(/livr|étranger|international|transport|deliver|ship|abroad/.test(t))return typing(()=>say(L("Nous livrons en <b>France et à l'international</b>, du lundi au vendredi sur rendez-vous, y compris les pièces monumentales.","We deliver across <b>France and abroad</b>, Monday to Friday by appointment, including monumental pieces.")));
 if(/archi|pro|échantillon|fiche|sample|trade/.test(t))return flow('pro');
 const k=/chemin|firepl|mantel/.test(t)?'cheminees':/fontain|bassin|vasque|fountain|basin/.test(t)?'fontaines':/portail|grille|fer|gate|iron/.test(t)?'portails':/dalle|tomette|pierre|sol|carrel|évier|stone|floor|tile|flag/.test(t)?'pierre':/parquet|bois|poutre|chêne|wood|oak|beam/.test(t)?'bois':/statue|jarre|anduze|colonne|déco|urn|jar|column/.test(t)?'decoration':null;
 if(k){lead.u=k;return flow('rec');}
 typing(()=>{say(L("Je peux vous orienter par univers :","I can guide you by collection:"));opts(Object.entries(CATS).map(([k,c])=>[c.title,()=>{lead.u=k;flow('rec')}]));});
});

/* ---------------- LANGUAGE ---------------- */
function setLang(l){LANG=l;try{localStorage.setItem('brachet-lang',l)}catch(e){}
 aib.innerHTML='';aiOn=false;lead={};
 booking('#days','#slots','#book','#book-ok',true);booking('#days2','#slots2','#book2','#book2-ok',false);
 $$('.form-ok.show').forEach(x=>x.classList.remove('show'));
 route();i18nApply();if(current==='inspiration')renderBoard();
 $('#cap').innerHTML=`<small>${SHOTS[shot][2]}</small>${SHOTS[shot][3]}`;i18nNode($('#cap'));}
document.addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(b){e.preventDefault();if(b.dataset.lang!==LANG)setLang(b.dataset.lang);}});

/* ---------------- BOOT ---------------- */
route();i18nObs.observe(document.body,{childList:true,subtree:true});i18nApply();
setTimeout(()=>{$('#pre').classList.add('out');document.body.classList.remove('lock');setTimeout(()=>{$('#cine').classList.add('go');observe($('.page.on'));playShot(0);},400);},1900);
