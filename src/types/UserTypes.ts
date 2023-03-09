import { ListType } from './ProductTypes';
export type UserTypeCart  = {
    quantity: number,
    category: { id: number, image: string, name: string, updatedAt: string }

} & ListType