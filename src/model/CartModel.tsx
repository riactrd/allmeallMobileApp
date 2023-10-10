export interface CartModel {
     id: number,
    name: string,
    price: number,
    desc: string,
    nutricion: Nutricion,
    ingredients:  Ingredients,
    quantity: number,
    cartQuantity:number,
    imgLink?: string,
    category?: string
   
}
export interface Ingredients{
    id: number,
    name: string,
    is_active: boolean,
    deleted_at: null,
    created_at: string,
    updated_at: string,
    unit_type: number,
    ounce_per_unit: null,
    ingredient_type_id: number,
    station_id: number,
    price: number,
    nutrition_type: null,
    nut_level_per_gram: number,
    is_custom_ingredient: boolean,
    quantity: number,
    custom_meal_option_id: null,
    custom_meal_option_ingredient_id: null,
    recipe_name: null,
    is_sold_out: boolean,
    is_group_ingredient: boolean,
    ingredient_id: null,
    ingredient_type_str: null,
    unit_type_str: null
  
}
export interface Nutricion {
        calories:number, 
        proteins:number,
        fat:number,
        carbohydrates:number,
        fiber:number,
        sodium:number,
}

export interface custumMealModel {
    value: string, 
    label: string,
    size: number[],
    price: number[],
    calories: number,
    protein: number,
    carbs: number,
    fat: number,
    sodium: number,
  
}

// cartModelApi
export interface CartModelApi {
    code: number,
    data: Data,
    success: boolean

}

export interface Data {
    cart: Cart,
}

export interface Cart {
    user_id: number,
    quantity: number,
    is_guacamole: boolean,
    id: number,
    grocery_type: null,
    is_vegandale: null,
    food_id: number,
    is_cbd_meal: false,
    price_per_unit: number,
    food_combo_id: null,
    grocery_id: null,
    total_meal_price: number,
    total_price: number,
    deleted_at: null,
    created_at: string,
    updated_at: string,
    session_id: null,
    is_organic: false,
    boolean: false,
    guacamole_quantity: number,
    guacamole_price: number,
    total_guacamole_price: number,
    selected_add_ons: string[],
    food: Food
}
    
export interface Food {
    id: number,
    name: string,
    carbohydrates: number,
    net_carbohydrates: null,
    proteins: number,
    fiber: number,
    fat: number,
    calories: number,
    price: number,
    code: string,
    is_active: true,
    deleted_at: null,
    stripe_plan_id: string,
    created_at: string,
    updated_at: string,
    wastage_saved: number,
    abbreviation: string,
    food_group_id: number,
    food_type: number,
    description:string,
    serving_size: null,
    is_featured_product: false,
    sodium: number,
    is_diabetic_friendly: false,
    is_keto_meal: false,
    is_cbd_meal: false,
    cbd_price: null,
    is_paleo_meal: false,
    is_vegan_meal: false,
    is_new_menu: true,
    is_dessert_menu: false,
    is_guacamole: false,
    qr_code: QrCode,
    slug: string,
    is_family_meal: false,
    user_id: null,
    is_custom_meal: false,
    is_sold_out: false,
    session_id: null,
    order_count: number
  }
      
  export interface QrCode {
    url: string
  }
        
  export interface NewCartModelApi {
    cart: {
        food_id: Number,
        quantity: number,
        food_combo_id: number | null
    }
  }
    
  