import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {

  }

  getPostUpdateListener() {
    this.http.get<Post[]>('/api/posts').subscribe((posts: Post[]) => {
      this.postsUpdated.next(posts);
    });
    return this.postsUpdated;
  }

  addPost(title: string, content: string) {
    const post: Post = {_id: null, title: title, content: content};
    this.http.post('/api/posts', post).subscribe((posts: Post[]) => {
      this.postsUpdated.next(posts);
    });
  }

  updatePost(post: Post) {
    this.http.put(`/api/posts/${post._id}`, post).subscribe((posts: Post[]) => {
      this.postsUpdated.next(posts);
    });
  }

  deletePost(_id: string) {
    this.http.delete(`/api/posts/${_id}`).subscribe((posts: Post[]) => {
      this.postsUpdated.next(posts);
    });
  }

}
