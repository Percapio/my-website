import * as Interfaces from '../interface_tests';
export default class Project {
    data: {
        title: string;
        description: string;
        blurb: string;
        img: string;
        url: string;
        technologies: Array<string>;
        languages: Array<string>;
        extras: Array<any>;
        ranking: number;
        dateCreated: number;
        dateUpdated: number;
    };
    constructor(props: Interfaces.Project);
}
