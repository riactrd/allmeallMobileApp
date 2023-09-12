export interface AllergicModel {
    code: number,
    data: Data,
    success: number;
}

export interface Data {
    message: string
}

export interface Messege {
    user: {
        ingredient_ids: number[]
    }
   

}



export interface allergicEdict {
    user: {
        ingredient_ids: number[]
    }
   

}