import { MathJax, MathJaxContext } from "better-react-mathjax";
import Image from "next/image";
import styles from "./htmls.module.css";

export const autoprotolyse = (
  <MathJaxContext>
    <div>
      <h2>Autoprotolyse de l'eau pure</h2>
      <h3>Définition de l'acide et de la base</h3>
      <h5>L'acide</h5>
      <p>
        Selon la définition de Br&oslash;nsted, un acide est une esp&egrave;ce
        chimique susceptible de perdre un ou plusieurs proton(s) (H+). selon la
        transformation (AH est un acide):
      </p>
      <MathJax inline={false}>{"\\[AH \\longrightarrow A^- + H ^+\\]"}</MathJax>
      <h5>La base</h5>
      <p>
        Toujours selon Br&oslash;nsted, une base est une esp&egrave;ce chimique
        susceptible de capter un ou plusieurs protons. Selon la transformation
        (B est un base )
      </p>
      <MathJax inline={false}>
        {"\\[B + H^+ \\longrightarrow  BH ^+\\]"}
      </MathJax>

      <h3>L'eau en tant qu'acide et en tant que base</h3>
      <h5>L'eau en tant qu' acide</h5>
      <p>
        L'eau H<sub>2</sub>O joue le r&ocirc;le d'un acide au sein du couple
        acide-base (H<sub>2</sub>O/OH<sup>-</sup>).
      </p>
      <p>
        La molécule d'eau c&egrave;de un proton H<sup>+</sup> pour former sa
        base conjuguée, l'ion hydroxyde de forme OH
        <sup>-</sup>.
      </p>
      <p>La demi équation de réaction associée est donc la suivante :</p>
      <MathJax inline={false}>
        {"\\[H_2O  \\longleftrightarrow OH^- + H ^+\\]"}
      </MathJax>
      <p>L'eau étant que acide, elle peut donc réagir avec B-</p>
      <MathJax inline={false}>
        {"\\[B + H^+  \\longleftrightarrow BH ^+\\]"}
      </MathJax>
      <p>B + H+BH+</p>
      <p>
        Par conséquent, en assemblant les deux demi équations de réactions,
        l'équation de réaction entre l'eau (en tant qu'acide) et cette base
        obtenue est alors:
      </p>
      <MathJax inline={false}>
        {"\\[B + H_2O  \\longleftrightarrow BH^+ + OH^-\\]"}
      </MathJax>
      <h5>L'eau en tant que base</h5>
      <p>
        L'eau joue également le r&ocirc;le d'une <strong>base </strong>au sein
        du couple acide base (H3O+/H2O)&nbsp;
      </p>
      <p>
        Dans ce cas de la molécule d'eau capte un proton H+ pour former son
        acide conjugué, l'ion oxonium de formule H3O+. la demi équation de
        réaction est alors la suivante&nbsp; :
      </p>
      <MathJax inline={false}>
        {"\\[H_2O + H^+  \\longleftrightarrow H_3O^+\\]"}
      </MathJax>
      <p>
        L'eau étant une base, elle peut donc réagir avec un acide AH dont la
        demi équation de réaction est :
      </p>
      <MathJax inline={false}>
        {"\\[AH  \\longleftrightarrow A^- + H ^+\\]"}
      </MathJax>
      <p>
        Par conséquent en assemblant ces deux demi équations de réaction,
        l'équation de réaction entre l'eau (en tant que base) et l'acide qui est
        en résulte est :
      </p>
      <MathJax inline={false}>
        {"\\[H_2O + AH  \\longleftrightarrow H_3O^+ + A ^-\\]"}
      </MathJax>
      <h5>L'eau est un ampholyte&nbsp;</h5>
      <p>
        Etant donné que, selon le couple acide base considéré, l'eau peut jouer
        le r&ocirc;le d'acide ou de base, on dit qu'elle est{" "}
        <strong>ampholyte</strong>
      </p>
      <p>
        A noter qu'il existe d'autres ampholytes, comme par exemple l'ion
        hydrogénocarbonate
        <MathJax inline={true}>{"\\(HCO_3^-\\)"}</MathJax>
        qui joue le r&ocirc;le d'un acide dans le couple
        <MathJax inline={true}>{"\\(HCO_3^-/CO_3^{2-}\\)"}</MathJax>
        et le r&ocirc;le d'une base dans le couple
        <MathJax inline={true}>{"\\(H_2CO_3/HCO_3^{-}\\)"}</MathJax>
      </p>
      <h3>L'autoprotolyse de l'eau&nbsp;</h3>
      <p>
        Ainsi, l'eau peut aussi bien jouer le r&ocirc;le d'un acide que jouer le
        r&ocirc;le d'une base. Comme les acides et les bases réagissent entre
        eux, l'eau peut donc réagir entre elle m&ecirc;me. Par conséquent, deux
        molécules d'eau vont pouvoir réagir ensemble, une des deux molécules
        réagissant en tant qu'acide et l'autre molécule d'eau réagissant en tant
        que base.
      </p>
      <p>Cela donne les deux demi-équations de réaction suivantes :</p>
      <MathJax inline={false}>
        {"\\[H_2O \\longleftrightarrow OH^- + H^+\\]"}
      </MathJax>
      <MathJax inline={false}>
        {"\\[H_2O + H^+ \\longleftrightarrow H_3O^+\\]"}
      </MathJax>
      <p>Et par conséquent, l'équation de réaction suivante est obtenue :</p>
      <MathJax inline={false}>
        {"\\[H_2O + H_2O \\longleftrightarrow H_3O^+ + OH^-\\]"}
      </MathJax>
      <p>Soit</p>
      <MathJax inline={false}>
        {"\\[2H_2O \\longleftrightarrow H_3O^+ + OH^-\\]"}
      </MathJax>
      <p>
        L'une des molécules d'eau va perdre un proton H+ et c'est l'autre
        molécule d'eau qui va capter ce proton H+, ce qui donne spontanément
        naissance &agrave; des ions hydroxyde et des ions oxonium : ce
        phénom&egrave;ne est appelé <strong>autoprotolyse de l'eau</strong>.
      </p>
      <h3>Autoprotolyse et conductivité de l'eau pure</h3>
      <p>
        Le phénom&egrave;ne d'autoprotolyse implique que l'eau pure n'existe pas
        puisque les molécules d'eau sont toujours accompagnées d'ions oxonium et
        d'ions hydroxyde. En raison de la présence de ces ions, l'eau n'est
        jamais totalement isolante et a donc une conductivité non nulle.
        Cependant,&nbsp; compte-tenu de la faible concentration de ces ions, la
        conductivité est également tr&egrave;s faible.
      </p>
      <h5>Le produit ionique de l'eau</h5>
      <p>
        L'équilibre qui existe entre l'eau et les ions produits par la réaction
        d'autoprotolyse de l'eau peut &ecirc;tre caractérisé par la relation
        suivante :
      </p>
      <MathJax inline={false}>
        {
          "\\[Ke = [H_3O^+][OH^-] \\space à \\space 25C \\space Ke = 10^{-14}\\]"
        }
      </MathJax>
      <MathJax inline={false}>{"\\[pKe = - \\log {Ke} = 14\\]"}</MathJax>
    </div>
  </MathJaxContext>
);

export const definitions = (
  <MathJaxContext>
    <div>
      <h2>1- Solutions aqueuses acides, basiques et neutres</h2>
      <p>
        Nous avons vu plus haut qu'une solution d'eau pure &agrave; 25&deg;C est
        &agrave; pH = 7 et contient des ions oxonium et hydroxyde en
        concentrations égales : [H3O+] = [OH-]. On dit que la solution est
        neutre.
      </p>
      <p>
        Toute solution pour laquelle
        <MathJax inline={true}>{"\\([H_3O^+] > [OH^-]\\)"}</MathJax>
        est acide.
      </p>
      <p>
        Toute solution pour laquelle
        <MathJax inline={true}>{"\\([OH^-] > [H_3O^+] \\)"}</MathJax>
        est basique.
      </p>
      <h3>a- Définition du pH</h3>
      <p>
        Si le pH d'une solution acide est faible, c'est parce qu'il
        lib&egrave;re des protons H+ selon l'équation :&nbsp;
      </p>
      <MathJax inline={false}>{"\\[AH \\longrightarrow  A^- + H^+\\]"}</MathJax>
      <p>donc la concentration des ions H+ augmente.</p>
      <p>
        &Agrave; l'opposé, si le pH d'une base est fort, c'est qu'elle capte les
        protons H<sup>+</sup>, ce qui fait baisser leur concentration. Il y a
        donc une relation entre le pH et la concentration des protons.
      </p>
      <p>
        Remarque : associés &agrave; l'eau, on note aussi les protons H
        <sup>+</sup>
        sous la forme d'ions oxonium H<sub>3</sub>O<sup>+</sup> .
      </p>
      <p>
        Au lycée, on se limitera &agrave; l'étude des solutions diluées de
        mono-acides et de monobases qui ne mettront en jeu qu'un seul
        proton.&nbsp;
      </p>
      <p>
        NB : une solution diluée est une solution dont la concentration est
        <MathJax inline={false}>
          {"\\[10^-5molL^{-1} < C_{solution} < 10^{-1}molL^{-1} \\]"}
        </MathJax>
        Le pH des solutions diluées est défini par l'expression simplifiée :
        <MathJax inline={false}>
          {
            "\\[pH = \\log {[H_3O+]}\\hspace{1cm} où \\hspace{1cm}  \\space [H_3O+] = 10^{-pH}\\]"
          }
        </MathJax>
        <li>Le symbole log représente le logarithme décimal.</li>
        <li>
          [H<sub>3</sub>O<sup>+</sup>] est le nombre sans dimension
          correspondant &agrave; la concentration molaire des ions oxonium en
          mol.L<sup>-1</sup>
        </li>
      </p>

      <p>Attention : le pH est un nombre sans dimension (pas d'unité).</p>
      <h3>b- Acides et Bases forts et faibles</h3>
      <h4>Acide fort - Acide faible</h4>
      <p>
        Pour nos explications, on considérera des monoacides : un seul H + est
        mis en jeu.
      </p>
      <h5>Acide Fort</h5>
      <p>
        Pour un acide fort AH, la transformation AH &rarr;A-+H+ est totale dans
        une solution aqueuse. Cela veut dire que sa réaction avec l'eau est
        totale : . Donc, si on dissout n moles d'un acide fort dans l'eau, alors
        il va se former n moles d' qui vont se combiner avec l'eau pour former n
        moles d'ions oxonium .
      </p>
      <p>
        Estimation du pH : soit c (en mol/L) la concentration d'un acide fort
        dissous dans l'eau. On a&nbsp; :
        <MathJax inline={false}>{"\\[[H_3O^+] = C\\]"}</MathJax>
        Comme le pH est donné par
        <MathJax inline={true}>
          {"\\(\\space pH = -\\log ([H_3O^+])\\)"}
        </MathJax>
        , il vient :<MathJax inline={false}>{"\\[pH = -\\log C\\]"}</MathJax>
      </p>
      <p>
        Exemples d'acides forts : acides chlorhydrique HCl , l'acide sulfurique
        <MathJax inline={true}>{"\\(H_2SO_4\\)"}</MathJax> et l'acide nitrique
        <MathJax inline={true}>{"\\(HNO_3\\)"}</MathJax>.
      </p>
      <h5>Acide Faible</h5>
      <p>
        Pour un acide faible AH, la réaction avec l'eau est limitée :
        <MathJax inline={false}>
          {"\\[AH + H_2O \\leftrightarrow A^- + H_3O^+\\]"}
        </MathJax>
      </p>
      <p>
        Cela veut dire que la forme basique est susceptible de réagir &agrave;
        nouveau avec pour redonner la forme acide de départ, selon la réaction
        inverse
        <MathJax inline={false}>
          {"\\[AH + H_2O \\leftarrow A^- + H_3O^+\\]"}
        </MathJax>
        . C'est pour cela que l'on utilise la notation
        <MathJax inline={true}>{"\\(\\leftrightarrow\\)"}</MathJax>.
      </p>
      <p>
        Les deux réactions sont en compétition et vont progressivement mener
        &agrave; un état d'équilibre chimique intermédiaire entre &laquo; tout
        l'acide a réagi &raquo; et &laquo; l'acide n'a pas réagi &raquo;. Si on
        dissout n moles d'un acide faible dans l'eau, on aura production de n'
        moles de
        <MathJax inline={true}>{"\\( [H_3O^+]\\)"}</MathJax>, avec 0 &lt; n'
        &lt; n.
      </p>
      <p>
        Exemples d'acides faibles : les acides carboxyliques (fonction ),
        l'acide fluorhydrique HF.
      </p>
      <h4>Base Fort - Base Faible</h4>
      <p>
        Toujours selon Br&oslash;nsted, une base est une esp&egrave;ce chimique
        susceptible de capter un ou plusieurs protons. Dans la pratique, ces
        protons peuvent &ecirc;tre pris &agrave; des molécules d'eau, formant
        alors des ions hydroxydes . On prendra en compte ici uniquement des
        monobases.
      </p>
      <h5>Base Forte</h5>
      <p>
        Pour une base forte A<sup>-</sup>, sa réaction avec l'eau est totale :
        <MathJax inline={false}>
          {"\\[A^- + H_2O \\rightarrow AH + OH^-\\]"}
        </MathJax>
      </p>
      <p>
        Si on dissout n moles d'une base forte dans l'eau, il y aura production
        de n moles de
        <MathJax inline={true}>{"\\([OH^-]\\)"}</MathJax>.
      </p>
      <p>
        Estimation du pH : soit c (en mol/L) la concentration d'une base forte
        dissoute dans l'eau. On a :
        <MathJax inline={true}>{"\\[[OH^-] = C \\]"}</MathJax>.
      </p>
      <MathJax inline={true}>
        {"\\( K_e = [H_3O^+][OH^-] = 10^{-14}\\)"}
      </MathJax>

      <p>En conséquence,</p>
      <MathJax inline={false}>
        {
          "\\[[H_3O^+] = \\frac {Ke}{[OH^-]} \\hspace{1cm} et\\space comme \\hspace{1cm} pH = - \\ log ([H_3O^+])\\]"
        }
      </MathJax>
      <MathJax inline={false}>
        {
          "\\[ on\\space en \\space deduit \\space  pH = -\\ log \\frac {Ke}{[OH^-]} = -\\log {Ke} -\\log([HO^-]))\\]"
        }
      </MathJax>
      <MathJax inline={false}>
        {"\\[ et \\space ainsi  \\space  pH = 14 + \\ logC \\]"}
      </MathJax>
      <p>
        Exemple de bases fortes : hydroxyde de sodium (soude) NaOH, hydroxyde de
        potassium (potasse) KOH.
      </p>
      <h5>Base Faible</h5>
      <p>
        Pour une base faible A&ndash;, sa réaction avec l'eau est limitée :
        <MathJax inline={false}>
          {"\\[ A^- + H_2O \\leftrightarrow AH + HO^-\\]"}
        </MathJax>
      </p>
      <p>
        Si on dissout n moles d'une base faible dans l'eau, il y aura production
        de n' moles d'
        <MathJax inline={true}>{"\\([OH^-]\\)"}</MathJax>, avec 0 &lt; n' &lt; n
        .
      </p>
      <p>
        Exemple de bases faibles : les ions carboxylates (fonction -COO
        <sup>-</sup> ), c'est-&agrave;-dire les bases conjuguées des acides
        carboxyliques.
      </p>
      <h2>2- Les lois de la conservation</h2>
      <h4>Loi de la conservation de la mati&egrave;re</h4>
      <p>
        Lors d'une transformation, aucune mati&egrave;re n'est perdue et aucune
        mati&egrave;re n'est créée; la mati&egrave;re est transformée de son
        état initial vers un état final.
      </p>
      <p>&laquo;Rien ne se perd, rien ne se crée, tout se transforme&raquo;</p>
      <MathJax inline={false}>{"\\[C = [AH] + [A^-]\\]"}</MathJax>

      <p>
        C: concentration totale. [AH]: concentration du forme restante. [A-]:
        concentration du forme ionisée.
      </p>
      <h4>La condition d'électroneutralité</h4>
      <p>La loi</p>
      <p>
        Toute solution aqueuse ionique est électriquement neutre. Le nombre de
        charges élémentaires positives est donc égal au nombre de charges
        élémentaires négatives Dans toute solution:
      </p>
      <p>
        &nbsp;Nombre de charges élémentaires positives = nombre de charges
        élémentaires négatives&nbsp;
      </p>

      <MathJax inline={false}>{"\\[\\Sigma [X^-] = \\Sigma [X^+]\\]"}</MathJax>

      <p>Exemples</p>
      <p>&nbsp;1) Solution aqueuse de chlorure de sodium&nbsp;</p>
      <p>
        Cette solution renferme les ions Na<sup>+</sup> et Cl<sup>-</sup>{" "}
        provenant de la dissociation du sel et les ions H<sup>3</sup>O
        <sup>+</sup> et OH<sup>-</sup> provenant de l'autoprotolyse de
        l'eau:&nbsp;
      </p>
      <p>Condition d'électroneutralité:</p>
      <MathJax inline={false}>
        {"\\[[Na^+] + [H_3O^+] = [Cl^-]+[OH^-]\\]"}
      </MathJax>
      <p>2) Solution aqueuse de bromure de calcium&nbsp;</p>
      <p>
        Cette solution renferme les ions Ca<sup>2+</sup> et Br<sup>-</sup>{" "}
        provenant de la dissociation du sel&nbsp; et les ions H<sup>3</sup>O
        <sup>+</sup> et OH<sup>-</sup> provenant de l'autoprotolyse de l'eau:
      </p>
      <p>Condition d'électroneutralité:</p>
      <MathJax inline={false}>
        {"\\[[Ca^+] + [H_3O^+] = [Br^-]+[OH^-]\\]"}
      </MathJax>
      <h2>3- Le taux d'avancement final d'une réaction</h2>
      <p>
        Lorsqu'un syst&egrave;me chimique est le si&egrave;ge d'une
        transformation chimique, celui-ci évolue entre un état initial
        (quantités de mati&egrave;re des réactifs et des produits introduits au
        début de la réaction) et un état final (quantités de mati&egrave;re des
        réactifs qui n'ont pas totalement réagi et celles des produits qui ont
        été formés).
      </p>
      <h4>Réaction totale ou non totale</h4>
      <p>
        En fonction de la composition de l'état final, on distingue les
        réactions totales des réactions non totales.
      </p>
      <p>
        Une réaction est totale si &agrave; la fin de la réaction au moins un
        des deux réactifs est compl&egrave;tement consommé : il s'agit du
        réactif limitant.
      </p>
      <p>
        Une réaction est non totale si tous les réactifs et les produits sont
        présents &agrave; la fin de la réaction. L'état final est un état
        d'équilibre.
      </p>
      <p>
        L'avancement maximal correspond &agrave; ce qu'on obtiendrait si la
        réaction était totale, il tient compte du réactif limitant. L'avancement
        final correspond &agrave; ce que l'on va réellement obtenir si la
        réaction n'est pas totale.
      </p>
      <p>
        La comparaison de l'avancement maximal xmax et de l'avancement final xf
        permet de déterminer si la réaction est totale ou non totale.
      </p>
      <ul>
        <li>Si xmax &gt; xf, la réaction est non totale.</li>
        <li>Si xmax = xf, la réaction est totale.</li>
      </ul>
      <p>
        Les avancements sont exprimés en mole et sont déterminés gr&acirc;ce au
        tableau d'avancement.
      </p>
      <h4>Définition du taux d'avancement final</h4>
      <p>
        Le taux d'avancement final (ou coefficient d'ionisation) , noté &tau;,
        est égal au rapport de l'avancement final sur l'avancement maximal.
      </p>
      <MathJax inline={false}>{"\\[\\tau = \\frac{X_f}{X_{max}}\\]"}</MathJax>

      <p>
        On peut alors définir un crit&egrave;re pour évaluer si une réaction est
        totale ou non totale.
      </p>
      <ul>
        <li>Si 1 &gt; &tau; &gt; 0, la réaction est non totale.</li>
        <li>Si &tau; = 1, la réaction est totale.</li>
      </ul>
      <p>
        Le taux d'avancement final est compris entre 0 et 1 (car x max est
        toujours supérieur ou égal &agrave; xf), on peut donc également exprimer
        sa valeur en pourcentage (1 = 100 % ; 0,5 = 50 % ; 0 = 0 %).
      </p>
      <p>
        Remarque: Dans les acides bases on parle de coefficient d'ionisation au
        lieu de taux d'avancement :
      </p>
      <MathJax inline={false}>
        {"\\[\\alpha = \\frac{forme ionisé}{concentration\\space initiale}\\]"}
      </MathJax>

      <h4>Le principe de Le Chatelier</h4>
      <p>
        Le principe de Le Chatelier permet de prédire, de fa&ccedil;on
        qualitative, le sens de la réaction (directe ou inverse) qui sera
        favorisée lorsque les conditions d'un syst&egrave;me &agrave;
        l'équilibre sont modifiées.
      </p>
      <p>
        L'état d'équilibre suppose que les réactions directes et inverses se
        déroulent &agrave; la m&ecirc;me vitesse. Toutefois, cet équilibre est
        fragile. Si les conditions expérimentales dans lesquelles se déroule la
        réaction chimique sont perturbées, l'équilibre sera brisé et le
        syst&egrave;me s'ajuste pour obtenir un nouvel état d'équilibre. Le
        principe de Le Chatelier permet de prédire, qualitativement, dans quel
        sens un syst&egrave;me en équilibre évoluera si ses conditions
        expérimentales sont modifiées.
      </p>
      <p>Le principe de Le Chatelier stipule que:</p>
      <p>
        &laquo;Si on tend &agrave; modifier les conditions d'un syst&egrave;me
        en équilibre, il réagit de fa&ccedil;on &agrave; s'opposer partiellement
        aux changements qu'on lui impose jusqu'&agrave; l'établissement d'un
        nouvel état d'équilibre.&raquo;
      </p>
      <h4>Attention!</h4>
      <p>L'ajout d'un catalyseur n'influence pas l'équilibre chimique.</p>
    </div>
  </MathJaxContext>
);

