import * as React from "react";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

export default function PCNav() {
  const [pToggle, onPToggle] = React.useState([false, false, false]);
  const [cToggle, onCToggle] = React.useState([false, false, false]);

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        p: { xs: 2, md: 2 },
        m: { xs: 1, md: 2 },
        borderColor: "blue",
        // border: { xs: 1 },
      }}
    >
      <Box
        sx={{
          pb: 3,
        }}
      >
        <Box
          sx={{
            pb: 3,
          }}
        >
          Physique
        </Box>
        {physics.map((course, courseIndex) => (
          <Box
            sx={{
              color: "blue",
              cursor: "pointer",
            }}
            key={courseIndex}
            onClick={() => {
              onPToggle(
                pToggle.map((value, i) => (i == courseIndex ? !value : false))
              );
            }}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              {pToggle[courseIndex] ? (
                <Box component={ExpandMoreIcon}></Box>
              ) : (
                <Box component={ChevronRightIcon}></Box>
              )}
              <Box>{course.subject}</Box>
            </Box>

            <Box
              sx={{
                display: pToggle[courseIndex] ? "flex" : "none",
                flexDirection: "column",
                p: 2,
                overflowX: "wrap",
                "& Link:active": {
                  color: "black",
                },
              }}
            >
              {course.articles.map((subtitle, subtitleIndex) => (
                <Box key={subtitleIndex} sx={{ mb: 1 }}>
                  <Link key={subtitleIndex} href={subtitle.page}>
                    {subtitle.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <Box
          sx={{
            pb: 3,
          }}
        >
          Chimie
        </Box>
        {chemistry.map((course, courseIndex) => (
          <Box
            sx={{
              color: "blue",
              cursor: "pointer",
            }}
            key={courseIndex}
            onClick={() => {
              onCToggle(
                cToggle.map((value, i) => (i == courseIndex ? !value : false))
              );
            }}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              {cToggle[courseIndex] ? (
                <Box component={ExpandMoreIcon}></Box>
              ) : (
                <Box component={ChevronRightIcon}></Box>
              )}
              <Box>{course.subject}</Box>
            </Box>

            <Box
              sx={{
                display: cToggle[courseIndex] ? "flex" : "none",
                flexDirection: "column",
                p: 2,
              }}
            >
              {course.articles.map((subtitle, subtitleIndex) => (
                <Box key={subtitleIndex} sx={{ mb: 1 }}>
                  <Link key={subtitleIndex} href={subtitle.page}>
                    {subtitle.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

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


