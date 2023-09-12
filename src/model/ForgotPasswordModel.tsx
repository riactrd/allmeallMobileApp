
export interface ForgotPasswordModel{
        code: number,
        message: string,
        data: Data,
        success: boolean,
  
}

export interface Data {
        user: User
      
}

export interface User{
        id: number,
        email: string,
        first_name: string,
        last_name: string,

}

export interface ForgotPassword{
        forgot_password: {
                email: string
            }

}