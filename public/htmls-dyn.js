import { MathJax, MathJaxContext } from "better-react-mathjax";
import Image from "next/image";
import styles from "./htmls.module.css";

export const rfd = (
  <div className={styles.articleContainer}>
    <MathJaxContext>
      <h2>Energie cinétique d'un système</h2>
      <h3>Définition de l'énergie cinétique</h3>
      <p>
        Dans un référentiel donné, l'énergie cinétique Ec d'un système s'exprime
        par la relation :
      </p>
      <MathJax>{"\\[E_c=mV^2\\]"}</MathJax>
      <ul>
        Avec :<li>Ec: l'energie cinetique</li>
        <li>m : la masse du système en kilogrammes (kg)</li>
        <li>
          v : la vitesse du système en mètre par seconde (m/s
          <sup>2</sup>)
        </li>
      </ul>
      <h3>Travail d'une force</h3>
      <p>
        Le travail d'une force est une grandeur physique permettant d'évaluer
        l'effet de cette force sur l'énergie cinétique d'un système au cours
        d'un mouvement. Le travail W<sub>AB</sub>(F) d'une force constante F
        dont le point d'application se déplace de A vers B s'exprime par la
        relation scalaire :
      </p>
      <MathJax>
        {"\\[W_{AB}(\\vec F)=\\vec F. \\vec{AB}=F.AB\\cos(\\alpha)\\]"}
      </MathJax>
      <ul>
        Avec :<li>F: la valeur de la force en (N)</li>
        <li>AB: le déplacement en mètre (m)</li>
        <li>
          &alpha; : l'angle entre la direction de la force F et le déplacement
          AB.
        </li>
      </ul>
      <h3>Théorème de l'énergie cinétique</h3>
      <p>
        Dans un référentiel galiléen tel que le référentiel terrestre, la
        variation de l'énergie cinétique d'un système de masse m entre un point
        A et un point B est égale à la somme des travaux des forces F agissant
        sur le système :
      </p>
      <MathJax>
        {
          "\\[\\Delta E_c(A \\rightarrow B) = E_c(B) - E_c(A) = \\Sigma W_{AB}(\\vec F)\\]"
        }
      </MathJax>
      <h2>L'énergie potentielle de pesanteur d'un système</h2>
      <h3>Définition de l'énergie potentielle de pesanteur</h3>
      <p>
        Dans un référentiel donné, en orientant l'axe des altitudes vers le
        haut, l'énergie potentielle de pesanteur Epp d'un système s'exprime par
        la relation :
      </p>
      <MathJax>{"\\[E_{PP}=mgz\\]"}</MathJax>
      <ul>
        Avec :<li>m: La masse du système en kilogrammes (kg)</li>
        <li>g: l'intensité du champ de pesanteur (N/kg)</li>
        <li>z: l'altitude par rapport à la référence en mètre (m)</li>
      </ul>
      <h3>Travail d'une force conservative : l'exemple du poids</h3>
      <p>
        Tout corps de masse m, placé dans un champ de pesanteur uniforme g est
        soumis a son propre poids P. Lorsque l'objet se déplace d'un point A à
        un point B, le travail du poids s'exprime par la relation :
      </p>
      <p>
        <MathJax>{"\\[W_{AB}=\\pm mgh\\]"}</MathJax>
        <ul>
          Avec:
          <li>
            <MathJax inline={true}>{"\\(\\pm \\)"}</MathJax>: est positif lors
            d'une descente et négatif lors d'une montée
          </li>
          <li>h: l'hauteur entre A et B.</li>
        </ul>
      </p>
      <p>
        Le travail du poids ne dépend que des altitudes de départ et d'arrivée,
        il ne dépend pas du chemin suivi par le système. On parle dans ce cas de
        force conservative.
      </p>
      <h3>
        Travail d'une force non conservative : exemple de la force de frottement
      </h3>
      <p>
        Lors d'un déplacement rectiligne de longueur AB, le travail de la force
        de frottement WAB(f) est donné par la relation :
      </p>
      <p>
        La force de frottement s'opposant généralement au mouvement du système,
        le travail s'écrit alors :
      </p>
      <MathJax>{"\\[W_{AB}(f)=f.AB \\cos (180^ \\circ) = -f.AB\\]"}</MathJax>
      <p>Ce travail est résistant.</p>
      <p>
        Le travail de la force de frottement dépend du chemin suivi. On parle
        dans ce cas de force non conservative.
      </p>
      <h2>L'énergie mécanique d'un système</h2>
      <h3>Définition de l'énergie mécanique</h3>
      <p>
        Dans un référentiel donné, on associe à un système plongé dans un champ
        de pesanteur une énergie mécanique notée Em telle que :
      </p>
      <MathJax>{"\\[E_{m}=E_c + E_{pp}\\]"}</MathJax>
      <ul>
        Avec :<li>Em : l'énergie mécanique en J.</li>
        <li>Epp: l'énergie potentielle de pesanteur</li>
      </ul>
      <h3>Conservation de l'énergie mécanique</h3>
      <p>
        Lorsqu'un système est soumis uniquement à des forces conservatives ou à
        des forces dont le travail est nul, alors son énergie mécanique se
        conserve. On peut écrire :
      </p>
      <MathJax>
        {
          "\\[E_{m}(A \\rightarrow B)=E_m(B) - E_m(A) = 0 \\Longleftrightarrow E_m(B) = E_m(A)\\]"
        }
      </MathJax>
      <p>
        De plus comme :
        <MathJax inline={true}>
          {"\\(  E_{m}(A \\rightarrow B)=E_m(B) - E_m(A)  \\)"}
        </MathJax>
        . Dans le cas o&ugrave; l'énergie mécanique d'un système se conserve,
        alors toute l'énergie cinétique perdue est convertie en énergie
        potentielle et inversement.
      </p>
      <h3>Non conservation de l'énergie mécanique.</h3>
      <p>
        Lorsqu'un système est soumis à des forces non conservatives qui
        travaillent, alors son énergie mécanique ne se conserve pas. On peut
        écrire :
      </p>
      <MathJax>
        {
          "\\[  E_{m}(A \\rightarrow B)=E_m(B) - E_m(A) =\\Sigma W_{AB}( \\vec F_{nc})  \\]"
        }
      </MathJax>
      <ul>
        Avec
        <li>
          <MathJax inline={true}>
            {"\\(\\Sigma W_{AB}( \\vec F_{nc})  \\)"}
          </MathJax>
          : la somme des travaux des forces non conservatives s'appliquant sur
          le système (frottements par exemple)
        </li>
      </ul>
      <h2>Les lois de Newtons</h2>
      <p>1 - Forces intérieures et Forces extérieures</p>
      <ul>
        <li>Preciser le système à étudier</li>
        <li>
          Les forces extérieures sont dues à des interactions avec des objets
          qui n'appartiennent pas au système.
        </li>
        <li>
          Les forces intérieures sont dues à des interactions entre les
          constituants du système.
        </li>
      </ul>
      <p>3 - Referentiels galileans</p>
      <p>
        Un référentiel galiléen est un référentiel dans lequel la première loi
        de Newton ( le principe d'inertie) est vérifiée.
      </p>
      <p>
        Soit R un référentiel galiléen. Tout référentiel R' en translation
        rectiligne uniforme par rapport a R est considéré comme référentiel
        galiléen.
      </p>
      <p>4 - La première loi de Newton ( Principe d'inertie )</p>
      <p>
        <MathJax inline={true}>{"\\(\\Sigma \\vec F = 0  \\)"}</MathJax>: le
        système est isolé ou pseudo isolé. On peut en déduire que l'accélération
        = 0. et vitesse = constante.
      </p>
      <ul>
        <li>Le mobile est au repos ( immobile ) V = 0.</li>
        <li>
          Le centre de gravité du mobile est en mouvement rectiligne uniforme V
          =Cte et a = 0.
        </li>
      </ul>
      <p>
        Enoncé : Dans un référentiel galiléen un système ponctuel isolé ou
        pseudo isolé est soit immobile ou animé d'un mouvement rectiligne
        uniforme.
      </p>
      <p>NB</p>
      <p>
        Un système isolé mécaniquement n'est soumis à aucune force. Un solide
        pseudo-isolé mécaniquement est soumis à des forces qui se compensent à
        chaque instant.
      </p>
      <p>La deuxième loi de Newton ( Relation fondamentale de la dynamique )</p>
      <MathJax inline={false}>{"\\[\\Sigma \\vec F = m \\vec a  \\]"}</MathJax>
      <p>
        Enoncé : dans un référentiel galiléen, la somme vectorielle des forces
        extérieures exercées sur un système ponctuel est égale au produit de la
        masse du système par le vecteur accélération a de son centre de gravité.
      </p>
      <p>
        Lorsque{" "}
        <MathJax inline={true}>
          {"\\(\\Sigma \\vec F = m \\vec a = 0. \\)"}
        </MathJax>
        On trouve le principe d'inertie.
      </p>
      <p>Remarque</p>
      <p>
        L'accélération du centre d'inertie G est toujours colinéaire a la somme
        des forces appliquées.
      </p>
      <p>5 - La troisième loi de Newton ( principe des actions réciproques )</p>
      <p>
        Enonce : si un systeme A exerce une force FA/B sur un système B alors le
        système exerce aussi sur le système A une force FB/A ayant même droite
        d'action, même valeur, même direction mais sens opposé et donc :
      </p>
      <MathJax inline={false}>
        {"\\[ \\vec F_{A/B} = \\vec F_{B/A} \\]"}
      </MathJax>
      <h4>Exploiter la relation fondamentale de la dynamique</h4>
      <p>
        En général, la RFD sert à déterminer le mouvement d'un mobile
        connaissant les forces qui s'appliquent sur ce mobile.
      </p>
      <p>
        Pour résoudre un problème de dynamique en utilisant la RFD la méthode
        est toujours la même :
      </p>
      <ul>
        <li>
          Faire un schéma précis et suffisamment grand pour y représenter toutes
          les forces dont les caractéristiques bien connues.
        </li>
        <li>Ecrire la relation vectorielle de la RFD : F=ma</li>
        <li>Projeter chacune de ces forces sur les axes du repère.</li>
      </ul>
    </MathJaxContext>
  </div>
);

export const chute = (
  <div className={styles.articleContainer}>
    <MathJaxContext>
      <h3>Chute libre</h3>
      <p>
        La chute libre est le mouvement vertical effectué par un objet lorsqu'il
        ne subit que l'effet de la force gravitationnelle.
      </p>
      <p>
        Si on néglige le frottement de l'air, un objet qui effectue un mouvement
        de chute libre subit toujours une accélération de 9.8m/s
        <sup>2</sup> orientée vers le sol.
      </p>
      <p>
        Ceci signifie que si on laisse tomber un petit pois et une boule de
        quilles du sommet du même immeuble, les deux objets accéléreront au même
        taux et arriveront en bas de l'édifice en même temps (si on néglige le{" "}
        frottement , qui ralentira la chute de tout objet).
      </p>
      <p>Important!</p>
      <p>
        L'accélération gravitationnelle terrestre est différente de
        l'accélération gravitationnelle sur les autres astres du système
        solaire. La grandeur de l'accélération dépend, entre autres, de la masse
        de l'astre. La Lune, qui est 81 fois plus petite que la Terre, a une
        accélération gravitationnelle six fois plus petite que sur la Terre,
        soit g = 1,6m/s<sup>2</sup>.
      </p>
      <p>Application de la RFD</p>
      <div className={styles.floatimg}>
        <Image
          src="/images/dynamique/chute.png" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <p>
        <MathJax inline={false}>{"\\[ \\vec p = m \\vec a \\]"}</MathJax>
      </p>
      <p>Projection sur l'axe z</p>
      <MathJax inline={false}>{"\\[ -p = ma \\]"}</MathJax>
      <MathJax inline={false}>{"\\[ a = -g = 9.8m/s^2 \\]"}</MathJax>
      <p>le mouvement est rectiligne uniformement varié. L'équation horaire</p>
      <p>
        <MathJax inline={false}>{"\\[ v = at + v_0 = 9.8t \\]"}</MathJax>
        <MathJax inline={false}>
          {"\\[ y = \\frac {1}{2}at^2 + v_0t + y_0 = 4.9t^2 \\]"}
        </MathJax>
      </p>
    </MathJaxContext>
  </div>
);

export const plan = (
  <div className={styles.articleContainer}>
    <MathJaxContext>
      <h3>Mobile glissant sur un plan incliné</h3>
      <ul>
        Sur l'image ci-contre est l'inventeur de forces:
        <div className={styles.floatimg}>
          <Image
            src="/images/dynamique/plan.png" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
        <li>N: la réaction normale du plan</li>
        <li>f: le frottement entre le mobile et le plan</li>
        <li>mg: le poids</li>
        <li>
          mgsin&Theta;: la projection du poids sur l'axe du mouvement ( x
          orienté suivant le sens du mouvement )
        </li>
        <li>
          mgcos&Theta;: la projection du poids sur l'axe perpendiculaire a l'axe
          du mouvement (y oriente vers le haut)
        </li>
      </ul>
      <p>Application de la RFD</p>
      <MathJax inline={false}>
        {"\\[ \\vec p + \\vec f + \\vec N = m \\vec a \\]"}
      </MathJax>
      <p>Projection sur x</p>
      <MathJax inline={false}>{"\\[ mg \\sin(\\Theta) - f = ma_x \\]"}</MathJax>
      <MathJax inline={false}>{"\\[N - mg \\cos(\\Theta) = 0 \\]"}</MathJax>
      <p>Il y a pas de mvt sur cet axe</p>
      <MathJax inline={false}>
        {"\\[a = g \\sin(\\Theta) - \\frac fm \\]"}
      </MathJax>
      <p>Le mouvement est uniformement varié sur l'axe x, L'équation horaire</p>
      <MathJax inline={false}>
        {"\\[v = at + v_0 = (g \\sin(\\Theta) - \\frac fm)t + v_0\\]"}
      </MathJax>
      <MathJax inline={false}>
        {
          "\\[x = \\frac 12 at^2 + v_0t + x_0 = \\frac 12 (g \\sin(\\Theta) - \\frac fm)t^2 + v_0t + x_0\\]"
        }
      </MathJax>
    </MathJaxContext>
  </div>
);

