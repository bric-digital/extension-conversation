export interface Turn {
    speaker:string,
    when:Date,
    content:string,
    identifier?:string,
    metadata:any
}

export interface Conversation {
  turns:Turn[],
  identifier:string,
  started:Date,
  ended:Date,
  metadata:any
}
