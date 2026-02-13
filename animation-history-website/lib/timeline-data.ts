export interface TimelineEvent {
  id: string
  year: string
  title: string
  inventor: string
  description: string
  detail: string
  imageUrl: string
  icon:
    | "disc"
    | "eye"
    | "clapperboard"
    | "camera"
    | "film"
    | "projector"
    | "zap"
    | "layers"
    | "scan"
    | "book-open"
    | "aperture"
    | "crosshair"
    | "monitor"
    | "sparkles"
    | "lantern"
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "laterna-magica",
    year: "1659",
    title: "Laterna Magica",
    inventor: "Christiaan Huygens",
    description:
      "Der niederlaendische Physiker Christiaan Huygens beschrieb als Erster das Prinzip der Laterna Magica: ein Kasten mit Kerze, Hohlspiegel und Linse, der bemalte Glasplatten an die Wand projizierte.",
    detail:
      "Huygens' Erfindung wurde zur Urform aller Projektionsgeraete. Im 18. und 19. Jahrhundert entwickelte sie sich zum Massenmedium: Wandervorfuehrer zeigten Phantasmagorien, Schauergeschichten und paedagogische Bildreihen. Die Laterna Magica gilt als direkter Vorlaeufer des Filmprojektors.",
    icon: "lantern",
  },
  {
    id: "thaumatrop",
    year: "1825",
    title: "Thaumatrop",
    inventor: "John Ayrton Paris",
    description:
      "Der britische Arzt John Ayrton Paris konstruierte eine kleine Scheibe mit zwei verschiedenen Bildern auf jeder Seite, die durch schnelles Drehen an Faeden eine optische Taeuschung erzeugt.",
    detail:
      "Paris veroeffentlichte das Thaumatrop 1825 als philosophisches Spielzeug, um das Prinzip der Nachbildwirkung zu demonstrieren. Beim Drehen verschmelzen die Bilder beider Seiten zu einem: etwa ein Vogel und ein Kaefig zu einem Vogel im Kaefig. Auch die Astronomen John Herschel und William Henry Fitton arbeiteten an aehnlichen Geraeten, doch Paris gilt als Erstbeschreiber und Populaermacher.",
    icon: "layers",
  },
  {
    id: "faraday",
    year: "1831",
    title: "Faradays Rad",
    inventor: "Michael Faraday",
    description:
      "Der britische Naturforscher Michael Faraday demonstrierte mit einem rotierenden Zahnrad die Traegheit des menschlichen Sehens und legte damit eine wissenschaftliche Grundlage fuer alle folgenden Bewegtbilderfindungen.",
    detail:
      "Faraday beobachtete, dass ein sich drehendes Zahnrad bei bestimmten Geschwindigkeiten den Eindruck erweckt stillzustehen. Dieses Prinzip der stroboskopischen Wahrnehmung wurde zur theoretischen Grundlage aller optischen Spielzeuge und letztlich des Films selbst.",
    icon: "zap",
  },
  {
    id: "stampfer",
    year: "1832",
    title: "Stroboskopische Scheiben",
    inventor: "Simon Ritter von Stampfer",
    description:
      "Der oesterreichische Mathematiker Simon Stampfer entwickelte seine Stroboskopischen Scheiben (Zauberscheiben) unabhaengig von Joseph Plateau und erzeugte damit erstmals die Illusion fliessender Bewegung.",
    detail:
      "Stampfer und Plateau arbeiteten zeitgleich und ohne Kenntnis voneinander am selben Prinzip. Stampfers bemalte Pappscheiben wurden vor einem Spiegel gedreht und durch Schlitze betrachtet, wodurch die Einzelbilder zu einer fliessenden Animation verschmolzen. Die Prioritaetsfrage zwischen Stampfer und Plateau ist bis heute umstritten.",
    icon: "disc",
  },
  {
    id: "phenakistiskop",
    year: "1832",
    title: "Phenakistiskop",
    inventor: "Joseph Plateau",
    description:
      "Der belgische Physiker Joseph Plateau entwickelte das Phenakistiskop zeitgleich mit Stampfers Zauberscheiben. Beide gelten als Miterfinder des ersten echten Animationsgeraets.",
    detail:
      "Plateau, der spaeter durch seine optischen Experimente erblindete, hielt die bemalte Scheibe vor einen Spiegel und blickte durch schmale Schlitze am Rand. Beim Drehen entstand die Illusion durchgehender Bewegung. Es war das erste kommerziell verbreitete Animationsgeraet und brachte Plateau postum den Ruf als Vater der Animation ein.",
    icon: "eye",
  },
  {
    id: "zoetrop",
    year: "1834",
    title: "Zoetrop",
    inventor: "William George Horner",
    description:
      "Der britische Mathematiker William George Horner erfand das Zoetrop, eine rotierende Trommel mit Schlitzen, durch die austauschbare Bildstreifen als Bewegung erscheinen.",
    detail:
      "Horner nannte seine Erfindung Daedaleum. Das Prinzip einer rotierenden Trommel mit Bildern war allerdings schon um 180 n. Chr. in China bekannt, wo Ting Huan ein aehnliches Geraet beschrieb. Horners Version wurde erst 1867 von Milton Bradley in den USA und von der London Stereoscopic Company in England als Zoetrop kommerzialisiert. Erstmals konnten mehrere Betrachter gleichzeitig eine Animation sehen.",
    icon: "aperture",
  },
  {
    id: "nebelbildapparat",
    year: "1845",
    title: "Nebelbildapparat",
    inventor: "Franz Freiherr von Uchatius",
    description:
      "Der oesterreichische Artillerieoffizier Franz von Uchatius kombinierte als Erster die Projektion mit bewegten Phasenbildern und schuf damit einen Vorlaeufer des Filmprojektors.",
    detail:
      "Uchatius verband eine Laterna Magica mit dem Prinzip des Phenakistiskops. Er projizierte die Phasenbilder einer rotierenden Scheibe nacheinander an die Wand, sodass das Publikum eine projizierte Animation sehen konnte. Es war die erste bekannte Projektion von Bewegtbildern vor einem Publikum.",
    icon: "projector",
  },
  {
    id: "daumenkino",
    year: "1868",
    title: "Daumenkino",
    inventor: "John Barnes Linnett",
    description:
      "Der Englaender John Barnes Linnett patentierte 1868 das Kineograph: Durch schnelles Blaettern eines kleinen Hefts entsteht die Illusion von Bewegung, ganz ohne Maschine oder Spiegel.",
    detail:
      "Linnetts Erfindung war revolutionaer einfach: keine Mechanik, keine Optik, nur ein Stapel Papier. Der Betrachter kontrolliert durch die Blaeatter-Geschwindigkeit selbst die Animation. Das Prinzip ist bis heute in Gebrauch und ist eines der zugaenglichsten Animationswerkzeuge ueberhaupt.",
    icon: "book-open",
  },
  {
    id: "praxinoskop",
    year: "1876",
    title: "Praxinoskop",
    inventor: "Emile Reynaud",
    description:
      "Der franzoesische Erfinder Emile Reynaud verbesserte das Zoetrop entscheidend, indem er Spiegel statt Schlitze verwendete und so hellere, klarere und groessere Bilder erzeugte.",
    detail:
      "Reynauds Praxinoskop ersetzte die Sichtschlitze durch ein Prisma aus Spiegeln im Inneren der Trommel. 1892 fuehrte Reynaud im Musee Grevin in Paris seine Pantomimes Lumineuses vor, die ersten projizierten Animationsfilme vor zahlendem Publikum, Jahre vor den Bruedern Lumiere. Reynaud gilt als der wahre Vater des Animationsfilms.",
    icon: "clapperboard",
  },
  {
    id: "muybridge",
    year: "1878",
    title: "Zoopraxiskop",
    inventor: "Eadweard Muybridge",
    description:
      "Der britisch-amerikanische Fotograf Eadweard Muybridge zerlegte mit Sequenzfotografie Bewegung in Einzelphasen und bewies, dass alle vier Hufe eines galoppierenden Pferdes gleichzeitig den Boden verlassen.",
    detail:
      "Mit einer Reihe von zwoelf Kameras, die durch Faeden ausgeloest wurden, schuf Muybridge 1878 die Serie The Horse in Motion im Auftrag von Leland Stanford. Anschliessend entwickelte er das Zoopraxiskop, das seine Bewegungsstudien auf Leinwand projizierte. Seine Arbeit verband erstmals Fotografie und Bewegtbild und inspirierte sowohl Marey als auch Edison.",
    icon: "camera",
  },
  {
    id: "marey",
    year: "1882",
    title: "Chronofotographische Flinte",
    inventor: "Etienne-Jules Marey",
    description:
      "Der franzoesische Physiologe Etienne-Jules Marey konstruierte eine gewehrfoermige Kamera, die zwoelf Bilder pro Sekunde auf einer einzigen rotierenden Platte aufnehmen konnte.",
    detail:
      "Im Gegensatz zu Muybridges System mit vielen Kameras nutzte Marey eine einzige Kamera. Sein Fusil Photographique war primaer ein wissenschaftliches Werkzeug: Er studierte damit den Flug von Voegeln, den Gang von Menschen und die Bewegung von Pferden. Mareys Arbeit beeinflusste direkt die Entwicklung der Filmkamera durch die Lumieres und durch Dickson in Edisons Labor.",
    icon: "crosshair",
  },
  {
    id: "anschuetz",
    year: "1886",
    title: "Elektrotachyscop",
    inventor: "Ottomar Anschuetz",
    description:
      "Der deutsche Fotograf Ottomar Anschuetz kombinierte hochpraezise Momentfotografien mit elektrischem Stroboskoplicht und erzeugte so erstaunlich fluessige Bewegungsbilder.",
    detail:
      "Anschuetz ordnete seine Fotografien auf einer grossen rotierenden Glasscheibe an und beleuchtete sie mit kurzen Lichtblitzen einer Geisslerroehre. Das Ergebnis war eine bemerkenswert fliessende Animation. Er praesentierte das Geraet 1887 der Berliner Akademie der Wissenschaften. Spaetere Automaten-Versionen standen in oeffentlichen Schaustellungen und inspirierten nachweislich Edison.",
    icon: "monitor",
  },
  {
    id: "eastman-celluloid",
    year: "1889",
    title: "Celluloidfilm",
    inventor: "George Eastman",
    description:
      "Der amerikanische Unternehmer George Eastman fuehrte mit seiner Firma Kodak den flexiblen, transparenten Celluloidfilm ein, der die technische Grundlage fuer die Kinematografie schuf.",
    detail:
      "Eastmans Rollfilm auf Celluloidbasis ersetzte die starren, schweren Glasplatten und ermoeglichte es erstmals, lange Bildsequenzen auf einem einzigen Filmstreifen aufzunehmen. Ohne dieses Material waeren weder Dicksons Kinetograph noch der Cinematographe der Lumieres realisierbar gewesen. Eastman lieferte das Medium, auf dem das Kino geboren wurde.",
    icon: "film",
  },
  {
    id: "kinetoskop",
    year: "1891",
    title: "Kinetoskop & Kinetograph",
    inventor: "William Kennedy Laurie Dickson",
    description:
      "W.K.L. Dickson, Angestellter in Edisons Labor, war der eigentliche Entwickler von Kinetograph (Kamera) und Kinetoskop (Betrachtungsgeraet). Edison stellte die Ressourcen bereit und liess die Patente auf seinen Namen anmelden.",
    detail:
      "Dickson leistete zwischen 1889 und 1892 die gesamte technische Entwicklungsarbeit im West-Orange-Labor. Der Kinetograph war die Filmkamera, das Kinetoskop ein Guckkasten fuer eine einzelne Person. Dickson waehlte das 35mm-Format, das zum Weltstandard wurde. Edison, dessen Geschaeftsmodell es war, Erfindungen seiner Angestellten unter eigenem Namen zu patentieren, beanspruchte den Ruhm. Dickson verliess Edison 1895 und gruendete mit Herman Casler die American Mutoscope Company.",
    icon: "scan",
  },
  {
    id: "mutoskop",
    year: "1895",
    title: "Mutoskop",
    inventor: "Herman Casler & W.K.L. Dickson",
    description:
      "Herman Casler, Mitgruender der American Mutoscope Company zusammen mit W.K.L. Dickson, entwickelte das Mutoskop als direkten Konkurrenten zu Edisons Kinetoskop.",
    detail:
      "Das Mutoskop verwendete Hunderte einzelner Fotokarten auf einer rotierenden Trommel, die der Betrachter per Handkurbel durchblaetterte. Es war robuster und guenstiger als Edisons Kinetoskop und stand bis in die 1950er-Jahre in Penny Arcades und an Strandpromenaden. Dickson brachte sein Wissen aus dem Edison-Labor ein, Casler die mechanische Ingenieurskunst.",
    icon: "sparkles",
  },
  {
    id: "lumiere",
    year: "1895",
    title: "Cinematographe",
    inventor: "Auguste & Louis Lumiere",
    description:
      "Die Brueder Lumiere aus Lyon konstruierten den Cinematographe: ein einziges, tragbares Geraet, das gleichzeitig aufnehmen, entwickeln und projizieren konnte.",
    detail:
      "Am 28. Dezember 1895 zeigten Auguste und Louis Lumiere im Grand Cafe am Boulevard des Capucines in Paris zehn Kurzfilme einem zahlenden Publikum. Ihr Cinematographe wog nur fuenf Kilogramm und war dem sperrigen Edison-System weit ueberlegen. Der Film L'Arrivee d'un train en gare de La Ciotat soll das Publikum in Panik versetzt haben. Dieser Abend gilt als Geburtsstunde des Kinos.",
    icon: "projector",
  },
]
