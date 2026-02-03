export interface AISummary {
  query:string,
  content:string,
  platform:string,
  metadata?: any,
}

export interface NewsBlurb {
  headline:string,
  source:string,
  authors:string[],
  summary?:string,
  url?:string,
}

export interface Result {
  title:string,
  link:string,
  preview:string,
  index:number,
}

export interface Search {
  platform:string,
  query:string,
  type:string,
  result:Result[],
  news:NewsBlurb[],
  aiSummaries:AISummary[],
}

export interface Turn {
  speaker:string,
  when:Date,
  content:string,
  identifier?:string,
  search?:Search,
  metadata:any,
}

export interface Conversation {
  turns:Turn[],
  platform:string,
  identifier:string,
  started:Date,
  ended:Date,
  metadata:any,
}
