import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-update-dialog',
  templateUrl: './post-update-dialog.component.html',
  styleUrls: ['./post-update-dialog.component.scss']
})
export class PostUpdateDialogComponent implements OnInit {

  constructor(private postsService: PostsService,  public dialogRef: MatDialogRef<PostUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post) { }

  ngOnInit() {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.postsService.updatePost(this.data);

    this.dialogRef.close();
  }
}
