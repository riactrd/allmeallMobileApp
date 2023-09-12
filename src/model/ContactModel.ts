export interface ResponseContactModel {
    code: number,
    data: Data,
    success: boolean;
}

export interface Data {
    message: string,
    
}

export interface ContactModel {
    contact_us:{
        
        name: string,
        email: string,
        phone_number: string,
        subject: string,
        message: string,
    }
}

