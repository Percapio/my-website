export interface InitialPull {
    data: Array<any>;
}
export interface Blog {
    title: string;
    description: string;
    blurb: string;
    img: string;
    dateCreated: number;
    dateUpdated: number;
}
export interface Work {
    title: string;
    description: string;
    blurb: string;
    img: string;
    url: string;
    technologies: Array<string>;
    languages: Array<string>;
    extras: Array<string>;
    ranking: number;
    dateCreated: number;
    dateUpdated: number;
}
export interface Project {
    title: string;
    description: string;
    blurb: string;
    img: string;
    url: string;
    technologies: Array<string>;
    languages: Array<string>;
    extras: Array<string>;
    ranking: number;
    dateCreated: number;
    dateUpdated: number;
}
export interface Contact {
    user: string;
    email: string;
    message: string;
    dateCreated: number;
    dateUpdated: number;
}
