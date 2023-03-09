export type CategoryListType = {
category: [creationAt: string, id: number | string, img: string, name: string, updatedAt: string],
}
export type ListType = {
    creationAt: string,
    description: string,
    id: number,
    images: string[],
    price: number,
    title: string,
    updatedAt: string
} & CategoryListType