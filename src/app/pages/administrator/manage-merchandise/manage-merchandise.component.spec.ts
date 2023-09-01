import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMerchandiseComponent } from './manage-merchandise.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('ManageMerchandiseComponent', () => {
  let component: ManageMerchandiseComponent;
  let fixture: ComponentFixture<ManageMerchandiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMerchandiseComponent],
      imports : [HttpClientTestingModule, MatDialogModule],
      providers : [HttpClient]
    });
    fixture = TestBed.createComponent(ManageMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
