export interface MasterDataModel {
    code: number,
    data: Data,
    success: number,
}

export interface Data {
    master_data: Masterdata
}

export interface Masterdata {
    profile: Profile,
    allergic_ingredients:AllergicIngredients[],
}

export interface Profile {
    gender: Gender[],
    referrers: Referrers[],
    activity_level: ActivityLevel,
    dob_display_format:string,
    dob_db_update_format:string
   
}

export interface Gender {
    name: string,
    id: number
   
}

export interface Referrers {
    name: string,
    id: number
   
}

export interface ActivityLevel {
    name: string,
    id: number
   
}

export interface AllergicIngredients {
    name: string,
    id: number
}

      
    