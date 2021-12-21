import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-write',
  templateUrl: './blog-write.component.html',
  styleUrls: ['./blog-write.component.scss']
})
export class BlogWriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onPress(event: any) {
    if (event.key == 'Tab') {
      event.preventDefault()
      var start = event.target.selectionStart;
      var end = event.target.selectionEnd;
      event.target.value = event.target.value.substring(0, start) + '\t' + event.target.value.substring(end);
      event.target.selectionStart = event.target.selectionEnd = start + 1;
    }
  }

}
