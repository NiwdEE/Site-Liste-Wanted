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
    Marie T
    Margot
    Ludivine
    
  */
  
export const Poles: pole[] = [
    {
      name: "Bureau",
      members:[
        {
          name: "Mathilde M.",
          nickname: "Drunky Luke",
          desc: "Arrive à être bourée plus vite que son ombre",
          tag: "Présidente"
        },
        {
          name: "Louis M.",
          nickname: "SDF",
          desc: "Si vous avez un toit pour ce soir, il est preneur !",
          tag: "Vice-Président"
        },
        {
          name: "Matthieu T.",
          nickname: "Cœur 2 bière",
          desc: "Son étagère en dit long...",
          tag: "Vice-Président"
        },
        {
          name: "Philippe M.",
          nickname: "BDratC",
          desc: "Vous avez déjà entendu parler du BDAC ?",
          tag: "Trésorier"
        },
        {
          name: "Kévin F.",
          nickname: "Licorneuuuh",
          desc: "Heuuuu...",
          tag: "Secrétaire"
        },
        {
          name: "Alicia B.",
          nickname: "Abadakor",
          desc: "",
          tag: "Trésorière"
        }
      ]
    },
    {
      name: "Pôle Soirée",
      members:[
        {
          name: "Martin V.",
          nickname: "Paul Khomme",
          desc: "^-^",
          tag: "Respo Soirée"
        },
        {
          name: "Dorian F.",
          nickname: "Cheer'If 345",
          desc: "Un sombre passé..."
        },
        {
          name: "Duncan B.",
          nickname: "PileOuFace",
          desc: "Qu'est-ce qu'il fait là ? Un pûr hasard !"
        },
        {
          name: "Hugo R.",
          nickname: "Ghost Rider",
          desc: "On suppose qu'il préfère sa moto aux réunions, mais on n'a jamais pu lui demander"
        },
        {
          name: "Mattéo R.",
          nickname: "IKEA",
          desc: "Vous avez besoin de chaises, d'une table ou d'un lit ? Vous savez où chercher..."
        },
        {
          name: "Sophia M.",
          nickname: "Dr Water",
          desc: "Jamais sans sa bouteille"
        },
        {
          name: "Ayann MS.",
          nickname: "Akamura",
          desc: "Fermez la porte, y'a la pookie dans l'side"
        },
      ]
    },
    {
      name: "Pôle Voyage",
      members:[
        {
          name: "Baptiste A.",
          nickname: "Baptissier",
          desc: "Les meilleures pâtisseries de tout Cergy",
          tag: "Respo Voyage"
        },
        {
          name: "Marie T.",
          nickname: "Before",
          desc: ""
        },
        {
          name: "Marien M.",
          nickname: "L'unidanseur",
          desc: "Non il n'est pas handicapé moteur, il danse vraiment comme ça..."
        },
        {
          name: "Margot R.",
          nickname: "Câlin",
          desc: ""
        },
        {
          name: "Samy LB.",
          nickname: "Samy The Kid",
          desc: ""
        }
      ]
    },
    {
      name: "Pôle Communication",
      members:[
        {
          name: "Edwin A.",
          nickname: "L'alchimiste",
          desc: "Lui même ne sait pas ce qu'il met dans ses mélanges mais l'imporant c'est que c'est bon (et bien fort)",
          tag: "Respo Com'",
          id: 69
        },
        {
          name: "Antoine M.",
          nickname: "Le truand",
          desc: "Ses profs et ses camarades ne l'ont jamais vu, ses bulletins sont vides, mais il continue de valider ses semestres..."
        },
        {
          name: "Eyal G.",
          nickname: "Dr Salé",
          desc: "Si vous tenez à votre audition, évitez de le contrarier, ou de jouer à Pokémon avec lui"
        },
        {
          name: "Florian",
          nickname: "poti blagueur",
          desc: "zgefrerg"
        }
      ]
    },
    {
      name: "Pôle Event",
      members: [
        {
          name: "Marie TP.",
          nickname: "Britney",
          desc: "",
          tag: "Respo Event"
        },
        {
          name: "Marion P.",
          nickname: "A Kroquer",
          desc: "Avant d'acheter 520 bières, il aurait fallut penser au stockage"
        },
        {
          name: "Brayan K.",
          nickname: "InZeKouisine",
          desc: "Où est Brayan ?"
        },
        {
          name: "Cédric G.",
          nickname: "Lovdisc",
          desc: "Le débat Salamèche vs Carapuce vs Bulbizarre ne l'atteint pas"
        },
        {
          name: "Justine M.",
          nickname: "La Murgence",
          desc: ""
        },
        {
          name: "Ludivine B.",
          nickname: "La Tisseuse",
          desc: ""
        }
      ]
    },
    { 
      name: "Pôle Entreprise",
      members:[
        {
          name: "Paul P.",
          nickname: "L'éboueur",
          desc: "Ramasse les déchets qui trainent chez lui, pour les ramener chez eux...",
          tag: "Respo Entreprise"
        },
        {
          name: "Elie P.",
          nickname: "Sapologue",
          desc: ""
        },
        {
          name: "Louise D.",
          nickname: "Mezaffaires",
          desc: ""
        },
        {
          name: "Mohammed R.",
          nickname: "Jack",
          desc: ""
        }
      ]
    },
    {
      name: "Pôle-Yvalent",
      members: [
        {
          name: "Adam BC.",
          nickname: "Aladdin²",
          desc: ""
        }
      ]
    }
  ]
  
