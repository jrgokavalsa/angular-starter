import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { queryOptions } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { categoryType } from '../components/products/list/product-list';

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    brand: string;
    thumbnail: string;
};
export type ProductPage = {
    products: Array<Product>;
    total: number;
    skip: number;
    limit: number;
};

@Injectable()
export class ProductService {
    #http = inject(HttpClient);

    getAllProducts = () =>
        queryOptions({
            queryKey: ['products'],
            queryFn: () =>
                lastValueFrom(
                    this.#http.get<ProductPage>(
                        `https://dummyjson.com/products`
                    )
                ),
        });

    getProductsByCategory = (categoryType: categoryType | null) =>
        queryOptions({
            queryKey: ['products', 'category', categoryType],
            queryFn: () =>
                lastValueFrom(
                    this.#http.get<ProductPage>(
                        `https://dummyjson.com/products/category/${categoryType}`
                    )
                ),
            enabled: !!categoryType,
        });

    post(postId: number) {
        return queryOptions({
            queryKey: ['post', postId],
            queryFn: () => {
                return lastValueFrom(
                    this.#http.get<any>(
                        `https://jsonplaceholder.typicode.com/posts/${postId}`
                    )
                );
            },
        });
    }
}
