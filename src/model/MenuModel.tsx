
export interface MenuModel {
        code: number,
       data: Data
    }

export interface Data{
        pagination:Pagination,
        menu:Menu[],


}

export interface Pagination{
        current: number,
        previous: null,
        next: null,
        per_page: number,
        pages: number,
        count: number
      
}

export interface Menu{
    
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
          description: string,
          serving_size: null,
          is_featured_product: boolean,
          sodium: number,
          is_diabetic_friendly: boolean,
          is_keto_meal: boolean,
          is_cbd_meal: boolean,
          cbd_price: null,
          is_paleo_meal: boolean,
          is_vegan_meal: boolean,
          is_new_menu: true,
          is_dessert_menu: boolean,
          is_guacamole: boolean,
          qr_code: Qrcode,
          slug: string,
          is_family_meal: boolean,
          user_id: null,
          is_custom_meal: boolean,
          is_sold_out: boolean,
          session_id: null,
          order_count: number,
          pictures:Pictures[],
          ingredients: Ingredients[]
        
    
}

export interface Qrcode{
    url: string
}

export interface Pictures{
        id: number,
        pictureable_id: number,
        pictureable_type: string,
        image: Image,
        file_name: string,
        file_size: number,
        deleted_at: null,
        created_at: string,
        updated_at: string,
        human_file_size: string
      
}

export interface Image{
    url: string
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