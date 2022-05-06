import { MathJax, MathJaxContext } from "better-react-mathjax";
import Image from "next/image";

export const htmlcingen = (
  <div>
    <MathJaxContext>
      <h1>Généralités</h1>
      <p>
        <br />
      </p>
      <p>
        La cinématique est l&apos;étude d&apos;un mouvement au cours du
        temps.&nbsp;Le mouvement d&apos;un objet&nbsp;est caractérisé
        par&nbsp;sa trajectoire et sa vitesse. Avant d&apos;étudier ce mouvement
        il faut définir un&nbsp;référentiel d&apos;étude.
      </p>
      <p>
        <br />
      </p>
      <h2>A- Le référentiel d&apos;étude</h2>
      <p>
        Le référentiel d&apos;étude est le solide de référence choisi par
        l&apos;expérimentateur &agrave; partir duquel le mouvement d&apos;un
        objet est décrit.
      </p>
      <p>
        On consid&egrave;re une voiture roulant sur une route en ligne droite
        &agrave; vitesse constante. En prenant comme référentiel d&apos;étude un
        arbre sur le c&ocirc;té de la route, la trajectoire de la voiture sera
        une droite horizontale.
      </p>
      <p>&nbsp;</p>
      <p>
        Pour étudier le mouvement dans le référentiel d&apos;étude, on y associe
        :
      </p>
      <ul>
        <li>
          <p>
            Un rep&egrave;re d&apos;espace orthonormé (O, i, j, k) &nbsp;dont
            l&apos;origine O est fixée géométriquement dans le référentiel
            d&apos;étude.
          </p>
        </li>
        <li>
          <p>
            Un rep&egrave;re de temps&nbsp;dont l&apos;origine est définie par
            le temps t=0.
          </p>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h2>B- Le vecteur position</h2>
      <p>
        Le vecteur position est le vecteur repérant la position d&apos;un point
        mobile M le long d&apos;une trajectoire &agrave; un instant t par
        rapport &agrave; l&apos;origine O d&apos;un rep&egrave;re associé
        &agrave; un référentiel d&apos;étude :
      </p>
      <p>Le vecteur&nbsp;OM(t)</p>
      <div>
        <Image
          src="/images/cinematique/vposition.svg" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <h2>C- Le vecteur vitesse</h2>
      <p>
        Lors d&apos;un mouvement, le vecteur position varie en norme ou en
        direction créant ainsi&nbsp;un vecteur vitesse. Le vecteur vitesse VM(t)
        d&apos;un point mobile M &agrave; l&apos;instant t est la dérivée
        temporelle du vecteur position :
      </p>
      <p>Le vecteur vitesse&nbsp;VM(t)</p>
      <div>
        <Image
          className="floatimg"
          src="/images/cinematique/vvitesse.svg" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <p>Le vecteur vitesse est caractérisé par :</p>
      <ul>
        <li>Sa norme v(en m.s&minus;1)</li>
        <li>
          Sa direction, donnée par la tangente &agrave; la trajectoire au point
          M
        </li>
        <li>
          Son sens&nbsp;qui correspond au sens du mouvement &agrave;
          l&apos;instant t.
        </li>
      </ul>
      <h2>D- Le vecteur accélération</h2>
      <p>
        Lors d&apos;un mouvement, le vecteur vitesse varie en norme ou en
        direction créant ainsi&nbsp;un vecteur accélération. Le vecteur
        accélération aM(t) d&apos;un point mobile M &agrave; l&apos;instant t
        est la dérivée temporelle du vecteur vitesse :
        <div>
          <Image
            src="/images/cinematique/vacceleration.svg" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
      </p>
      Le vecteur accélération est caractérisé par :
      <ul>
        <li>Sa valeur a&nbsp;(en m.s&minus;2)</li>
        <li>
          Sa direction, définie par la variation de direction du vecteur vitesse
        </li>
        <li>Son sens, défini par la variation de norme du vecteur vitesse</li>
      </ul>
      <h2>E- L&rsquo;enregistrement d&rsquo;un mouvement</h2>
      <p>
        L&apos;enregistrement du mouvement, c&apos;est-&agrave;-dire le relevé
        de la position et de la vitesse, est le fondement de l&apos;étude
        cinématique.
      </p>
      <p>
        Considérons l&rsquo;enregistrement suivant. L&rsquo;intervalle du temps
        qui sépare deux intervalles du temps est&nbsp; T.
      </p>
      <p>
        <Image
          className="floatimg"
          src="/images/cinematique/enregistrement4.svg" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={800} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </p>
      <p>
        La vitesse et l&apos;accélération sont données par :<br />
        <MathJaxContext>
          <MathJax>{"\\[V_i=\\frac{M_iM_{i+1}}{2T}\\]"}</MathJax>
        </MathJaxContext>
        <MathJaxContext>
          <MathJax>{"\\[a_i=\\frac{V_{i+1}-V_i}{2T}\\]"}</MathJax>
        </MathJaxContext>
      </p>
      <p>&nbsp;</p>
      <p>
        <br />
      </p>
      <h2>F- Les différents mouvements</h2>
      <p>&nbsp;</p>
      <h3>1- Le mouvement rectiligne</h3>
      <p>
        Un mouvement est dit rectiligne si&nbsp;la trajectoire&nbsp;suivie par
        le point mobile est&nbsp;une droite. Dans un mouvement rectiligne, le
        vecteur vitesse et le vecteur accélération sont&nbsp;colinéaires. Les
        mouvements rectilignes sont qualifiés différemment en fonction du
        vecteur accélération :
      </p>
      <ul>
        <li>
          <p>Si&nbsp;aM(t)=0, le mouvement est&nbsp;rectiligne uniforme.</p>
        </li>
        <li>
          <p>
            Si&nbsp;aM(t)=constante, le mouvement est&nbsp;rectiligne
            uniformément accéléré.
          </p>
        </li>
      </ul>
      <p>
        <br />
      </p>
      <h3>2- Le mouvement circulaire</h3>
      <p>
        Un mouvement est dit circulaire si&nbsp;la trajectoire&nbsp;suivie par
        le point mobile est&nbsp;un cercle. Dans un mouvement circulaire, le
        vecteur accélération est toujours dirigé vers l&apos;intérieur de la
        trajectoire. Les mouvements circulaires sont qualifiés différemment en
        fonction des vecteurs vitesse et accélération :
      </p>
      <ul>
        <li>
          <p>
            Si la norme de la vitesse&nbsp;v est constante, le mouvement
            est&nbsp;circulaire uniforme.
          </p>
        </li>
      </ul>
      <p>
        Si aM(t)=constante, le mouvement est circulaire uniformément accéléré.
      </p>
    </MathJaxContext>
  </div>
);

