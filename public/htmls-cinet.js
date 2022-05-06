import { MathJaxContext, MathJax } from "better-react-mathjax";
import styles from "./htmls.module.css";
import Image from "next/image";

export const rappel = (
  <MathJaxContext>
    <h1>Rappel</h1>
    <h3>1 - Concentration molaire et massique</h3>
    <h4>La concentration molaire</h4>
    <p>
      La concentration molaire d&rsquo;une esp&egrave;ce en solution notée{" "}
      <strong>C</strong>, et la quantité de mati&egrave;re <strong>(n) </strong>
      dans un 1L de solution. L'unité de concentration molaire est mol/L.{" "}
      <strong>La formule de la concentration molaire</strong> est la suivante :
    </p>
    <MathJax inline={false}>{"\\[ C = \\frac n{V_{solution}}\\]"}</MathJax>{" "}
    <ul>
      <li>n : la quantité de mati&egrave;re en mole</li>
      <li>C: la concentration molair en mol/L</li>
      <li>Vsolution : volume de la solution en L.</li>
    </ul>
    <p>
      A partir de la concentration molaire, i
      <strong>l est possible de determiner la quantite de matiere </strong>:
    </p>
    <MathJax inline={false}>{"\\[ n = C{V_{solution}}\\]"}</MathJax>{" "}
    <h4>La concentration massique</h4>
    <p>La quantité de masse dans un litre de solution</p>
    <MathJax inline={false}>
      {"\\[ C_m = \\frac m{V_{solution}}\\]"}
    </MathJax>{" "}
    <p>m : masse en g</p>
    <h4>Lien entre les deux concentration</h4>
    <MathJax inline={false}>{"\\[ C =\\frac {C_m}M\\]"}</MathJax>
    <p>M : masse molaire g/mol</p>
    <h3>2&nbsp; La masse volumique et la densité</h3>
    <h4>La masse volumique&nbsp;</h4>
    <p>
      La masse volumique est la masse (en grammes) occupée par 1 litre
      d&rsquo;une esp&egrave;ce chimique étudiée. Elle se note &rho; et est
      donnée par le rapport de la masse m d&rsquo;un échantillon de cette
      esp&egrave;ce et le volume V qu&rsquo;il occupe :
    </p>
    <MathJax inline={false}>{"\\[ \\rho = \\frac m{V}\\]"}</MathJax>{" "}
    <p>
      La masse volumique peut &ecirc;tre exprimée en :kg/m3, g/L, g/cm3, g/ml.
      eau = 1g/ml = 1g/cm3 = 1000g/L = 1000kg/m3
    </p>
    <h4>La densite&nbsp;</h4>
    <p>
      Pour des solides ou des liquides, c&rsquo;est le rapport entre la masse
      volumique de l&rsquo;esp&egrave;ce chimique considérée et celle de
      l&rsquo;eau.
    </p>
    <MathJax inline={false}>{"\\[ d =\\frac {\\rho}{\\rho_{eau}} \\]"}</MathJax>{" "}
    <p>
      example : Densité de l&rsquo;eau&nbsp; = 1.0. Densité de l'éthanol = 0.79
    </p>
    <p>
      La densité d&rsquo;un gaz correspond au rapport de la masse molaire de gaz
      par la masse molaire de l&rsquo; air Mair = 28,96 g/
      <a href="http://webphysique.fr/mole/" target="_blank" rel="noopener">
        mol
      </a>
      .&nbsp;
    </p>
    <MathJax inline={false}>
      {"\\[ d_{gaz} =\\frac {M_{gaz}}{M_{air}} \\]"}
    </MathJax>
    <p>
      A partir de la masse volumique ou de la densité d&rsquo;une esp&egrave;ce
      chimique, il est facile de déterminer la masse d&rsquo;un échantillon
      connaissant le volume utilisé. m = esp&egrave;ce chimique * V
    </p>
    <p></p>
    <MathJax inline={false}>{"\\[ m =\\rho _{espece}V \\]"}</MathJax>
    <MathJax inline={false}>{"\\[ m =d _{espece}\\rho _{eau}V \\]"}</MathJax>
    <h3>3&nbsp; Préparation d&rsquo;une solution</h3>
    <h4>Préparation d&rsquo;une solution par dissolution</h4>
    <p>
      Dans une dissolution, il faut prendre le soluté et le dissoudre dans le
      solvant pour obtenir la solution désirée. Afin de préparer la solution
      &agrave; la concentration demandée, il faut conna&icirc;tre le volume de
      la solution &agrave; préparer et la quantité de soluté nécessaire pour la
      faire.&nbsp;
    </p>
    <p></p>
    <h4>Par dilution</h4>
    <p>
      Dans une dilution, il faut prendre la solution et y ajouter du solvant
      afin d'en réduire la concentration. Pour préparer une solution diluée, il
      faut tout d'abord déterminer quelle quantité de la solution initiale sera
      utilisée pour préparer la nouvelle solution diluée. Pour ce faire, il faut
      conna&icirc;tre les concentrations initiales et finales des solutions
      ainsi que le volume final de la nouvelle solution.
    </p>
    <p></p>
    <p>Loi de dilution</p>
    <MathJax inline={false}>{"\\[ n_i = n_f \\]"}</MathJax>
    <MathJax inline={false}>{"\\[ C_iV_i = C_fV_f \\]"}</MathJax>
    <p>Exemple</p>
    <p>
      Quelle quantité d'une solution initiale dont la concentration est&nbsp;
      0,1 mol/L&nbsp; faut-il mesurer pour préparer une solution de
      concentration&nbsp; 0,05 mol/L &nbsp; dans une fiole jaugée de 250ml&nbsp;
      Il faut tout d'abord identifier les variables dans cette situation.
    </p>
    <h4>A partir d&rsquo;une solution commercial</h4>
    <p>
      Préparer un volume V de solution d'un composé X &agrave; la concentration
      C par dilution d&rsquo;un volume V0 d'une solution commerciale de X . Les
      indications apparaissant sur l'étiquette du bidon contenant la solution
      commerciale sont la densité d de la solution, et le pourcentage&nbsp; en
      masse p du produit X.
    </p>
    <p>La concentration d'une solution commercial</p>
    <MathJax inline={false}>
      {"\\[ C_0 = \\frac  {pd \\rho_{eau}}{100M_x} \\]"}
    </MathJax>
    <ul>
      <li>
        C<sub>0</sub> = p*d*eau100*Mx
      </li>
      <li>P : pourcentage en masse de X</li>
      <li>d : densité de x</li>
      <li>
        M<sub>x</sub> : masse molaire de x
      </li>
    </ul>
    <p>
      Le volume V<sub>0</sub> &agrave; prélever du solution commercial suit la
      loi de dilution
    </p>
    <MathJax inline={false}>{"\\[ C_0V_0 = CV \\]"}</MathJax>
    <h3>4 Oxydoreduction</h3>
    <h4>Les oxydants et Les réducteurs</h4>
    <p>
      <strong>Les oxydants </strong>sont des esp&egrave;ces chimiques pouvant
      capter des électrons et <strong>les réducteurs</strong> sont des
      esp&egrave;ces chimiques pouvant en céder. Le cuivre (II)&nbsp; Cu2+ est
      un oxydant car il peut se transformer en cuivre métallique Cu par gain de
      deux électrons.Le zinc est réducteur car il peut se transformer en Zn2+
      par perte de deux électrons.
    </p>
    <h4>Les couples redox&nbsp;</h4>
    <p>
      Un couple redox est composé d' un oxydant et un réducteur liés par un
      transfert d'électrons, illustré par un demi équation électronique. Le
      couple est noté :
      <MathJax inline={false}>{"\\[ Oxidant/Reducteur \\]"}</MathJax>
    </p>
    <p>
      Example Cu<sup>2+</sup>/Cu Demi équation&nbsp;
      <MathJax inline={false}>
        {"\\[ Cu^{2+} + 2e \\longrightarrow Cu \\]"}
      </MathJax>
    </p>
    <h4>L'équation bilan</h4>
    <p>
      La réaction d'oxydoréduction (l'équation bilan) est une réaction au cours
      de laquelle il y a échange d'électrons entre l&rsquo;oxydant d&rsquo;un
      couple et le réducteur d&rsquo;un autre couple.
    </p>
    <p>
      Pour deux couple:{" "}
      <MathJax inline={false}>
        {"\\( Ox_1 / Red_1  \\hspace{1cm} et \\hspace{1cm} Ox_2/Red_2 \\)"}
      </MathJax>{" "}
    </p>
    <p>
      <div className={styles.floatimg}>
        <Image
          src="/images/cinetique-chimique/cinet1.png" // Route of the image file
          width={129} // Desired size with correct aspect ratio
          height={196} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      On utilise la r&egrave;gle gamma pour obtenir l'équation bilan. Supposons
      le couple ox1/red1 avec le plus fort potentiel
    </p>
    <MathJax inline={false}>
      {
        "\\( Ox_1 + Red_2  \\hspace{1cm} \\rightarrow \\hspace{1cm} Ox_2 + Red_1 \\)"
      }
    </MathJax>
    <h4>Les dosages d'oxydoréduction</h4>
    <p>
      Les dosages d&rsquo;oxydoréduction, appelés également dosages rédox, sont
      utilisés pour déterminer la concentration, dans une solution, d&rsquo;une
      esp&egrave;ce ayant des propriétés oxydantes ou réductrices. Comme dans
      tous les dosages il faut déterminer le passage &agrave;
      l&rsquo;équivalence (&agrave; l&rsquo;équivalence, les réactifs ont été
      mélangés dans les proportions st&oelig;chiométriques).
    </p>
    <h3>5 - évolution d&rsquo;une transformation chimique</h3>
    <h4>Evolution des quantités des mati&egrave;res sr&nbsp;&nbsp;</h4>
    <p>Au cours d&rsquo;une transformation chimique :</p>
    <p>
      <strong>&nbsp;Des réactifs</strong> sont consommés. Leur quantité de
      mati&egrave;re diminue au cours de la réaction.
      <strong>Des produits</strong> sont formés. Leur quantité de mati&egrave;re
      augmente au cours de la réaction.
    </p>
    <h4>2 - Les nombres st&oelig;chiométriques</h4>
    <p>
      Une <strong>équation bilan</strong> rend compte des proportions dans
      lesquelles les réactifs réagissent et les produits se forment.
    </p>
    <p>
      Les <strong>nombres st&oelig;chiométriques</strong> sont les coefficients
      qui permettent d'ajuster l'équation bilan de mani&egrave;re &agrave; ce
      que le nombre de chaque élément chimique soit identique de part et d'autre
      de l'équation.
    </p>
    <h4>3 L&rsquo;avancement d&rsquo;une réaction</h4>
    <p>
      <strong>L'avancement </strong>est une grandeur notée <em>x</em> qui permet
      de suivre la réaction ; il s&rsquo;exprime en mole (mol).
    </p>
    <p>
      L'avancement est la <strong>quantité de mati&egrave;re consommée</strong>{" "}
      pour un réactif dont le nombre st&oelig;chiométrique vaut 1.
    </p>
    <p>
      &Agrave; l&rsquo;état initial, l&rsquo;avancement est nul et il atteint sa
      valeur finale quand la réaction est terminée.
    </p>
    <h4>4 - Le tableau d&rsquo;avancement</h4>
    <p>
      Le <strong>tableau d&rsquo;avancement</strong> permet de comprendre
      l&rsquo;évolution d&rsquo;un syst&egrave;me chimique.
    </p>
    <p>Un tableau d&rsquo;avancement est toujours de la forme suivante :</p>
    <p>
      <MathJax inline={false}>
        {
          "\\[ \\alpha A + \\beta B  \\hspace{1cm} \\rightarrow \\hspace{1cm} \\sigma C + \\gamma D \\]"
        }
      </MathJax>
      &alpha;, &beta;, &sigma;, &gamma; : coefficients st&oelig;chiométriques.
    </p>
    <p>
      L&rsquo;avancement x:
      <MathJax inline={false}>
        {
          "\\[ x = \\frac {n_0(A) - n_r(A)}{\\alpha} = \\frac {n_0(B) - n_r(B)}{\\beta} = \\frac {n(C)}{\\sigma} = \\frac {n(D)}{\\gamma} \\]"
        }
      </MathJax>
    </p>
    <Image
      src="/images/cinetique-chimique/cinet2.png" // Route of the image file
      width={641} // Desired size with correct aspect ratio
      height={182} // Desired size with correct aspect ratio
      alt="Your Name"
    />
    <p></p>
    <p>Détermination de la composition finale du syst&egrave;me</p>
    Le réactif limitant est celui des réactifs qui s'épuise le premier. Pour
    l'identifier. &nbsp;on résout donc pour les deux réactifs (A, B):
    <p></p>
    <p></p>
    <MathJax inline={false}>{"\\[n_0(A) - \\alpha Xmax = 0 \\]"}</MathJax>
    <MathJax inline={false}>{"\\[n_0(B) - \\beta Xmax = 0 \\]"}</MathJax>
    On ne retient que la plus petite de ces deux valeurs pour compléter la
    derni&egrave;re ligne de tableau.
    <p></p>
    <h4>5 - Les proportions stoechiométriques</h4>
    <p>
      Une réaction dans les <strong>proportions st&oelig;chiométriques</strong>{" "}
      est une réaction au cours de laquelle les réactifs s'épuisent tous en
      m&ecirc;me temps, il n'y a donc <strong>pas de réactif limitant </strong>
      particulier. Ces proportions dépendent des nombres st&oelig;chiométriques
      dans l&rsquo;équation bilan.
    </p>
    <p></p>
    <h4>6 - Les réactions limitées</h4>
    <h3>Définition</h3>
    <p>
      Une <strong>réaction limitée</strong> (ou équilibrée) est une{" "}
      <strong>réaction qui n'est pas totale</strong>.
    </p>
    <p>
      L'avancement final X<sub>f</sub> n'atteint alors pas la valeur de
      l'avancement maximal X<sub>max</sub> déterminée gr&acirc;ce au tableau
      d'avancement.
    </p>
    <p>Constant d'équilibre</p>
    <p>
      <MathJax inline={false}>
        {
          "\\[ \\alpha A + \\beta B  \\hspace{1cm} \\rightarrow \\hspace{1cm} \\sigma C + \\gamma D \\]"
        }
      </MathJax>
    </p>
    <MathJax inline={false}>
      {
        "\\[ K = \\frac {n_{A}^{\\alpha}n_{B}^{\\beta}}{n_C^{\\sigma}n_D^{\\gamma}} \\]"
      }
    </MathJax>
  </MathJaxContext>
);

