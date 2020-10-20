import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidateComponent } from './form-validate/form-validate.component';
import { EqualValidator } from './form-validate/equalValidator.directive';
import { PreloaderComponent } from './preloader/preloader.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

@NgModule({
  declarations: [FormValidateComponent, EqualValidator, PreloaderComponent, SkeletonComponent],
  imports: [
    CommonModule
  ],
  exports: [FormValidateComponent, EqualValidator, PreloaderComponent, SkeletonComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
