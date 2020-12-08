import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfojuegosPage } from './infojuegos.page';

describe('InfojuegosPage', () => {
  let component: InfojuegosPage;
  let fixture: ComponentFixture<InfojuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfojuegosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfojuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