export const htmlmru = (
  <div className={""}>
    <h1>Le mouvement rectiligne uniforme</h1>
    <p>
      Un
      <strong> mouvement rectiligne uniforme (MRU) </strong>
      est un d&eacute;placement en <strong>ligne droite</strong> durant lequel{" "}
      <strong>la vitesse est constante.</strong>.
    </p>
    <p>
      Le vecteur vitesse est constante&nbsp;
      <MathJaxContext>
        <MathJax>{"\\[V=constante\\]"}</MathJax>
      </MathJaxContext>
    </p>
    <p>
      Dans un MRU, la distance parcourue est la m&ecirc;me chaque seconde.&nbsp;
    </p>
    <p>
      L'utilisation du terme <strong>rectiligne </strong> renvoie au mouvement
      en ligne droite.&nbsp;
    </p>
    <p>
      Acc&eacute;l&eacute;ration est nulle :
      <MathJaxContext>
        <MathJax>{"\\[a=0\\]"}</MathJax>
      </MathJaxContext>
    </p>
    <p>
      Equation horaire :
      <MathJaxContext>
        <MathJax>{"\\[x=V_0t+x_0\\]"}</MathJax>
      </MathJaxContext>
    </p>
    <p>
      V<sub>0</sub> : vitesse initiale x<sub>0</sub> : position initiale
    </p>
  </div>
);