export const vitesseDeLaReaction = (
  <MathJaxContext>
    <h2>La vitesse de réaction et temps de demi réaction</h2>
    <h3>
      1 - Comment caractériser la durée d&rsquo;une réaction de fa&ccedil;on
      quantitative?
    </h3>
    <p>
      Qualitativement, on dit qu'une réaction est rapide lorsqu'elle se fait
      pendant un laps de temps trop court pour que l'on puisse suivre
      l'évolution &agrave; l'&oelig;il nu. &Agrave; l'inverse, une réaction est
      dite lente lorsqu'on peut la suivre &agrave; l'&oelig;il nu. On peut aussi
      suivre une réaction lente avec des instruments de mesure :
      spectrophotom&egrave;tre, conductim&egrave;tre, capteur de pression, etc.
    </p>
    <p>
      Notons qu'il existe des réactions infiniment lentes. C'est le cas lorsque
      l'évolution du syst&egrave;me ne peut &ecirc;tre appréciée, m&ecirc;me
      apr&egrave;s plusieurs jours : un tel syst&egrave;me est dit&nbsp;
      cinétiquement inerte.
    </p>
    <p></p>
    <h3>2 - La vitesse moyenne et la vitesse instantanée de la réaction</h3>
    <p>
      La vitesse moyenne d&rsquo;une réaction est la variation de la quantité
      d&rsquo;une substance (réactif ou produit ) en fonction d&rsquo;un
      intervalle de temps donné.
    </p>
    <MathJax inline={false}>
      {"\\[ v = \\frac {\\Delta n}{\\Delta t} \\]"}
    </MathJax>
    <p>
      La vitesse instantanée d&rsquo;une réaction est la vitesse a un temps
      précis de la réaction.
    </p>
    <MathJax inline={false}>{"\\[ v = \\frac {dn}{dt} \\]"}</MathJax>
    <Image
      src="/images/cinetique-chimique/cinet3.png" // Route of the image file
      width={500} // Desired size with correct aspect ratio
      height={378} // Desired size with correct aspect ratio
      alt="Your Name"
    />

    <h3>3 - La vitesse volumique</h3>
    <p>
      La vitesse volumique v(t) d&rsquo;une réaction chimique est calculée
      &agrave; partir de la formule :
    </p>
    <MathJax inline={false}>{"\\[ v = \\frac {dx}{Vdt} \\]"}</MathJax>
    <p>Avec V le volume du milieu réactionnel en L</p>
    <p>dxdt la dérivée de l'avancement x par rapport au temps t en mol.s-1</p>
    <p>remarque:</p>
    <p>
      la vitesse d&rsquo;un produit ou d&rsquo;un réactif peut &ecirc;tre obtenu
      de la vitesse volumique:
    </p>
    <MathJax inline={false}>{"\\[ v_i = \\pm \\frac 1sv \\]"}</MathJax>
    <li>
      vi : vitesse du produit ou réactif ( positif pour les produits et
      négatives pour les réactifs)
    </li>
    <li>s: coefficient stoechiométrique&nbsp;</li>
    <li>v: vitesse de la réaction</li>
    <h3>4 - Temps de demi réaction&nbsp;</h3>
    <p></p>
    <p>
      Définition: On appelle temps de demi-réaction, noté , la durée au bout de
      laquelle l'avancement <em>x</em> est égal &agrave; la moitié de
      l'avancement maximal X<sub>max</sub>. Le temps de demi-réaction s'exprime
      en secondes (s).
    </p>
  </MathJaxContext>
);

