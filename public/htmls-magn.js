import styles from "./htmls.module.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import Image from "next/image";

export const champMagnetique = (
  <MathJaxContext>
    <h1>1- Les aimants</h1>
    <p>
      Un aimant est un objet qui a la propriété d'attirer les petits matériaux
      en fer.
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec1.png" // Route of the image file
          width={240} // Desired size with correct aspect ratio
          height={90} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
    </p>
    <h3>Les types d'aliments du laboratoire</h3>
    <p>
      La forme habituelle des aimants est celle d'un barreau droit, d'une
      aiguille de boussole ou d'un fer à cheval (aimant en U) mais beaucoup
      d'autres formes se rencontrent comme les aimants cylindriques de
      haut-parleurs, par exemple.
    </p>
    <div>
      <Image
        src="/images/magnetisme/elec2.png" // Route of the image file
        width={621} // Desired size with correct aspect ratio
        height={183} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
    <h3>Les p&ocirc;les d'un aimant</h3>
    <p>
      Une aiguille aimantée, mobile autour d'un axe vertical qui est placée dans
      une région d'espace ne contenant ni aimant, ni circuit électrique ni masse
      ferreuse s'oriente, de telle fa&ccedil;on que l'une des ses extrémités
      pointe vers le nord alors que l'autre pointe vers le sud. Il en est de
      même si on suspend un barreau aimanté.
    </p>
    <p>Un aimant possède une dissymétrie ; il possède deux p&ocirc;les :</p>
    <p>
      - son extrémité dirigée naturellement vers le nord est appelée p&ocirc;le
      nord N (généralement de couleur rouge ou noir pour le distinguer du
      p&ocirc;le sud) - son extrémité dirigée naturellement vers le sud est
      appelée p&ocirc;le sud S.
    </p>
    <h4>L'aiment brise</h4>
    <p>
      On constate que si l'on vient à briser en deux un aimant ayant un
      p&ocirc;le sud et un p&ocirc;le nord.
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec3.png" // Route of the image file
          width={269} // Desired size with correct aspect ratio
          height={99} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      /
    </p>
    <p>
      Chacune des parties obtenues aura un p&ocirc;le sud et un p&ocirc;le nord.
    </p>
    <p>
      Couper un aimant en deux revient donc à fabriquer deux aimants plus
      petits. Il est donc impossible de séparer un p&ocirc;le nord d'un
      p&ocirc;le sud.
    </p>
    <h4>Interaction entre aiment</h4>
    <div className={styles.floatimg}>
      <Image
        src="/images/magnetisme/elec4.png" // Route of the image file
        width={292} // Desired size with correct aspect ratio
        height={165} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
    <p>
      Un aimant peut attirer un autre aimant. Toutefois cette attraction entre
      deux aimants ne s'exerce qu'entre deux p&ocirc;les de noms contraires : un
      p&ocirc;le sud attire un p&ocirc;le nord et réciproquement. Par contre
      deux p&ocirc;les de même noms se repoussent.
    </p>
    <h1>2- Champ magnétique</h1>
    <h3>2 - Mise en évidence du champ magnétique</h3>
    <p></p>
    <ul>
      Si l'on place un aimant à proximité d'une aiguille aimantée, on constate
      que:
      <li>L'aiguille prend une nouvelle direction.</li>
      <li>
        L'aiguille oriente son p&ocirc;le nord vers le p&ocirc;le sud de
        l'aimant.
      </li>
      <li>
        L'aiguille est attirée "plus ou moins fortement" selon sa position et la
      </li>
      <li>nature de l'aimant..</li>
    </ul>
    <p>
      L'aimant provoque une modification des propriétés de l'espace environnant
      (mouvement de particules chargées, aiguille aimantée). On dit que cet
      espace est le siège d'un <strong>champ magnétique.</strong>
    </p>
    <h3>Vecteur du champ magnétique</h3>
    <div className={styles.floatimg}>
      <Image
        src="/images/magnetisme/elec5.png" // Route of the image file
        width={286} // Desired size with correct aspect ratio
        height={150} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
    <p>
      Au voisinage de l'aimant, l'aiguille aimantée prend différentes
      orientations selon l'endroit o&ugrave; elle est placée.
    </p>
    <ul>
      Le champ magnétique en un point M de l'espace est une grandeur
      vectorielle, notée , il se caractérise donc par
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec6.png" // Route of the image file
          width={271} // Desired size with correct aspect ratio
          height={99} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <li>
        Direction: droite SN indiquée par une aiguille aimantée en ce point.
      </li>
      <li>
        Sens: Celui allant du p&ocirc;le sud S au p&ocirc;le nord N de
        l'aiguille aimantée.
      </li>
      <li>
        Norme: à mesurer à l'aide d'un Teslamètre ou à calculer. Unité: T (
        Tesla)
      </li>
    </ul>
    <p>
      - Superposition de champs magnétiques : D'une manière générale l'aiguille
      indique la résultante des champs qu'elle subit.
    </p>
    <p>
      Soient deux aimants notés 1 et 2. Soit B1 le champ magnétique créé par
      l'aimant 1 en un point M et soit B2 le champ magnétique créé par l'aimant
      2 en ce même point M.
    </p>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec7.png" // Route of the image file
          width={162} // Desired size with correct aspect ratio
          height={123} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Le champ résultant est égal à la somme vectorielle des champs créés par
      chaque source au point M.
      <MathJax inline={false}>
        {"\\( \\vec B = \\vec B_1 + \\vec B_2\\)"}
      </MathJax>{" "}
    </p>
    <h3>Les bobines</h3>
    <p>
      Une bobine est constituée par un fil électrique enroulé régulièrement sur
      un cylindre de section généralement circulaire. Les extrémités du fil
      constituent les deux bornes d'une bobine et les extrémités du cylindre ses
      deux faces.
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec8.png" // Route of the image file
          width={173} // Desired size with correct aspect ratio
          height={154} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec9.png" // Route of the image file
          width={183} // Desired size with correct aspect ratio
          height={136} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
    </p>
    <p>
      Une bobine est caractérisée par sa longueur , son rayon r et le nombre de
      ses spires N.
    </p>
    <li>
      - Si r , la bobine est dite plate ; elle est caractérisée par r et N (Fig
      1). Fig. 1
    </li>
    <li>
      -Si r la bobine est un soléno&iuml;de &laquo; infini &raquo; caractérisé
      par le nombre de spires par unité de longueur n=N/ (Fig 2).
    </li>
    <h2>3- Autres sources de champ magnétique</h2>
    <h3>Champ magnétique terrestre</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec10.png" // Route of the image file
          width={226} // Desired size with correct aspect ratio
          height={198} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Une aiguille aimantée mobile autour d'un axe vertical placée loin de tout
      autre aimant, de tout circuit électrique et de toute masse ferreuse
      s'oriente dans la direction géographique Nord-Sud. Cet axe Sud-Nord est
      appelé le méridien magnétique.
    </p>
    <p>
      L'aiguille est ainsi astreinte à occuper cette position parce qu'elle est
      soumise à un champ magnétique appelé champ magnétique terrestre.
    </p>
    <ul>
      Le champ magnétique terrestre est la résultante de deux composantes :
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec11.png" // Route of the image file
          width={281} // Desired size with correct aspect ratio
          height={166} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <li>
        B<sub>H</sub> : Composante horizontale du champ magnétique terrestre au
        point M.
      </li>
    </ul>
    <MathJax inline={false}>{"\\( B_H = 2.10^{-5}\\)"}</MathJax>{" "}
    <ul>
      <li>Bv : Composant du champ magnétique terrestre au point M</li>
      <li>
        Champ magnétique terrestre :
        <MathJax inline={false}>
          {"\\( \\vec B_0 = \\vec B_H + \\vec B_V\\)"}
        </MathJax>{" "}
      </li>
    </ul>
    <h3>Champ magnétique créé par un courant</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec12.png" // Route of the image file
          width={286} // Desired size with correct aspect ratio
          height={214} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Si le courant n'est pas établi dans le circuit, l'aiguille aimantée
      s'oriente suivant le champ magnétique terrestre. On place alors le fil
      parallèlement à l'aiguille.
    </p>
    <p>
      Lorsqu'on établit le courant dans le fil, on constate que l'aiguille dévie
      preuve qu'elle a subit un nouveau champ magnétique.
    </p>
    <p>
      Un fil parcouru par un courant électrique se comporte comme un aimant. Il
      crée un champ mag nétique .Le courant parcourant le circuit électrique
      crée un champ magnétique propre qui vient modifier localement le champ
      magnétique total. Le vecteur champ magnétique créé par un courant dépend
      de l'intensité de ce courant et de son sens mais aussi de la forme du
      circuit.
    </p>
    <h2>4 - Spectres magnétiques</h2>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec13.png" // Route of the image file
          width={181} // Desired size with correct aspect ratio
          height={185} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Si l'on saupoudre de limaille de fer un aimant sur lequel nous avons
      disposé une feuille, on constate que les grains se disposent de
      fa&ccedil;on bien précise suivant des lignes appelées lignes de champ.
      L'ensemble des lignes constituent le spectre Magnétique.
    </p>
    <h3>Spectre d'un barreau aimanté</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec14.png" // Route of the image file
          width={235} // Desired size with correct aspect ratio
          height={184} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Ces lignes existent dans tout l'espace entourant l'aimant et non pas
      simplement sur le plan formé par la feuille. La ligne de champ est une
      courbe tangente en tout point au vecteur B. De plus, si l'on place une
      boussole dans cette zone de lignes de champ nous nous apercevons qu'elles
      sont orientées.
    </p>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec15.png" // Route of the image file
          width={320} // Desired size with correct aspect ratio
          height={151} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Par convention nous dirons que ces lignes de champ sortent par le
      p&ocirc;le nord pour entrer par le p&ocirc;le sud. Nous supposerons
      également que chaque ligne de champ se referme à l'intérieur de l'aimant
      de fa&ccedil;on de compléter une boucle. L'ensemble de ces lignes de champ
      représenté sur un plan est communément appelé :{" "}
      <strong>Spectre magnétique.</strong>
    </p>
    <h3>Spectre d'un aimant en U</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec16.png" // Route of the image file
          width={186} // Desired size with correct aspect ratio
          height={266} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Les ligne de champ sont parallèles entre les branches de l'aimant, on dit
      que le champ est uniforme.Le champ magnétique est plus intense près des
      p&ocirc;les.
    </p>
    <h3>Spectre d'une bobine</h3>
    <div className={styles.floatimg}>
      <Image
        src="/images/magnetisme/elec17.png" // Route of the image file
        width={291} // Desired size with correct aspect ratio
        height={132} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
    <h2>5 - Champ magnétique créé au centre d'un soléno&iuml;de</h2>
    <p>
      - Les lignes de champ sont parallèles (les vecteurs champs B sont
      colinéaires et de même sens) pas très proche des extrémités. - Le champ
      magnétique conserve la même valeur. D'après les deux remarques
      précédentes, nous pouvons affirmer que: Dans un soléno&iuml;de long, le
      vecteur champ magnétique B est constant. On dit que le champ magnétique
      est uniforme à l'intérieur du soléno&iuml;de.
    </p>
    <div>
      <Image
        src="/images/magnetisme/elec18.png" // Route of the image file
        width={502} // Desired size with correct aspect ratio
        height={139} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
    <ul>
      Les caractéristiques du champ magnétique à l'intérieur du soléno&iuml;de
      <li>Direction parallèle à l'axe du soléno&iuml;de</li>
      <li>
        Intensite :<MathJax inline={false}>{"\\(  B = \\mu_0nl\\)"}</MathJax>{" "}
        <MathJax inline={false}>{"\\( n = \\frac NL\\)"}</MathJax>{" "}
        <MathJax inline={false}>{"\\( \\mu_0 = 4\\pi .10^{-7}\\)"}</MathJax>{" "}
        <ul>
          Avec :
          <li>
            &mu;<sub>0</sub> : perméabilité magnétique du vide
          </li>
          <li>N : nombre de spires</li>
          <li>l: longueur du solenoide</li>
          <li>n: nombre de spire par mètre</li>
        </ul>
      </li>
    </ul>
    <p>
      Le sens peut être obtenu par l'une des règles mnémotechniques suivantes :
      Règle de la main droite : On place la main droite sur une spire de telle
      manière que le courant sort par les bouts des doigts que la paume soit
      tournée vers le centre de la spire alors le pouce indique le sens B.
    </p>
  </MathJaxContext>
);

