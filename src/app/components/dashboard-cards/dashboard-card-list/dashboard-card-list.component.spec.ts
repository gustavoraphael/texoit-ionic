import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DashboardCardListComponent } from './dashboard-card-list.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { of } from 'rxjs';
import { NgxPaginationModule } from "ngx-pagination";

describe('ListCardComponent', () => {
  let component: DashboardCardListComponent;
  let fixture: ComponentFixture<DashboardCardListComponent>;
  let apiServiceSpy: jasmine.SpyObj<DashboardService>;

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('DashboardService', ['list']);

    await TestBed.configureTestingModule({
      declarations: [DashboardCardListComponent],
      imports: [IonicModule.forRoot(), NgxPaginationModule],
      providers: [
        { provide: DashboardService, useValue: apiServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movies when component initializes', () => {
    const mockMovies = {
      content: [
        { id: 1, year: 1980, title: 'Movie Title 1', winner: true },
      ]
    };
    apiServiceSpy.list.and.returnValue(of(mockMovies));

    fixture.detectChanges();

    expect(apiServiceSpy.list).toHaveBeenCalled();
  });
});
