import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <kendo-treeview
            [nodes]="data"
            textField="text"
            kendoTreeViewHierarchyBinding
            childrenField="items"
            [filterable]="true"
            kendoTreeViewExpandable
            [expandedKeys]="expandedKeys"
            kendoTreeViewCheckable
            [(checkedKeys)]="checkedKeys"
        >
        </kendo-treeview>
    `
})
export class AppComponent {
    public expandedKeys: any[] = ['0', '1'];

    public checkedKeys: any[] = ['0_1'];

    public data: any[] = [
        {
            text: 'Furniture',
            items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
        },
        {
            text: 'Decor',
            items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
        }
    ];
}
