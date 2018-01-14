export interface InitialPull {
    data: Array<any>;
}
export interface Blog {
    title: string;
    summary: string;
    blurb: string;
    img: string;
    dateCreated: number;
    dateUpdated: number;
}
export interface Project {
    title: string;
    summary: string;
    blurb: string;
    img: string;
    url: string;
    ranking: number;
    dateCreated: number;
    dateUpdated: number;
}
export interface Contact {
    name: string;
    email: string;
    message: string;
    dateCreated: number;
    dateUpdated: number;
}
