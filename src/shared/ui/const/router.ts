export enum AppRoutes {
    MAIN = '/',
    LOGIN = 'login',
    SIGNUP = 'signup',
    ME = 'me',
    NEW_SITE = 'sites/new',
    SITE = 'site'
   
}

export const getRouteSite = (id:string) => `/sites/${id}`
export const getRouteNewSite = () => '/sites/new'
export const getRouteMain = () =>  '/'
export const getRouteForbidden = () => '/forbidden'
export const getRouteLogin = () => '/login'
export const getRouteMe = () => '/me'
export const getRouteSignup = () => '/signup'
