
export interface VerifyCodeModel {
    verify_user: {
        id: string,
        verification_code: string,
    }
  
}

export interface VerifyCodeModelDataModel {
    code: number,
    data: AccessToken,
    success: boolean,
}

export interface AccessToken{
    access_token: string,
}

