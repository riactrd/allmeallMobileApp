export interface PickupGlasswareModel {
    code: number,
    data: Data,
    success: boolean;
}

export interface Data {
    pagination: Pagination
    pickup_glassware_requests: Pickupglasswarerequests[]   
    status: Status[]
}

export interface Pagination {
    current: number,
    previous: null,
    next: number,
    per_page: number,
    pages: number,
    count: number
}

export interface Pickupglasswarerequests {
    id: number,
    user_id: number,
    requested_date: string,
    requested_on: string,
    status: number,
    remarks: null,
    no_of_glassware: null,
    pickup_date: null,
    pickup_on: null,
    number: string,
    created_at: string,
    updated_at: string
}

export interface Status {
    name: string,
     id: number
}