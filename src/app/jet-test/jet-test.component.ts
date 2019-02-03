import { Component, OnInit } from '@angular/core';
import { getPublicApiService } from 'jet-admin-sdk';

import { environment } from '../../environments/environment';

@Component({
  templateUrl: './jet-test.component.html',
  styleUrls: ['./jet-test.component.scss']
})
export class JetTestComponent implements OnInit {

  user = 'unknown';

  ngOnInit() {
    if (!environment.production) {
      getPublicApiService().projectsStore.setCurrent('YOUR_PROJECT_UNIQUE_NAME');
      getPublicApiService().authService.tokenLogin('YOUR_USER_TOKEN');
    }

    getPublicApiService().currentUserStore.get(true).subscribe(result => {
      this.user = result ? result.username : 'unknown';
    });
  }

}
