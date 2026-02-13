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
      "Huygens' Erfindung wurde zur Urform aller Projektionsgeraete. Im 18. und 19. Jahrhundert entwickelte sie sich zum Massenmedium: Wandervorfuehrer zeigten Phantasmagorien, Schauergeschichten und paedagogische Bildreihen.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Laterna_Magica_Huygens.jpg",
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
      "Paris veroeffentlichte das Thaumatrop 1825 als philosophisches Spielzeug, um das Prinzip der Nachbildwirkung zu demonstrieren. Beim Drehen verschmelzen die Bilder beider Seiten zu einem.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Thaumatrope_Paris.jpg",
    icon: "layers",
  },
  {
    id: "faraday",
    year: "1831",
    title: "Faradays Rad",
    inventor: "Michael Faraday",
    description:
      "Der britische Naturforscher Michael Faraday demonstrierte mit einem rotierenden Zahnrad die Traegheit des menschlichen Sehens.",
    detail:
      "Faraday beobachtete, dass ein sich drehendes Zahnrad bei bestimmten Geschwindigkeiten den Eindruck erweckt stillzustehen. Dieses Prinzip wurde zur Grundlage aller optischen Spielzeuge.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Faraday_wheel.png",
    icon: "zap",
  },
  {
    id: "stampfer",
    year: "1832",
    title: "Stroboskopische Scheiben",
    inventor: "Simon Ritter von Stampfer",
    description:
      "Der oesterreichische Mathematiker Simon Stampfer entwickelte seine Stroboskopischen Scheiben (Zauberscheiben) unabhaengig von Joseph Plateau.",
    detail:
      "Stampfers bemalte Pappscheiben wurden vor einem Spiegel gedreht und durch Schlitze betrachtet, wodurch die Einzelbilder zu einer fliessenden Animation verschmolzen.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Phenakistoscope_3b01347u.jpg",
    icon: "disc",
  },
  {
    id: "phenakistiskop",
    year: "1832",
    title: "Phenakistiskop",
    inventor: "Joseph Plateau",
    description:
      "Der belgische Physiker Joseph Plateau entwickelte das Phenakistiskop zeitgleich mit Stampfers Zauberscheiben.",
    detail:
      "Plateau hielt die bemalte Scheibe vor einen Spiegel und blickte durch schmale Schlitze am Rand. Es war das erste kommerziell verbreitete Animationsgeraet.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Phenakistoscope_A_L_L_L_Plateau.jpg",
    icon: "eye",
  },
  {
    id: "zoetrop",
    year: "1834",
    title: "Zoetrop",
    inventor: "William George Horner",
    description:
      "Der britische Mathematiker William George Horner erfand das Zoetrop, eine rotierende Trommel mit Schlitzen.",
    detail:
      "Erstmals konnten mehrere Betrachter gleichzeitig eine Animation sehen. Horners Version wurde erst 1867 kommerzialisiert und als 'Wundertrommel' bekannt.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Zoetrope.jpg",
    icon: "aperture",
  },
  {
    id: "nebelbildapparat",
    year: "1845",
    title: "Nebelbildapparat",
    inventor: "Franz Freiherr von Uchatius",
    description:
      "Der oesterreichische Artillerieoffizier Franz von Uchatius kombinierte als Erster die Projektion mit bewegten Phasenbildern.",
    detail:
      "Uchatius verband eine Laterna Magica mit dem Prinzip des Phenakistiskops. Es war die erste bekannte Projektion von Bewegtbildern vor einem Publikum.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Uchatius_Apparat.jpg",
    icon: "projector",
  },
  {
    id: "daumenkino",
    year: "1868",
    title: "Daumenkino",
    inventor: "John Barnes Linnett",
    description:
      "Der Englaender John Barnes Linnett patentierte 1868 das Kineograph: Durch schnelles Blaettern eines kleinen Hefts entsteht die Illusion von Bewegung.",
    detail:
      "Linnetts Erfindung war revolutionaer einfach: keine Mechanik, keine Optik, nur ein Stapel Papier. Der Betrachter kontrolliert die Geschwindigkeit selbst.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Flip_book.jpg",
    icon: "book-open",
  },
  {
    id: "praxinoskop",
    year: "1876",
    title: "Praxinoskop",
    inventor: "Emile Reynaud",
    description:
      "Emile Reynaud verbesserte das Zoetrop entscheidend, indem er Spiegel statt Schlitze verwendete.",
    detail:
      "Reynauds Praxinoskop ersetzte die Sichtschlitze durch ein Prisma aus Spiegeln. 1892 fuehrte er damit die ersten projizierten Animationsfilme vor.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Praxinoscope_Revolving.jpg",
    icon: "clapperboard",
  },
  {
    id: "muybridge",
    year: "1878",
    title: "Zoopraxiskop",
    inventor: "Eadweard Muybridge",
    description:
      "Eadweard Muybridge zerlegte mit Sequenzfotografie Bewegung in Einzelphasen (The Horse in Motion).",
    detail:
      "Mit einer Reihe von zwoelf Kameras bewies er, dass Pferde beim Galopp kurzzeitig schweben. Das Zoopraxiskop projizierte diese Studien auf Leinwand.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/The_Horse_in_Motion.jpg",
    icon: "camera",
  },
  {
    id: "marey",
    year: "1882",
    title: "Chronofotographische Flinte",
    inventor: "Etienne-Jules Marey",
    description:
      "Eine gewehrfoermige Kamera, die zwoelf Bilder pro Sekunde auf einer einzigen rotierenden Platte aufnehmen konnte.",
    detail:
      "Sein Fusil Photographique war ein wissenschaftliches Werkzeug, um den Flug von Voegeln zu studieren. Es beeinflusste direkt die Entwicklung der Filmkamera.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Marey_Fotoflinte.JPG",
    icon: "crosshair",
  },
  {
    id: "anschuetz",
    year: "1886",
    title: "Elektrotachyscop",
    inventor: "Ottomar Anschuetz",
    description:
      "Der deutsche Fotograf Ottomar Anschuetz kombinierte Momentfotografien mit elektrischem Stroboskoplicht.",
    detail:
      "Anschuetz ordnete Fotografien auf einer rotierenden Scheibe an und beleuchtete sie mit Blitzen einer Geisslerroehre – der 'elektrische Schnellseher'.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Anschuetz-1.jpg",
    icon: "monitor",
  },
  {
    id: "eastman-celluloid",
    year: "1889",
    title: "Celluloidfilm",
    inventor: "George Eastman",
    description:
      "George Eastman fuehrte den flexiblen, transparenten Celluloidfilm ein, die Basis fuer das Kino.",
    detail:
      "Eastmans Rollfilm ersetzte schwere Glasplatten und ermoeglichte lange Bildsequenzen. Ohne ihn waeren Kameras wie die der Lumieres unmoeglich gewesen.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Eastman_giving_Edison_the_first_roll_of_movie_film_01.png",
    icon: "film",
  },
  {
    id: "kinetoskop",
    year: "1891",
    title: "Kinetoskop & Kinetograph",
    inventor: "W.K.L. Dickson (Edison)",
    description:
      "Dickson entwickelte im Edison-Labor die erste Filmkamera (Kinetograph) und den Guckkasten (Kinetoskop).",
    detail:
      "Dickson waehlte das 35mm-Format, das zum Weltstandard wurde. Das Kinetoskop war fuer eine einzelne Person gedacht, die in den Kasten hineinschaute.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Kinetoscope.jpg",
    icon: "scan",
  },
  {
    id: "mutoskop",
    year: "1895",
    title: "Mutoskop",
    inventor: "Herman Casler & W.K.L. Dickson",
    description:
      "Das Mutoskop war der direkte Konkurrent zu Edisons Kinetoskop und funktionierte wie ein mechanisches Daumenkino.",
    detail:
      "Es verwendete Hunderte Fotokarten auf einer Rolle. Es war robuster als der Film und stand jahrzehntelang in Spielhallen (Penny Arcades).",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/BlueMutoscope.jpg",
    icon: "sparkles",
  },
  {
    id: "lumiere",
    year: "1895",
    title: "Cinematographe",
    inventor: "Auguste & Louis Lumiere",
    description:
      "Die Brueder Lumiere bauten ein tragbares Geraet, das aufnehmen, entwickeln und projizieren konnte.",
    detail:
      "Am 28. Dezember 1895 zeigten sie die ersten Filme vor zahlendem Publikum in Paris. Dieser Abend gilt gemeinhin als die Geburtsstunde des Kinos.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Cinématographe_Lumière.jpg",
    icon: "projector",
  },
]