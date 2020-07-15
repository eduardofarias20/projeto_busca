import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicosPrestadorPage } from './servicos-prestador.page';

describe('SevicosPrestadorPage', () => {
  let component: ServicosPrestadorPage;
  let fixture: ComponentFixture<ServicosPrestadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosPrestadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicosPrestadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