export const projectile = (
  <div className={styles.articleContainer}>
    <MathJaxContext>
      <h3>Mouvement d'un projectile</h3>
      <p>
        Les projectiles sont des objets lancés qui subissent l'effet de la
        gravité, ce qui signifie que l'objet se déplace simultanément à
        l'horizontale et à la verticale. Une balle de golf frappée par un joueur
        suit le mouvement de projectile.
        <div className={styles.floatimg}>
          <Image
            src="/images/dynamique/projectile.png" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </p>
      <p>
        Le mouvement de projectile se décompose en deux parties. Les deux
        mouvements (horizontal et vertical) effectués par le projectile sont
        complètement indépendants l'un de l'autre.
      </p>
      <p>
        On appelle portée D la distance maximale parcourue sur l'axe horizontal,
        le projectile étant projeté à une altitude z. Le projectile touche le
        sol au point P (xP ; yP = 0).
      </p>
      <p>
        La flèche H correspond à l'altitude la plus élevée atteinte par le
        projectile F ( Vy=0 ).
      </p>
      <p>Application de la RFD</p>
      <p>Le mvt est indépendant sur les deux axes.</p>
      <p>conditions initiales:</p>
      <p>
        <MathJax inline={false}>{"\\[M_0 (x_0 = 0, y_0 = 0)\\]"}</MathJax>
        <MathJax inline={false}>
          {
            "\\[v_0 (v_{0x} = v_0 \\cos(\\alpha), v_{0y} = v_0 \\sin(\\alpha))\\]"
          }
        </MathJax>
      </p>
      <p>RFD</p>
      <MathJax inline={false}>{"\\[\\vec p  = m \\vec a\\]"}</MathJax>
      <p>Projection sur x</p>
      <MathJax inline={false}>
        {"\\[ 0 = ma_x \\Rightarrow a_x = 0 \\]"}
      </MathJax>
      <p>Projection sur y</p>
      <MathJax inline={false}>
        {"\\[ -mg = ma_y \\Rightarrow a_y = -g = -9.8m/s^2 \\]"}
      </MathJax>
      <p>Les vitesses</p>
      <MathJax inline={false}>
        {"\\[ v_x = v_0x = v_0 \\cos(\\alpha) \\]"}
      </MathJax>
      <MathJax inline={false}>
        {"\\[ v_y =at + v_{0y} =-9.8t + v_0 \\sin(\\alpha) \\]"}
      </MathJax>
      <p>Les positions</p>
      <MathJax inline={false}>
        {"\\[ x = v_{0x}t + x_0 =v_0 \\cos(\\alpha)t + x_0 \\]"}
      </MathJax>
      <MathJax inline={false}>
        {
          "\\[ y =\\frac 12 at^2 + v_{0y}t + y_0 =-4.9t^2 + v_{0y} \\sin(\\alpha)t + y_0 \\]"
        }
      </MathJax>
      <p>L'equation du trajectoire</p>
      <MathJax inline={false}>
        {"\\[ t = \\frac {x-x_0}{v_0 \\cos(\\alpha)} \\]"}
      </MathJax>
      <p>En remplaçant</p>
      <MathJax inline={false}>
        {
          "\\[ y =-4.9 (\\frac {x-x_0}{v_0 \\cos(\\alpha)})^2 + v_0\\sin (\\alpha)\\frac {x-x_0}{v_0 \\cos(\\alpha)} + y_0 \\]"
        }
      </MathJax>
      <p>La portée D = xp (y = 0)</p>
      <p>y=0</p>
      <MathJax inline={false}>
        {
          "\\[-4.9 (\\frac {x_p-x_0}{v_0 \\cos(\\alpha)})^2 + v_0\\sin (\\alpha)\\frac {x_p-x_0}{v_0 \\cos(\\alpha)} + y_0 =0 \\]"
        }
      </MathJax>
      <p>La flèche H = yf ( Vy=0)</p>
      <p>
        v<sub>y</sub> = 0
      </p>
      <MathJax inline={false}>
        {"\\[ -9.8t + v_0 \\sin(\\alpha) = 0 \\]"}
      </MathJax>
      <MathJax inline={false}>
        {"\\[ t = \\frac {v_0 \\sin(\\alpha)}{-9.8} \\]"}
      </MathJax>
      <p>En remplaçant en y :</p>
      <MathJax inline={false}>
        {"\\[ y =-4.9t^2 + v_{0y} \\sin(\\alpha)t + y_0 \\]"}
      </MathJax>
      <p>et on aura calculé la flèche.</p>
    </MathJaxContext>
  </div>
);

