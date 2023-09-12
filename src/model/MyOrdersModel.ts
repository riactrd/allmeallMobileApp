export interface MyOrdersModel {
    code: number,
    data: DateModel,
    success: boolean
}


export interface DateModel {
        orders: OrdersModel[],
    
}

export interface OrdersModel {
        delivery_status: string,
        id: number,
        image_url: string,
        number: string,
        order_date: string,
        order_time: string,
        paid_by: string,
        total_price: string,
        user_name: string,

}

export interface MyOrdersDetailModel {
        code: number,
        data: DateDetailsModel,
        success: boolean
    }
    
    
    export interface DateDetailsModel {
            order: OrderModel,
        
    }
    
    export interface OrderModel {
        id: number,
        image_url: string,
        images: ImagesModel[],
        show_birthday_icon: boolean,
        notes: string,
        order_type: string,
        is_admin_order: boolean,
        number: string,
        user_name: string,
        total_price: string,
        order_date: string,
        order_time: string,
        delivery_date: string,
        is_subscription_order: boolean,
        delivery_status: string,
        paid_by: string,
        email: string,
        phone_number: string,
        quantity: QuantityModel,
        is_payment_pending: boolean,
        ship_to: string,
        billing_to: string,
        order_items: OrderitemsModel[],
        glassware: GlasswareModel,
        use_existing_glassware: boolean,
        used_glasswares: number,
        bag_details: BagdetailsModel,
        use_existing_bag: boolean,
        used_bags: number,
        is_prime_membership: boolean,
        used_reward_points: number,
        order_summary: OrdersummaryModel,
        delivery_frequency: string
    
    }

    
    export interface ImagesModel {
        id: number,
        pictureable_id: number,
        pictureable_type: string,
        image: ImagModel,
        file_name: string,
        file_size: number,
        deleted_at: null,
        created_at: string,
        updated_at: string,
        human_file_size: string
    }

    export interface ImagModel {
        url: string
    }

    export interface QuantityModel {
        food: number,
        combo: number
    }

    export interface OrderitemsModel {
                id: number,
                name: string,
                pictures: PicturesModel[],
                is_combo: boolean,
                details: DetailsModel,
                price: number,
                quantity: number,
                is_cbd_meal: boolean,
                sub_total: number
            
    }

    export interface PicturesModel {
        id: number,
        pictureable_id: number,
        pictureable_type: string,
        image: ImagModel,
        file_name: string,
        file_size: number,
        deleted_at: null,
        created_at: string,
        updated_at: string,
        human_file_size: string
    }

    export interface DetailsModel {
        total_meals_included: number,
        foods_included: FoodsincludedModel[]
    }

    export interface FoodsincludedModel {
                id: number,
                name: string,
                quantity: number,
                pictures: PicturesModel[],
                nutritions: NutritionsModel[]
        }

    export interface NutritionsModel {
        label: string,
        value: number
    }

    export interface GlasswareModel {
        name: string,
        quantity: number,
        amount: string,
        total_amount: string
    }

    export interface BagdetailsModel {
        quantity: number,
        amount: string,
        total_amount: string
    }

    export interface OrdersummaryModel {
        total_meal_amount: string,
        glassware_detail: GlasswaredetailModel,
        prime_member_price: null,
        delivery_charge: string,
        sub_total_amount: string,
        tax: string,
        used_voucher_amount: null,
        guacomole_amount: string,
        gift_amount: null,
        grand_total: string,
        reward_amount_earned: number
    }

    export interface  GlasswaredetailModel {
        glassware_amount: string,
        used_glasswares: number,
        used_glassware_amount: string
    }