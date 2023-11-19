import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { DashboardCardListComponent } from './dashboard-card-list.component';
import { of } from 'rxjs';

describe('DashboardCardListComponent', () => {
  let component: DashboardCardListComponent;
  let fixture: ComponentFixture<DashboardCardListComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let helperServiceSpy: jasmine.SpyObj<HelperService>;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['get']);
    helperServiceSpy = jasmine.createSpyObj('HelperService', ['message']);

    TestBed.configureTestingModule({
      declarations: [DashboardCardListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: HelperService, useValue: helperServiceSpy },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchByYear and return list of winners', () => {
    const mockResponse = [{ id: 1, year: 2018, title: 'Movie Title' }];
    apiServiceSpy.get.and.returnValue(of(mockResponse)); 
    component.searchByYear();
    expect(apiServiceSpy.get).toHaveBeenCalled();
    expect(component.winnersByYear).toEqual(mockResponse);
  });

  it('should handle empty results on searchByYear', () => {
    apiServiceSpy.get.and.returnValue(of([])); 
    component.searchByYear();
    expect(apiServiceSpy.get).toHaveBeenCalled();
    expect(component.winnersByYear.length).toBe(0);
    expect(helperServiceSpy.message).toHaveBeenCalledWith("Sorry, this year doesn't have a movie", 3000, 'warning');
  });
  
});
