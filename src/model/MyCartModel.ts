export interface MycartModel {
    code: number,
    data: Data,
    message: string,
    success: number,
}

export interface Data {
    my_cart: Mycart
}

export interface Mycart {

        cart_items: CartItems [],
        choise_of_container: Choiseofcontainer,
        bags: Bags,
        membership: Membership,
        expected_delivery_date: Expecteddeliverydate,
        no_contact_delivery:  Nocontactdelivery,
        use_digital_wallet: Usedigitalwallet,
        is_gift: Isgift,
        coupon: Coupon,
        gift_voucher: {
          show: boolean,
          dev_note: string,
          label: string,
          param_name: string,
          placeholder: string,
          button: string,
          type: string,
          value: null,
          coupon_error: null,
          applied_voucher_data: {}
        },
        referrer: {
          label: string,
          show: boolean,
          type: string,
          options: [
          ],
          selected: null
        },
        order_summary: Ordersummary,
        delivery_frequency: {
          label: string,
          param_name: string,
          options: [],
          selected: number
        },
        billing_addresses: {
          label: string,
          param_name: string,
          options: [
            {
              id: number,
              address: string
            },
            {
              id: number,
              address: string
            }
          ],
          selected: null
        },
        is_same_as_billing_address: {
          label: string,
          param_name: string,
          type: string,
          checked: boolean
        },
        shipping_addresses: {
          show: boolean,
          label: string,
          param_name: string,
          selected: null,
          options: [
            {
              id: number,
              address: string
            }
          ]
        },
        notes: {
          label: string,
          param_name: string,
          type: string,
          value: null
        }
    
}


export interface CartItems {
      id: number,
      name: string,
      pictures: Pictures[],
      is_combo: boolean,
      details: Details,
      price: number,
      quantity: number,
      is_cbd_meal: boolean,
      sub_total: number
}


export interface Pictures {
  
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

export interface Image {
    url: string
}

export interface Details {
  
    nutritions: Nutritions[],
    add_ons: AddOns,
    is_custom_meal: boolean,
    custom_meal_details: {}
  
}

export interface Nutritions {
      label: string,
      value: number
   
}

export interface AddOns {
    label: string,
    param_name: string,
    type: string,
    options: []

}

export interface Choiseofcontainer {
    lable: string,
    param_name: string,
    type: string,
    options: Options[],
    total: Total,
    use_existing_glassware: Useexistingglassware
  }

  export interface Options {
        lable: string,
        value: boolean,
        info: string,
        price: number,
        checked: boolean
  }

  export interface Total {
    total_quantity: number,
    price_per_quantity: number,
    sub_total: number
  }

  export interface Useexistingglassware {
    label: string,
    param_name: string,
    type: string,
    value: boolean,
    checked: boolean,
    disabled: boolean,
    dev_note: string
  }

  export interface Bags {
    show: boolean,
    label: string,
    list_items: Listitems[],
    total: Total,
    use_existing_bags: Useexistingbags
  }

  export interface Listitems {
    label: string,
    value: number
  }

  export interface Total {
    total_quantity: number,
    price_per_quantity: number,
    sub_total: number
  }

  export interface  Useexistingbags {
    label: string,
    param_name: string,
    type: string,
    value: boolean,
    checked: boolean,
    disabled: boolean,
    dev_note: string
  }

  export interface   Membership{
    show: boolean,
    label: string,
    param_name: string,
    price: number,
    info: string,
    value: boolean,
    dev_note: string,
    checked: boolean
  }

  export interface Expecteddeliverydate{
    label: string,
    param_name: string,
    type: string,
    options: [],
    selected: string
  }

  export interface Nocontactdelivery{
    label: string,
    param_name: string,
    type: string,
    value: boolean,
    checked: boolean
  }

  export interface Usedigitalwallet{
    label: string,
    param_name: string,
    type: string,
    checked: boolean,
    disabled: boolean,
    wallet_balance: number
  }

  export interface Isgift{
    label: string,
    param_name: string,
    type: string,
    value: boolean,
    checked: boolean
  
  }

  export interface Coupon{
    show: boolean,
    dev_note: string,
    label: string,
    param_name: string,
    placeholder: string,
    button: string,
    type: string,
    value: string,
    coupon_error: null,
    applied_coupon_data: {}
  }

  export interface Ordersummary{
    total_meal_amount: Totalmealamount,
    glassware_amount: Glasswareamount,
    existing_glassware_amount: Existingglasswareamount,
    sub_total: Subtotal,
    tax: Tax,
    prime: Prime,
    delivery_charge: Deliverycharge,
    gift: Gift,
    grand_total: Grandtotal,
    wallet_balance: Walletbalance
  }

  export interface Totalmealamount{
    show: boolean,
    label: string,
    value: string,
    debit: boolean
  }

  export interface  Glasswareamount{
    show: boolean,
    label: string,
    value: string,
    debit: boolean
  }

  export interface  Existingglasswareamount{
    show: boolean,
    label: string,
    value: string,
    debit: boolean
  }

  export interface  Subtotal{
    show: boolean,
    label: string,
    value: string
  }

  export interface  Tax {
    show: boolean,
    label: string,
    value: string
  }

  export interface  Prime {
    show: boolean,
    label: string,
    value: string
  }

  export interface  Deliverycharge {
    show: boolean,
    label: string,
    value: string,
    color: string
  }

  export interface  Gift {
    show: boolean,
    label: string,
    value: string
  }

  export interface Grandtotal {
    show: boolean,
    label: string,
    value: string
  }

  export interface Walletbalance {
    show: boolean,
    label: string,
    value: string
  }

  export interface UpdateMyCart {
    is_prime_membership?: string | undefined,
    delivery_option?: string | undefined,
    grocery_delivery_option?: string | undefined,
    delivery_frequency?: string | undefined,
    use_reward_points?: string | undefined,
    use_existing_glassware?: string | undefined,
    use_reusable_glassware?: string | undefined,
    use_existing_bags?: string | undefined,
    no_contact_delivery?: string | undefined,
    subscription_for?: string | undefined,
    exp_delivery_date?: string | undefined,
    is_gift?: string | undefined,
    
    zipcode?: string | undefined,
    referrer_id?: string | undefined,
    is_note_removed?: string | undefined,
    billing_address?: string | undefined,
    delivery_address?: string | undefined,
    is_same_as_billing_address?: string | undefined,
    notes?: string | undefined,
    selected_add_ons?: string | undefined,
    cart_id?: string | undefined,
    is_diabetic_friendly?: string | undefined,
    coupon_code?: string | undefined,
    voucher_code?: string | undefined,
    remove_voucher?: string | undefined,
    remove_coupon?: string | undefined
  }