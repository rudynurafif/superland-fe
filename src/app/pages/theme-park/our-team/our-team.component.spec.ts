import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamComponent } from './our-team.component';
import { NavbarComponent } from 'src/app/shared/component/navbar/navbar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('OurTeamComponent', () => {
  let component: OurTeamComponent;
  let fixture: ComponentFixture<OurTeamComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTeamComponent, NavbarComponent], // Declare only components, directives, and pipes
      imports: [HttpClientTestingModule] // Import HttpClientTestingModule
    });

    fixture = TestBed.createComponent(OurTeamComponent);
    component = fixture.componentInstance;

    // Initialize the HttpTestingController
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  afterEach(() => {
    // Verify that no outstanding HTTP requests are pending
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases here if needed
});
