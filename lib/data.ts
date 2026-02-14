// =============================================================================
// 1. BILDER-DATENBANK
// =============================================================================
const eventImages = {
  "laterna-magica": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1659_Christiaan_Huygens_-_figure1_for_magic_lantern.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Christiaan-huygens4.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/1659_Christiaan_Huygens_-_figure1_for_magic_lantern.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Christiaan-huygens4.jpg"
    ],
    icon: "sun"
  },
  "thaumatrop": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Paris-thaumatrope.png",
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/John_Ayrton_Paris_by_Skottowe.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Paris-thaumatrope.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/John_Ayrton_Paris_by_Skottowe.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Taumatropio_fiori_e_vaso%2C_1825.gif",
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Taumatropio_topo_e_gabbia%2C_1825.gif"
    ],
    icon: "repeat"
  },
  "faraday": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Faraday_disk_generator.jpg",
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/M_Faraday_Th_Phillips_oil_1842.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Faraday_disk_generator.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/88/M_Faraday_Th_Phillips_oil_1842.jpg"
    ],
    icon: "gear"
  },
  "stampfer": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stampfer_disc.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Simon_Stampfer_portrait.gif",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Stampfer_disc.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Simon_Stampfer_portrait.gif",
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Prof._Stampfer%27s_Stroboscopische_Scheibe_No._X.gif"
    ],
    icon: "disc"
  },
  "phenakistiskop": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Animated_phenakistiscope_disc_-_Running_rats_Fantascope_by_Thomas_Mann_Baynes_1833.gif",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Plateau_-_clean.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Animated_phenakistiscope_disc_-_Running_rats_Fantascope_by_Thomas_Mann_Baynes_1833.gif",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Phenakistiscope.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Joseph_Plateau_-_clean.jpg"
    ],
    icon: "eye"
  },
  "zoetrop": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/ZOOTROP.jpg",
    // FIX: Kein Portrait für Horner (Bild existiert nicht), daher entfernt um Fehler zu vermeiden.
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/ZOOTROP.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Zoetrope_strip.jpg"
    ],
    icon: "orbit"
  },
  "nebelbildapparat": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/General_Franz_von_Uchatius,_1875.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_von_Uchatius.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/General_Franz_von_Uchatius,_1875.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Franz_von_Uchatius.jpg"
    ],
    icon: "presentation"
  },
  "daumenkino": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Linnet_kineograph_1886.jpg",
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Upload_Wizard_-_Wikimedia_Commons_-_Google_Chrome_4_24_2021_6_37_02_PM.png",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Linnet_kineograph_1886.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Upload_Wizard_-_Wikimedia_Commons_-_Google_Chrome_4_24_2021_6_37_02_PM.png",
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flip_Book_Movie_v2.gif"
    ],
    icon: "book"
  },
  "praxinoskop": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lanature1879_praxinoscope_reynaud.png",
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Reynaud.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lanature1879_praxinoscope_reynaud.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Reynaud.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Anim_Sauteuse_corde_Toupie_Fantoche.gif"
    ],
    icon: "prism"
  },
  "muybridge": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif",
    // FIX: Neuer, funktionierender Link für Muybridge Portrait (Nadar)
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Descriptive_Zoopraxography_004.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif",
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Eadweard_Muybridge.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The_Horse_in_Motion.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Muybridge_horse_jumping.jpg"
    ],
    icon: "camera"
  },
  "marey": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chronophotographic_gun-CnAM_16955-IMG_5275-gradient.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fusil_photographique_Marey1.png",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chronophotographic_gun-CnAM_16955-IMG_5275-gradient.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fusil_photographique_Marey1.png"
    ],
    icon: "gun"
  },
  "anschuetz": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Anschuetz-1.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ottomar_Ansch%C3%BCtz.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Anschuetz-1.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ottomar_Ansch%C3%BCtz.jpg"
    ],
    icon: "flash"
  },
  "eastman-celluloid": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kodachrome_II_-_Film_for_colour_slides.jpg",
    personUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/George_Eastman_(F._Church_1890).jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kodachrome_II_-_Film_for_colour_slides.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/George_Eastman_(F._Church_1890).jpg"
    ],
    icon: "film"
  },
  "kinetoskop": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Kinetoscope._door_open_revealing_mechanism._%28a9980062-e7d4-4aac-9f42-c7b3e5b513e8%29.jpg",
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Portrait_of_W.K.L._Dickson._%28bb8e5d3cf6064a3ab8155a55c28575ff%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Kinetoscope._door_open_revealing_mechanism._%28a9980062-e7d4-4aac-9f42-c7b3e5b513e8%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Portrait_of_W.K.L._Dickson._%28bb8e5d3cf6064a3ab8155a55c28575ff%29.jpg"
    ],
    icon: "box"
  },
  "mutoskop": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mutoscope_1896.jpg",
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/American_Mutoscope_and_Biograph_Founders_1895.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mutoscope_1896.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/American_Mutoscope_and_Biograph_Founders_1895.jpg"
    ],
    icon: "cards"
  },
  "lumiere": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cinematographe_Lumiere_motion_picture_projector,_two_views,_front_and_rear._By_Auguste_%26_Louis_Lumiere._(c3a8372e-e839-4bda-981f-e166fc3843a4).jpg",
    personUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Fratelli_Lumiere.jpg",
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cinematographe_Lumiere_motion_picture_projector,_two_views,_front_and_rear._By_Auguste_%26_Louis_Lumiere._(c3a8372e-e839-4bda-981f-e166fc3843a4).jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cinematograph_Lumière.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Fratelli_Lumiere.jpg"
    ],
    icon: "cinema"
  }
}

