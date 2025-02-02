import { Component, computed, inject, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import {
    createAngularTable,
    getCoreRowModel,
    getPaginationRowModel,
    PaginationState,
    RowSelectionState,
} from '@tanstack/angular-table';
import { ProductService } from '../../../service/product.service';
import { ProductTable } from './table/product-table';
import { productTableColumns } from './table/product-table.columns';

export type categoryType = 'Beauty' | 'Fruniture' | 'Groceries';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.html',
    standalone: true,
    styles: ``,
    imports: [ProductTable],
})
export class ProductListComponent {
    categoryTypeFilter = signal<categoryType | null>(null);

    productService = inject(ProductService);

    productsQuery = injectQuery(() => this.productService.getAllProducts());
    categoryProductsQuery = injectQuery(() =>
        this.productService.getProductsByCategory(this.categoryTypeFilter())
    );

    products = computed(() => this.productsQuery.data()?.products || []);

    categoryProducts = computed(
        () => this.categoryProductsQuery.data()?.products || []
    );

    private readonly rowSelection = signal<RowSelectionState>({});
    private readonly pagination = signal<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    });

    table = createAngularTable(() => ({
        data: this.categoryTypeFilter()
            ? this.categoryProducts()
            : this.products(),
        columns: productTableColumns,
        state: {
            rowSelection: this.rowSelection(),
            pagination: this.pagination(),
        },
        enableRowSelection: true,
        onRowSelectionChange: (updaterOrValue) => {
            this.rowSelection.set(
                typeof updaterOrValue === 'function'
                    ? updaterOrValue(this.rowSelection())
                    : updaterOrValue
            );
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    }));

    onCategoryTypeChange(event: Event) {
        this.categoryTypeFilter.set(
            (event.target as HTMLInputElement).value as categoryType
        );
    }
}