export const facteursCinetiques = (
  <MathJaxContext>
    <h2>Facteurs cinétiques</h2>
    <h3>1 - Influence de la concentration</h3>
    <p>
      Le déclenchement d'une transformation chimique nécessite que les réactifs
      présents dans le milieu entrent en contact les uns avec les autres. Or,
      lorsqu'ils sont introduits, ils sont initialement dispersés dans le
      solvant et animés de mouvements aléatoires. Ainsi, la rencontre entre deux
      réactifs sera d'autant plus fréquente que les quantités des réactifs
      présents dans le milieu seront élevées. Par conséquent : plus la
      concentration des réactifs est élevée, plus la vitesse de réaction est
      élevée.
    </p>
    <p></p>
    <p></p>
    <h3>2 - Influence de la température</h3>
    <p>
      La température d'une substance refl&egrave;te son état d'agitation
      thermique. Lorsque la température d'un milieu réactionnel augmente, les
      particules (molécules ou ions) sont donc plus agitées, et elles se
      déplacent plus rapidement.Cela va avoir deux conséquences :
    </p>
    <p></p>
    <ol>
      <li>Les rencontres entre les différents réactifs sont plus fréquentes</li>
      <li>
        Les réactifs disposent d'une énergie cinétique plus grande et cette
        énergie permet d'augmenter la probabilité qu'une collision entre les
        réactifs conduise effectivement &agrave; une réaction chimique.
      </li>
    </ol>
    <p>
      Par conséquent :<strong> l'augmentation de la température </strong>
      permet donc d'accélérer les réactions chimiques et de réduire leur durée.
      Elle permet également tout simplement parfois de déclencher des réactions
      chimiques.
    </p>
    <h3>3 - Catalyse</h3>
    <h4>Définitions</h4>
    <p>
      La catalyse est l&rsquo;action d&rsquo;un catalyseur sur une
      transformation chimique. Le catalyseur est une esp&egrave;ce qui augmente
      la vitesse d&rsquo;une transformation, sans figurer dans l'équation de
      réaction et sans modifier la composition du syst&egrave;me &agrave; l'état
      final.
    </p>
    <p></p>
    <h4>Différents types de catalyse</h4>
    <h5>Catalyse homog&egrave;ne</h5>
    <p>
      On dit d&rsquo;une catalyse qu&rsquo;elle est homog&egrave;ne si le
      catalyseur et les réactifs ne forment qu&rsquo;une seule phase.
    </p>
    <p></p>
    <p>
      Exemple: La réaction de décomposition (dismutation) de l&rsquo;eau
      oxygénée (ou peroxyde d'hydrog&egrave;ne H2O2 ) peut &ecirc;tre catalysée
      par les ions de fer (III)&nbsp; en solution aqueuse. Il y a qu&rsquo;une
      seule phase, la phase aqueuse.
    </p>
    <MathJax inline={false}>
      {"\\[ 2H_2O_2 \\longrightarrow 2H_2O + O_2 \\]"}
    </MathJax>
    <h5>Catalyse hétérog&egrave;ne</h5>
    <p>
      On dit d&rsquo;une catalyse qui est hétérog&egrave;ne si le catalyseur et
      les réactifs forment plusieurs phases.
    </p>
    <p></p>
    <p>
      Exemple&nbsp; : La réaction de synth&egrave;se de l&rsquo;eau a partir de
      dihydrog&egrave;ne et dioxyg&egrave;ne peut &ecirc;tre catalysée par le
      platine solide. Les réactifs sont en phase gazeuse et le catalyseur
      en&nbsp; phase solide.
    </p>
    <MathJax inline={false}>
      {"\\[ 2H_2 + O_2 \\longrightarrow 2H_2O \\]"}
    </MathJax>
    <p></p>
    <h5>Catalyse enzymatique</h5>
    <p>
      Le catalyseur est une enzyme, c'est-&agrave;-dire une protéine élaborée
      par un organisme vivant. Cette catalyse s'apparente &agrave; la fois
      &agrave; une catalyse homog&egrave;ne et &agrave; une catalyse
      hétérog&egrave;ne.
    </p>
  </MathJaxContext>
);
