import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DashboardCardYearComponent } from './dashboard-card-year.component';

describe('DashboardCardYearComponent', () => {
  let component: DashboardCardYearComponent;
  let fixture: ComponentFixture<DashboardCardYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCardYearComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardYearComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display years with multiple winners', () => {
    const mockYearsWithMultipleWinners = [
      { year: 2010, winnerCount: 2 },
      { year: 2015, winnerCount: 3 },
      { year: 2020, winnerCount: 4 }
    ];

    component.yearsWithMultipleWinners = mockYearsWithMultipleWinners;
    fixture.detectChanges(); 

    const compiled = fixture.nativeElement;
    const yearElements = compiled.querySelectorAll('.year');
    const winCountElements = compiled.querySelectorAll('.win-count');

    expect(yearElements.length).toBe(mockYearsWithMultipleWinners.length);
    expect(winCountElements.length).toBe(mockYearsWithMultipleWinners.length);

    mockYearsWithMultipleWinners.forEach((yearData, index) => {
      expect(yearElements[index].textContent).toContain(yearData.year.toString());
      expect(winCountElements[index].textContent).toContain(yearData.winnerCount.toString());
    });
  });
});
