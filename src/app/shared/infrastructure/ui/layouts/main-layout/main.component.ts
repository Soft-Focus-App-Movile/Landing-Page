import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../../../../features/landing/infrastructure/ui/components/hero-section/hero-section.component';
import {PlansSectionComponent} from '../../../../../features/landing/infrastructure/ui/components/plans-section/plans-section.component';
import {AboutSectionComponent} from '../../../../../features/landing/infrastructure/ui/components/about-section/about-section.component';
import {FeaturesSectionComponent} from '../../../../../features/landing/infrastructure/ui/components/features-section/features-section.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    PlansSectionComponent,
    AboutSectionComponent,
    FooterComponent,
    FeaturesSectionComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainLayoutComponent {

}