export const coupleAcideBase = (
  <MathJaxContext>
    <div>
      <h2>Définition des couples acide base</h2>
      <p>
        L'acide ammonium peut libérer un proton selon la demi-équation suivante
        :
      </p>
      <MathJax inline={false}>
        {"\\[NH_4^+ \\rightarrow NH_3 + H^+ \\]"}
      </MathJax>
      <p>
        La base ammoniac peut capter un proton selon la demi équation suivante
      </p>
      <MathJax inline={false}>
        {"\\[NH_3 + H^+   \\rightarrow NH_4^+\\]"}
      </MathJax>
      <p>
        Ces deux demi équations sont inverses l'une de l'autre ; on peut écrire
        :
      </p>
      <MathJax inline={false}>
        {"\\[NH_4^+ \\leftrightarrow NH_3 + H^+ \\]"}
      </MathJax>
      <p>
        Pour passer de l'espace acide
        <MathJax inline={true}>{"\\( NH_4^+\\)"}</MathJax>
        &agrave; l'esp&egrave;ce basique
        <MathJax inline={true}>{"\\( NH_3\\)"}</MathJax>, il y a eu échange ( ou
        transfert ) d'un proton H<sup>+</sup> : on dit que NH<sub>4</sub>
        <sup>+</sup> /NH<sub>4</sub> forme un couple acide/base.
      </p>
      <p>
        Un couple acide/base, noté AH/A<sup>-</sup> , est l'ensemble d'une
        esp&egrave;ce acide et d'une esp&egrave;ce basique entre lesquelles a
        lieu un transfert de proton pour passer de l'une &agrave; l'autre.
      </p>
      <p>Un tel couple est caractérisé par la demi équation acido basique.</p>
      <MathJax inline={false}>
        {"\\[AH + H_2O \\leftrightarrow A^- + H_3O^+\\]"}
      </MathJax>
      <p>Example</p>
      <Image
        src="/images/acide-base/ab-1.png" // Route of the image file
        width={634} // Desired size with correct aspect ratio
        height={179} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <br />
      <h2>Les reactions acido basique</h2>
      <p>
        Un acide A<sub>1</sub>H d'un couple (noté couple (1) ) peut dans
        certaines conditions, réagir avec la base A<sub>2</sub>
        <sup>-</sup> d'un couple (2). Lors de cette réaction un échange de
        proton entre A<sub>1</sub>H et A<sub>2</sub>- selon l'équation chimique
        :
      </p>
      <MathJax inline={false}>
        {"\\[A_1H + A_2^- \\leftrightarrow A_1^- + A_2H\\]"}
      </MathJax>
      <p>
        Au cours d'une réaction acido basique, il y a un transfert de proton
        d'un couple vers un autre.
      </p>
      <p>Example</p>
      <p>
        Lorsqu'on mélange l'acide benzo&iuml;que
        <MathJax inline={true}>{"\\(C_2H_5COOH \\)"}</MathJax>
        et de la soude&nbsp; (Na<sup>+</sup>, OH<sup>-</sup>) a lieu une
        réaction acido-basique entre l'acide benzo&iuml;que et l'ion hydroxyde :
      </p>
      <ul>
        <li>
          L'acide benzo&iuml;que est capable de libérer un proton H<sup>+</sup>.
          <MathJax inline={false}>
            {"\\[C_2H_5COOH \\leftrightarrow C_2H_5COO^- + H^+\\]"}
          </MathJax>
        </li>
      </ul>
      <ul>
        <li>
          et l'ion hydroxyde OH- est une base capable de capter un proton H+ :
          <MathJax inline={false}>
            {"\\[OH^- + H^+ \\leftrightarrow  2H_2O\\]"}
          </MathJax>
        </li>
      </ul>
      <p>La reaction bilan :</p>
      <MathJax inline={false}>
        {"\\[C_2H_5COOH + OH^-\\leftrightarrow C_2H_5COO^- + H_2O\\]"}
      </MathJax>
      <h2>Constante d'acidite</h2>
      <p>
        Définition : pour un couple acide-base AH/A-, on appelle constante
        d'acidité KA la quantité :
      </p>
      <MathJax inline={false}>
        {"\\[ K_a = \\frac {[A^-][H_3O^+]}{[AH]}\\]"}
      </MathJax>
      <p>
        Pour un couple donné, la constante d'acidité ne dépend que de la
        température. Celle-ci sera fixée &agrave; 25 &deg;C.
        Concr&egrave;tement, est indépendante des conditions initiales,
        c'est-&agrave;-dire de la concentration initiale en acide faible
        dissous, contrairement &agrave; .
      </p>
      <p>
        Dans cette expression, les concentrations doivent obligatoirement
        &ecirc;tre exprimées en mol/L et &agrave; l'équilibre chimique,
        d'o&ugrave; l'indice (eq). est sans dimension.
      </p>
      <h4>Le pKa</h4>
      <p>
        Définition : De la m&ecirc;me mani&egrave;re que l'on définit le pH. On
        définit le pKa par :
        <MathJax inline={false}>{"\\[ pK_a = -\\log K_a\\]"}</MathJax>
      </p>
      <p>
        échelle de pKa : Le Ka et par extension le pKa sont de bonnes &laquo;
        étiquettes &raquo; afin de cataloguer les couples acide/base. On
        construit alors une échelle de pKa:
      </p>
      <Image
        src="/images/acide-base/ab-2.png" // Route of the image file
        width={606} // Desired size with correct aspect ratio
        height={211} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <p>
        Remarque : la notion de Ka (ou de pKa ) n'a pas de sens pour un acide
        fort ou une base forte. D'autre part, on parle de Ka pour un couple
        acide/base, et pas seulement pour l'acide.
      </p>
      <h4>Diagramme de predominance</h4>
      <p>&Agrave; partir de l'expression du Ka, on établit la relation :</p>
      <MathJax inline={false}>
        {"\\[ pH = -\\log K_a + \\log \\frac {[A^-]}{[AH]}\\]"}
      </MathJax>
      <p>
        Diagramme de prédominance : en raisonnant par rapport &agrave; cette
        formule, on établit que:
      </p>
      <li>
        Si pH &lt; pKa
        <MathJax inline={false}>
          {
            "\\[ \\log \\frac {[A^-]}{[AH]} < 0, \\space ou \\space \\frac {[A^-]}{[AH]} < 1 \\space donc \\space [A^-] < [AH] \\]"
          }
        </MathJax>
      </li>
      <li>
        Si pH = pKa
        <MathJax inline={false}>
          {
            "\\[ \\log \\frac {[A^-]}{[AH]} = 0, \\space ou \\space \\frac {[A^-]}{[AH]} = 1 \\space donc \\space [A^-] = [AH] \\]"
          }
        </MathJax>
      </li>
      <li>
        Si pH &gt; pKa
        <MathJax inline={false}>
          {
            "\\[ \\log \\frac {[A^-]}{[AH]} > 0, \\space ou \\space \\frac {[A^-]}{[AH]} > 1 \\space donc \\space [A^-] > [AH] \\]"
          }
        </MathJax>
      </li>
      <p>Pour un couple donné, on a alors le diagramme de prédominance :</p>
      <Image
        src="/images/acide-base/ab-3.png" // Route of the image file
        width={524} // Desired size with correct aspect ratio
        height={181} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <p>
        Connaissant le pH et le pKa, on peut donc indiquer quelle forme domine :
        AH ou A<sup>-</sup>.
      </p>
      <h2>Solution tampon</h2>
      <p>Definition</p>
      <p>
        Une solution tampon est constituée d'un acide faible et de sa base
        conjuguée dans des concentrations assez proches. Le pH d'une solution
        tampon est donc voisin du pKa de ce couple. La solution tampon est
        résistante des petits changements du pH.
      </p>
    </div>
  </MathJaxContext>
);

