export interface DigitalWalletModel {
    code: number,
    data: Data,
    success: boolean;
}

export interface Data {
    pagination: Pagination
    transactions: Transactions[]   
    
}

export interface Pagination {
    current: number,
    previous: null,
    next: number,
    per_page: number,
    pages: number,
    count: number
}

export interface Transactions {
    id: number,
    user_id: number,
    name: string,
    email: string,
    number: string,
    amount: number,
    trans_type: number,
    description: string,
    trans_date: string,
    payment_type: number,
    is_order: false,
    payment_status: number,
    paid_date: string,
    trans_by: null,
    stripe_customer_id: string,
    stripe_payment_id: string,
    created_at: string,
    updated_at:string,
    sent_by: null,
    sent_to: null,
    wallet_id: null,
    amount_paid: number,
    discount:number,
    balance: number,
    amount_credited: number,
    transaction_type: string

}
