declare module Redux {
  interface Action extends Object {
    type: string,
    [others: string]: any
  }
}