export const fLorentz = (
  <MathJaxContext>
    <h1>La Force de Lorenz</h1>
    <p>
      En un point ou le champ magnétique est représenté par un champ B une
      particule portant une charge électrique q, animée d'une vitesse V0 est
      soumise à une force magnétique F dite de Lorentz telle que:
    </p>
    <MathJax inline={false}>
      {"\\( \\vec F = q\\vec V\\wedge \\vec B\\)"}
    </MathJax>{" "}
    <h3>Les caractéristiques de la force de Lorentz:</h3>
    <p>
      Direction: perpendiculaire à V et à B donc au plan formé par les vecteurs
      qV et B Module:
    </p>
    <MathJax inline={false}>{"\\( F = |q|VB|\\sin (V, B)|\\)"}</MathJax>{" "}
    <p>
      Sene: tel que le trièdre (qV0, B, F) soit direct. Ce sens peut être
      déterminé par la règle suivante: Règle des trois doigts de la main droite
      Comme suit:
      <ul>
        <li>L'index dans le sens de qV0</li>
        <li>En même temps le majeur dans le sens de B</li>
        <li>Le pouce indiquera alors le sens de F</li>
      </ul>
    </p>
    <h3>Etude du mouvement</h3>
    <h4>Etude energetique</h4>
    <p>
      Lors d'un petit déplacement dl d'une particule chargée dans un champ
      magnétique uniforme B, le travail élémentaire de la force magnétique:
    </p>
    <MathJax inline={false}>
      {"\\( \\vec F = q\\vec V\\wedge \\vec B = |q|VB|\\sin (V, B)|\\)"}
    </MathJax>{" "}
    <p>
      Le travail de la force magnétique est nulle ( F perpendiculaire au
      déplacement)
    </p>
    <MathJax inline={false}>
      {"\\( \\Delta E_c = 0 \\Rightarrow E_c = E_c(O) \\Rightarrow V = V_0\\)"}
    </MathJax>{" "}
    <p>Le mouvement est donc uniforme</p>
    <div className={styles.floatimg}>
      <Image
        src="/images/magnetisme/elec19.png" // Route of the image file
        width={350} // Desired size with correct aspect ratio
        height={307} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
    <h4>Etude dynamique</h4>
    <p>
      D'après la RFD &agrav; :{" "}
      <MathJax inline={false}>{"\\( \\vec F = m\\vec a\\)"}</MathJax>{" "}
    </p>
    <ul>
      <li>Projection sur l'axe tangentiel (T)</li>
    </ul>
    <MathJax inline={false}>{"\\( ma_T = 0 \\Rightarrow a_T = 0\\)"}</MathJax>{" "}
    <p>Le mouvement est uniforme</p>
    <ul>
      <li>Projection sur l'axe normale (N)</li>
    </ul>
    <MathJax inline={false}>{"\\( \\vec F = m\\vec a_n\\)"}</MathJax>{" "}
    <MathJax inline={false}>
      {"\\( ma_n = |q|vB \\Rightarrow m\\frac {v^2}R = |q|V_0B \\)"}
    </MathJax>{" "}
    <MathJax inline={false}>{"\\( R = \\frac {mv_0^2}{|q|B} \\)"}</MathJax>{" "}
    <p>
      R: rayon de courbure de la trajectoire est constant donc la trajectoire
      est circulaire.
    </p>
    <p>
      Conclusion : le mouvement de la particule dans B est donc circulaire
      uniforme
    </p>
    <h2>Application de la force de Lorentz</h2>
    <p>
      Le spectrographe de masse C'est un appareil constitué de compartiment ou
      chambre qui permet une séparation isotopique. 1ere chambre : la chambre
      d'ionisation ou les atomes des isotopes à séparer, sont ionisés : on
      obtient des particules chargées de même q mais de masse m1 et m2
      différents.
    </p>
    <p>
      2eme chambre : la chambre d'accélération ou règne un champ électrique
      uniforme E qui permet d'accélérer les ions produits dans la 1 ère chambre.
      A la sortie de l'accélération, on obtient des particules chargées de même
      énergie cinétique Ec1 Ec2 mais de vitesses V1 et V2 différentes.
    </p>
    <p>
      3ème chambre : la chambre de déviation ou règne un champ magnétique
      uniforme B déviation permettant à la sortie la séparation des isotopes qui
      suivent des trajectoires circulaires différentes.
    </p>
    <p>
      4ème chambre : la chambre de collection, pour collecter les isotopes
      séparés.
    </p>
  </MathJaxContext>
);

