import { ColumnDef } from '@tanstack/angular-table';
import { Product } from '../../../../service/product.service';

export const productTableColumns: ColumnDef<Product>[] = [
    {
        accessorKey: 'id',
        cell: ({ row }) => {
            row;
        },
        header: 'ID',
    },
    {
        accessorKey: 'title',
        cell: (info) => info.getValue(),
        header: 'Title',
    },
    {
        accessorKey: 'description',
        cell: (info) => info.getValue(),
        header: 'Description',
    },
    {
        accessorKey: 'category',
        cell: (info) => info.getValue(),
        header: 'Category',
    },
    {
        accessorKey: 'price',
        cell: (info) => info.getValue(),
        header: 'Price',
    },
    {
        accessorKey: 'stock',
        cell: (info) => info.getValue(),
        header: 'Stock',
    },
    {
        accessorKey: 'action',
        cell: ({ row }) => row.original.id,
        header: 'Action',
    },
];
