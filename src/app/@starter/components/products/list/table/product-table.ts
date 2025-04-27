import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { FlexRenderDirective, Table } from '@tanstack/angular-table';
import { Product } from '../../../../service/product.service';
import { SortHeader } from '../../../action/button/button';
import { type Table as TanstackTable } from '@tanstack/angular-table';

interface DataTableProps<TData> {
    /**
     * The table instance returned from useDataTable hook with pagination, sorting, filtering, etc.
     * @type TanstackTable<TData>
     */
    table: TanstackTable<TData>;

    /**
     * The floating bar to render at the bottom of the table on row selection.
     * @default null
     * @type React.ReactNode | null
     * @example floatingBar={<TasksTableFloatingBar table={table} />}
     */
    floatingBar?: TemplateRef<any> | null;
}

@Component({
    selector: 'product-table',
    templateUrl: './product-table.html',
    imports: [FlexRenderDirective, NgTemplateOutlet, TitleCasePipe, SortHeader],
})
export class ProductTable implements DataTableProps<Product> {
    @Input({ required: true, alias: 'productTable' }) table!: Table<Product>;
    @Input() floatingBar?: TemplateRef<any> | null;
}