export const satellite = (
  <div className={styles.articleContainer}>
    <MathJaxContext>
      <h3>Mouvement d'un satellite autour de la terre</h3>
      <p>
        Pour étudier le mouvement d'un satellite autour de la Terre, on choisit
        le référentiel géocentrique galiléen et le système satellite est
        assimilé au point matériel S.
        <div className={styles.floatimg}>
          <Image
            src="/images/dynamique/satellite.png" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </p>
      <p>La force de gravitation universelle</p>
      <p>
        La loi de la gravitation découverte par Isaac Newton permet de décrire
        par une même expression l'attraction entre deux corps massiques.
      </p>
      <p>
        Deux corps de masse m<sub>A</sub> et m<sub>B</sub> , dont les centres de
        masse sont séparés par une distance AB, exercent l'un sur l'autre des
        forces attractives F<sub>A/B</sub> et F<sub>B/A</sub> de même direction,
        de sens opposés, et de même valeur :
      </p>
      <MathJax inline={false}>
        {"\\[\\vec F_{A/B} = G \\frac {m_A.m_B}{R_{Terre}^2}  \\]"}
      </MathJax>
      <MathJax inline={true}>{"\\(\\vec u_{AB}\\)"}</MathJax> : vecteur unitaire
      orienté de A vers B.
      <p>
        Sur Terre, on approxime cette loi par le poids. En effet, l'accélération
        de pesanteur que l'on note g correspond en fait à la valeur{" "}
        <MathJax inline={false}>
          {
            "\\[g = G \\frac {m_{Terre}}{R_{Terre}^2} \\approx 6.67.10^{-11} \\times \\frac {5.97.10^{24}}{{(6.37.10^6)}^2} \\]"
          }
        </MathJax>
      </p>
      <p>Application de la RFD</p>
      <p>
        On note m<sub>T</sub> la masse et R<sub>T</sub> le rayon de la Terre, m
        <sub>S</sub> la masse du satellite et r la distance séparant leurs
        centres d'inertie. La seule force s'exerçant sur le satellite est la
        force de gravitation universelle :
      </p>
      <MathJax inline={false}>{"\\[\\vec F = m_Sa  \\]"}</MathJax>
      <p>Projetons dans la base de Frenet :</p>
      <ul>
        <li>
          selon T : la force de gravitation étant radial, elle n'a pas de
          composante sur cet axe et a<sub>T</sub> = 0.
        </li>
        <li>
          selon n :
          <MathJax inline={false}>
            {"\\[G \\frac {m_s.m_T}{r^2} = m_Sa_n  \\]"}
          </MathJax>
          d'o&ugrave;
          <MathJax inline={false}>{"\\[a_n = G \\frac {m_T}{r^2} \\]"}</MathJax>
        </li>
      </ul>
      <p>
        La vitesse du satellite est constante. Le mouvement du satellite est
        donc circulaire et uniforme .
      </p>
      <p>
        De plus, dans la base de Frenet,{" "}
        <MathJax inline={true}>{"\\(a_n = \\frac {v^2}{r} \\)"}</MathJax> . On
        peut donc en déduire (si on pose r = R<sub>T</sub> + h, o&ugrave; h
        représente l'altitude du satellite par rapport au sol) que :
      </p>
      <MathJax inline={false}>
        {"\\[v= \\sqrt {G\\frac {m_T}{R_T+h}}\\]"}
      </MathJax>{" "}
      <p>
        On a également la période de révolution T du satellite qui vérifie :
      </p>
      <MathJax inline={false}>
        {
          "\\[T= \\frac {2\\pi(R_T+h)}{v} = 2\\pi \\sqrt \\frac {{(R_T+h)}^3}{Gm_T}\\]"
        }
      </MathJax>{" "}
      <p>
        La vitesse et la période du satellite, caractéristiques du mouvement du
        satellite, ne dépendent que de l'altitude de celui-ci : elles ne
        dépendent pas de sa masse.
      </p>
      <p>Satellite géostationnaire</p>
      <p>
        Un satellite géostationnaire est un satellite immobile dans le
        référentiel terrestre. Il a donc une période de révolution égale à celle
        de la Terre ( T=24h ). Il reste toujours à la verticale du même point
        sur terre. Il se situe forcément dans le plan de l'équateur.
      </p>
      <p>L'énergie potentielle d'un satellite</p>
      <p>
        Pour l'étude des satellites, avec des variations d'altitude importantes,
        on considère la seule force gravitationnelle exercée par la Terre et on
        fixe une énergie potentielle nulle à l'infini, Ep(&infin;) = 0.
        L'énergie potentielle est alors donnée par :
      </p>
      <MathJax inline={false}>{"\\[E_p(r) = m \\frac {GM}{r}\\]"}</MathJax>{" "}
      <p>
        avec M la masse de la Terre. Cette expression est utilisée dans les
        problèmes de vitesse de libération, de mise en orbite de satellites...
      </p>
      <p>L'énergie mécanique du satellite</p>
      <MathJax inline={false}>
        {
          "\\[E = \\frac 12mv^2 - \\frac {GMm}{r} = \\frac 12 m\\frac {GM}{r} - \\frac {GMm}{r} = -\\frac {GMm}{2r}\\]"
        }
      </MathJax>{" "}
    </MathJaxContext>
  </div>
);

export const particuleChargee = (
  <div className={styles.articleContainer}>
    <MathJaxContext>
      <h2>
        Mouvement d'une particule chargée dans un champ électrique uniforme
      </h2>
      <h3>1 - Rappel : champ électrique uniform</h3>
      <p>
        On obtient un champ électrique uniforme en appliquant une tension
        constante U entre deux plaques planes et parallèles.
      </p>
      <p>
        On constitue ainsi un condensateur plan, chargé. Le vecteur champ
        électrique E est perpendiculaire aux plaques, dirigé de la plaque
        positive vers la plaque négative et d'intensité E = U d
      </p>
      <MathJax inline={false}>{"\\[E = Ud\\]"}</MathJax>{" "}
      <p>E : en (v /m), U : en (v) et d en (m)</p>
      <p>
        Une charge électrique q placée en tout point de ce champ est soumise à
        une force électrique F=qE
      </p>
      <MathJax inline={false}>{"\\[ \\vec F = q \\vec E \\]"}</MathJax>{" "}
      <ul>
        Caractéristique de {"    "}
        <MathJax inline={true}>{"\\( \\vec F\\)"}</MathJax> :
        <li>
          Direction : parallèle à{" "}
          <MathJax inline={true}>{"\\( \\vec E\\)"}</MathJax>
        </li>
        <li>
          Sens: même sens que{" "}
          <MathJax inline={true}>{"\\( \\vec E\\)"}</MathJax> si q&gt; 0 et de
          sens opposé si q &lt; 0
        </li>
        <li>Intensité : F = |q|E avec F en ( N ) q en (C) E en (V / m )</li>
      </ul>
      <h3>2 - Etude du mouvement</h3>
      <p>
        On considère une particule portant une charge électrique q de masse m
        champ électrique uniforme avec une vitesse V 0 perpendiculaire à E. et
        pénétrant dans un champ électrique uniforme avec une vitesse V0
        perpendiculaire à E.
        <div className={styles.floatimg}>
          <Image
            src="/images/dynamique/particule.png" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </p>
      <ul>
        <li>l: longueur des plaques</li>
        <li>d: distance entre les deux plaques</li>
        <li>
          D: distance normale entre l'écran et le point de sortie des plaques.
        </li>
      </ul>
      <p>Conditions initiales</p>
      <MathJax inline={false}>
        {
          "\\( M_0(x_0 = 0, y_0 = 0) \\space\\space v_0(v_{0x}=v_0, v_{0y}=0)\\)"
        }
      </MathJax>{" "}
      <p>
        La poids de la particule est négligeable devant la force électrique.
      </p>
      <p>Relation fondamentale de la dynamique:</p>
      <p>Considérons une particule de charge positive.</p>
      <div className={styles.floatimg}>
        <Image
          src="/images/dynamique/particule 2.png" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <MathJax inline={false}>{"\\( \\Sigma \\vec F = m \\vec a\\)"}</MathJax>
      <p>La projection sur x</p>
      <MathJax inline={true}>{"\\( ma_x = 0\\)"}</MathJax>
      <p>
        a<sub>x</sub> = 0, le mouvement est rectiligne uniforme
        <MathJax inline={false}>{"\\( v_x = v_0\\)"}</MathJax>
        <MathJax inline={false}>{"\\( x = v_0t \\)"}</MathJax>
      </p>
      <p>La projection sur y</p>
      <p>
        <MathJax inline={false}>{"\\( F = ma_y\\)"}</MathJax>
        <MathJax inline={false}>
          {"\\( a_y = \\frac fm = \\frac {|q|E}{m}\\)"}
        </MathJax>
      </p>
      <p>
        a<sub>y</sub> = cste, le mouvement est rectiligne uniforme
      </p>
      <MathJax inline={false}>
        {"\\( v_y = a_yt = \\frac {|q|E}{m}t\\)"}
      </MathJax>
      <MathJax inline={false}>
        {"\\( y = \\frac 12 a_yt^2 = \\frac  {|q|E}{2m}t^2\\)"}
      </MathJax>
      <p>La trajectoire: </p>
      <MathJax inline={false}>{"\\( y = \\frac {|q|E}{mV_0^2}x^2\\)"}</MathJax>
      <p>Durée du passage entre les deux plaques</p>
      <p>
        Au point de sortie S : x<sub>s</sub> = l
      </p>
      <MathJax inline={false}>{"\\( t_s = \\frac {l}{V_0}\\)"}</MathJax>
      <p>L'ordonnée du point de sortie</p>
      <div className={styles.floatimg}>
        <Image
          src="/images/dynamique/particule 3.png" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <p>
        <MathJax inline={false}>
          {"\\( y_s = \\frac {|q|E}{2mv_0^2}l^2\\)"}
        </MathJax>
      </p>
      <p>Caractéristiques du vecteur vitesse</p>
      <MathJax inline={false}>
        {"\\( v_s(v_{sx} = v_0, v_{sy} = \\frac {|q|E}{mv_0^2})\\)"}
      </MathJax>
      <p>
        <MathJax inline={false}>
          {"\\( v_s = \\sqrt{v_0^2 + (\\frac {|q|E}{mv_0^2})^2} \\)"}
        </MathJax>
      </p>
      <ul>
        <li>La déviation angulaire électrique</li>
      </ul>
      <p>
        Le vecteur vitesse V<sub>s</sub> est tangent à la trajectoire au point S
        et fait avec l'axe Ox l'angle appelé déviation électrique et tel que:
      </p>
      <MathJax inline={false}>
        {
          "\\( \\tan (\\alpha) = \\frac {v_{sy}}{v_{sx}} = \\frac {qEl}{mv_0^2} \\)"
        }
      </MathJax>
      <p>
        Autre méthode :{" "}
        <MathJax inline={false}>
          {
            "\\( \\tan (\\alpha) = \\frac {v_{sy}}{v_{sx}} = \\frac {qEl}{mv_0^2} \\)"
          }
        </MathJax>
      </p>
      <p>
        Remarque : on peut utiliser le théorème de l'énergie cinétique pour
        calculer V<sub>s</sub>
      </p>
      <p>
        <MathJax inline={false}>{"\\( \\Delta E_c = \\Sigma W_s  \\)"}</MathJax>
        <MathJax inline={false}>
          {
            "\\( \\frac 12 mv_s^2 - \\frac 12 mv_0^2 = F.y_s = qE \\frac {|q|E}{2mv_0^2}l^2 \\)"
          }
        </MathJax>
        <MathJax inline={false}>
          {"\\( v_s = \\sqrt{v_0^2 + (\\frac {|q|E}{mv_0^2})^2} \\)"}
        </MathJax>
      </p>
      <h3>3 - nature du mouvement à la sortie du condensateur (x&gt;l)</h3>
      <p>
        La particule peut être considérée comme un système isolé son mouvement
        devient rectiligne et uniforme (La masse de la particule étant très
        faible, l'influence du poids ne provoque une incurvation négligeable de
        la trajectoire). La particule continue à l'extérieur des plaques son
        mouvement en ligne droite à la vitesse Vs.
      </p>
      <p>Ordonnées du point d'impact I sur l'écran </p>
      <p>En I xi = l + D</p>
      <div className={styles.floatimg}>
        <Image
          src="/images/dynamique/particule 4.png" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <p>L'expression de yi étant yi=NH + HI</p>
      <MathJax inline={false}>
        {"\\( NH = SH. \\tan (\\alpha) = D\\frac {|q|El}{mv_0^2} \\)"}
      </MathJax>
      <MathJax inline={false}>
        {"\\( HI = y_s = \\frac {|q|E}{2mv_0^2}l^2 \\)"}
      </MathJax>
      <p>d'o&ugrave;</p>
      <MathJax inline={false}>
        {"\\( y_i = \\frac {|q|El}{mv_0^2}(D + \\frac l2) \\)"}
      </MathJax>
    </MathJaxContext>
  </div>
);

export const oscillateur = (
  <div className={styles.articleContainer}>
    <MathJaxContext>
      <h2>Oscillateur mécanique</h2>
      <h3>1- le pendule élastique horizontal</h3>
      <h4>Description</h4>
      <p>
        Un solide S de masse m coulisse sans frottement le long d'un tube
        horizontal. On écarte le solide S vers la droite et on le l&acirc;che.
      </p>
      <p>
        Il se met à osciller autour du point O; on a constitué un oscillateur
        mécanique.
        <div>
          <Image
            src="/images/dynamique/ressort.png" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </p>
      <p>
        Considérons une position du solide S en mouvement, son abscisse est x,
        sur l'axe (O, i); cela veut dire que l'allongement du ressort vaut
        également x.
      </p>
      <h4>Nature du mouvement</h4>
      <MathJax inline={false}>
        {
          "\\( \\Sigma \\vec F = m \\vec a \\Leftrightarrow \\vec T + \\vec P +\\vec R = m \\vec a\\)"
        }
      </MathJax>
      <p>Projection sur (O, i)</p>
      <MathJax inline={false}>
        {
          "\\( -T = ma \\Leftrightarrow -kx = ma \\Leftrightarrow a + \\frac km x = 0\\)"
        }
      </MathJax>
      <p>
        Cette équation différentielle admet comme solution :{" "}
        <MathJax inline={false}>
          {"\\( x = X_m\\cos (\\omega t + \\phi)\\)"}
        </MathJax>
      </p>
      <ul>
        Avec :
        <li>
          X<sub>m</sub>: amplitude du mouvement (valeur maximale de x)
        </li>
        <li>
          &omega; : pulsation ( en rad/s ) = k m
          <MathJax inline={false}>{"\\\\omega = \\sqrt \\frac km \\)"}</MathJax>
        </li>
        <li>&phi; : phase initiale (à t=0) (en rad)</li>
      </ul>
      <p>
        La période du mouvement :
        <MathJax inline={false}>
          {"\\( T = \\frac {2\\pi}{\\omega} = 2\\pi \\sqrt {\\frac mk}\\)"}
        </MathJax>
        (T en seconds)
      </p>
      <p>Courbe représentative de x(t)</p>
      <p>
        La solution de l'équation étant{" "}
        <MathJax inline={true}>
          {"\\( x = X_m\\cos (\\omega t + \\phi)\\)"}
        </MathJax>{" "}
        considérons le cas o&ugrave; &phi;=0 donc:{" "}
        <MathJax inline={true}>{"\\( x = X_m\\cos (\\omega t)\\)"}</MathJax> .
        La représentation graphique est un sinuso&iuml;de de période T.
      </p>
      <p></p>
      <h4>Etude energétique</h4>
      <p>Expression de l'énergie mécanique</p>
      <div className={styles.floatimg}>
        <Image
          src="/images/dynamique/ressort 2.png" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <p>
        <MathJax inline={false}>{"\\( E_m = E_c + E_{pp} + E_{pe}\\)"}</MathJax>{" "}
        <MathJax inline={true}>
          {"\\( E_m = \\frac 12 mV^2 + \\frac 12 kx^2 \\)"}
        </MathJax>{" "}
      </p>
      <p>
        (L'origine de l'énergie potentielle de pesanteur étant choisie sur le
        plan horizontal passant par la position d'équilibre)
      </p>
      <p>
        énergie mécanique est constant:
        <MathJax inline={false}>
          {"\\( E_m = E_c + E_{pp} + E_{pe}\\)"}
        </MathJax>{" "}
        <MathJax inline={true}>{"\\( E_m = \\frac 12 kX^2_m  \\)"}</MathJax>
      </p>
      <p>La représentation graphique des énergies:</p>
      <div>
        <Image
          src="/images/dynamique/ressort 3.png" // Route of the image file
          layout="fixed"
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
    </MathJaxContext>
  </div>
);