export const htmlmruv = (
  <div className={""}>
    <h1>Le mouvement rectiligne uniform&eacute;ment vari&eacute;</h1>
    <p>
      Un mouvement rectiligne est uniform&eacute;ment vari&eacute; si son
      vecteur acc&eacute;l&eacute;ration est constant en valeur, en direction et
      en sens.&nbsp;
    </p>
    <p>Vecteur acc&eacute;l&eacute;ration constante :</p>
    <MathJaxContext>
      <MathJax>{"\\[a=constante\\]"}</MathJax>
    </MathJaxContext>
    <p>
      L'&eacute;quation horaire de la vitesse :
      <MathJaxContext>
        <MathJax>{"\\[v=at+v_0\\]"}</MathJax>
      </MathJaxContext>
    </p>
    <p>
      v<sub>0</sub> : la vitesse initiale.
    </p>
    <p>Remarques</p>
    <p>
      - Si la vitesse est nulle &agrave; t = 0 alors la vitesse est une fonction
      lin&eacute;aire du temps
    </p>
    <p>
      - Si le mouvement est uniform&eacute;ment acc&eacute;l&eacute;r&eacute; (
      a &gt; 0 ) alors la vitesse est croissante au cours du temps.
    </p>
    <p>
      - Si le mouvement est uniform&eacute;ment ralenti ( a &lt; 0 ) alors la
      vitesse est d&eacute;croissante au cours du temps.
    </p>
    <p>
      La position de mruv :
      <MathJaxContext>
        <MathJax>{"\\[x=\\frac{1}{2}at^2+v_0t+x_0\\]"}</MathJax>
      </MathJaxContext>
    </p>
    <p>
      x<sub>0</sub>: la position initiale
    </p>
    <p>Equation independent du temps:</p>
    <MathJaxContext>
      <MathJax>{"\\[v^2-v_0^2=2a(x-x_0)\\]"}</MathJax>
    </MathJaxContext>
  </div>
);

export const htmlmcu = (
  <div className={""}>
    <h1>Le mouvement circulaire uniforme</h1>
    <h2>D&eacute;finition</h2>
    <p>
      Un point poss&egrave;de un mouvement si sa trajectoire est
      <strong> un cercle</strong> ou une portion de cercle.
    </p>
    <p>
      Exemples de trajectoires circulaires: un satellite tournant autour de la
      Terre,&nbsp; la nacelle d'une grande roue.
    </p>
    <p>
      Le mouvement circulaire est dit uniforme si la vitesse reste constante au
      cours du temps.
    </p>
    <p>
      Le vecteur&nbsp; vitesse est constant en norme mais pas en direction
      puisqu'il est tangent au cercle de la trajectoire durant tout le mouvement
      ( il est &eacute;galement orient&eacute; dans le sens de ce dernier).
    </p>
    <p>
      La d&eacute;riv&eacute;e du vecteur vitesse n'est pas nulle puisque sa
      direction change donc l'acc&eacute;l&eacute;ration est elle m&ecirc;me non
      nulle.
    </p>
    <div>
      <p>
        Le vecteur acc&eacute;l&eacute;ration pointe en permanence vers le
        centre du cercle ( l'acc&eacute;l&eacute;ration est dite
        centrip&egrave;te ) et poss&egrave;de une valeur &eacute;gale &agrave; :
      </p>
      <MathJaxContext>
        <MathJax>{"\\[a=\\frac{v^2}{r}\\]"}</MathJax>
      </MathJaxContext>

      <p>
        <p>o&ugrave; v est la vitesse ( m/s )</p>
        <p>R est le rayon du cercle de la trajectoire (m)</p>
      </p>
    </div>
    <h2>Le rep&egrave;re de Frenet</h2>
    <p>
      Les vecteurs associ&eacute;s aux acc&eacute;l&eacute;rations normales et
      tangentielles peuvent &ecirc;tre exprim&eacute;s &agrave; l'aide du
      rep&egrave;re de Frenet. Ce rep&egrave;re, qui peut &ecirc;tre
      utilis&eacute; pour toutes les trajectoires curvilignes, a une origine
      mobile correspondant au point en mouvement et poss&egrave;de deux vecteurs
      unitaires:
    </p>

    {/* <img src={Mcu2}></img> */}

    <p>vecteur normal: orient&eacute; vers le centre du cercle</p>
    <p>
      vecteur tangentiel: est tangent &agrave; la trajectoire et orient&eacute;
      dans le sens du mouvement{" "}
    </p>
    <p>
      Si l'on utilise le rep&egrave;re de frenet alors le vecteur
      acc&eacute;l&eacute;ration peut s'&eacute;crire:{" "}
    </p>
    <p>
      <MathJaxContext>
        <MathJax>{"\\[a=a_n\\vec{N}\\]"}</MathJax>
      </MathJaxContext>
    </p>
  </div>
);

