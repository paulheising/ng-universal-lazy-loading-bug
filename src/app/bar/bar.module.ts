import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';

@NgModule({
  declarations: [BarComponent],
  imports: [CommonModule, BarRoutingModule, HttpClientModule],
})
export class BarModule {}
