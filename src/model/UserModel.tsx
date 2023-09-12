export interface SignInModel {
    sign_in: {login: string,
              password: string,}
  
}


export interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,        
    date_of_birth: Date | null | string,
    username: string,
    phone_number: string | null,
    verification_code: string | null ,
    verification_code_expiry:string | null,
    is_verified: boolean,
    created_at: Date | string | null,
    updated_at: Date | string | null,
}

export interface SignIResnModel {
    access_token: string,
    user: User,
  
}

export interface UserDataModel {
    code: number,
    data: SignIResnModel,
    success: boolean,
}

export interface NewUserDataModel {
    message: string,
    code: number,
    data: SignIResnModel,
    success: boolean,
}

export interface ErrorMssage{
    message:string,
}

export interface errorResp{
    code: number,
    error: ErrorMssage,
    success: boolean,
}


export interface SignupModel {
    sign_up: {
        first_name: string,
        last_name: string,
        email: string,
        password: string,
       username: string,
    }
  
}

