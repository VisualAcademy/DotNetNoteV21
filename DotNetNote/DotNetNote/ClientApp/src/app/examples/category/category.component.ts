import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from "./category.data.service";

@Component({
    selector: "category",
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
    title: string = "카테고리 리스트";

    categories: any = []; 

    constructor(private ds: CategoryDataService) {

    }

    ngOnInit() {
        // getCategories() 함수 호출
        this.ds.getCategories().subscribe((categories: any[]) => {
            this.categories = categories; 
        }); 
    }
}
