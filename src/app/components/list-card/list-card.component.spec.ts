import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ListCardComponent } from './list-card.component';
import { ListService } from 'src/app/services/list-card.service';
import { of } from 'rxjs';
import { NgxPaginationModule } from "ngx-pagination";

describe('ListCardComponent', () => {
  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;
  let apiServiceSpy: jasmine.SpyObj<ListService>;

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('ListService', ['get']);

    await TestBed.configureTestingModule({
      declarations: [ListCardComponent],
      imports: [IonicModule.forRoot(), NgxPaginationModule],
      providers: [
        { provide: ListService, useValue: apiServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movies when component initializes', () => {
    const mockMovies = {
      content: [
        { id: 1, year: 1980, title: 'Movie Title 1', winner: true },
        { id: 2, year: 1981, title: 'Movie Title 2', winner: false }
      ]
    };
    apiServiceSpy.get.and.returnValue(of(mockMovies));

    fixture.detectChanges();

    expect(apiServiceSpy.get).toHaveBeenCalled();
    expect(fixture.nativeElement.querySelectorAll('.col-results').length).toBe(mockMovies.content.length * 4);
  });
});
