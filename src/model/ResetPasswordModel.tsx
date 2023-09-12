
export interface ResetPasswordModel {
    
        code: number,
        data: null,
        error: Error,
        message: null,
        success: boolean,
  
}

export interface Error {
        message: string,
      
}

export interface ResetPassword{
   reset_password: {
        id: number,
        verification_code: string,
        password: string,
        password_confirmation: string,
    }

}