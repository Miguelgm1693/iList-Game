import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditjuegosPage } from './editjuegos.page';

describe('EditjuegosPage', () => {
  let component: EditjuegosPage;
  let fixture: ComponentFixture<EditjuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjuegosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditjuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
