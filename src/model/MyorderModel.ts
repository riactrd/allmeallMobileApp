export interface MyorderModel {
    code: number,
    data: DateModel,
    success: boolean
}


export interface DateModel {
        pagination: PaginationModel,
        orders: []
    
}

export interface PaginationModel {
        current: number,
        previous: null,
        next: number,
        per_page: number,
        pages: number,
        count: number

}

