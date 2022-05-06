import { MathJax, MathJaxContext } from "better-react-mathjax";
import Image from "next/image";
import styles from "./htmls.module.css";

export const acideCarboxylique = (
  <MathJaxContext>
    <div>
      <h1>Acides carboxyliques et leurs dérivés</h1>
      <p>
        Les acides carboxyliques possèdent le groupement fonctionnel COOH. Ce
        sont des acides faibles. Ils peuvent être transformés en produits
        dérivés tels que : <strong>esters</strong>,{" "}
        <strong>anhydrides d'acides</strong>,
        <strong>halogénures d'acides</strong>, <strong>amides</strong> et les
        <strong>nitriles</strong>.
      </p>
      <h2>1 - Les dérivés des acides carboxyliques</h2>
      <h3>1- Les chlorure d’acyle</h3>
      <h4>a. Obtention</h4>
      <p>On peut les obtenir par l'action sur un acide de :</p>
      <ol>
        <li>
          SOCl<sub>2</sub> (chlorure de thionyle)
        </li>
      </ol>
      <p>
        <MathJax>
          {
            "\\[RCOOH + SOCl_2 \\rightarrow RCOCl\\space (Chlorure \\space d'acyle \\space ou \\space d'acide)+HCl+SO_2 \\]"
          }
        </MathJax>
      </p>
      <ol>
        <li>
          PCl<sub>5</sub> (pentachlorure de phosphore)
          <p>
            <MathJax>
              {"\\[R-COOH + PCl_5 \\rightarrow R-COCl+POCl_3+HCl \\]"}
            </MathJax>
          </p>
          <ol>
            <li>
              PCl<sub>3</sub> (trichlorure de phosphore)
              <p>
                <MathJax>
                  {"\\[R-COOH + PCl_3 \\rightarrow R-COCl+POCl+HCl \\]"}
                </MathJax>
              </p>
            </li>
          </ol>
        </li>
      </ol>
      <h4>b. Nomenclature</h4>
      <p>
        Le nom d'un groupe acyle s'obtient en remplaçant la terminaison oïque de
      </p>
      <p>l'acide par la terminaison oyle .</p>
      <p>Exemple:</p>
      <p>
        CH<sub>3</sub>COCl (chlorure d’ethanoyle)
      </p>
      <p>
        CH<sub>3</sub>CH<sub>2</sub>COCl (chlorure de propanoyle)
      </p>
      <h3>2- Anhydride d’acide</h3>
      <h4>a. Obtention</h4>
      <p>
        Ils proviennent de la déshydratation intermoléculaire de deux molécules
        d'acide.
      </p>
      <p>
        <MathJax>
          {
            "\\[RCOOH+RCOOH \\rightarrow R-CO-O-CO-R(Angydride\\space d'acide)+H_2O \\]"
          }
        </MathJax>
      </p>
      <h4>b. Nomenclature</h4>
      <p>
        Le nom de l'anhydride est obtenu à partir des règles suivantes:Si les
        deux molécules d'acides déshydratés sont les mêmes (anhydrides
        symétriques), le mot acide est remplacé par anhydride.
      </p>
      <p>Exemple</p>
      <p>
        CH<sub>3</sub>-CO-O-CO-CH<sub>3</sub>: anhydride ethanoique (ou anhdride
        acetique)
      </p>
      <p>
        Si les deux molécules d'acides déshydratés sont différentes (anhydrides
        mixtes), le nom de l'anhydride devient de la forme: anhydride alcan
        <strong>oïque </strong>alcan<strong>oïque</strong>.
      </p>
      <p>Exemple:</p>
      <p>
        CH<sub>3</sub>-CO-O-CO-CH<sub>2</sub>-CH<sub>3</sub> anhydride
        ethanoique propanoique
      </p>
      <h2>2 - Estérification et hydrolyse de l’ester</h2>
      <h3>Esterification</h3>
      <p>
        Les esters sont en général des liquides (à pression et température
        usuelles), assez volatils, à odeur fruitée et très peu solubles dans
        l'eau (contrairement
      </p>
      <p>aux acides et aux alcools dont ils dérivent).</p>
      <ol>
        <li>Equation de la reaction</li>
      </ol>
      <p>
        L'estérification est la réaction qui permet d'obtenir un ester. On peut,
        pour cela faire réagir un acide carboxylique R—COOH avec un alcool
        R'—OH. Cette réaction conduit à un ester R—COO—R' et de l'eau suivant
        l'équation:
      </p>
      <p>
        <MathJax>{"\\[RCOOH + R'-OH\\leftrightarrow RCOOR'+H_2O  \\]"}</MathJax>
      </p>
      <p>
        La réaction en sens inverse entre l'ester et l'eau qui conduit à un
        alcool et à un acide carboxylique est appelée hydrolyse de l'ester et se
        produit simultanément.
      </p>
      <p>2. Rendement de l’esterification</p>
      <p>
        Le rendement de l'estérification est le rapport entre la quantité de
        matière d'ester effectivement obtenue n ef et la quantité de matière
        d'ester que l'on obtiendrait si la réaction était totale n t .
      </p>
      <h3>B. Hydrolyse</h3>
      <ol>
        <li>Equation de la reaction</li>
      </ol>
      <p>
        L’hydrolyse est la réaction entre l’ester et l'eau conduit à un alcool
        et à un acide carboxylique. C'est la réaction inverse de
        l'estérification. Elle se produit simultanément avec l'estérification.
      </p>
      <p>
        RCOO-R’ + H<sub>2</sub>O ⇌ R-COOH + R’-OH
      </p>
      <p>C. l’equilibre d’esterification hydrolyse</p>
      <p>L’estérification et hydrolyse constituent une réaction réversible</p>
      <p>
        conduisant à un équilibre chimique où les quatre composés coexistent
        dans des proportions constantes (en fait il s'agit d'un équilibre
        dynamique durant lequel les deux réactions continuent d'avoir lieu mais
        avec des vitesses égales). L'équation s'écrit :
      </p>
      <p>
        <MathJax>{"\\[RCOOH + R'-OH\\leftrightarrow RCOOR'+H_2O  \\]"}</MathJax>
      </p>
      <p>Esterification</p>
      <p>La constante d'équilibre K s'écrit :</p>
      <p>
        <MathJax>
          {
            "\\[K=\\frac {[R-COO-R']}{[RCOOH][R'OH]} \\space  ou \\space K = \\frac {n_{ester}.n_{eau}}{n_{acide}.n_{alcool}} \\space si \\space l'eau \\space n'est \\space pas \\space un \\space solvant\\]"
          }
        </MathJax>
      </p>
      <p>
        <MathJax>{"\\[ K=\\frac {\\tau^2}{(1-\\tau)^2}  \\]"}</MathJax>
        &tau; : est le taux d'avancement
      </p>
      <p>
        D. Properties des réactions d'estérification et d'hydrolyse de l’ester
      </p>
      <p>Ces deux réactions sont :</p>
      <ul>
        <li>Lentes</li>
        <li>Limitées par leur réaction inverse</li>
        <li>
          Athermique : Il ne necessite pas la chaleur et elle ne la degage pas
        </li>
      </ul>
      <h2>
        Influence de certaines facteurs sur les réactions d'estérifications et
        d’hydrolyse de l’ester
      </h2>
      <p>
        Ces facteurs peuvent modifier la vitesse de réaction ou la composition
        du milieu réactionnel à l'équilibre.
      </p>
      <h3>1 - influence de la temperature</h3>
      <p>
        La température n' a pas d’influence sur le taux d’avancement final mais
        l’augmentation de la température augmente la vitesse de réaction. Cela
        signifie que l'équilibre est atteint plus rapidement.
      </p>
      <h3>2. Influence d’un catalyseur</h3>
      <p>
        Les ions oxonium (H<sub>3</sub>O<sup>+</sup>) catalyse la réaction
        d'estérification et d’hydrolyse. Ce catalyseur permet d'atteindre plus
        rapidement l'état d'équilibre sans changer la composition du milieu
        réactionnel à l'équilibre.
      </p>
      <h3>3- influence de la concentration (composition intiale)</h3>
      <p>
        <Image
          src="/images/organique/org-15.png"
          width={377}
          height={99}
          alt="your name"
        />
      </p>
      <p>
        Le taux d'avancement final (donc la composition du système à
        l'équilibre) dépend de la composition initiale du système. Le tableau de
        valeurs donné ci- contre, concernant un mélange d'acide éthanoïque et
        d'éthanol (alcool primaire) permet de comprendre cette influence. On
        observe que, par rapport au réactif limitant, plus la quantité de
        matière de l'autre réactif (en excès) est importante plus le taux
        d'avancement final est grand, donc plus il y a d'ester formé. La même
        remarque est valable (avec des valeurs numériques différentes) pour la
        réaction d'hydrolyse de l'ester.
      </p>
      <h3>4 - influence de la nature des réactifs</h3>
      <p>
        Le rendement de l’estérification dépend très peu de la nature de l’acide
        carboxylique utilisé mis en jeu. En revanche, il dépend nettement de la
        classe de l’alcool utilisé. Pour des mélanges initiaux équimolaire en
        acide carboxylique et alcool, le rendement de synthèse de l’ester est de
        :
      </p>
      <Image
        src="/images/organique/org-16.png"
        width={637}
        height={105}
        alt="your name"
      />
      <p>
        Pour des mélanges initiaux équimolaire en ester et eau, le rendement
        d’hydrolyse est de :
      </p>
      <Image
        src="/images/organique/org-17.png"
        width={631}
        height={110}
        alt="your name"
      />

      <h3>5. Deplacement de l’equilibre chimique</h3>
      <p>
        Pour déplacer l’équilibre chimique dans le sens d’un meilleur rendement
        en ester, on peut :
      </p>
      <ul>
        <li>Introduire l’un des réactifs en excès.</li>
        <li>Extraire l’ester ou l’eau au fur et à mesure de leur formation.</li>
        <li>
          Remplacer l’acide par l’un de ces dérivés : le chlorure d’acyle ou
          l’anhydride d’acide.
        </li>
      </ul>
      <p>Estérification d’un alcool par un dérivé d’acide</p>
      <ul>
        <li>
          Par un chlorure d’acyle : Les chlorures d’acyle réagissent avec les
          alcools de façon rapide, totale et très exothermique, pour donner un
          ester et du chlorure d’hydrogène
        </li>
      </ul>
      <p>
        <MathJax>
          {
            "\\[RCOCl + CH_3COOCH_2CH_2CH_2OH\\leftrightarrow CH_3COOCH_2CH_2CH_2CH_3 + HCl \\]"
          }
        </MathJax>
      </p>
      <ul>
        <li>
          Par un anhydride d’acide : Les anhydrides d’acide sont moins réactifs
          que les chlorures d’acyle, mais nettement plus que les acides ; en
          effet, ils réagissent à température modérée (50°) avec les alcools
          pour former un ester et l’acide dont ils dérivent, suivant la réaction
          totale d’équation.
        </li>
      </ul>
      <p>R-CO-O-CO-R + R’ - OH → R-COO-R’ + RCOOH</p>
      <p>Exemple</p>
      <p>
        CH<sub>3</sub>-CO-O-CO-CH<sub>3</sub> + CH<sub>3</sub>-OH → CH
        <sub>3</sub>
        -COO-CH<sub>3</sub> + CH<sub>3</sub>-COOH
      </p>
      <h2>3 - Saponification</h2>
      <h3>1. Sur un ester</h3>
      <p>
        La saponification d’un ester résulte de l’action des ions hydroxyde OH-
        (base forte) sur cet ester ; elle donne un alcool et un ion carboxylate
        selon l’équation- bilan :
      </p>
      <p>
        R-COO-R’ + OH<sup>-</sup> → R-COO<sup>-</sup> + R’-OH
      </p>
      <p>Exemple :</p>
      <p>
        CH<sub>3</sub>-COO-CH<sub>2</sub>-CH<sub>3</sub> + OH<sup>-</sup> → CH
        <sub>3</sub>-COO<sup>-</sup> + CH<sub>3</sub>-CH<sub>2</sub>-OH
      </p>
      <p>Ethanoate d’ethyle ion hydroxide ion ethanoate ethanol</p>
      <p>
        <br />
      </p>
      <h3>1. Sur triester</h3>
      <p>
        Les corps gras liquides (huiles) ou solide (graisses) sont constitués
        essentiellement de triesters du glycol, aussi appelés triglycérides.
        L'hydrolyse basique ou saponification d'un triester du glycol donne du
        glycérol et trois ions carboxylates selon l’équation-bilan :
      </p>
      <p>
        <Image
          src="/images/organique/org-18.png"
          width={577}
          height={184}
          alt="your name"
        />
      </p>
      <p>Exemple</p>
      <p>
        <Image
          src="/images/organique/org-19.png"
          width={577}
          height={184}
          alt="your name"
        />
      </p>
      <h1>Les amides</h1>
      <h2>Definition</h2>
      <p>
        La fonction <strong>amide</strong> dérive de la fonction acide
        carboxylique par remplacement formel du groupe hydroxyle -OH par - NH
        <sub>2</sub>
        (RCONH<sub>2</sub>). Dans ce cas , on parle d '
        <strong>amides primaires</strong>
        .Elles sont nommées à partir du nom de l 'acide correspondant en
        supprimant le mot <em>acide</em> et en remplaçant la terminaison
        <em>oïque</em> du nom de l 'acide par <em>amide</em>.
      </p>
      <p>Exemple :</p>
      <p>
        CH<sub>3</sub>CONH<sub>2</sub> : ethanamide
      </p>
      <p>Classe d’amides</p>
      <ul>
        <li>
          Lorsqu ' une amide primaire est monosubstituée sur l 'atome d 'azote N
          ( on parle alors d '<strong>amides secondaires</strong> ) , son nom
          est obtenu en faisant précéder le nom de l 'amide non substituée du
          nom du substituant précédé du préfixe <em>N-</em>et suivi d' un tiret.
        </li>

        <li>
          Lorsqu 'une amide primaire est disubstituée sur l 'atome d' azote par
          deux substituants( on parle alors d' <strong>amides tertiaire</strong>
          ) , son nom est obtenu en faisant précéder le nom de l 'amide non
          substituée du nom d 'un des substituants précédé du préfixe
          <em>N -.</em>
        </li>
      </ul>
      <p>Exemples:</p>
      <Image
        src="/images/organique/org-20.png"
        width={459}
        height={187}
        alt="your name"
      />
      <p>
        Remarque: la formule generale des amides est : C<sub>n</sub>H
        <sub>2n+3</sub>ON
      </p>
      <h2>Obtention des amides</h2>
      <h3>1- a partir des acides</h3>
      <p>
        La réaction entre un acide carboxylique et l'ammoniac ou une amine
        primaire ou secondaire est une réaction acide – base classique donnant
        un carboxylate alkyl ammonium.
      </p>
      <p>Exemple</p>
      <p>
        CH<sub>3</sub>-COOH + NH<sub>3</sub> ⇌ CH<sub>3</sub> - COO<sup>-</sup>
        (ethanoate d’ammonium) + NH
        <sub>
          4<sup>+</sup>
        </sub>
      </p>
      <p>
        CH<sub>3</sub>COO<sup>-</sup> + NH
        <sub>
          4<sup>+</sup>
        </sub>{" "}
        ⟶ H<sub>2</sub>O + CH<sub>3</sub>- CO - NH<sub>2</sub> (ethanamide)
      </p>
      <h3>2- a partir d’un chlorure d’acide</h3>
      <p>R-COCl + R-CO-NRR’ + HCl</p>
      <p>Exemple</p>
      <p>
        CH<sub>3</sub> - COCl (chlorue d’ethanoyle) + NH<sub>3</sub> ⟶ CH
        <sub>3</sub>- CO-NH<sub>2</sub> (ethanamide) + HCl
      </p>
      <p>
        Si HCl ne se degage pas, il réagit avec l’amine pour donner un sel de
        sorte qu’il faut deux molécules d’amine pour obtenir une molecule
        d’amide
      </p>
      <p>
        RCOCl + 2 NH<sub>3</sub> ⟶ RCONH<sub>2</sub> + NH<sub>4</sub>Cl
      </p>
      <p>
        RCOCl + 2 R’NH<sub>2</sub> ⟶ RCONH-R’ + R’-NH<sub>3</sub>Cl
      </p>
      <p>Exemple</p>
      <p>
        H-COCl + 2NH<sub>2</sub> - C<sub>2</sub>H<sub>5</sub> ⟶ H-CO-NH-C
        <sub>2</sub>H<sub>5</sub> + C<sub>2</sub>H<sub>5</sub> - NH
        <sub>
          3<sup>+</sup>
        </sub>
        + Cl<sup>-</sup>
      </p>
      <p>Chlorure d’ethyle ammonium</p>
      <h3>3- a partir d’anhydride d’acide</h3>
      <p>
        (R-CO)<sub>2</sub>O + R’-NH<sub>2</sub> ⟶ R-CO-NH-R’ + R-COOH
      </p>
      <p>Exemple</p>
      <p>
        (C<sub>2</sub>H<sub>5</sub>CO)<sub>2</sub>O + CH<sub>3</sub>-NH
        <sub>2</sub>⟶ C<sub>2</sub>H<sub>5</sub>CO-CH<sub>3</sub> + C
        <sub>2</sub>H<sub>5</sub>-COOH
      </p>
    </div>
  </MathJaxContext>
);

