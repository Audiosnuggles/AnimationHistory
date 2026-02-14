export interface TimelineEvent {
  id: string
  year: string
  title: string
  inventor: string
  description: string
  detail: string
  imageUrl: string
  personUrl?: string
  gallery?: string[]
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
      "Der niederländische Physiker Christiaan Huygens beschrieb als Erster das Prinzip der Laterna Magica: ein Kasten mit Kerze, Hohlspiegel und Linse, der bemalte Glasplatten an die Wand projizierte.",
    detail:
      "Huygens' Erfindung wurde zur Urform aller Projektionsgeräte. Im 18. und 19. Jahrhundert entwickelte sie sich zum Massenmedium: Wandervorführer zeigten Phantasmagorien, Schauergeschichten und pädagogische Bildreihen.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1659_Christiaan_Huygens_-_figure1_for_magic_lantern.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Christiaan-huygens4.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/1659_Christiaan_Huygens_-_figure1_for_magic_lantern.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Christiaan-huygens4.jpg"
    ],
    icon: "lantern",
  },
  {
    id: "thaumatrop",
    year: "1825",
    title: "Thaumatrop",
    inventor: "John Ayrton Paris",
    description:
      "Der britische Arzt John Ayrton Paris konstruierte eine kleine Scheibe mit zwei verschiedenen Bildern auf jeder Seite, die durch schnelles Drehen an Fäden eine optische Täuschung erzeugt.",
    detail:
      "Paris veröffentlichte das Thaumatrop 1825 als philosophisches Spielzeug, um das Prinzip der Nachbildwirkung zu demonstrieren. Beim Drehen verschmelzen die Bilder beider Seiten zu einem (z.B. Vogel im Käfig).",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Paris-thaumatrope.png",
    // Kein verifiziertes Portrait gefunden, das CORB-sicher ist.
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Paris-thaumatrope.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Taumatropio_fiori_e_vaso%2C_1825.gif",
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Taumatropio_topo_e_gabbia%2C_1825.gif"
    ],
    icon: "layers",
  },
  {
    id: "faraday",
    year: "1831",
    title: "Faradays Rad",
    inventor: "Michael Faraday",
    description:
      "Der britische Naturforscher Michael Faraday demonstrierte mit einem rotierenden Zahnrad die Trägheit des menschlichen Sehens.",
    detail:
      "Faraday beobachtete, dass ein sich drehendes Zahnrad bei bestimmten Geschwindigkeiten den Eindruck erweckt stillzustehen. Dieses Prinzip wurde zur Grundlage aller optischen Spielzeuge.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Faraday_disk_generator.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M_Faraday_Th_Phillips_oil_1842.jpg", // KORRIGIERT: Exakter Dateiname
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Faraday_disk_generator.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/M_Faraday_Th_Phillips_oil_1842.jpg" // KORRIGIERT: Exakter Dateiname
    ],
    icon: "zap",
  },
  {
    id: "stampfer",
    year: "1832",
    title: "Stroboskopische Scheiben",
    inventor: "Simon Ritter von Stampfer",
    description:
      "Der österreichische Mathematiker Simon Stampfer entwickelte seine Stroboskopischen Scheiben (Zauberscheiben) unabhängig von Joseph Plateau.",
    detail:
      "Stampfers bemalte Pappscheiben wurden vor einem Spiegel gedreht und durch Schlitze betrachtet, wodurch die Einzelbilder zu einer fließenden Animation verschmolzen.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stampfer_disc.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Simon_Stampfer_portrait.gif",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Stampfer_disc.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Simon_Stampfer_portrait.gif",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Prof._Stampfer%27s_Stroboscopische_Scheibe_No._X.gif" // KORRIGIERT: Exakter Dateiname mit %27 für Apostroph
    ],
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
      "Plateau hielt die bemalte Scheibe vor einen Spiegel und blickte durch schmale Schlitze am Rand. Es war das erste kommerziell verbreitete Animationsgerät.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Phenakistiscope.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Plateau_-_clean.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Phenakistiscope.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Plateau_-_clean.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Phenakistiscope_Snakes_16_sections_-_animated.gif" // KORRIGIERT: Exakter Dateiname
    ],
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
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zoetrope_by_George_Horner_-_CnAM_20893.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Zoetrope_by_George_Horner_-_CnAM_20893.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Edward_William_Horner.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Print,_Zoetrope_Strip,_Dancers,_ca._1860_(CH_18760339).jpg" // KORRIGIERT: Funktionierender Bildstreifen
    ],
    icon: "aperture",
  },
  {
    id: "nebelbildapparat",
    year: "1845",
    title: "Nebelbildapparat",
    inventor: "Franz Freiherr von Uchatius",
    description:
      "Der österreichische Artillerieoffizier Franz von Uchatius kombinierte als Erster die Projektion mit bewegten Phasenbildern.",
    detail:
      "Uchatius verband eine Laterna Magica mit dem Prinzip des Phenakistiskops. Es war die erste bekannte Projektion von Bewegtbildern vor einem Publikum.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/General_Franz_von_Uchatius,_1875.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_von_Uchatius.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/General_Franz_von_Uchatius,_1875.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_von_Uchatius.jpg"
    ],
    icon: "projector",
  },
  {
    id: "daumenkino",
    year: "1868",
    title: "Daumenkino",
    inventor: "John Barnes Linnett",
    description:
      "Der Engländer John Barnes Linnett patentierte 1868 das Kineograph: Durch schnelles Blättern eines kleinen Hefts entsteht die Illusion von Bewegung.",
    detail:
      "Linnetts Erfindung war revolutionär einfach: keine Mechanik, keine Optik, nur ein Stapel Papier. Der Betrachter kontrolliert die Geschwindigkeit selbst.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Linnet_kineograph_1886.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Linnet_kineograph_1886.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Flip_Book_Movie_v2.gif" // KORRIGIERT: Exakter Dateiname des GIFs
    ],
    icon: "book-open",
  },
  {
    id: "praxinoskop",
    year: "1876",
    title: "Praxinoskop",
    inventor: "Émile Reynaud",
    description:
      "Émile Reynaud verbesserte das Zoetrop entscheidend, indem er Spiegel statt Schlitze verwendete.",
    detail:
      "Reynauds Praxinoskop ersetzte die Sichtschlitze durch ein Prisma aus Spiegeln. 1892 führte er damit die ersten projizierten Animationsfilme vor.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lanature1879_praxinoscope_reynaud.png",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Reynaud_praxinoscope.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lanature1879_praxinoscope_reynaud.png",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Reynaud_praxinoscope.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Anim_Sauteuse_corde_Toupie_Fantoche.gif" // KORRIGIERT: Exakter Dateiname des GIFs
    ],
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
      "Mit einer Reihe von zwölf Kameras bewies er, dass Pferde beim Galopp kurzzeitig schweben. Das Zoopraxiskop projizierte diese Studien auf Leinwand.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zoopraxiscope_16485d.gif",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Muybridge-2.jpg", // KORRIGIERT: Exakter Dateiname
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Zoopraxiscope_16485d.gif",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Muybridge-2.jpg", // KORRIGIERT: Funktionierendes Portrait
      "https://commons.wikimedia.org/wiki/Special:FilePath/The_Horse_in_Motion.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Muybridge_horse_jumping.jpg"
    ],
    icon: "camera",
  },
  {
    id: "marey",
    year: "1882",
    title: "Chronofotografische Flinte",
    inventor: "Étienne-Jules Marey",
    description:
      "Eine gewehrförmige Kamera, die zwölf Bilder pro Sekunde auf einer einzigen rotierenden Platte aufnehmen konnte.",
    detail:
      "Sein Fusil Photographique war ein wissenschaftliches Werkzeug, um den Flug von Vögeln zu studieren. Es beeinflusste direkt die Entwicklung der Filmkamera.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chronophotographic_gun-CnAM_16955-IMG_5275-gradient.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fusil_photographique_Marey1.png",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chronophotographic_gun-CnAM_16955-IMG_5275-gradient.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fusil_photographique_Marey1.png"
    ],
    icon: "crosshair",
  },
  {
    id: "anschuetz",
    year: "1886",
    title: "Elektrotachyscop",
    inventor: "Ottomar Anschütz",
    description:
      "Der deutsche Fotograf Ottomar Anschütz kombinierte Momentfotografien mit elektrischem Stroboskoplicht.",
    detail:
      "Anschütz ordnete Fotografien auf einer rotierenden Scheibe an und beleuchtete sie mit Blitzen einer Geißlerröhre – der 'elektrische Schnellseher'.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Anschuetz-1.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ottomar_Ansch%C3%BCtz.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Anschuetz-1.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ottomar_Ansch%C3%BCtz.jpg"
    ],
    icon: "monitor",
  },
  {
    id: "eastman-celluloid",
    year: "1889",
    title: "Celluloidfilm",
    inventor: "George Eastman",
    description:
      "George Eastman führte den flexiblen, transparenten Celluloidfilm ein, die Basis für das Kino.",
    detail:
      "Eastmans Rollfilm ersetzte schwere Glasplatten und ermöglichte lange Bildsequenzen. Ohne ihn wären Kameras wie die der Lumières unmöglich gewesen.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kodachrome_II_-_Film_for_colour_slides.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/George_Eastman_(F._Church_1890).jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kodachrome_II_-_Film_for_colour_slides.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/George_Eastman_(F._Church_1890).jpg"
    ],
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
      "Dickson wählte das 35mm-Format, das zum Weltstandard wurde. Das Kinetoskop war für eine einzelne Person gedacht, die in den Kasten hineinschaute.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas_Edison_with_Home_Projecting_Kinetoscope._(b0db395c6e0a45adaece505542470a6b).jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas_Edison_with_Home_Projecting_Kinetoscope._(b0db395c6e0a45adaece505542470a6b).jpg"
    ],
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
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mutoscope_1896.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mutoscope_1896.jpg"
    ],
    icon: "sparkles",
  },
  {
    id: "lumiere",
    year: "1895",
    title: "Cinématographe",
    inventor: "Auguste & Louis Lumière",
    description:
      "Die Brüder Lumière bauten ein tragbares Gerät, das aufnehmen, entwickeln und projizieren konnte.",
    detail:
      "Am 28. Dezember 1895 zeigten sie die ersten Filme vor zahlendem Publikum in Paris. Dieser Abend gilt gemeinhin als die Geburtsstunde des Kinos.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cinematographe_Lumiere_motion_picture_projector,_two_views,_front_and_rear._By_Auguste_%26_Louis_Lumiere._(c3a8372e-e839-4bda-981f-e166fc3843a4).jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cinematograph_Lumière.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cinematographe_Lumiere_motion_picture_projector,_two_views,_front_and_rear._By_Auguste_%26_Louis_Lumiere._(c3a8372e-e839-4bda-981f-e166fc3843a4).jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cinematograph_Lumière.jpg"
    ],
    icon: "projector",
  },
]