import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncaoPage } from './funcao.page';

describe('FuncaoPage', () => {
  let component: FuncaoPage;
  let fixture: ComponentFixture<FuncaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
