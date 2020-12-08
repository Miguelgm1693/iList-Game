import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListajuegosPage } from './listajuegos.page';

describe('ListajuegosPage', () => {
  let component: ListajuegosPage;
  let fixture: ComponentFixture<ListajuegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListajuegosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListajuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
