
export type sponsor = {
    name: string,
    desc: string,
    logo: string,
    id?: number,
    link?: string
}



export const sponsors: sponsor[] = [
    {
        name: "Brief.me ",
        desc: 'Vous partage l’essentiel de l’actualité de manière quotidienne via l’application ou par mail. Grâce à Wanted, les 2 mois d’essais sont gratuits et l’abonnement annuel revient à 29€ au lieu de 58,80€.',
        logo: 'BM.png',
        link: "https://www.brief.me/"
    },
    {
        name: "Tripcounter",
        desc: "Vous propose de l’aide pour trouver stage, logement et assistance à l’étranger. Grâce à Wanted, une réduction de 5 % est applicable sur chacun des services proposés et il y aura possibilité de gagner des services grâce à des concours",
        logo: 'TC.png',
        link: "https://tripcounter.fr/"
    },
    {
        name: "Pumpkin",
        desc: "Vous propose des réductions grâce au code parrainage Wanted, et nous permettera d'avoir accès à une billeterie simple et éfficace",
        logo: 'PK.png',
        link: "https://pumpkin-app.co"
    },
    {
        name: "Bureau des goodies",
        desc: "Un super bon plan pour commander vos goodies en grandes quantités et à bon prix !",
        logo: 'BDG.png',
        link: "https://www.bureau-des-goodies.fr/"
    },
    {
        name: "Pop out",
        desc: "Une super application de bons plans sur Paris et ses alentours.",
        logo: 'PO.png'
    },
    {
        name: "Poppy’s",
        desc: "Une excellente crèperie qui vous proposera un délicieux menu Wanted.",
        logo: 'Pops.png',
        link: "https://www.poppy-s.fr"
    },
    {
        name: "Koezio",
        desc: "Des réductions sur un tas d'activitées telles que des escape games ou de la réalité virtuelle",
        logo: 'Kz.png',
        link: 'https://koezio.co'
    },
    {
        name: "Permilike",
        desc: "Une super auto-école située dans Cergy qui vous propose une scéance d'évaluation gratuite (d'une valeur de 44€).",
        logo: 'PL.png',
        link: "https://www.permilike.com"
    },
    {
        name: "Au pain du village",
        desc: 'Une boulangerie près du port, qui vous offrerons des réductions sur leurs produits.',
        logo: 'pdv.png',
        link: "https://au-pain-du-village.business.site/"
    },
    {
        name: "BeEtudiant",
        desc: 'Une super application de bons plans sur Cergy et ses alentours.',
        logo: 'BEE.png'
    },
]