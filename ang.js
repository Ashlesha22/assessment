#installation
npm install -g @angular/cli
#creating_project
ng new ProfileMapApp
export interface Profile {
  id: number;
  name: string;
  photoUrl: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
}
#profile.service.ts 
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
  ];
  getProfiles(): Profile[] {
    return this.profiles;
  
  }
}
ng generate component profile-list

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
  }
}
#html
<div *ngFor="let profile of profiles">
  <img [src]="profile.photoUrl" alt="{{ profile.name }}">
  <h2>{{ profile.name }}</h2>
  <p>{{ profile.description }}</p>
  <button (click)="showOnMap(profile)">Summary</button>
</div>
#map component
// Import necessary modules

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() profile: Profile;

  constructor() { }

}
#html of map
<!-- Map container -->
<div [latitude]="profile.lat" [longitude]="profile.lng" style="height: 300px;">
  <agm-map [latitude]="profile.lat" [longitude]="profile.lng" [zoom]="15">
    <agm-marker [latitude]="profile.lat" [longitude]="profile.lng"></agm-marker>
  </agm-map>
</div>

ng serve
