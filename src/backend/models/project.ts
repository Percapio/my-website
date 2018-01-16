import * as Interfaces from '../interface_tests';

// Export Firebase Project Model
export default class Project {
  data : {
    title       : string,
    description : string,
    blurb       : string,
    img         : string,
    url         : string,
    technologies: Array<string>,
    languages   : Array<string>,
    extras      : Array<any>,
    ranking     : number, 
    dateCreated : number,
    dateUpdated : number
  }

  constructor(props : Interfaces.Project) {
    this.data = {
      title       : props.title,
      description : props.description,
      img         : props.img,
      blurb       : props.blurb,
      url         : props.url,
      technologies: props.technologies,
      languages   : props.languages,
      extras      : props.extras,
      ranking     : props.ranking,

      dateCreated: Date.now(),
      dateUpdated: Date.now()
    }
  }
}
