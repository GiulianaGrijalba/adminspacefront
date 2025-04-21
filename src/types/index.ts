export interface ILoginProps {
    Email: string;
    Password: string;
  }
  
  export interface ILoginPropsErrors {
    Email?: string;
    Password?: string;
  }
  

export type UserRole = 'ADMIN' | 'PROPIETARIO' | 'INQUILINO'; 

export interface IRegister {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    
}







// export interface IUserSession {
//     token: string;
//     user: {
//         idUser: string;
//         name: string;
//         lastname: string;
//         email: string;
//         phone: string;
//         password: string;
//         role?: UserRole
//     }
   

