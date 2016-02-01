declare module ReactRouter {
  interface RouteProp {
    component?: any
    components?: any
    onEnter?: any
  }

  export var Router: any
  export var IndexRoute: any
  export var browserHistory: any
}
