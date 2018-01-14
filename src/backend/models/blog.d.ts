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
    makeBlog(): string;
}
export declare const findAllBlogs: (updateBlogList: any) => void;
export declare const fetchBlog: (id: string, grabBlog: any) => void;
export declare const updateBlog: (id: string, blog: Interfaces.Blog) => string;
export declare const deleteBlog: (id: string) => void;
