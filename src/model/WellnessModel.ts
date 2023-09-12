export interface WellnessModel {
    code: number,
    data: DateModel,
    success: boolean
}


export interface DateModel {
        pagination: PaginationModel,
        wellness_post: WellnessPostsModel
    
}

export interface PaginationModel {
        current: number,
        previous: null,
        next: number,
        per_page: number,
        pages: number,
        count: number

}

export interface WellnessPostsModel {
       
                id: number,
                user_id: null,
                title: string,
                image: ImageModel,
                body: string,
                published_on: string,
                slug: string,
                created_at: string,
                updated_at: string
    
}

export interface ImageModel {
          url: string
      
}