export const titrage = (
  <MathJaxContext>
    <div>
      <h1>Titrage&nbsp;</h1>
      <h2>1- Titrage avec suivi de pH</h2>
      <h3>Principe du titrage avec suivi pH-métrique</h3>
      <p>
        Un titrage (ou dosage) est une manipulation qui permet de déterminer la
        concentration d'une esp&egrave;ce en solution.
      </p>
      <p>
        Un titrage avec suivi pH-métrique (ou titrage pH-métrique) a lieu au
        cours d'une réaction entre un acide et une base.
      </p>
      <p>
        Une solution SA contenant un acide AH de concentration CA inconnue
        (solution titrée).
      </p>
      <p>
        Une solution SB contenant une base B de concentration CB connue
        (solution titrante).
      </p>
      <p>
        Au cours de ce titrage, on étudie la variation de pH de la solution
        titrée acide au fur et &agrave; mesure que la solution de base titrante
        de concentration connue est versée. On va obtenir un saut de pH qui va
        nous permettre de retrouver indirectement la concentration en quantité
        de mati&egrave;re recherchée.
      </p>
      <p>Remarque</p>
      <p>
        On peut aussi déterminer la concentration d'une base par titrage
        pH-métrique. Pour titrer une base avec un acide, la base est dans la
        solution titrée et l'acide est la solution titrante.
      </p>
      <h3>La réalisation du titrage avec suivi pH-métrique</h3>
      <p>a. Matériel et solutions utilisés</p>
      <p>Matériel </p>
      <ul>
        Le titrage d'une solution nécessite l'utilisation du matériel de chimie
        suivant.
        <li>Bécher</li>
        <li>Burette graduée</li>
        <li>Agitateur magnétique + barreau aimanté</li>
        <li>Support pour la burette graduée</li>
        <li>Pipette jaugée + pipeteur</li>
        <li>Eau distillée</li>
        <li>pH-m&egrave;tre</li>
        <li>Solutions utilisées</li>
      </ul>
      <p>Le titrage nécessite deux solutions : une titrée et une titrante.</p>
      <p>Solution titrée</p>
      <p>
        La solution SA contient un acide AH de concentration en quantité de
        mati&egrave;re CA (en mol&middot;L<sup>-1</sup>) : c'est la
        concentration du réactif titré A. La concentration CA est inconnue et on
        cherche &agrave; l'estimer.
      </p>
      <p>
        Cette solution a pour volume VA (en L) : c'est le volume fixe de la
        solution titrée au début de la manipulation, qui se trouve dans le
        bécher.
      </p>
      <p>Solution titrante</p>
      <p>
        La solution SB contient une base B de concentration en quantité de
        mati&egrave;re CB (en mol&middot;L<sup>-1</sup>) : c'est la
        concentration de réactif titrant B. La concentration CB doit &ecirc;tre
        connue avec précision.
      </p>
      <p>
        Cette solution a pour volume VB (en L) : c'est le volume de réactif
        titrant qu'on va ajouter progressivement dans le bécher.
      </p>
      <h3>Protocole expérimental</h3>
      <p>
        Pour réaliser un titrage avec suivi pH-métrique, il faut réaliser les
        étapes suivantes.
      </p>
      <p>étape 1 &ndash; Réaliser le montage.</p>
      <Image
        src="/images/acide-base/ab-4.png" // Route of the image file
        width={673} // Desired size with correct aspect ratio
        height={547} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <p>étape 2 &ndash; Remplir la burette.</p>
      <p>
        On verse la solution titrante SB contenant la base dans la burette
        graduée.
      </p>
      <p>étape 3 &ndash; Remplir le bécher.</p>
      <p>
        Le volume VA de la solution titrante SA contenant l'acide doit
        &ecirc;tre précis.
      </p>
      <p>
        On le prél&egrave;ve &agrave; l'aide d'une pipette jaugée et d'un
        pipeteur. On l'introduit ensuite dans le bécher.
      </p>
      <p>étape 4 &ndash; Réaliser le titrage.</p>
      <p>
        On met en route l'agitateur magnétique et on allume le pH-m&egrave;tre.
      </p>
      <p>
        On fait ensuite réagir la solution SB contenue dans la burette (réactif
        titrant) avec la solution SA contenue dans le bécher (réactif titré).
      </p>
      <p>
        On introduit pour cela le réactif titrant B dans le bécher par paliers
        de 1 mL, en ouvrant lég&egrave;rement le robinet de la burette.
      </p>
      <p>
        En parall&egrave;le, on note la valeur affichée par le pH-m&egrave;tre
        ainsi que le volume de solution titrante versé. Pour chaque volume
        versé, on note le pH de la solution située dans le bécher en prenant
        soin d'attendre que la valeur se stabilise.
      </p>
      <p>
        Lorsqu'on remarque que le pH évolue de mani&egrave;re plus importante,
        on fait alors couler la solution titrante par paliers de 0,5 mL
        (alentours du saut de pH).
      </p>
      <p>
        Lorsque le pH ne varie plus de mani&egrave;re importante, on peut
        effectuer de nouveau des paliers de 1 mL.
      </p>
      <p>
        On trace ensuite la courbe représentant le pH en fonction du volume de
        la solution B versée.
      </p>
      <h3>Exploiter le titrage avec suivi pH-métrique</h3>
      <p>a. Expression de la concentration inconnue</p>
      <p>
        Lors du titrage d'un acide AH, ce dernier est progressivement consommé
        par l'ajout de la base titrante B, de mani&egrave;re irréversible .
        Quand tout l'acide AH est consommé, on atteint l'équivalence.
      </p>
      <p>
        Lorsque la solution titrante qui contient le réactif basique B est
        introduite dans la solution titrée contenant le réactif acide AH, il se
        produit la réaction suivante :
      </p>
      <MathJax inline={false}>
        {"\\[AH + B \\rightarrow A^{-} + BH^+\\]"}
      </MathJax>
      <p>
        &Agrave; l'équivalence, les réactifs A et B ont été introduits dans les
        proportions st&oelig;chiométriques, on peut donc écrire la relation
        suivante.
      </p>
      <MathJax inline={false}>{"\\[  C_aV_a = C_bV_b \\]"}</MathJax>
      <ul>
        avec :
        <li>
          &nbsp;CA et CB les concentrations en quantité de mati&egrave;re des
          réactifs, en mole par litre (mol&middot;L&minus;1)
        </li>
        <li>&nbsp;VA le volume de la solution acide titrée, en litre (L)</li>
        <li>
          &nbsp;VB le volume de la solution basique titrante versé &agrave;
          l'équivalence, en litre (L)
        </li>
      </ul>
      <p>On en déduit ainsi la concentration recherchée .</p>
      <h3>
        Détermination du point d'équivalence par la méthode des tangents
        parall&egrave;les
      </h3>
      <p>
        On trace une tangente &agrave; la courbe de part et d'autre du saut de
        pH. Ces deux tangentes doivent &ecirc;tre parall&egrave;les entre elles.
      </p>
      <p>
        On trace ensuite une droite perpendiculaire &agrave; ces deux tangentes.
        Au milieu de cette perpendiculaire, on trace une troisi&egrave;me
        tangente parall&egrave;le aux deux autres.
      </p>
      <p>
        Le point équivalent correspond au point d'intersection entre cette
        troisi&egrave;me tangente et la courbe.
      </p>
      <Image
        src="/images/acide-base/ab-5.png" // Route of the image file
        width={656} // Desired size with correct aspect ratio
        height={529} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h3>Le point de demi équivalence</h3>
      <p>
        Le point de demi équivalence est quand le volume versé est la moitié du
        volume versé &agrave; l'équivalence :
      </p>
      <MathJax inline={false}>
        {"\\[  V_{a\\frac 12} = \\frac {V_b(eq)}2 \\]"}
      </MathJax>
      <p>
        Autrement dit, la quantité versée neutralise la moitié de l'acide (ou la
        base) dose.
      </p>
      <MathJax inline={false}>{"\\[ \\frac {C_aV_a}2 = C_bV_b \\]"}</MathJax>
      <p>
        Pour un acide faible ou base faible le pH en ce point est égal au pka du
        couple.&nbsp;
      </p>
      <MathJax inline={false}>{"\\[  pH_{\\frac 12} = pK_a \\]"}</MathJax>
      <p>Remarque</p>
      <p>
        Lors du titrage d'une base, la courbe de suivi pH-métrique est
        décroissante.
      </p>
      <h3>
        Les différents types de dosages/ titrages et leurs graphes particuliers
        :
      </h3>
      <h4>1- Titrage Acide fort par base forte</h4>
      <p>
        <div className={styles.floatimg}>
          <Image
            src="/images/acide-base/ab-6.png" // Route of the image file
            width={289} // Desired size with correct aspect ratio
            height={187} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>{" "}
        Graphe commen&ccedil;ant par un pH aux environs de 1 ou 2 et terminant
        vers 13 ou 14, le pH d'équivalence est proche de 7.
      </p>
      <p>Equation de la reaction</p>
      <MathJax inline={false}>
        {"\\[  H_2O^+ + OH^- \\longrightarrow 2H_2O \\]"}
      </MathJax>
      <h4>2- Titrage Acide Faible par Base Forte</h4>
      <p>
        <div className={styles.floatimg}>
          <Image
            src="/images/acide-base/aB-ab-7.png" // Route of the image file
            width={283} // Desired size with correct aspect ratio
            height={178} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>{" "}
        Le Graphe débute avec un pH basique et le point d'équivalence se trouve
        en milieu acide (pH inférieur &agrave; 7).
      </p>
      <p>Equation de la reaction</p>
      <MathJax inline={false}>
        {"\\[  AH + OH^- \\longrightarrow A^- + H_3O^+ \\]"}
      </MathJax>{" "}
      <p>
        La réaction responsable de la basicité du milieu &agrave; l'équivalence:
      </p>
      <MathJax inline={false}>
        {"\\[  A^- + H_3O^+ \\longrightarrow AH + H_2O \\]"}
      </MathJax>
      <h4>3- Titrage Base Faible par Acide Fort</h4>
      <p>
        <div className={styles.floatimg}>
          <Image
            src="/images/acide-base/bA-ab-8.png" // Route of the image file
            width={287} // Desired size with correct aspect ratio
            height={169} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>{" "}
        Le Graphe débute avec un pH basique et le point d'équivalence se trouve
        en milieu acide (pH inférieur &agrave; 7).
      </p>
      <p>Equation de la reaction&nbsp;</p>
      <MathJax inline={false}>
        {"\\[  B + H_3O^+ \\longrightarrow BH^+ + H_2O \\]"}
      </MathJax>
      <p>
        La réaction responsable de l'acidité du milieu &agrave; l'équivalence:
      </p>
      <MathJax inline={false}>
        {"\\[  BH^+ + OH^- \\longrightarrow B + H_2O \\]"}
      </MathJax>
      <h2>2- Titrage calorimétrique</h2>
      <p>
        Dans le cas d'un titrage colorimétrique, l'équivalence est repérée par
        un changement de teinte du milieu réactionnel appelé virage. Quand
        l'esp&egrave;ce titrante est incolore ou tr&egrave;s peu colorée, un
        indicateur coloré peut &ecirc;tre ajouté &agrave; la solution titrée.
        Cette esp&egrave;ce, introduite en petite quantité, change brutalement
        de teinte au moment de l'équivalence.
      </p>
      <h3>Choix d'un indicateur</h3>
      <p>
        Pour qu'un indicateur soit considéré comme valable, il faut que sa zone
        de virage (= variation de pH sur laquelle il change de couleur) soit
        comprise dans la portion verticale du graphe.
      </p>
      <p>Quelques indicateurs</p>
      <Image
        src="/images/acide-base/indi-ab-9.png" // Route of the image file
        width={443} // Desired size with correct aspect ratio
        height={190} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  </MathJaxContext>
);
