const chemistry = [
  {
    subject: "Cinetique Chimique",
    articles: [
      {
        name: "Rappel General",
        page: "/courses/cinetique-chimique/rappel",
      },
      {
        name: "Vitesse de la reaction",
        page: "/courses/cinetique-chimique/vitesse-de-la-reaction",
      },
      {
        name: "Facteurs Cinetiques",
        page: "/courses/cinetique-chimique/facteurs-cinetiques",
      },
    ],
  },
  {
    subject: "Acides et Bases",
    articles: [
      {
        name: "Autoprotolyse de l'eau pure",
        page: "/courses/acide-base/autoprotolyse",
      },
      {
        name: "Definitions",
        page: "/courses/acide-base/definitions",
      },
      {
        name: "Couple Acide/Base",
        page: "/courses/acide-base/couple-acide-base",
      },
      {
        name: "Titrage",
        page: "/courses/acide-base/titrage",
      },
    ],
  },
  {
    subject: "Organique",
    articles: [
      {
        name: "Fonctions oxygénées et azotés",
        page: "/courses/organique/fonctions-oa",
      },
      {
        name: "Les alcools",
        page: "/courses/organique/alcools",
      },
      {
        name: "acides carboxyliques",
        page: "/courses/organique/acide-carboxylique",
      },
    ],
  },
];
const physics = [
  {
    subject: "Cinematique",
    articles: [
      {
        name: "Généralités",
        page: "/courses/cinematique/cin-gen",
      },
      {
        name: "Mouvement Rectiligne Uniforme",
        page: "/courses/cinematique/mru",
      },
      {
        name: "Mouvement Rectiligne Uniformement Varié",
        page: "/courses/cinematique/mruv",
      },
      {
        name: "Mouvement Circulaire Uniforme",
        page: "/courses/cinematique/mcu",
      },
      {
        name: "Mouvement Sinisoidal",
        page: "/courses/cinematique/ms",
      },
    ],
  },
  {
    subject: "Dynamique",
    articles: [
      {
        name: "La Relation Fondementale de la Dynamique",
        page: "/courses/dynamique/rfd",
      },
      {
        name: "Chute Libre",
        page: "/courses/dynamique/chute",
      },
      {
        name: "Plan Incliné",
        page: "/courses/dynamique/plan",
      },
      {
        name: "Projectile",
        page: "/courses/dynamique/projectile",
      },
      {
        name: "Satellite",
        page: "/courses/dynamique/satellite",
      },
      {
        name: "Particule Chargée",
        page: "/courses/dynamique/particule-chargee",
      },
      {
        name: "Oscillateur",
        page: "/courses/dynamique/oscillateur",
      },
    ],
  },
  {
    subject: "Magnetisme",
    articles: [
      {
        name: "Champs Magnetique",
        page: "/courses/magnetisme/champ-magnetique",
      },
      {
        name: "Force de Lorentz",
        page: "/courses/magnetisme/fLorentz",
      },
      {
        name: "Force de Laplace",
        page: "/courses/magnetisme/fLaplace",
      },
      {
        name: "Induction",
        page: "/courses/magnetisme/induction",
      },
    ],
  },
];

const EXTERNAL_DATA_URL = "https://pcbacc.com";

export default function Page() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!--We manually set the two URLs we know already-->
    <url>
      <loc>https://iqar.store</loc>
    </url>
    <url>
      <loc>https://iqar.store/contactUs</loc>
    </url>
    ${physics
      .map(({ articles }) => {
        return articles
          .map(
            (course) =>
              `
      <url>
          <loc>${EXTERNAL_DATA_URL + course.page}</loc>
      </url>
    `
          )
          .join("");
      })
      .join("")}
      ${chemistry
        .map(({ articles }) => {
          return articles
            .map(
              (course) =>
                `
        <url>
            <loc>${EXTERNAL_DATA_URL + course.page}</loc>
        </url>
      `
            )
            .join("");
        })
        .join("")}
             
     
  </urlset>
`;
}