export const alcools = (
  <MathJaxContext>
    <h1>Les alcools</h1>
    <h3>I. Définition</h3>
    <p>
      On appelle alcool un composé organique dans lequel un groupe
      caractéristique hydroxyle OH est lié à un atome de carbone saturé .
    </p>
    <Image
      src="/images/organique/org-13.png"
      width={100}
      height={100}
      alt="your name"
    />
    <h3>Obtention</h3>
    <h4>1- Cas particulier de l’ethanol</h4>
    <p>
      L’ethanol est obtenu par fermentation (dégradation incomplète) de jus
      sucrés sous l'action de levures (champignons microscopiques) qui en
      retirent de l"énergie.
    </p>
    <MathJax>
      {"\\[C_6H_{12}O_6+levures \\rightarrow 2CO_2+2H_3C-CH_2-OH+234Kj/mol\\]"}
    </MathJax>
    <p>
      2 - Addition de l’eau sur les alcenes (hydratation des alcenes) mathjax-2
    </p>
    <p>
      <MathJax>{"\\[R-CH=CH+H_2O \\leftrightarrow R-CH(OH)-CH_3\\]"}</MathJax>
    </p>
    <p>Regle de Markovnikow</p>
    <p>
      Lors de l'addition d'un hydracide sur un alcène dissymétrique l'atome
      d'hydrogène se fixe sur l'atome de carbone le moins substitué (plus
      hydrogéné).
    </p>
    <p>
      <MathJax>
        {
          "\\[CH_3-CH=CH_2 + H_2O \\leftrightarrow CH_3-CH(OH)-CH_3 (majoritaire) + CH_3-CH_2-CH_2(OH) (minoritaire) \\]"
        }
      </MathJax>
    </p>
    <h3>L'Oxydation des alcouls</h3>
    <h4>1. Oxydation complète : la combustion</h4>
    <p>
      Cette oxydation entraîne la destruction du squelette carboné. Équation de
      la combustion d’un alcool dans le dioxygène de l’air :
    </p>
    <p>
      <MathJax>
        {
          "\\[C_nH_{2n+1}-OH +\\frac {3n}2O_2 \\rightarrow nCO_2 + (n+1)H_2O \\]"
        }
      </MathJax>
    </p>
    <p>Exemple</p>
    <p>La combustion de l’ethanol dans le dioxygene de l’air:</p>
    <p>
      <MathJax>
        {"\\[CH_3-CH_2-OH +\\frac 52O_2 \\rightarrow 2CO_2 + 3H_2O \\]"}
      </MathJax>
    </p>
    <h4>2. L'Oxydation menagée</h4>
    <h5>Oxydation ménagée d'un alcool primaire</h5>
    <p>Exemple: Le propan-1-ol</p>
    <p>
      L'ion permanganate (violet) prend des électrons, se transforme en
      manganèse(II) (incolore) en provoquant une oxydation de l'alcool
    </p>
    <p>Demi equations</p>
    <p>
      <MathJax>
        {"\\[MnO_4^- + 5e +8H^+ \\rightarrow Mn^{2+} + 4H_2O \\]"}
      </MathJax>
    </p>
    <p>
      <MathJax>
        {
          "\\[5CH_3-CH_2-CH_2-OH + 2MnO_4^- + 6H^+\\rightarrow 5CH_3-CH_2-CHO+2Mn^{2+} + 8H_2O \\]"
        }
      </MathJax>
    </p>
    <p>
      Le plus souvent, on utilise l'acide sulfurique (2H + + SO 42- ) pour
      acidifier la solution.
    </p>
    <p>
      Conclusion : L’oxydation ménagée d’un alcool primaire conduit à la
      formation de l’aldéhyde ayant le même squelette carboné
    </p>
    <p>Remarque :</p>
    <p>
      Si l’oxydant est en excès, il peut ensuite réagir avec l’aldéhyde formé et
      l’oxyder en acide carboxylique. Suivant les équations:
    </p>
    <p>Demi - equations d’oxydoreduction</p>
    <p>
      <MathJax>
        {"\\[2(MnO_4^- + 5e +8H^+ \\rightarrow Mn^{2+} + 4H_2O) \\]"}
      </MathJax>
    </p>
    <p>
      <MathJax>
        {"\\[5(CH_3-CH_2-CHO \\rightarrow CH_3-CH_2-COOH+ 2e + 2H^+) \\]"}
      </MathJax>
    </p>
    <p></p>
    <p>
      Equation de la réaction : On combine les deux demi équations en enlevant
      les électrons
    </p>
    <p>
      <MathJax>
        {
          "\\[5CH_3-CH_2-CHO + 2MnO_4^- + 6H^+\\rightarrow 5CH_3-CH_2-COOH+2Mn^{2+} + 3H_2O \\]"
        }
      </MathJax>
    </p>
    <p>
      Conclusion : L’oxydation ménagée d’un aldéhyde conduit à la formation de
      l’acide carboxylique ayant le même squelette carboné.
    </p>
    <h5>Oxydation ménagée d'un alcool secondaire</h5>
    <p>exemple : Le propan-2-ol</p>
    <p>Demi equations d’oxydoreduction</p>
    <p>
      il doit y avoir autant d'électrons pour l'oxydant que pour le réducteur
      (d'où les multiplications)
    </p>
    <p>
      <MathJax>
        {"\\[Cr_2O_7^{2-} + 6e +6H^+ \\rightarrow 2Cr^{3-} + 7H_2O) \\]"}
      </MathJax>
    </p>
    <p>
      <MathJax>
        {"\\[3(CH_3-CHOH-CH_3 \\rightarrow CH_3-CO-CH_3+ 2e + 2H^+) \\]"}
      </MathJax>
    </p>
    <p>
      Equation de la réaction : on combine les deux demi-équations en enlevant
      les électrons
    </p>
    <p>
      <MathJax>
        {
          "\\[3CH_3-CHOH-CH_3 + Cr_2O_7^{2-}+8H^+ \\rightarrow 3CH_3-CO-CH_3+2Cr^{3-} + 7H_2O \\]"
        }
      </MathJax>{" "}
    </p>
    <p>
      Conclusion : L’oxydation ménagée d’un alcool secondaire conduit à la
      formation de la cétone ayant le même squelette carboné que l’oxydant soit
      en excès ou en défaut.
    </p>
    <strong>Remarque</strong>
    <p>Un alcool tertiaire ne subit pas d’oxydation ménagée.</p>
    <p>Réaction de déshydratation des alcools</p>
    <ul>
      <li>
        Intramoleculaire :
        <p>
          <MathJax>{"\\[CH_3-CH_2-OH \\rightarrow CH_2=CH_2+H_2O \\]"}</MathJax>
        </p>
      </li>
    </ul>
    <ul>
      <li>
        Intermoleculaire
        <p>
          <MathJax>
            {
              "\\[CH_3-CH_2-OH + CH_3-CH_2-OH \\rightarrow CH_3-CH_2-CH_2-CH_3+H_2O \\]"
            }
          </MathJax>
        </p>
      </li>
    </ul>
    <p>Identification des aldéhydes et des cétones</p>
    <p>
      Les aldéhydes R - CO -H et les cétones R - CO - R’ ont en commun le
      groupement C=O appelé <strong>groupement carbonyle</strong>, c’est ce qui
      permettra de les distinguer des autres composés
      <strong>le test à la DNPH.</strong>
    </p>
    <h5>Tests de reconnaissance des carbonyles</h5>
    <p>
      Aldéhydes et cétones donnent un précipité jaune en présence de
      2,4-dinitrophénylhydrazine (2,4-DNPH).
    </p>
    <p>
      <MathJax>
        {
          "\\[RR'C=O+C_6H_3(NO_2)_2-NH-NH_2 \\rightarrow C_6H_3(NO_2)_2-NHN=CRR'+H_2O \\]"
        }
      </MathJax>
    </p>
    <p>Al ou cetone. 2,4 DNPH precipite jaune</p>
    <p>
      Ce test permet de reconnaître la fonction carbonyle, mais pas de
      différencier les aldéhydes et les cétones. En revanche, il existe des
      tests de reconnaissance des aldéhydes : la liqueur de Fehling,le réactif
      de Schiff et le nitrate d'argent ammoniacal(appelé aussi miroir d’argent).
    </p>
    <h5>Tests spécifiques des aldéhydes:</h5>
    <p>
      L'atome d'hydrogène que porte le groupement carbonyle dans les aldéhydes
      confère donc à ces composés un caractère réducteur que n'ont pas les
      cétones ;les tests différenciant les cétones des aldéhydes seront donc des
      réactions d'oxydations des aldéhydes.
    </p>
    <strong>a. Réactif de Schiff:</strong>
    <ul>
      <li>Il est incolor</li>

      <li>L’ajout de l'aldéhyde le fait virer au rose violence</li>

      <li>S’il est chauffe, il peut virer</li>

      <li>Il vire en milieu basique</li>

      <li>Il peut virer par oxydation</li>

      <li>Il peut vire aussi par l’ajout de certain alcool</li>
    </ul>
    <p>
      Il convient d’utiliser le Réactif de Schiff en milieu neutre (voir
      légèrement acide) et à froid.
    </p>
    <strong>b. La liqueur de Fehling</strong>
    <p>
      La solution de Fehling (ou liqueur de Fehling) est un complexe basique
      d’ion cuivre II( Cu 2+ ) par les ions tartrate ( –OOC-CHOH-CHOH-COO-.). Au
      cours de la réaction, le cuivre oxyde l'aldéhyde pour donner un acide
      selon la réaction bilan d'oxydoRéduction générale
    </p>
    <p>
      <MathJax>
        {"\\[R-CHO + Cu^{2+} + 5HO^-(aq) \\rightarrow R-COO^-+3H_2O \\]"}
      </MathJax>
    </p>
    <p>
      La liqueur de Fehling initialement bleue(image 1) précipite en un dépôt de
      couleur rouge brique à chaud (image 2).
    </p>
    <p>
      <Image
        src="/images/organique/org-14.png"
        width={582}
        height={200}
        alt="your name"
      />
    </p>
    <strong>c. réactif de Tollens</strong>
    <p>
      Le réactif de Tollens est une solution de l’ion complexe diamine argent
      mathjax-18 Chauffé doucement en présence d’un aldéhyde, cet ion est réduit
      en argent métallique qui se dépose sur les parois du tube à essais,
      formant ainsi un miroir d’argent. L’ion argent est réduit en argent métal,
      l’aldéhyde est oxydé en ion carboxylate.
    </p>
    <p>Les demi reaction d’oxydo reduction</p>
    <p>
      <MathJax>{"\\[Ag(NH_3)_2^++e \\rightarrow Ag+2NH_3 \\]"}</MathJax>
      <MathJax>{"\\[R-CHO + 3OH^- \\rightarrow R-COO^-+2H_2O+2e \\]"}</MathJax>
    </p>
    <p>La reaction bilan</p>
    <p>
      <MathJax>
        {
          "\\[2Ag(NH_3)_2^++R-CHO + 3OH^- \\rightarrow R-COO^- + 2H_2O + 2Ag+4NH_3 \\]"
        }
      </MathJax>
    </p>
  </MathJaxContext>
);

export const isomerie = (
  <MathJaxContext>
    <h1>Isomerie</h1>
    <p>
      En chimie organique, on parle d'isomérie lorsque deux molécules possèdent
      la même formule brute mais ont des formules semi - développées ou des
      formules développées différentes. Ces molécules, appelées isomères, ont
      des propriétés physiques, chimiques et biologiques différentes. On
      distingue différentes isoméries, principalement l'isomérie de constitution
      et la stéréo-isomérie (isomérie de configuration et isomérie de
      conformation).
    </p>
    <h2>1. L'isomérie de constitution</h2>
    <p>
      L'isomérie de constitution correspond aux isoméries désignant des
      enchaînements d'atomes différents. Des isomères de constitution ont pour
      seul point commun leur formule brute.
    </p>
    <h4>a. L'isomérie de chaîne(ou de squelette)</h4>
    <p>
      L'isomérie de chaîne désigne les isomères qui diffèrent par leur chaîne
      carbonée (squelette). Ces isomères sont caractérisés par leurs propriétés
      chimiques identiques et propriétés physiques différentes.
    </p>
    <p>
      Exemple 1 : C<sub>4</sub>H<sub>10</sub>
    </p>
    <p>
      <Image
        src="/images/organique/org-6.png"
        width={445}
        height={197}
        alt="your name"
      />
    </p>
    <p>
      Exemple 2 : C<sub>4</sub>H<sub>10</sub>O
    </p>
    <p>
      <Image
        src="/images/organique/org-7.png"
        width={445}
        height={197}
        alt="your name"
      />
    </p>
    <h4>b. L’isomere de position</h4>
    <p>
      Les isomères de position sont des isomères de constitution qui ont la même
      chaîne carbonée, mais différent par l'implantation, le long de cette
      chaîne, dans même groupe fonctionnel. Ces isomères sont caractérisés par
      leurs propriétés physiques et chimiques légèrement différentes. On appelle
      ces isomères, des isomères de "position".
    </p>
    <p>
      Exemple 1 : C<sub>3</sub>H<sub>7</sub>OH
    </p>
    <p>
      <Image
        src="/images/organique/org-8.png"
        width={445}
        height={197}
        alt="your name"
      />
    </p>
    <h4>c. L'isomérie de fonction</h4>
    <p>
      Les isomères de fonction sont des isomères de constitution qui diffèrent
      par la nature du groupe fonctionnel présent dans leur molécule.
    </p>
    <p>
      Exemple C<sub>2</sub>H<sub>6</sub>O
    </p>
    <p>
      <Image
        src="/images/organique/org-9.png"
        width={445}
        height={197}
        alt="your name"
      />
    </p>
    <h2>2. La stéréo-isomérie</h2>
    <p>
      Deux corps sont stéréo-isomères lorsqu'ils ont la même formule plane, mais
      des structures spatiales différentes. On distingue:
    </p>
    <li>- Les stéréo-isomères de conformation</li>
    <li>
      - Les stéréo-isomères de configuration ( diastérioisomères – énantiomères)
    </li>
    <h4>a. Stéréo- isomérie de conformation :</h4>
    <p>
      On appelle conformation d'une molécule, les différentes structures
      spatiales qu'elle peut prendre par suite de rotations autour de ses
      liaisons simples. Deux molécules identiques dans des conformations
      différentes sont appelées stéréo-isomères de conformation.
    </p>
    <Image
      src="/images/organique/org-10.png"
      width={546}
      height={436}
      alt="your name"
    />
    <h4>b. Stéréo- isomérie de configuration :</h4>
    <p>
      Si la disposition spatiale des atomes est fixe, un isomère ne peut pas se
      transformer spontanément en un autre. On peut isoler les isomères. On
      distingue :
    </p>
    <h5>L'énantiomère :</h5>
    <p>
      Des énantiomères sont des molécules isomères images l'une de l'autre dans
      un miroir, mais non superposables. Une molécule ayant deux énantiomères
      est dite chirale. La chiralité est due à la présence d'un atome de carbone
      asymétrique. Un atome de carbone asymétrique, est un atome de carbone
      tétraédrique portant quatre atomes ou quatre groupes d'atomes tous
      différents .On le repère habituellement avec un astérisque C*. La
      chiralité désigne la propriété d’un objet de ne pas être superposable à
      son image dans un miroir.
    </p>
    <p>
      Exemple : CH<sub>3</sub>-C*H(OH)-COOH acide lactique
    </p>
    <Image
      src="/images/organique/org-11.png"
      width={506}
      height={184}
      alt="your name"
    />
    <p>
      b-2 Diastéréoisomèrie de configurations Z et E Lorsque, sur chacun des
      deux côtés d'une double liaison, on trouve deux groupes différents, on
      distingue deux configurations : Z et E . La libre rotation autour de la
      double liaison n'est pas possible, du fait de la présence d'une liaison π
      : il en résulte une molécule plane ayant deux configurations possibles. La
      configuration Z caractérise les diastéréoisomères dont les atomes
      d'hydrogénes sont du même côté du plan formé par la double liaison (et
      perpendiculaire au plan de la molécule). L'abréviation Z vient de
      l'allemand zusammen qui signifie « ensemble ». La configuration E
      caractérise les diastéréoisomères dont les atomes d'hydrogènes sont du
      côté opposé l'un de l'autre par le plan formé par la double liaison. Le
      terme E vient de l'allemand entgegen qui signifie « opposé ».
    </p>
    <Image
      src="/images/organique/org-12.png"
      width={489}
      height={383}
      alt="your name"
    />
  </MathJaxContext>
);

