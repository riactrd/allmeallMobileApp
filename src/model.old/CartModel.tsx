export interface CartModel {
     id: number,
    name: string,
    price: number,
    desc: string,
    nutricion: string[],
    ingredients:  string,
    quantity: number,
    cartQuantity:number,
    imgLink?: string,
    category?: string
   
}

export interface custumMealModel {
    value: string, 
    label: string,
    size: number[],
    price: number[],
    calories: number,
    protein: number,
    carbs: number,
    fat: number,
    sodium: number,
  
}