export const fLaplace = (
  <MathJaxContext>
    <h1>
      Action d'un champ magnétique sur un conducteur parcouru par un courant
    </h1>
    <h2>1 - Mise en evidence</h2>
    <h3>Les rails de Laplace</h3>
    <p>
      Un conducteur mobile est placé sur deux rails horizontaux connectés à un
      accumulateur, et dans le champ magnétique d'un aimant en U.
    </p>
    <Image
      src="/images/magnetisme/elec21.png" // Route of the image file
      width={623} // Desired size with correct aspect ratio
      height={234} // Desired size with correct aspect ratio
      alt="Your Name"
    />
    <h3>Observations :</h3>
    <p>
      Lorsque le courant passe le conducteur mobile roule vers le gauche
      o&ugrave; vers la droite selon le Observations : sens du courant et selon
      le sens du champ magnétique.
    </p>
    <h3>Etude theorique</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec22.png" // Route of the image file
          width={249} // Desired size with correct aspect ratio
          height={368} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      D'après un modèle simplifié on peut considérer que le courant électrique
      est constitué d'innombrables électrons qui se déplacent tous avec la même
      vitesse V dans le sens opposé au sens conventionnel du courant. Ces
      électrons se déplacent donc dans un champ magnétique B V de sorte que
      chaque électron est soumis à une même force de Lorentz. Comme les
      électrons sont retenus par les atomes du réseau cristallin constituant le
      conducteur, c'est finalement le conducteur tout entier qui est sollicité
      par une force appelée force électromagnétique de Laplace. Cette force est
      égale à la résultante de toutes les innombrables forces de Lorentz qui
      s'exercent sur les électrons qui constituent le courant électrique.
    </p>
    <p></p>
    <p></p>
    <h2>2- la loi de Laplace</h2>
    <p>
      Une portion rectiligne de conducteur de longueur placé dans un champ
      magnétique et parcouru par un courant I, est soumis à des forces réparties
      d'origine électromagnétique équivalentes à une force unique dite force de
      Laplace appliquée au milieu de cette portion et donnée par la relation:
    </p>
    <MathJax inline={false}>
      {"\\( \\vec F = I\\vec l\\wedge \\vec B = IlB|\\sin (l, B)|\\)"}
    </MathJax>{" "}
    <h3>Les caractéristiques de la force de Laplace</h3>
    <ul>
      <li>
        Direction : perpendiculaire au plan formé par le conducteur l et B.
      </li>
      <li>
        Point d'application : milieu de la portion du conducteur placé dans le
        champs magnétique
      </li>
      <li>
        Norme :{" "}
        <MathJax inline={false}>{"\\(  F = IlB|\\sin (\\alpha)|\\)"}</MathJax>{" "}
        <ul>
          <li>O&ugrave; I est l'intensité du courant courant (A)</li>
          <li>
            B est l'intensité (la norme) du vecteur champ magnétique (en T) est
            &alpha; l'angle formé par B et l.
          </li>
        </ul>
      </li>
      <li>
        <div className={styles.floatimg}>
          <Image
            src="/images/magnetisme/elec23.png" // Route of the image file
            width={212} // Desired size with correct aspect ratio
            height={164} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
        Sens : tel que le trièdre (l, B, F) soit direct. Ce sens peut être
        déterminée par l'une des règles suivantes: Règle des trois doigts de la
        main droite: On dispose les 3 doigts de la main droite comme suit :
        <li>L'index dans le sens du courant</li>
        <li>Le majeur orienté dans le sens de B.</li>
        <li>Le pouce indiquera le sens de F</li>
      </li>
    </ul>
    <p></p>
  </MathJaxContext>
);

