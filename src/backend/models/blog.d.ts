import * as Interfaces from '../interface_tests';
export default class Blog {
    data: {
        title: string;
        description: string;
        blurb: string;
        img: string;
        dateCreated: number;
        dateUpdated: number;
    };
    constructor(props: Interfaces.Blog);
}
