
export interface ResentCodeModel {
    
        code: number,
        message: string,
        data: data,
        success: boolean,
      
  
}

export interface data {
        user: user,
      
}

export interface user{
        id: number,
        email: string,
        first_name: string,
        last_name: string,
}

// export interface RecentUserId{
//     id: string,
// }
