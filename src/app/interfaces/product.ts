export interface Product {
    id: number, 
    title: string, 
    price: number, 
    description: string, 
    unitPrice: number,
    category: string, 
    productImages: ProductImage[],
    cost: number,
    count: number, 
}

export interface ProductImage {
    id: string,
    idproduct: string,
    idProductNavigation?: string,
    urlImage?: string
}
// export interface ProductDTO {
//     title: string, 
//     price: number, 
//     description: string, 
//     category: string, 
//     image: string, 
//     rating: {
//         rate: number,
//         count: number
//     }
// }