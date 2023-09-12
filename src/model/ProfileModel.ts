export interface ProfileModel {
    code: number,
    data: Data,
    success: number;
}

export interface Data {
    profile: Profile,
    allergic_ingredients: AllergicIngredients []
}

export interface Profile {
    
            id: number,
            user_id: number,
            first_name: string,
            last_name: string,
            delivery_address: null,
            phone_number: string,
            sec_phone_number: null,
            referrer_id: null,
            referral_email: null,
            height_feet: null,
            height_inches: null,
            weight: null,
            health_conditions: null,
            level_of_activity: null,
            gender: null,
            food_allergies: null,
            food_sensitivity: null,
            occupation: null,
            alcohol_intake_per_week: null,
            medication: null,
            other: null,
            weight_goal: null,
            goal_timing: null,
            any_allergy: null,
            any_food_sensitivity: null,
            number_of_allergies_and_sensitivities: null,
            deleted_at: null,
            created_at: string,
            updated_at: string,
            date_of_birth: null,
            is_profile_completed: boolean
          
        
        
      
}

export interface Profile {
    
    id: number,
    user_id: number,
    first_name: string,
    last_name: string,
    delivery_address: null,
    phone_number: string,
    sec_phone_number: null,
    referrer_id: null,
    referral_email: null,
    height_feet: null,
    height_inches: null,
    weight: null,
    health_conditions: null,
    level_of_activity: null,
    gender: null,
    food_allergies: null,
    food_sensitivity: null,
    occupation: null,
    alcohol_intake_per_week: null,
    medication: null,
    other: null,
    weight_goal: null,
    goal_timing: null,
    any_allergy: null,
    any_food_sensitivity: null,
    number_of_allergies_and_sensitivities: null,
    deleted_at: null,
    created_at: string,
    updated_at: string,
    date_of_birth: null,
    is_profile_completed: boolean
  


}


export interface editProfile {
    // id: number,
    profile:{
        first_name: string,
        last_name: string,
        phone_number: string,
        sec_phone_number: string,
        referrer_id: number,
        referral_email: string,
        height_feet: null,
        height_inches: null,
        weight: null,
        health_conditions: null,
        level_of_activity: number,
        gender: number,
        weight_goal: null,
        goal_timing: string,
        date_of_birth: string,
        is_profile_completed: boolean
      
    
    }
   

}