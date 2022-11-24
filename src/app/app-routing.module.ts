import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { TransformComponent } from './transform/transform.component';
import { TimeComponent } from './time/time.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {path:"calculator",component:CalculatorComponent},
  {path:"currency",component:CurrencyconverterComponent},
  {path:"transform",component:TransformComponent},
  {path:"time",component:TimeComponent},
  {path:"image",component:ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
