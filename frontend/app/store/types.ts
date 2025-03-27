export interface FormData {
    numero_finess: string;
    nom: string;
    site_web: string;
    numero_telephone: string;
    adresse_mail: string;
    coordonnee_geographique: string;
    adresse: string;
    code_postal: string;
    ville: string;
    modalites: number[];
    horaires: number[];
}

export interface Adresse {
    code_postal: number;
    ville: string;
}

export interface Modalite {
    id_modalite: number;
    nom_modalite: string;
}

export interface Horaire {
    id_horaire: number;
    jour: string;
    horaire_ouverture: string;
    horaire_fermeture: string;
}

// Interface des options pour les sélections
export interface FormOptions {
    adresses: Adresse[];
    modalites: Modalite[];
    horaires: Horaire[];
}