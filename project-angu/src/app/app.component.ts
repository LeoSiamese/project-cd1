import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { ICatalogsModel } from './models/modelCatalogApi';
import { CatalogService } from './service/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  createForm!: FormGroup;
  catalogs: ICatalogsModel={totalRecord: 0, catalogs: []};
  loading: boolean = false;
  rows = 5;
  first = 0;

  constructor(private fb: FormBuilder, private catalogService: CatalogService) {
    this.intiForm();
  }

  intiForm() {
    this.createForm = this.fb.group({
      txtCategory: ['', [Validators.required]],
      txtSummary: ['', [Validators.required]],
      txtDescription: ['', [Validators.required]],
      txtPrice: [null, [Validators.required]],
    });
  }

  submit() {
    if (this.createForm.invalid) {
      for (const i in this.createForm.controls) {
        this.createForm.controls[i].markAsDirty();
        this.createForm.controls[i].updateValueAndValidity();
      }
    }
  }

  priceColor(price: number, typeColor: string) {
    if (typeColor === 'txt') {
      if (price > 600) {
        return 'text-green-600';
      } else if (price > 300) {
        return 'text-yellow-600';
      } else {
        return 'text-red-600';
      }
    } else {
      if (price > 600) {
        return 'bg-green-100';
      } else if (price > 300) {
        return 'bg-yellow-100';
      } else {
        return 'bg-red-100';
      }
    }
  }

  loadCatalog(event: LazyLoadEvent) {
    console.log(event);
    
    this.loading = true;
    setTimeout(() => {
      this.catalogService.GetProductByPage(event.first!/event.rows!+1,event.rows!).subscribe((resp) => {
         this.catalogs = resp;
         this.loading = false;  
      });
  }, 1000);
  }
}
