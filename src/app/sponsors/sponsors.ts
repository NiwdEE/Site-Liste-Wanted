
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
        logo: 'brief.me.png',
        link: "https://www.brief.me/"
    },
    {
        name: "Tripcounter",
        desc: "Vous propose de l’aide pour trouver stage, logement et assistance à l’étranger. Grâce à Wanted, une réduction de 5 % est applicable sur chacun des services proposés et il y aura possibilité de gagner des services grâce à des concours",
        logo: 'TripCounter.png',
        link: "https://tripcounter.fr/"
    },
    {
        name: "Pumpkin",
        desc: "Vous propose des réductions grâce au code parrainage <b>Wanted</b>, et nous permettera d'avoir accès à une billeterie simple et éfficace",
        logo: 'pumpkin.png'
    },
    {
        name: "Bureau des goodies",
        desc: "Un super bon plan pour commander vous goodies en grandes quantités et à bon prix !",
        logo: 'BDG.png'
    },
    {
        name: "Popout",
        desc: "Une super application de bons plans sur Paris et ses alentours",
        logo: 'pop_out.png'
    },
    {
        name: "Poppy’s",
        desc: "Une excellente crèperie qui vous proposera un délicieux menu Wanted",
        logo: 'Poppy_s.png'
    },
    {
        name: "Koezio",
        desc: 'un crack internationnal de classe c6',
        logo: 'Koezio.png'
    },
    {
        name: "Permilike",
        desc: "Une super auto-école située dans Cergy qui vous propose <b>une scéance d'évaluation gratuite</b> (d'une valeur de 44€)",
        logo: 'PermiLike.png'
    },
    {
        name: "8tin-mar",
        desc: 'un crack internationnal de classe c8',
        logo: '/assets/images/members/Martin.jpg'
    },
    {
        name: "9tin-mar",
        desc: 'un crack internationnal de classe c9',
        logo: '/assets/images/members/Martin.jpg'
    },
]