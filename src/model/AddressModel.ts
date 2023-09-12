export interface AddressModel {
    code: number,
    data: Data,
    success: number;
}

export interface Data {
    addresses: Address[],
}

export interface Addressess {
    billing: Address[],
    shipping:Address[]
}

export interface Address {
    id: number,
    addressable_id: number,
    addressable_type: string,
    address1: string,
    address2: string,
    address3: string,
    lat: number,
    lng: number,
    location: string,
    location_type: string,
    formatted_address: string,
    bounds: string,
    street_number: string
    postal_code: string,
    locality: string,
    sublocality: string,
    country: string
    country_short: string,
    city: string,
    county: string ,
    state: string,
    state_short: string,
    url: string,
    deleted_at: string,
    created_at: string,
    updated_at: string,
    type_of_address: number,
    first_name: string,
    last_name: string,
    instructions: string,
    security_code: string,
    phone_number: string,
    mobile_number: string,
    email: string,
    gift_voucher_id: string,
    product_order_id: string,
    complete_address: string,
    zip_code: string,
    sub_premise: string,
    route: string,
    loc_name: string
    international_phone_number: string,
    website: string
}

export interface NewCartModelApi {
    address:{
        
        first_name: string,
        last_name: string,
        type_of_address: number,
        address1: string,
        address2: string,
        address3:string,
        lat: string,
        lng: string,
        formatted_address: string,
        street_number: string,
        postal_code: string,
        locality: string,
        sublocality: string,
        country: string,
        country_short: string,
        state: string,
        county: string,
        city: string | string,
        state_short: string,
        email: string,
        mobile_number: string,
        phone_number: string,
        instructions: string,
        security_code: string,
        sub_premise: string,
        route: string,
        complete_address: string
    }
}


export interface EditAddressModel {
    id: number,
    address:{
        first_name?: string,
        last_name?: string,
        type_of_address?: number,
        address1?: string,
        address2?: string,
        address3?:string,
        lat?: string,
        lng?: string,
        formatted_address?: string,
        street_number?: string,
        postal_code?: string,
        locality?: string,
        sublocality?: string,
        country?: string,
        country_short?: string,
        state?: string,
        county?: string,
        city?: string,
        state_short?: string,
        email?: string,
        mobile_number?: string,
        phone_number?: string,
        instructions?: string,
        security_code?: string,
        sub_premise?: string,
        route?: string,
        complete_address?: string
    }
}