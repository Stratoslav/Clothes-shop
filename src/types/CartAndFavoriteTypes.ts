import {  CategoryListType } from './ProductTypes';
export type CartAndFavoriteTypes  = {
 creationAt: string;
    description: string;
    id: number;
    images: string[];
    price: number;
    title: string;
    updatedAt: string;
} &  CategoryListType