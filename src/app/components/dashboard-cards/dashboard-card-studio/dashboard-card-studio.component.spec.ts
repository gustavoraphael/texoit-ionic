import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DashboardCardStudioComponent } from './dashboard-card-studio.component';

describe('DashboardCardStudioComponent', () => {
  let component: DashboardCardStudioComponent;
  let fixture: ComponentFixture<DashboardCardStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCardStudioComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardStudioComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display studio names and win counts', () => {

  const mockStudiosWithWinners = [
    { name: 'Studio A', winCount: 5 },
    { name: 'Studio B', winCount: 3 },
    { name: 'Studio C', winCount: 2 }
  ];

  component.studiosWithWinners = mockStudiosWithWinners;
  fixture.detectChanges(); 

  const compiled = fixture.nativeElement;
  const studioNameElements = compiled.querySelectorAll('.studio-name');
  const studioWinCountElements = compiled.querySelectorAll('.studio-win-count');

  expect(studioNameElements.length).toBe(mockStudiosWithWinners.length); // Verifica se o número de elementos de nome corresponde ao número de estúdios
  expect(studioWinCountElements.length).toBe(mockStudiosWithWinners.length); // Verifica se o número de elementos de contagem de vitórias corresponde ao número de estúdios


  mockStudiosWithWinners.forEach((studio, index) => {
    const studioNameText = studioNameElements[index].textContent;
    const studioWinCountText = studioWinCountElements[index].textContent;
    expect(studioNameText).toContain(studio.name);
    expect(studioWinCountText).toContain(studio.winCount.toString());
  });
});

  
});
