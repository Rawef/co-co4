import { EventComponent } from './event.component';
import { EventtModule } from './eventt.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});