// =============================================================================
// 2. TYPES
// =============================================================================
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
    | "sun" | "repeat" | "gear" | "disc" | "eye" 
    | "orbit" | "presentation" | "book" | "prism" 
    | "camera" | "gun" | "flash" | "film" | "box" 
    | "cards" | "cinema"
}

export type Language = "de" | "en" | "fr" | "es"

// =============================================================================
// 3. ÜBERSETZUNGEN (UNVERÄNDERT)
// =============================================================================
const translations = {
  de: {
    ui: {
      subline: "Eine Chronik des bewegten Bildes | 1659 – 1895",
      title1: "Licht und",
      title2: "Bewegung",
      intro: "Lange bevor die erste Kinoleinwand aufleuchtete, träumten Erfinder, Physiker und Magier davon, statischen Bildern Leben einzuhauchen. Was als wissenschaftliche Kuriosität in dunklen Kammern begann, entwickelte sich über Jahrhunderte zu einer optischen Revolution. Dies ist die Geschichte der Apparate, die unseren Augen das Sehen lehrten – Schritt für Schritt, Bild für Bild.",
      scroll: "Scrollen ↓",
      outroTitle: "Der Vorhang hebt sich",
      outroText: "Mit dem Surren des Cinématographe endete die Ära der optischen Spielzeuge und das Zeitalter des Kinos begann. Die mechanischen Wundertrommeln und flackernden Scheiben hatten ihren Zweck erfüllt: Sie hatten bewiesen, dass unsere Wahrnehmung überlistet werden kann. Der Weg war nun frei für die großen Geschichtenerzähler des 20. Jahrhunderts.",
      footer: "© " + new Date().getFullYear() + " The Humants"
    },
    events: [
      { id: "laterna-magica", year: "1659", title: "Laterna Magica", inventor: "Christiaan Huygens", description: "Der niederländische Physiker Christiaan Huygens beschrieb als Erster das Prinzip der Laterna Magica: ein Kasten mit Kerze, Hohlspiegel und Linse, der bemalte Glasplatten an die Wand projizierte.", detail: "Huygens' Erfindung wurde zur Urform aller Projektionsgeräte. Im 18. und 19. Jahrhundert entwickelte sie sich zum Massenmedium: Wandervorführer zeigten Phantasmagorien, Schauergeschichten und pädagogische Bildreihen." },
      { id: "thaumatrop", year: "1825", title: "Thaumatrop", inventor: "John Ayrton Paris", description: "Der britische Arzt John Ayrton Paris konstruierte eine kleine Scheibe mit zwei verschiedenen Bildern auf jeder Seite, die durch schnelles Drehen an Fäden eine optische Täuschung erzeugt.", detail: "Paris veröffentlichte das Thaumatrop 1825 als philosophisches Spielzeug, um das Prinzip der Nachbildwirkung zu demonstrieren. Beim Drehen verschmelzen die Bilder beider Seiten zu einem (z.B. Vogel im Käfig)." },
      { id: "faraday", year: "1831", title: "Faradays Rad", inventor: "Michael Faraday", description: "Der britische Naturforscher Michael Faraday demonstrierte mit einem rotierenden Zahnrad die Trägheit des menschlichen Sehens.", detail: "Faraday beobachtete, dass ein sich drehendes Zahnrad bei bestimmten Geschwindigkeiten den Eindruck erweckt stillzustehen. Dieses Prinzip wurde zur Grundlage aller optischen Spielzeuge." },
      { id: "stampfer", year: "1832", title: "Stroboskopische Scheiben", inventor: "Simon Ritter von Stampfer", description: "Der österreichische Mathematiker Simon Stampfer entwickelte seine Stroboskopischen Scheiben (Zauberscheiben) unabhängig von Joseph Plateau.", detail: "Stampfers bemalte Pappscheiben wurden vor einem Spiegel gedreht und durch Schlitze betrachtet, wodurch die Einzelbilder zu einer fließenden Animation verschmolzen." },
      { id: "phenakistiskop", year: "1832", title: "Phenakistiskop", inventor: "Joseph Plateau", description: "Der belgische Physiker Joseph Plateau entwickelte das Phenakistiskop zeitgleich mit Stampfers Zauberscheiben.", detail: "Plateau hielt die bemalte Scheibe vor einen Spiegel und blickte durch schmale Schlitze am Rand. Es war das erste kommerziell verbreitete Animationsgerät." },
      { id: "zoetrop", year: "1834", title: "Zoetrop", inventor: "William George Horner", description: "Der britische Mathematiker William George Horner erfand das Zoetrop, eine rotierende Trommel mit Schlitzen.", detail: "Erstmals konnten mehrere Betrachter gleichzeitig eine Animation sehen. Horners Version wurde erst 1867 kommerzialisiert und als 'Wundertrommel' bekannt." },
      { id: "nebelbildapparat", year: "1845", title: "Nebelbildapparat", inventor: "Franz Freiherr von Uchatius", description: "Der österreichische Artillerieoffizier Franz von Uchatius kombinierte als Erster die Projektion mit bewegten Phasenbildern.", detail: "Uchatius verband eine Laterna Magica mit dem Prinzip des Phenakistiskops. Es war die erste bekannte Projektion von Bewegtbildern vor einem Publikum." },
      { id: "daumenkino", year: "1868", title: "Daumenkino", inventor: "John Barnes Linnett", description: "Der Engländer John Barnes Linnett patentierte 1868 das Kineograph: Durch schnelles Blättern eines kleinen Hefts entsteht die Illusion von Bewegung.", detail: "Linnetts Erfindung war revolutionär einfach: keine Mechanik, keine Optik, nur ein Stapel Papier. Der Betrachter kontrolliert die Geschwindigkeit selbst." },
      { id: "praxinoskop", year: "1876", title: "Praxinoskop", inventor: "Émile Reynaud", description: "Émile Reynaud verbesserte das Zoetrop entscheidend, indem er Spiegel statt Schlitze verwendete.", detail: "Reynauds Praxinoskop ersetzte die Sichtschlitze durch ein Prisma aus Spiegeln. 1892 führte er damit die ersten projizierten Animationsfilme vor." },
      { id: "muybridge", year: "1878", title: "Zoopraxiskop", inventor: "Eadweard Muybridge", description: "Eadweard Muybridge zerlegte mit Sequenzfotografie Bewegung in Einzelphasen (The Horse in Motion).", detail: "Mit einer Reihe von zwölf Kameras bewies er, dass Pferde beim Galopp kurzzeitig schweben. Das Zoopraxiskop projizierte diese Studien auf Leinwand." },
      { id: "marey", year: "1882", title: "Chronofotografische Flinte", inventor: "Étienne-Jules Marey", description: "Eine gewehrförmige Kamera, die zwölf Bilder pro Sekunde auf einer einzigen rotierenden Platte aufnehmen konnte.", detail: "Sein Fusil Photographique war ein wissenschaftliches Werkzeug, um den Flug von Vögeln zu studieren. Es beeinflusste direkt die Entwicklung der Filmkamera." },
      { id: "anschuetz", year: "1886", title: "Elektrotachyscop", inventor: "Ottomar Anschütz", description: "Der deutsche Fotograf Ottomar Anschütz kombinierte Momentfotografien mit elektrischem Stroboskoplicht.", detail: "Anschütz ordnete Fotografien auf einer rotierenden Scheibe an und beleuchtete sie mit Blitzen einer Geißlerröhre – der 'elektrische Schnellseher'." },
      { id: "eastman-celluloid", year: "1889", title: "Celluloidfilm", inventor: "George Eastman", description: "George Eastman führte den flexiblen, transparenten Celluloidfilm ein, die Basis für das Kino.", detail: "Eastmans Rollfilm ersetzte schwere Glasplatten und ermöglichte lange Bildsequenzen. Ohne ihn wären Kameras wie die der Lumières unmöglich gewesen." },
      { id: "kinetoskop", year: "1891", title: "Kinetoskop & Kinetograph", inventor: "W.K.L. Dickson (Edison)", description: "Dickson entwickelte im Edison-Labor die erste Filmkamera (Kinetograph) und den Guckkasten (Kinetoskop).", detail: "Dickson wählte das 35mm-Format, das zum Weltstandard wurde. Das Kinetoskop war für eine einzelne Person gedacht, die in den Kasten hineinschaute." },
      { id: "mutoskop", year: "1895", title: "Mutoskop", inventor: "Herman Casler & W.K.L. Dickson", description: "Das Mutoskop war der direkte Konkurrent zu Edisons Kinetoskop und funktionierte wie ein mechanisches Daumenkino.", detail: "Es verwendete Hunderte Fotokarten auf einer Rolle. Es war robuster als der Film und stand jahrzehntelang in Spielhallen (Penny Arcades)." },
      { id: "lumiere", year: "1895", title: "Cinématographe", inventor: "Auguste & Louis Lumière", description: "Die Brüder Lumière bauten ein tragbares Gerät, das aufnehmen, entwickeln und projizieren konnte.", detail: "Am 28. Dezember 1895 zeigten sie die ersten Filme vor zahlendem Publikum in Paris. Dieser Abend gilt gemeinhin als die Geburtsstunde des Kinos." }
    ]
  },
  en: {
    ui: {
      subline: "A Chronicle of the Moving Image | 1659 – 1895",
      title1: "Light and",
      title2: "Motion",
      intro: "Long before the first cinema screen lit up, inventors, physicists, and magicians dreamed of breathing life into static images. What began as a scientific curiosity in dark chambers evolved over centuries into an optical revolution. This is the story of the devices that taught our eyes to see – step by step, frame by frame.",
      scroll: "Scroll ↓",
      outroTitle: "The Curtain Rises",
      outroText: "With the whirring of the Cinématographe, the era of optical toys ended, and the age of cinema began. The mechanical wonder-drums and flickering discs had served their purpose: they had proven that our perception could be outwitted. The way was now clear for the great storytellers of the 20th century.",
      footer: "© " + new Date().getFullYear() + " The Humants"
    },
    events: [
      { id: "laterna-magica", year: "1659", title: "Magic Lantern", inventor: "Christiaan Huygens", description: "Dutch physicist Christiaan Huygens was the first to describe the principle of the Magic Lantern: a box with a candle, concave mirror, and lens that projected painted glass slides onto a wall.", detail: "Huygens' invention became the ancestor of all projection devices. In the 18th and 19th centuries, it evolved into a mass medium: itinerant showmen displayed phantasmagoria, horror stories, and educational image series." },
      { id: "thaumatrop", year: "1825", title: "Thaumatrope", inventor: "John Ayrton Paris", description: "British physician John Ayrton Paris constructed a small disc with two different images on each side, creating an optical illusion when spun rapidly on strings.", detail: "Paris published the Thaumatrope in 1825 as a philosophical toy to demonstrate the principle of persistence of vision. When spun, the images on both sides merge into one (e.g., a bird in a cage)." },
      { id: "faraday", year: "1831", title: "Faraday's Wheel", inventor: "Michael Faraday", description: "British naturalist Michael Faraday demonstrated the persistence of human vision using a rotating gear wheel.", detail: "Faraday observed that a rotating gear wheel appears to stand still at certain speeds. This principle became the foundation of all optical toys." },
      { id: "stampfer", year: "1832", title: "Stroboscopic Discs", inventor: "Simon Ritter von Stampfer", description: "Austrian mathematician Simon Stampfer developed his Stroboscopic Discs (Magic Discs) independently of Joseph Plateau.", detail: "Stampfer's painted cardboard discs were spun in front of a mirror and viewed through slits, causing the individual images to merge into a fluid animation." },
      { id: "phenakistiskop", year: "1832", title: "Phenakistiscope", inventor: "Joseph Plateau", description: "Belgian physicist Joseph Plateau developed the Phenakistiscope simultaneously with Stampfer's Magic Discs.", detail: "Plateau held the painted disc in front of a mirror and looked through narrow slits at the edge. It was the first commercially distributed animation device." },
      { id: "zoetrop", year: "1834", title: "Zoetrope", inventor: "William George Horner", description: "British mathematician William George Horner invented the Zoetrope, a rotating drum with slits.", detail: "For the first time, multiple viewers could watch an animation simultaneously. Horner's version was only commercialized in 1867 and became known as the 'Wheel of Life'." },
      { id: "nebelbildapparat", year: "1845", title: "Projecting Phenakistiscope", inventor: "Franz Freiherr von Uchatius", description: "Austrian artillery officer Franz von Uchatius was the first to combine projection with moving phase images.", detail: "Uchatius combined a Magic Lantern with the principle of the Phenakistiscope. It was the first known projection of moving images before an audience." },
      { id: "daumenkino", year: "1868", title: "Flip Book", inventor: "John Barnes Linnett", description: "Englishman John Barnes Linnett patented the Kineograph in 1868: the illusion of movement is created by rapidly flipping through a small book.", detail: "Linnett's invention was revolutionarily simple: no mechanics, no optics, just a stack of paper. The viewer controls the speed themselves." },
      { id: "praxinoskop", year: "1876", title: "Praxinoscope", inventor: "Émile Reynaud", description: "Émile Reynaud decisively improved the Zoetrope by using mirrors instead of slits.", detail: "Reynaud's Praxinoscope replaced the viewing slits with a prism of mirrors. In 1892, he used it to present the first projected animated films." },
      { id: "muybridge", year: "1878", title: "Zoopraxiscope", inventor: "Eadweard Muybridge", description: "Eadweard Muybridge broke down motion into individual phases using sequence photography (The Horse in Motion).", detail: "Using a bank of twelve cameras, he proved that horses briefly hover while galloping. The Zoopraxiscope projected these studies onto a screen." },
      { id: "marey", year: "1882", title: "Chronophotographic Gun", inventor: "Étienne-Jules Marey", description: "A rifle-shaped camera capable of taking twelve images per second on a single rotating plate.", detail: "His Fusil Photographique was a scientific tool to study the flight of birds. It directly influenced the development of the film camera." },
      { id: "anschuetz", year: "1886", title: "Electrotachyscope", inventor: "Ottomar Anschütz", description: "German photographer Ottomar Anschütz combined instantaneous photographs with electric stroboscopic light.", detail: "Anschütz arranged photographs on a rotating disc and illuminated them with flashes from a Geissler tube – the 'electric tachyscope'." },
      { id: "eastman-celluloid", year: "1889", title: "Celluloid Film", inventor: "George Eastman", description: "George Eastman introduced flexible, transparent celluloid film, the basis for cinema.", detail: "Eastman's roll film replaced heavy glass plates and enabled long image sequences. Without it, cameras like those of the Lumières would have been impossible." },
      { id: "kinetoskop", year: "1891", title: "Kinetoscope & Kinetograph", inventor: "W.K.L. Dickson (Edison)", description: "Dickson developed the first movie camera (Kinetograph) and the peepshow viewer (Kinetoscope) at the Edison laboratory.", detail: "Dickson chose the 35mm format, which became the world standard. The Kinetoscope was intended for a single person looking into the box." },
      { id: "mutoskop", year: "1895", title: "Mutoscope", inventor: "Herman Casler & W.K.L. Dickson", description: "The Mutoscope was the direct competitor to Edison's Kinetoscope and worked like a mechanical flip book.", detail: "It used hundreds of photo cards on a reel. It was more robust than film and remained in penny arcades for decades." },
      { id: "lumiere", year: "1895", title: "Cinématographe", inventor: "Auguste & Louis Lumière", description: "The Lumière brothers built a portable device that could record, develop, and project.", detail: "On December 28, 1895, they showed the first films to a paying audience in Paris. This evening is generally considered the birth of cinema." }
    ]
  },
  fr: {
    ui: {
      subline: "Une chronique de l'image en mouvement | 1659 – 1895",
      title1: "Lumière et",
      title2: "Mouvement",
      intro: "Bien avant que le premier écran de cinéma ne s'illumine, inventeurs, physiciens et magiciens rêvaient de donner vie aux images statiques. Ce qui commença comme une curiosité scientifique dans des chambres obscures évolua au fil des siècles en une révolution optique. Voici l'histoire des appareils qui apprirent à nos yeux à voir – étape par étape, image par image.",
      scroll: "Défiler ↓",
      outroTitle: "Le rideau se lève",
      outroText: "Avec le ronronnement du Cinématographe, l'ère des jouets optiques prit fin et celle du cinéma commença. Les tambours magiques mécaniques et les disques vacillants avaient rempli leur mission : ils avaient prouvé que notre perception pouvait être trompée. La voie était désormais libre pour les grands conteurs du 20ème siècle.",
      footer: "© " + new Date().getFullYear() + " The Humants"
    },
    events: [
      { id: "laterna-magica", year: "1659", title: "Lanterne Magique", inventor: "Christiaan Huygens", description: "Le physicien néerlandais Christiaan Huygens fut le premier à décrire le principe de la lanterne magique : une boîte avec une bougie, un miroir concave et une lentille projetant des plaques de verre peintes sur un mur.", detail: "L'invention de Huygens devint l'ancêtre de tous les projecteurs. Aux 18ème et 19ème siècles, elle devint un média de masse : les colporteurs montraient des fantasmagories, des histoires effrayantes et des séries d'images éducatives." },
      { id: "thaumatrop", year: "1825", title: "Thaumatrope", inventor: "John Ayrton Paris", description: "Le médecin britannique John Ayrton Paris construisit un petit disque avec deux images différentes de chaque côté, créant une illusion d'optique lorsqu'il tournait rapidement sur des fils.", detail: "Paris publia le Thaumatrope en 1825 comme jouet philosophique pour démontrer le principe de la persistance rétinienne. En tournant, les images des deux côtés fusionnent en une seule (par ex. un oiseau dans une cage)." },
      { id: "faraday", year: "1831", title: "Roue de Faraday", inventor: "Michael Faraday", description: "Le naturaliste britannique Michael Faraday démontra la persistance de la vision humaine à l'aide d'une roue dentée rotative.", detail: "Faraday observa qu'une roue dentée rotative semble s'arrêter à certaines vitesses. Ce principe devint la base de tous les jouets optiques." },
      { id: "stampfer", year: "1832", title: "Disques Stroboscopiques", inventor: "Simon Ritter von Stampfer", description: "Le mathématicien autrichien Simon Stampfer développa ses disques stroboscopiques (disques magiques) indépendamment de Joseph Plateau.", detail: "Les disques en carton peints de Stampfer étaient tournés devant un miroir et observés à travers des fentes, faisant fusionner les images individuelles en une animation fluide." },
      { id: "phenakistiskop", year: "1832", title: "Phénakistiscope", inventor: "Joseph Plateau", description: "Le physicien belge Joseph Plateau développa le Phénakistiscope simultanément aux disques magiques de Stampfer.", detail: "Plateau tenait le disque peint devant un miroir et regardait à travers des fentes étroites sur le bord. Ce fut le premier appareil d'animation commercialisé." },
      { id: "zoetrop", year: "1834", title: "Zootrope", inventor: "William George Horner", description: "Le mathématicien britannique William George Horner inventa le Zootrope, un tambour rotatif avec des fentes.", detail: "Pour la première fois, plusieurs spectateurs pouvaient regarder une animation simultanément. La version de Horner ne fut commercialisée qu'en 1867 et devint connue sous le nom de 'Roue de la Vie'." },
      { id: "nebelbildapparat", year: "1845", title: "Phénakistiscope à projection", inventor: "Franz Freiherr von Uchatius", description: "L'officier d'artillerie autrichien Franz von Uchatius fut le premier à combiner la projection avec des images de phases en mouvement.", detail: "Uchatius combina une lanterne magique avec le principe du Phénakistiscope. Ce fut la première projection connue d'images en mouvement devant un public." },
      { id: "daumenkino", year: "1868", title: "Folioscope", inventor: "John Barnes Linnett", description: "L'Anglais John Barnes Linnett breveta le Kinéographe en 1868 : l'illusion de mouvement est créée en feuilletant rapidement un petit livre.", detail: "L'invention de Linnett était révolutionnairement simple : pas de mécanique, pas d'optique, juste une pile de papier. Le spectateur contrôle lui-même la vitesse." },
      { id: "praxinoskop", year: "1876", title: "Praxinoscope", inventor: "Émile Reynaud", description: "Émile Reynaud améliora de manière décisive le Zootrope en utilisant des miroirs au lieu de fentes.", detail: "Le Praxinoscope de Reynaud remplaça les fentes de vision par un prisme de miroirs. En 1892, il l'utilisa pour présenter les premiers films d'animation projetés." },
      { id: "muybridge", year: "1878", title: "Zoopraxinoscope", inventor: "Eadweard Muybridge", description: "Eadweard Muybridge décomposa le mouvement en phases individuelles à l'aide de la chronophotographie (Le Cheval en mouvement).", detail: "Utilisant une batterie de douze appareils photo, il prouva que les chevaux planent brièvement au galop. Le Zoopraxinoscope projetait ces études sur un écran." },
      { id: "marey", year: "1882", title: "Fusil Photographique", inventor: "Étienne-Jules Marey", description: "Un appareil photo en forme de fusil capable de prendre douze images par seconde sur une seule plaque rotative.", detail: "Son Fusil Photographique était un outil scientifique pour étudier le vol des oiseaux. Il influença directement le développement de la caméra de cinéma." },
      { id: "anschuetz", year: "1886", title: "Électrotachyscope", inventor: "Ottomar Anschütz", description: "Le photographe allemand Ottomar Anschütz combina des photographies instantanées avec une lumière stroboscopique électrique.", detail: "Anschütz disposa des photographies sur un disque rotatif et les éclaira avec des éclairs d'un tube de Geissler – le 'tachyscope électrique'." },
      { id: "eastman-celluloid", year: "1889", title: "Film Celluloïd", inventor: "George Eastman", description: "George Eastman introduisit le film celluloïd flexible et transparent, la base du cinéma.", detail: "Le film en rouleau d'Eastman remplaça les lourdes plaques de verre et permit de longues séquences d'images. Sans lui, des caméras comme celles des Lumière auraient été impossibles." },
      { id: "kinetoskop", year: "1891", title: "Kinétoscope & Kinétographe", inventor: "W.K.L. Dickson (Edison)", description: "Dickson développa la première caméra de cinéma (Kinétographe) et la visionneuse à œilleton (Kinétoscope) au laboratoire Edison.", detail: "Dickson choisit le format 35mm, qui devint le standard mondial. Le Kinétoscope était destiné à une seule personne regardant dans la boîte." },
      { id: "mutoskop", year: "1895", title: "Mutoscope", inventor: "Herman Casler & W.K.L. Dickson", description: "Le Mutoscope était le concurrent direct du Kinétoscope d'Edison et fonctionnait comme un folioscopio mécanique.", detail: "Il utilisait des centaines de cartes photo sur une bobine. Il était plus robuste que le film et resta dans les salles d'arcade pendant des décennies." },
      { id: "lumiere", year: "1895", title: "Cinématographe", inventor: "Auguste & Louis Lumière", description: "Les frères Lumière construisirent un appareil portable capable d'enregistrer, de développer et de projeter.", detail: "Le 28 décembre 1895, ils montrèrent les premiers films à un public payant à Paris. Cette soirée est généralement considérée comme la naissance du cinéma." }
    ]
  },
  es: {
    ui: {
      subline: "Una crónica de la imagen en movimiento | 1659 – 1895",
      title1: "Luz y",
      title2: "Movimiento",
      intro: "Mucho antes de que se encendiera la primera pantalla de cine, inventores, físicos y magos soñaban con dar vida a imágenes estáticas. Lo que comenzó como una curiosidad científica en cámaras oscuras evolucionó a lo largo de los siglos hasta convertirse en una revolución óptica. Esta es la historia de los aparatos que enseñaron a ver a nuestros ojos: paso a paso, cuadro a cuadro.",
      scroll: "Desplazar ↓",
      outroTitle: "El telón se levanta",
      outroText: "Con el zumbido del Cinématographe terminó la era de los juguetes ópticos y comenzó la del cine. Los tambores mágicos mecánicos y los discos parpadeantes habían cumplido su propósito: habían demostrado que nuestra percepción podía ser engañada. El camino estaba ahora libre para los grandes narradores del siglo XX.",
      footer: "© " + new Date().getFullYear() + " The Humants"
    },
    events: [
      { id: "laterna-magica", year: "1659", title: "Linterna Mágica", inventor: "Christiaan Huygens", description: "El físico holandés Christiaan Huygens fue el primero en describir el principio de la Linterna Mágica: una caja con una vela, un espejo cóncavo y una lente que proyectaba placas de vidrio pintadas en una pared.", detail: "La invención de Huygens se convirtió en el antepasado de todos los dispositivos de proyección. En los siglos XVIII y XIX, se convirtió en un medio de masas: los feriantes mostraban fantasmagorías, historias de terror y series de imágenes educativas." },
      { id: "thaumatrop", year: "1825", title: "Taumatropo", inventor: "John Ayrton Paris", description: "El médico británico John Ayrton Paris construyó un pequeño disco con dos imágenes diferentes en cada lado, creando una ilusión óptica cuando se giraba rápidamente con hilos.", detail: "Paris publicó el Taumatropo en 1825 como un juguete filosófico para demostrar el principio de la persistencia de la visión. Al girar, las imágenes de ambos lados se fusionan en una sola (por ejemplo, un pájaro en una jaula)." },
      { id: "faraday", year: "1831", title: "Rueda de Faraday", inventor: "Michael Faraday", description: "El naturaliste británico Michael Faraday demostró la inercia de la visión humana utilizando una rueda dentada giratoria.", detail: "Faraday observó que una rueda dentada giratoria parece detenerse a ciertas velocidades. Este principio se convirtió en la base de todos los juguetes ópticos." },
      { id: "stampfer", year: "1832", title: "Discos Estroboscópicos", inventor: "Simon Ritter von Stampfer", description: "El matemático austriaco Simon Stampfer desarrolló sus Discos Estroboscópicos (Discos Mágicos) independientemente de Joseph Plateau.", detail: "Los discos de cartón pintados de Stampfer se giraban frente a un espejo y se veían a través de ranuras, haciendo que las imágenes individuales se fusionaran en una animación fluida." },
      { id: "phenakistiskop", year: "1832", title: "Fenaquistiscopio", inventor: "Joseph Plateau", description: "El físico belga Joseph Plateau desarrolló el Fenaquistiscopio simultáneamente con los Discos Mágicos de Stampfer.", detail: "Plateau sostenía el disco pintado frente a un espejo y miraba a través de ranuras estrechas en el borde. Fue el primer dispositivo de animación comercializado." },
      { id: "zoetrop", year: "1834", title: "Zootropo", inventor: "William George Horner", description: "El matemático británico William George Horner inventó el Zootropo, un tambor giratorio con ranuras.", detail: "Por primera vez, varios espectadores podían ver una animación simultáneamente. La versión de Horner solo se comercializó en 1867 y se conoció como la 'Rueda de la Vida'." },
      { id: "nebelbildapparat", year: "1845", title: "Fenaquistiscopio de Proyección", inventor: "Franz Freiherr von Uchatius", description: "El oficial de artillería austriaco Franz von Uchatius fue el primero en combinar la proyección con imágenes de fases en movimiento.", detail: "Uchatius combinó una Linterna Mágica con el principio del Fenaquistiscopio. Fue la primera proyección conocida de imágenes en movimiento ante una audiencia." },
      { id: "daumenkino", year: "1868", title: "Folioscopio", inventor: "John Barnes Linnett", description: "El inglés John Barnes Linnett patentó el Kineograph en 1868: la ilusión de movimiento se crea pasando rápidamente las páginas de un pequeño libro.", detail: "La invención de Linnett fue revolucionariamente simple: sin mecánica, sin óptica, solo una pila de papel. El espectador controla la velocidad por sí mismo." },
      { id: "praxinoskop", year: "1876", title: "Praxinoscopio", inventor: "Émile Reynaud", description: "Émile Reynaud mejoró decisivamente el Zootropo utilizando espejos en lugar de ranuras.", detail: "El Praxinoscopio de Reynaud reemplazó las ranuras de visión con un prisma de espejos. En 1892, lo utilizó para presentar las primeras películas animadas proyectadas." },
      { id: "muybridge", year: "1878", title: "Zoopraxiscopio", inventor: "Eadweard Muybridge", description: "Eadweard Muybridge descompuso el movimiento en fases individuales utilizando fotografía secuencial (El Caballo en Movimiento).", detail: "Utilizando una batería de doce cámaras, demostró que los caballos flotan brevemente al galopar. El Zoopraxiscopio proyectaba estos estudios en una pantalla." },
      { id: "marey", year: "1882", title: "Fusil Fotográfico", inventor: "Étienne-Jules Marey", description: "Una cámara con forma de rifle capaz de tomar doce imágenes por segundo en una sola placa giratoria.", detail: "Su Fusil Photographique fue una herramienta científica para estudiar el vuelo de las aves. Influyó directamente en el desarrollo de la cámara de cine." },
      { id: "anschuetz", year: "1886", title: "Electrotachyscope", inventor: "Ottomar Anschütz", description: "El fotógrafo alemán Ottomar Anschütz combinó fotografías instantáneas con luz estroboscópica eléctrica.", detail: "Anschütz dispuso fotografías en un disco giratorio y las iluminó con destellos de un tubo de Geissler: el 'tachyscope eléctrico'." },
      { id: "eastman-celluloid", year: "1889", title: "Película de Celuloide", inventor: "George Eastman", description: "George Eastman introdujo la película de celuloide flexible y transparente, la base del cine.", detail: "La película en rollo de Eastman reemplazó las pesadas placas de vidrio y permitió largas secuencias de imágenes. Sin ella, cámaras como las de los Lumière habrían sido imposibles." },
      { id: "kinetoskop", year: "1891", title: "Cinetoscopio & Cinetógrafo", inventor: "W.K.L. Dickson (Edison)", description: "Dickson desarrolló la primera cámara de cine (Cinetógrafo) y el visor (Cinetoscopio) en el laboratorio de Edison.", detail: "Dickson eligió el formato de 35mm, que se convirtió en el estándar mundial. El Cinetoscopio estaba destinado a una sola persona que miraba dentro de la caja." },
      { id: "mutoskop", year: "1895", title: "Mutoscopio", inventor: "Herman Casler & W.K.L. Dickson", description: "El Mutoscopio fue el competidor directo del Cinetoscopio de Edison y funcionaba como un folioscopio mecánico.", detail: "Utilizaba cientos de tarjetas fotográficas en un carrete. Era más robusto que la película y permaneció en las salas de juegos durante décadas." },
      { id: "lumiere", year: "1895", title: "Cinématographe", inventor: "Auguste & Louis Lumière", description: "Los hermanos Lumière construyeron un dispositivo portátil capaz de grabar, revelar y proyectar.", detail: "El 28 de diciembre de 1895, mostraron las primeras películas a una audiencia de pago en París. Esta noche se considera generalmente el nacimiento del cine." }
    ]
  }
}

// =============================================================================
// 4. HELPER FUNKTION (Zusammenbau)
// =============================================================================
export function getTimelineData(lang: Language = "de") {
  const t = translations[lang]
  const timelineWithImages = t.events.map(event => {
    // Hier holen wir die sicheren Links aus Schritt 1
    const images = eventImages[event.id as keyof typeof eventImages]
    return {
      ...event,
      ...images
    }
  })

  return {
    ui: t.ui,
    events: timelineWithImages
  }
}