export const htmlms = (
  <div className={""}>
    <h1>Mouvement rectiligne sinuso&iuml;dal</h1>
    <p>
      L'&eacute;quation horaire est une &eacute;quation sinuso&iuml;dale du type
      :
    </p>
    <MathJaxContext>
      <MathJax>{"\\[x=X_m\\cos(\\omega t+ \\phi)\\]"}</MathJax>
    </MathJaxContext>
    <p>
      C&rsquo;est le mouvement par exemple d&rsquo;une masse accroch&eacute;e
      &agrave; un ressort.
    </p>
    <ul>
      <li>
        La quantit&eacute; &omega; s&rsquo;appelle pulsation ( unité rad/s)
      </li>
      <li>
        X<sub>m</sub> est l&rsquo;amplitude maximale du mouvement d'oscillation
        du point M autours du point O.
      </li>
    </ul>
    <p>La fonction cosinus variant entre -1 et 1. x oscille entre -Xm et Xm.</p>
    <p>
      <li>
        <MathJaxContext>
          <MathJax inline={true}>{"\\(\\omega t+ \\phi\\)"}</MathJax>
        </MathJaxContext>
        : est la phase &agrave; l'instant t.
      </li>
      <li>
        <MathJaxContext>
          <MathJax inline={true}>{"\\(\\phi\\)"}</MathJax>
        </MathJaxContext>
        : est la phase à l&rsquo;origine (à t=0)
      </li>
      <div className={""}>
        <Image
          src="/images/cinematique/cinsinisoide.jpg" // Route of the image file
          height={400} // Desired size with correct aspect ratio
          width={400} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
    </p>
    <p>
      La fonction cosinus est une fonction periodique de periode 2&pi;. Si T est
      la p&eacute;riode temporelle du mouvement, on aura donc :
    </p>
    <MathJaxContext>
      <MathJax inline={false}>
        {
          "\\[[\\omega(t + T) + \\phi] - [\\omega(t) + \\phi] = 2\\pi  \\Rightarrow \\omega t = 2\\pi\\]"
        }
      </MathJax>
    </MathJaxContext>
    <p>
      La fr&eacute;quence f correspond au nombre d&rsquo;oscillations
      (d&rsquo;aller et retour) par seconde. On a donc :
    </p>
    <MathJaxContext>
      <MathJax inline={false}>{"\\[ f = \\frac 1T\\]"}</MathJax>
    </MathJaxContext>
    <p>La vitesse est obtenue en d&eacute;rivant la fonction x(t) :</p>
    <p>x= X m cos( t+ ) v= dx dt =- X m sin( t+ )</p>
    <p>
      L'acc&eacute;l&eacute;ration est obtenu en d&eacute;rivant la fonction
      v(t) :
    </p>
    <MathJaxContext>
      <MathJax inline={false}>
        {"\\[v = \\frac{dx}{dt} = -X_m\\omega \\sin(\\omega t + \\phi)\\]"}
      </MathJax>
    </MathJaxContext>
    <MathJaxContext>
      <MathJax inline={false}>
        {"\\[a = \\frac{dv}{dt} = -X_m\\omega^2 \\cos(\\omega t + \\phi)\\]"}
      </MathJax>
    </MathJaxContext>
    <p>L'&eacute;quation diff&eacute;rentielle du mouvement est donc:&nbsp;</p>
    <MathJaxContext>
      <MathJax inline={false}>{"\\[ x^{''}+\\omega^2 x = 0 \\]"}</MathJax>
    </MathJaxContext>
    <p>
      Ceci correspond &agrave; l'&eacute;quation diff&eacute;rentielle de
      l&rsquo;oscillateur harmonique.
    </p>
  </div>
);

<style jsx>
  {`
    h2 {
      margin-top: "40px";
    }
  `}
</style>;
