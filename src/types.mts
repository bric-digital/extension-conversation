export interface Citation {
  source:string,
  title:string,
  url?:string,
}

export interface AISummary {
  query:string,
  content:string,
  platform:string,
  citations?: Citation[],
  metadata?: any,
}

export interface NewsBlurb {
  headline:string,
  source:string,
  authors:string[],
  summary?:string,
  url?:string,
  citations?: Citation[],
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
  citations?: Citation[]
}

export interface Conversation {
  turns:Turn[],
  platform:string,
  identifier:string,
  started:Date,
  ended:Date,
  metadata:any,
}
