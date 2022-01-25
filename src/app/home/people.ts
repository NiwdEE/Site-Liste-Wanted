export type member = {
    name: string,
    nickname: string,
    desc: string,
    tag?: string,
    id?: number
}
  
export type pole = {
    name: string,
    members: member[]
}

export const nullMember = {
  name: "",
  nickname: "",
  desc: ""
}
  
const Libre = [
    " Position",
    " Potes",
    " Nord",
    " Sud",
    " Dance",
    "-Ygame",
    "-Itique",
    "-Tougal"
]
  
  /*
  Personnes à qui demander une explication de leur surnom:
    Sophia
    Marie T
    Margot
    Ludivine
    
  */
  
export const Poles: pole[] = [
    {
      name: "Bureau",
      members:[
        {
          name: "Mathilde Marrot",
          nickname: "Drunky Luke",
          desc: "Arrive à être bourée plus vite que son ombre",
          tag: "Présidente"
        },
        {
          name: "Louis Maley",
          nickname: "SDF",
          desc: "Si vous avez un toit pour ce soir, il est preneur !",
          tag: "Vice-Président"
        },
        {
          name: "Matthieu Touré",
          nickname: "Cœur 2 bière",
          desc: "Son étagère en dit long...",
          tag: "Vice-Président"
        },
        {
          name: "Philippe Mootz",
          nickname: "BDratC",
          desc: "Vous avez déjà entendu parler du BDAC ?",
          tag: "Trésorier"
        },
        {
          name: "Kévin Frick",
          nickname: "Licorneuuuh",
          desc: "Heuuuu...",
          tag: "Secrétaire"
        },
        {
          name: "Alicia Beguin",
          nickname: "Abadakor",
          desc: "",
          tag: "Vice-trésorière"
        }
      ]
    },
    {
      name: "Pôle Soirée",
      members:[
        {
          name: "Martin Valignon",
          nickname: "Vodkarambar",
          desc: "Vous avez du parquais ? Il a des carambars !",
          tag: "Respo Soirée"
        },
        {
          name: "Dorian Fuvel",
          nickname: "Cheer'If 316",
          desc: "Un sombre passé..."
        },
        {
          name: "Duncan Boukhssibi",
          nickname: "PileOuFace",
          desc: "Qu'est-ce qu'il fait là ? Un pûr hasard !"
        },
        {
          name: "Hugo Ribeiro",
          nickname: "Ghost Rider",
          desc: "On suppose qu'il préfère sa moto aux réunions, mais on n'a jamais pu lui demander"
        },
        {
          name: "Mattéo Riedinger",
          nickname: "IKEA",
          desc: "Vous avez besoin de chaises, d'une table ou d'un lit ? Vous savez ou chercher..."
        },
        {
          name: "Sophia Mounjeddine",
          nickname: "Dr Water",
          desc: ""
        },
        {
          name: "Ayann Mamodaly Samdjee",
          nickname: "Akamura",
          desc: "Fermez la porte, y'a la pookie dans l'side"
        },
      ]
    },
    {
      name: "Pôle Voyage",
      members:[
        {
          name: "Baptiste André",
          nickname: "Baptissier",
          desc: "Les meilleures pâtisseries de tout Cergy",
          tag: "Respo Voyage"
        },
        {
          name: "Marie Trutet",
          nickname: "Before",
          desc: ""
        },
        {
          name: "Marien Mailhot",
          nickname: "L'unidanseur",
          desc: "Non il n'est pas handicapé moteur, il danse vraiment comme ça..."
        },
        {
          name: "Margot Rouillé",
          nickname: "Câlin",
          desc: ""
        },
        {
          name: "Samy Lenormand-boucherit",
          nickname: "Samy The Kid",
          desc: ""
        }
      ]
    },
    {
      name: "Pôle Communication",
      members:[
        {
          name: "Edwin Amrein",
          nickname: "L'alchimiste",
          desc: "Lui même ne sait pas ce qu'il met dans ses mélanges mais l'imporant c'est que c'est bon (et bien fort)",
          tag: "Respo Com'",
          id: 69
        },
        {
          name: "Antoine Moreau",
          nickname: "Le truand",
          desc: "Ses profs ne le connaissent pas, ses camarades ne l'ont jamais vu, ses bulletins sont blancs comme neige, mais il continue de valider ses semestres..."
        },
        {
          name: "Eyal Gros",
          nickname: "Dr Salé",
          desc: "Si vous tenez à votre audition, évitez de le contrarier"
        }
      ]
    },
    {
      name: "Pôle Event",
      members: [
        {
          name: "Marie Travaillé-Pestel",
          nickname: "Britney",
          desc: "",
          tag: "Respo Event"
        },
        {
          name: "Marion Pinoit",
          nickname: "A Kroquer",
          desc: "Avant d'acheter 520 bières, il aurait fallut penser au stockage"
        },
        {
          name: "Brayan Khali",
          nickname: "InZeKouisine",
          desc: "Où est Brayan ?"
        },
        {
          name: "Cédric Golotvine",
          nickname: "Lovdisc",
          desc: "Le débat Salamèche vs Carapuce vs Bulbizarre ne l'atteint pas"
        },
        {
          name: "Justine Murgue",
          nickname: "La Murgence",
          desc: ""
        },
        {
          name: "Ludivine Bizien",
          nickname: "La Tisseuse",
          desc: ""
        }
      ]
    },
    { 
      name: "Pôle Entreprise",
      members:[
        {
          name: "Paul Pelletier",
          nickname: "L'éboueur",
          desc: "Ramasse les déchets qui trainent chez lui, pour les ramener chez eux...",
          tag: "Respo Entreprise"
        },
        {
          name: "Elie Passi",
          nickname: "Sapologue",
          desc: ""
        },
        {
          name: "Louise Déprés",
          nickname: "Mezaffaires",
          desc: ""
        },
        {
          name: "Mohammed Rahmani",
          nickname: "Jack",
          desc: ""
        }
      ]
    },
    {
      name: "Pôle-Yvalent",
      members: [
        {
          name: "Adam Ben Chaabane",
          nickname: "Aladdin²",
          desc: ""
        }
      ]
    }
  ]
  
