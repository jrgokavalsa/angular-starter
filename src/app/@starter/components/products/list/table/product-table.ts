import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexRenderDirective, Table } from '@tanstack/angular-table';
import { Product } from '../../../../service/product.service';

@Component({
    selector: 'product-table',
    standalone: true,
    templateUrl: './product-table.html',
    imports: [FlexRenderDirective, NgTemplateOutlet, TitleCasePipe],
})
export class ProductTable {
    @Input({ required: true, alias: 'productTable' }) table!: Table<Product>;
}
