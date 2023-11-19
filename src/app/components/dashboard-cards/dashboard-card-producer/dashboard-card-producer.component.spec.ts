import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DashboardCardProducerComponent } from './dashboard-card-producer.component';

describe('DashboardCardProducerComponent', () => {
  let component: DashboardCardProducerComponent;
  let fixture: ComponentFixture<DashboardCardProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCardProducerComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardProducerComponent);
    component = fixture.componentInstance;
    component.intervalProducers = {
      max: [
        { producer: 'Producer Max', interval: 10, previousWin: 2000, followingWin: 2010 }
      ],
      min: [
        { producer: 'Producer Min', interval: 2, previousWin: 2011, followingWin: 2013 }
      ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display maximum interval producer', () => {
    const compiled = fixture.nativeElement;
    const maxProducerElement = compiled.querySelector('.max-producer');
    expect(maxProducerElement).toBeTruthy(); 

  });
  
  it('should display minimum interval producer', () => {
    const compiled = fixture.nativeElement;
    const minProducerElement = compiled.querySelector('.min-producer');
    expect(minProducerElement).toBeTruthy();
  });
  
});
