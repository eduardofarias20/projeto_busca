import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePrestadorPage } from './home-prestador.page';

describe('HomePrestadorPage', () => {
  let component: HomePrestadorPage;
  let fixture: ComponentFixture<HomePrestadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePrestadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePrestadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
