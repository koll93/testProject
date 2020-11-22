import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {IntProfile, IntUserrole} from '../shared/interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  profile: IntProfile;
  role: IntUserrole[];

  constructor(private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.actRouter.data.subscribe(data => {
      this.profile = data.data.profile;
      this.role = data.data.role;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
