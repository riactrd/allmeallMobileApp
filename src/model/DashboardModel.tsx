


export interface Dashboard {
        existing_orders: number,
        reward_points: number,
        digital_wallet: number,
        featured_meals: FeaturedMeal[],
}

export interface FeaturedMeal {
        id: number,
        name: string,
        carbohydrates: number,
        net_carbohydrates: number,
        proteins: number,
        fiber: number,
        fat: number,
        calories: number,
        price: number,
        code: string,
        is_active: boolean,
        deleted_at: string,
        stripe_plan_id: string,
        created_at: string,
        updated_at: string,
        wastage_saved: number,
        abbreviation: string,
        food_group_id: number,
        food_type: number,
        description: string,
        serving_size: string,
        is_featured_product: boolean,
        sodium: number,
        is_diabetic_friendly: boolean,
        is_keto_meal: boolean,
        is_cbd_meal: boolean,
        cbd_price: number,
        is_paleo_meal: boolean,
        is_vegan_meal: boolean,
        is_new_menu: boolean,
        is_dessert_menu: boolean,
        is_guacamole: boolean,
        qr_code: Qrcode,
        slug: string,
        is_family_meal: boolean,
        user_id: number,
        is_custom_meal: boolean,
        is_sold_out: boolean,
        session_id: number,
        order_count: number,
        pictures: Pictures[]
    }
    

    export interface Qrcode {
        url: string
    }

    export interface Pictures {
        id: number,
        pictureable_id: number,
        pictureable_type: string,
        image: Image,
        file_name: string,
        file_size: number,
        deleted_at: string,
        created_at: string,
        updated_at: string,
        human_file_size: string
    }

    export interface Image {
        url: string
    }