export const fonctionsOA = (
  <MathJaxContext>
    <h1>Fonctions oxygènées et azotées</h1>
    <h3>1- Les alcools et les oxydes</h3>
    <h4>Les alcools</h4>
    <h5>a- Definition</h5>
    <p>Les alcools contiennent un groupe -OH lié à un carbone saturé.</p>
    <p>Forme generale :ROH</p>
    <p>Exemple:</p>
    <p>
      CH<sub>3</sub>OH CH<sub>3</sub>CH<sub>2</sub>OH
    </p>
    <h5>b- Nomenclature</h5>
    <p>
      On ajoute le suffixe “ol” au nom de l’alcane correspondant en précisant le
      nombre de carbon fonctionnel.
    </p>
    <p>Exemple</p>
    <p>
      CH<sub>3</sub>OH methanol
    </p>
    <p>
      CH<sub>3</sub>CH<sub>2</sub>OH ethanol
    </p>
    <h5>c- Les classes d’alcools</h5>
    <p>Il y a trois classes d’alcool.</p>
    <table>
      <tr>
        <td>Classe d’alcool</td>
        <td>Caracteristique</td>
        <td>exemple</td>
      </tr>
      <tr>
        <td>Alcool primaire</td>
        <td>Carbon fonctionnel lié à un seul carbone</td>
        <td>
          CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH
        </td>
      </tr>
      <tr>
        <td>Alcool secondaire</td>
        <td>Carbon fonctionnel lié à deux autres carbons</td>
        <td>
          CH<sub>3</sub>CH<sub>2</sub>CH(OH)CH<sub>3</sub>
        </td>
      </tr>
      <tr>
        <td>Alcool tertiaire</td>
        <td>Carbon fonctionnel lié à trois autres carbons</td>
        <td>
          CH<sub>3</sub>CH<sub>2</sub>C(CH<sub>3</sub>)(OH)CH<sub>3</sub>
        </td>
      </tr>
    </table>
    <h4>Les oxydes</h4>
    <h5>a- Definition</h5>
    <p>Les oxydes contiennent un oxygène (-o-) qui coupe la chaîne carbonée.</p>
    <p>Forme generale: R-O-R’.</p>
    <p>Exemple:</p>
    <p>
      CH<sub>3</sub>-O-CH<sub>3</sub>
    </p>
    <p>
      CH<sub>3</sub>-CH<sub>2</sub>-O-CH<sub>3</sub>
    </p>
    <h5>b- Nomenclature</h5>
    <p>
      On nomme le plus court alkyle comme alcoxy et le plus long comme alcane.
    </p>
    <p>Exemple:</p>
    <p>
      CH<sub>3</sub>-CH<sub>2</sub>-O-CH<sub>3</sub>: methoxyethane
    </p>
    <h3>2- Les Aldehydes et Cetones</h3>
    <p>
      Les deux aldéhydes et cétones contiennent un groupe carbonyle, un groupe
      fonctionnel avec une double liaison carbone-oxygène.
    </p>
    <p>
      <Image
        src="/images/organique/org-1.png"
        width={128}
        height={99}
        alt="your name"
      />
    </p>
    <h4>Les Aldehydes</h4>
    <h5>a- Definition</h5>
    <p>
      Dans un aldéhyde, le groupe carbonyle est lié à au moins un atome
      d'hydrogène.
    </p>
    <p>
      <Image
        src="/images/organique/org-2.png"
        width={181}
        height={99}
        alt="your name"
      />
    </p>
    <p>Un groupe aldéhyde est représenté par -CHO</p>
    <h5>b- Nomenclature</h5>
    <p>On remplace “e” de l’alcane par le suffixe “al”</p>
    <p>Exemple:</p>
    <p>HCHO methanal</p>
    <p>
      CH<sub>3</sub>CHO: Ethanal
    </p>
    <h4>Les Cetones</h4>
    <h5>a- Definition</h5>
    <p>
      Dans une cétone, le groupe carbonyle est lié à deux atomes de carbone:
    </p>
    <p>
      <Image
        src="/images/organique/org-3.png"
        width={173}
        height={99}
        alt="your name"
      />
    </p>
    <p>Un groupe aldéhyde est représenté par -CO-</p>
    <h5>b- Nomenclature</h5>
    <p>
      On ajoute le suffixe “one” en précisant le nombre de carbone fonctionnel.
    </p>
    <p>Exemple</p>
    <p>
      CH<sub>3</sub>COCH<sub>3</sub> : propan-2-one.
    </p>
    <h3>3- Les acides carboxyliques et esters</h3>
    <h4>Les acides carboxyliques</h4>
    <h5>a- Definition</h5>
    <p>
      Dans un acide carboxylique, le groupe carbonyle est lié au groupe -OH.
    </p>
    <p>
      <Image
        src="/images/organique/org-4.png"
        width={187}
        height={172}
        alt="your name"
      />
    </p>
    <p>Ou RCOOH</p>
    <h5>b- Nomenclature</h5>
    <p>
      On ajoute le préfixe acide et on remplace “e” de l’alcane par le suffixe
      “oïque” .
    </p>
    <p>Exemple</p>
    <h4>Les esters</h4>
    <h5>a- Definition</h5>
    <p>
      Dans un ester, le groupe carbonyle est lié à un oxygène qui lié à un atome
      de carbone.
    </p>
    <p>
      <Image
        src="/images/organique/org-5.png"
        width={119}
        height={99}
        alt="your name"
      />
    </p>
    <p>RCOOR</p>
    <h5>b- L’esterification</h5>
    <p>
      Le processus d'estérification implique la réaction d'un acide carboxylique
      avec un alcool
    </p>
    <p>
      la présence d'un catalyseur acide. L'eau est également un produit dans
      cette réaction.
    </p>
    <p>
      RCOOH + R’-OH ⇋ R-COO-R’ + H<sub>2</sub>O
    </p>
    <p>Acid carboxylique + alcool ⇋ ester + eau</p>
    <p>
      Lorsque de l'éthanol est ajouté à l'acide acétique et une goutte d'acide
      sulfurique (symbolisé par H +), l'équilibre suivant résultera:
    </p>
    <p>
      CH<sub>3</sub>COOH + CH<sub>3</sub>CH<sub>2</sub>OH ⇌ CH<sub>3</sub>
      -COO-CH<sub>2</sub>-CH<sub>3</sub>
    </p>
    <p>Exemple</p>
    <p>
      Quel acide carboxylique et alcool sont nécessaires pour produire l'ester
      suivant?
    </p>
    <p>
      CH<sub>3</sub> - CH<sub>2</sub> - COO - CH<sub>2</sub> - CH<sub>2</sub>
      -CH<sub>2</sub> - CH<sub>3</sub>
    </p>
    <p>
      Séparez la molécule en traçant une ligne à travers l'oxygène dans le
      carbone
    </p>
    <p>
      chaîne. Ajouter un -OH sur les deux côtés de votre ligne pour créer
      l'acide carboxylique sur le
    </p>
    <p>côté carbonyle et l'alcool sur le côté alkyle.</p>
    <p>
      CH<sub>3</sub> - CH<sub>2</sub> - COOH CH<sub>3</sub> - CH<sub>2</sub>
      -CH<sub>2</sub> - CH<sub>2</sub>OH
    </p>
    <h3>4- Les amines et les amides</h3>
    <h4>Les amines</h4>
    <h5>a - Definition</h5>
    <p>
      Les amines sont considérées comme des dérivés organiques de l'ammoniac (NH
      <sub>3</sub>) dont un ou plusieurs les atomes d'hydrogène sont remplacés
      par un groupe alkyle ou aromatique.
    </p>
    <ul>
      R ⎼ NR' ⎼ R''
      <li>R: alkyl</li>
      <li>R',R’': alkyl ou H</li>
    </ul>
    <p>Exemple :</p>
    <p>
      <span
        style={{
          paddingRight: "16px",
        }}
      >
        CH<sub>3</sub>NH<sub>2</sub>
      </span>
      <span
        style={{
          paddingRight: "16px",
        }}
      >
        CH<sub>3</sub>NHCH<sub>3</sub>
      </span>
      <span
        style={{
          paddingRight: "16px",
        }}
      >
        CH<sub>3</sub>N(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>
      </span>
    </p>
    <h5>b - Classe</h5>
    <p>
      La classe d’amine représente le nombre de carbones lies a l’atome d’azote
    </p>
    <p>Exemple :</p>
    <p>
      CH<sub>3</sub> - NH<sub>2</sub> primaire
    </p>
    <p>
      CH<sub>3</sub> - NH - CH<sub>3</sub> secondaire
    </p>
    <p>
      CH<sub>3</sub> - N(CH<sub>3</sub>) - CH<sub>3</sub> tertiaire
    </p>
    <h5>c - Nomenclature</h5>
    <p>
      Si l’amine est primaire, on remplace “e” de l’alcane par “amine”. La
      chaîne choisie doit contenir l’atome d’azote N. Dans le cas où l’amine est
      secondaire ou tertiaire la chaîne la plus longue est nommée “alcanamine”
      les autres commes alkyle précédés par N-.
    </p>
    <p>
      Exemple :<br />
      CH<sub>3</sub> - NH<sub>2</sub> Amine primaire methanamine
    </p>
    <p>
      CH<sub>3</sub> - CH(NH<sub>2</sub>) - CH<sub>3</sub> Amine primaire
      propan-2-amine
    </p>
    <p>
      CH<sub>3</sub> - NH - CH<sub>2</sub> - CH<sub>3</sub> Amine secondaire
      N-methylethanamine
    </p>
    <p>
      CH<sub>3</sub> - N(C<sub>2</sub>H<sub>5</sub>) - CH<sub>3</sub> Amine
      tertiaire N,N-dimethylethanamine
    </p>
    <h4>Les amides</h4>
    <h5>a- Definition</h5>
    <p>
      Le groupe fonctionnel d'un amide est un groupe carbonyle (C = O) lié à un
      atome d'azote (N). Les amides sont classés en amides primaires,
      secondaires et tertiaires.
    </p>
    <ul>
      R - CO - NR’-R'' <li>- R,R’,R’’ alkyl ou H</li>{" "}
    </ul>
    <p>Exemple :</p>
    <p>
      CH<sub>3</sub> - CO - NH<sub>2</sub>
    </p>
    <p>
      CH<sub>3</sub> - CO - NH - CH<sub>3</sub>
    </p>
    <p>
      CH<sub>3</sub> - CO - N(CH<sub>3</sub>) - CH<sub>3</sub>
    </p>
    <h5>b - Classe</h5>
    <p>
      La classe d’amide représente le nombre de carbones lies a l’atome d’azote
    </p>
    <p>Exemple :</p>
    <p>
      CH<sub>3</sub> - CO - NH<sub>2</sub> Primaire
    </p>
    <p>
      CH<sub>3</sub> - CO - NH - CH<sub>3</sub> Secondaire
    </p>
    <p>
      CH<sub>3</sub> - CO - N(CH<sub>3</sub>) - CH<sub>3</sub> Tertiaire
    </p>
    <h5>c - Nomenclature</h5>
    <p>
      La chaine contenant la fonction carbonyle est nommé en remplaçant “e” de
      l’alcane par “amide” et les autres alkyles liés à l’atome d’azote précède
      le nom comme N-alkyl.
    </p>
    <p>Exemple :</p>
    <p>
      CH<sub>3</sub> - CO - NH<sub>2</sub> Ethanamide
    </p>
    <p>
      CH<sub>3</sub> - CO - NH - CH<sub>3</sub> N-methylethanamide
    </p>
    <p>
      CH<sub>3</sub> - CO - N(CH<sub>3</sub>) - CH<sub>3</sub> N,N -
      dimethylamide
    </p>
  </MathJaxContext>
);

