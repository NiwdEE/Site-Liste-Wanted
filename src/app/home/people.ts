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
          desc: "Elle a réponse à tout !",
          tag: "Trésorière"
        }
      ]
    },
    {
      name: "Pôle Soirée",
      members:[
        {
          name: "Martin V.",
          nickname: "Polkomsoulburo",
          desc: "En plus de faire tout le boulot, il s'est fait la prez",
          tag: "Respo Soirée"
        },
        {
          name: "Dorian F.",
          nickname: "Cheer'If 345",
          desc: "Un nombre reflétant un sombre passé..."
        },
        {
          name: "Duncan B.",
          nickname: "PileOuFace",
          desc: "Qu'est-ce qu'il fait là ? Un pur hasard !"
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
          name: "Marie TR.",
          nickname: "Before",
          desc: "Pas encore partie, et déjà fumée"
        },
        {
          name: "Marien M.",
          nickname: "L'unidanseur",
          desc: "Non il n'est pas handicapé moteur, il danse vraiment comme ça..."
        },
        {
          name: "Margot R.",
          nickname: "Câlin",
          desc: "Et lui on dit merci pour notre année !"
        }
      ]
    },
    {
      name: "Pôle Communication",
      members:[
        {
          name: "Edwin A.",
          nickname: "L'alchimiste",
          // desc: "Lui même ne sait pas ce qu'il met dans ses mélanges mais l'important c'est que c'est bon (et bien fort)",
          desc: "Des mélanges à vous en ravir le palais (moins le foie)",
          tag: "Respo Com'",
          id: 69
        },
        {
          name: "Antoine M.",
          nickname: "Le truand",
          desc: "Ses profs et ses camarades ne l'ont jamais vu, ses bulletins sont vides, mais il continue de valider ses semestres...",
        },
        {
          name: "Eyal G.",
          nickname: "Dr Salé",
          // desc: "Si vous tenez à votre audition, évitez de le contrarier, ou de jouer à Pokémon avec lui"
          desc: "Si j'étais vous j'éviterai de le contrarier !"
        },
        {
          name: "Flo H.",
          nickname: "poti blagueur",
          desc: "La réponse à tous les blancs !"
        },
        {
          name: "Aleena J.",
          nickname: "Beurre sale",
          desc: ""
        }
      ]
    },
    {
      name: "Pôle Event",
      members: [
        {
          name: "Marie TP.",
          nickname: "Britney",
          desc: "Et pourtant elle ne sait pas chanter...",
          tag: "Respo Event"
        },
        {
          name: "Marion P.",
          nickname: "A Kroquer",
          desc: "Avant d'acheter 520 kro, il aurait fallut penser au stockage..."
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
          nickname: "Murgence",
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
          nickname: "Mezaffaires ?",
          desc: "Si vous trouvez un truc qui traine, c'est sûrement à elle"
        },
        {
          name: "Mohammed R.",
          nickname: "Jack",
          desc: ""
        }
      ]
    },
    {
      name: "Pôle-Asso",
      members: [
        {
          name: "Hugo R.",
          nickname: "Ghost Rider",
          desc: "On suppose qu'il préfère sa moto aux réunions, mais on n'a jamais pu lui demander",
          tag: "Respôle'asso"
        },
        {
          name: "Samy LB.",
          nickname: "Samy The Kid",
          desc: ""
        },
        {
          name: "Rojojo",
          nickname: "@Listeux",
          // desc: "Imagine il a pas de péno. Nan j'rigole. Mais imagine quand même..."
          desc: "Listeux moi ? Sérieusement ?! Demande à mon groupe d'amis, tu vas voir les réponses que tu vas te prendre XD"

        },
        {
          name: "Roxanne LB.",
          nickname: "Red Light",
          desc: ""

        },

        {
          name: "Dodovan",
          nickname: "Le Vanted",
          desc: "9 places de pur plaisir ! (plus si affinités)"
        }
      ]
    }
  ]
  
