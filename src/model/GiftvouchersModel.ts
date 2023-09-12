export interface GiftvouchersModel {
    code: number,
    data: Data,
    success: boolean;
}

export interface Data {
    pagination: Pagination
    gift_cards: GiftCards[]   
    
}

export interface Pagination {
    current: number,
    previous: null,
    next: number,
    per_page: number,
    pages: number,
    count: number
}

export interface GiftCards {
    id: number,
    number: string,
    user_id: null,
    gifted_by: number,
    email: string,
    name: string,
    voucher_code: string,
    voucher_amount: number,
    used_amount: null,
    balance_amount: number,
    expiry_date: null,
    usage_times: number,
    message: string,
    payment_status: number,
    billing_address_id: number,
    paid_date: string,
    stripe_payment_id: string,
    created_at: string,
    updated_at: string,
    stripe_customer_id: null,
    paid_by: number,
    is_admin_voucher: false,
    first_name: string,
    last_name: string,
    recipient_last_name: string
}