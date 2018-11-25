import { Component, OnInit, OnDestroy} from '@angular/core';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PostUpdateDialogComponent } from '../post-update-dialog/post-update-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(public postsService: PostsService, public dialog: MatDialog) { }

  posts: Post[] = [];

  private postsSub: Subscription;

  openDialog(post: Post): void {
    const dialogRef = this.dialog.open(PostUpdateDialogComponent, {
      width: '450px',
      data: {_id: post._id, title: post.title, content: post.content }
    });

    dialogRef.afterClosed().subscribe(result => {
      post = result;
    });
  }

  ngOnInit() {
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onEditPost(post: Post) {
    this.openDialog(post);
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post._id);
  }

}
