import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss'],
})
export class GithubPage {
  public user: any = {};
  public repositories: any = [];

  constructor(private http: HttpClient) { }

  searchUser(username: string) {
    this.http.get(`https://api.github.com/users/${username}`).subscribe((user: any) => {
      this.user = user;

      this.http.get(user.repos_url).subscribe((repos: any) => {
        this.repositories = repos;
      });
    });
  }
}
