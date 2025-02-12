import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexRenderDirective, Table } from '@tanstack/angular-table';
import { Product } from '../../../../service/product.service';
import { SortHeader } from '../../../action/button/button';

@Component({
    selector: 'product-table',
    standalone: true,
    templateUrl: './product-table.html',
    imports: [FlexRenderDirective, NgTemplateOutlet, TitleCasePipe, SortHeader],
})
export class ProductTable {
    @Input({ required: true, alias: 'productTable' }) table!: Table<Product>;
}
