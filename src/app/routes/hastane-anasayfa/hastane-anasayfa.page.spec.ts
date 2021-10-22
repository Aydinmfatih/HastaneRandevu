import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HastaneAnasayfaPage } from './hastane-anasayfa.page';

describe('HastaneAnasayfaPage', () => {
  let component: HastaneAnasayfaPage;
  let fixture: ComponentFixture<HastaneAnasayfaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HastaneAnasayfaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HastaneAnasayfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
