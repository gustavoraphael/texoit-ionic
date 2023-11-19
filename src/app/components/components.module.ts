import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { DashboardCardsComponent } from "./dashboard-cards/dashboard-cards.component";
import { ListCardComponent } from "./list-card/list-card.component";
import { SkeletonComponent } from "./skeleton/skeleton.component";
import { DashboardCardYearComponent } from "./dashboard-cards/dashboard-card-year/dashboard-card-year.component";
import { DashboardCardStudioComponent } from "./dashboard-cards/dashboard-card-studio/dashboard-card-studio.component";
import { DashboardCardProducerComponent } from "./dashboard-cards/dashboard-card-producer/dashboard-card-producer.component";
import { DashboardCardListComponent } from "./dashboard-cards/dashboard-card-list/dashboard-card-list.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    declarations: [
        HeaderComponent,
        DashboardCardsComponent,
        ListCardComponent,
        SkeletonComponent,
        DashboardCardYearComponent,
        DashboardCardStudioComponent,
        DashboardCardProducerComponent,
        DashboardCardListComponent,
    ],
    imports: [IonicModule, CommonModule, NgxPaginationModule],
    exports: [
        HeaderComponent,
        DashboardCardsComponent,
        ListCardComponent,
        SkeletonComponent,
        DashboardCardYearComponent,
        DashboardCardStudioComponent,
        DashboardCardProducerComponent,
        DashboardCardListComponent

    ]
})

export class ComponentsModule {

    constructor() { }
}