export const orgN = (
  <div>
    <MathJaxContext>
      <MathJax>
        {
          "\\[C_6H_{12}O_6+levures \\rightarrow 2CO_2+2H_3C-CH_2-OH+234Kj/mol\\]"
        }
      </MathJax>
      <MathJax>{"\\[R-CH=CH+H_2O \\leftrightarrow R-CH(OH)-CH_3\\]"}</MathJax>
      <MathJax>
        {
          "\\[CH_3-CH=CH_2 + H_2O \\leftrightarrow CH_3-CH(OH)-CH_3 (majoritaire) + CH_3-CH_2-CH_2(OH) (minoritaire) \\]"
        }
      </MathJax>
      <MathJax>
        {
          "\\[C_nH_{2n+1}-OH +\\frac {3n}2O_2 \\rightarrow nCO_2 + (n+1)H_2O \\]"
        }
      </MathJax>
      <MathJax>
        {"\\[CH_3-CH_2-OH +\\frac 52O_2 \\rightarrow 2CO_2 + 3H_2O \\]"}
      </MathJax>
      <MathJax>
        {"\\[MnO_4^- + 5e +8H^+ \\rightarrow Mn^{2+} + 4H_2O \\]"}
      </MathJax>
      <MathJax>
        {
          "\\[5CH_3-CH_2-CH_2-OH + 2MnO_4^- + 6H^+\\rightarrow 5CH_3-CH_2-CHO+2Mn^{2+} + 8H_2O \\]"
        }
      </MathJax>
      <MathJax>
        {"\\[2(MnO_4^- + 5e +8H^+ \\rightarrow Mn^{2+} + 4H_2O) \\]"}
      </MathJax>
      <MathJax>
        {"\\[5(CH_3-CH_2-CHO \\rightarrow CH_3-CH_2-COOH+ 2e + 2H^+) \\]"}
      </MathJax>
      <MathJax>
        {
          "\\[5CH_3-CH_2-CHO + 2MnO_4^- + 6H^+\\rightarrow 5CH_3-CH_2-COOH+2Mn^{2+} + 3H_2O \\]"
        }
      </MathJax>
      <MathJax>
        {"\\[Cr_2O_7^{2-} + 6e +6H^+ \\rightarrow 2Cr^{3-} + 7H_2O) \\]"}
      </MathJax>
      <MathJax>
        {"\\[3(CH_3-CHOH-CH_3 \\rightarrow CH_3-CO-CH_3+ 2e + 2H^+) \\]"}
      </MathJax>
      <MathJax>
        {
          "\\[3CH_3-CHOH-CH_3 + Cr_2O_7^{2-}+8H^+ \\rightarrow 3CH_3-CO-CH_3+2Cr^{3-} + 7H_2O \\]"
        }
      </MathJax>{" "}
      <MathJax>{"\\[CH_3-CH_2-OH \\rightarrow CH_2=CH_2+H_2O \\]"}</MathJax>
      <MathJax>
        {
          "\\[CH_3-CH_2-OH + CH_3-CH_2-OH \\rightarrow CH_3-CH_2-CH_2-CH_3+H_2O \\]"
        }
      </MathJax>
      <MathJax>{"\\[CH_3-CH_2-OH \\rightarrow CH_2=CH_2+H_2O \\]"}</MathJax>
      <MathJax>
        {
          "\\[RR'C=O+C_6H_3(NO_2)_2-NH-NH_2 \\rightarrow C_6H_3(NO_2)_2-NHN=CRR'+H_2O \\]"
        }
      </MathJax>
      <MathJax>
        {"\\[R-CHO + Cu^{2+} + 5HO^-(aq) \\rightarrow R-COO^-+3H_2O \\]"}
      </MathJax>
      <MathJax>{"\\[Ag(NH_3)_2^++e \\rightarrow Ag+2NH_3 \\]"}</MathJax>
      <MathJax>{"\\[R-CHO + 3OH^- \\rightarrow R-COO^-+2H_2O+2e \\]"}</MathJax>
      <MathJax>
        {
          "\\[Ag(NH_3)_2^++R-CHO + 3OH^- \\rightarrow R-COO^- + 2H_2O + 2Ag+4NH_3 \\]"
        }
      </MathJax>
      <MathJax>{"\\[Ag(NH_3)_2^++e \\rightarrow Ag+2NH_3 \\]"}</MathJax>
      <MathJax>
        {
          "\\[RCOOH + SOCl_2 \\rightarrow RCOCl\\space (Chlorure \\space d'acyle \\space ou \\space d'acide)+HCl+SO_2 \\]"
        }
      </MathJax>
      <MathJax>
        {"\\[R-COOH + PCl_5 \\rightarrow R-COCl+POCl_3+HCl \\]"}
      </MathJax>
      <MathJax>{"\\[R-COOH + PCl_3 \\rightarrow R-COCl+POCl+HCl \\]"}</MathJax>
      <MathJax>
        {
          "\\[RCOOH+RCOOH \\rightarrow R-CO-O-CO-R(Angydride\\space d'acide)+H_2O \\]"
        }
      </MathJax>
      <MathJax>{"\\[RCOOH + R'-OH\\leftrightarrow RCOOR'+H_2O  \\]"}</MathJax>
      <MathJax>{"\\[RCOOR' + H_2O\\leftrightarrow RCOOH+R'-OH  \\]"}</MathJax>
      <MathJax>{"\\[RCOOH + R'-OH\\leftrightarrow RCOOR'+H_2O  \\]"}</MathJax>
      <MathJax>
        {
          "\\[K=\\frac {[R-COO-R']}{[RCOOH][R'OH]} \\space  ou \\space K = \\frac {n_{ester}.n_{eau}}{n_{acide}.n_{alcool}} \\space si \\space l'eau \\space n'est \\space pas \\space un \\space solvant\\]"
        }
      </MathJax>
      <MathJax>{"\\[ K=\\frac {\\tau^2}{(1-\\tau)^2}  \\]"}</MathJax>
      <MathJax>
        {
          "\\[RCOCl + CH_3COOCH_2CH_2CH_2OH\\leftrightarrow CH_3COOCH_2CH_2CH_2CH_3 + HCl \\]"
        }
      </MathJax>
    </MathJaxContext>
  </div>
);
