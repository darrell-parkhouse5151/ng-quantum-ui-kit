/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    id:string;
    product: Product;

    constructor(private productService: ProductService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.productService.getProduct(this.id).subscribe(product => this.product = product);
    }

    onDelete() {
        if (confirm('Are you sure')) {
            this.productService.deleteProduct(this.product);
        }
    }

}
