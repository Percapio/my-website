import * as Interfaces from '../interface_tests';
export declare class Blog {
    data: {
        title: string;
        summary: string;
        blurb: string;
        img: string;
        dateCreated: number;
        dateUpdated: number;
    };
    constructor(props: Interfaces.Blog);
    makeBlog(): string;
}