export const induction = (
  <MathJaxContext>
    <h1>Induction magnétique</h1>
    <h2>1- Mise en evidence</h2>
    <h3>a- Experience</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec24.png" // Route of the image file
          width={416} // Desired size with correct aspect ratio
          height={159} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      On approche un aimant d'une bobine reliée à galvanomètre ( ampèremètre
      très sensible). On constate qu'un courant circule dans la bobine pendant
      la durée du mouvement de l'aimant. Quand on retire l'aimant, on constate
      que le courant circule dans le sens opposé. Lorsqu'on arrête le mouvement
      de l'aimant, le galvanomètre ne décèle aucun courant dans la bobine.
    </p>
    <h3>b- Definition</h3>
    <p>
      Les phénomènes observés s'appellent induction électromagnétiques. Le
      courant observé s'appelle courant induit. Son intensité généralement
      variable dans le temps est noté i. La bobine dans laquelle le courant
      induit circule est la bobine induite. L'aimant est appelé inducteur. De
      même que tout courant est d&ucirc; à une tension, le courant induit est
      d&ucirc; à une tension induite apple force électromotrice induite f.e.m
      induite note e.
    </p>
    <h3>c- Conclusion</h3>
    <ul>
      On observe l'apparition d'un courant induit dans un circuit fermé si :
      <li>
        L'intensité ou la direction d'un champ magnétique à travers ce circuit
        varié;
      </li>
      <li>La surface délimitée par le circuit traverse par le champ varie</li>
    </ul>
    <h2>2- Interpretation</h2>
    <h3>a- Notion du flux magnétique</h3>
    <p>
      La conclusion précédente nous suggère que le phénomène de l'induction
      électromagnétique se manifeste dans un circuit dès que le nombre de lignes
      de champ à travers ce circuit varie. On définit une grandeur physique
      appelée flux magnétique &Phi; qui mesure le nombre ou la &laquo; quantité
      &raquo; de lignes de champ passant à travers une surface fermée. Le flux
      magnétique &Phi; est proportionnel à B et à S. Si la surface S est
      disposée perpendiculairement aux lignes de champ, alors
      <MathJax inline={false}>{"\\[  \\Phi = \\vec B. \\vec S\\]"}</MathJax>
      (l'unité de &Phi; : le &laquo;Weber &raquo;). Si la surface n'est pas
      perpendiculaire aux lignes de champ, alors &Phi;&lt; BS. Afin d'exprimer
      ce flux, on définit la normale
      <MathJax inline={true}>{"\\(\\vec n\\)"}</MathJax>à la surface S telle que
      S = S. <MathJax inline={true}>{"\\(\\vec n\\)"}</MathJax>{" "}
    </p>
    <h3>b - Définition du vecteur normale à la surface</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec25.png" // Route of the image file
          width={382} // Desired size with correct aspect ratio
          height={200} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Tout d'abord on choisit un sens positif sur le contour de la surface. On
      définit la normale à la surface S par le vecteur n dont les
      caractéristiques sont:
      <li> Point d'application : le centre de la surface</li>
      <li> direction : perpendiculaire à la surface</li>
      <li>
        sens : déterminé par la règle de la main droite : alors que la paume est
        orientée vers la surface ; les doigts courbés indiquent le sens + et le
        pouce indique le sens de n
      </li>
    </p>
    <h3>c - Définition du flux magnétique</h3>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/magnetisme/elec26.png" // Route of the image file
          width={460} // Desired size with correct aspect ratio
          height={170} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      Le flux d'un champ magnétique B à travers une surface S est défini par le
      produit scalaire de B par .
    </p>
    <MathJax inline={true}>{"\\( \\Phi = B.S\\cos (\\alpha)\\)"}</MathJax>{" "}
    <p>&alpha; : l'angle entre B et n</p>
    <p>&Phi;(Wb) ; B (T) ; S (m2).</p>
    <ul>
      <li>B parallele à S : &Phi; = BS</li>
      <li>
        B perpendiculaire à S : = 0 car aucune ligne de champ ne traverse S.
      </li>
    </ul>
    <p>
      Remarque : Si la surface est délimitée par un circuit bobiné comportant N
      spires, la surface totale vaut N fois la surface S d'une spire, et :
      <MathJax inline={false}>{"\\[ \\Phi = NB.S\\cos (\\alpha)\\]"}</MathJax>{" "}
    </p>
    <h3>d- Apparition du phénomène de l'induction électromagnétique</h3>
    <p>
      Le phénomène de l'induction électromagnétique n'appara&icirc;t dans un
      circuit électrique que si le flux magnétique à travers ce circuit varie.
      Si le circuit est ouvert le phénomène se manifeste par une f.é.m.
      apparaissant aux bornes du circuit. Si le circuit est fermé, il se
      manifeste par un courant induit circulant dans le circuit.
    </p>
    <h2>3- Sens du courant induit: loi de Lenz</h2>
    <h3>a- Loi de Lenz</h3>
    <p>
      Le courant induit circule dans un sens tel qu'il tente de s'opposer à la
      cause qui lui donne naissance. Cette cause est évidemment la variation du
      flux inducteur. Donc: Le courant induit circule dans un sens tel qu'il
      tente de s'opposer à la variation du flux inducteur qui lui donne
      naissance.
    </p>
    <h2>4- La force électromotrice induite</h2>
    <h3>a- La force électromotrice moyenne et instantanée</h3>
    <p>
      La f.é.m. induite moyenne dans un circuit est égale à l'opposé de la
      variation du flux inducteur à travers ce circuit par unité de temps :
    </p>
    <MathJax inline={false}>
      {"\\[ e_m = -\\frac {\\Delta \\Phi}{\\Delta t}\\]"}
    </MathJax>{" "}
    <p>
      La f.é.m. induite (instantanée) dans un circuit est égale à l'opposé de la
      dérivée par rapport au temps du flux inducteur à travers ce circuit.
    </p>
    <MathJax inline={false}>{"\\[ e_m = -\\frac {d \\Phi}{d t}\\]"}</MathJax>{" "}
    <h3>b- Expression de la tension aux bornes d'un circuit induit</h3>
    <p>
      On oriente arbitrairement de A vers B une portion de circuit AB ; de f.e.m
      e et de résistance totale r. La tension u AB entre les bornes A et B, en
      considérant le sens positif choisi, s'écrit :
    </p>
    <MathJax inline={false}>{"\\[ U_{AB} = ri - e\\]"}</MathJax> <p></p>
    <h3>c- Intensité du courant</h3>
    <p>
      Si le circuit est fermé et de résistance totale r, l'expression de
      l'intensité du courant induit est :
    </p>
    <MathJax inline={false}>{"\\[ i = \\frac er\\]"}</MathJax> <p></p>
  </MathJaxContext>
);
