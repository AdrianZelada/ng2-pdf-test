import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  path: any = "";
  dir: any = '';
  url: any = '';
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const pdf = '/assets/m2.pdf';
    // this.path = pdf;
    // this.dir = window.require('electron').remote.app.getAppPath();
    // this.path = window.require('electron').remote.app.getAppPath() + pdf;
    // this.loadPdf();
  }



  loadPdf() {
    const xhr = new XMLHttpRequest();
    const pdf = 'z:/home/izel/www/poc/electron/ng2-pdf-viewer-electron-example/src/assets/m2.pdf';


    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`${pdf}#toolbar=0`);

    xhr.open('GET', pdf, true);
    xhr.responseType = 'blob';

    xhr.onload = (e: any) => {
      // console.log(xhr);
      // debugger;
      console.log(e);
      console.log(xhr.status);
      alert('load');
      alert(xhr.status);
      if (xhr.status === 200) {
        alert('path');
        const blob = new Blob([xhr.response], { type: 'application/pdf' });
        this.path = URL.createObjectURL(blob);
        alert('path parse');
        console.log(this.path);
      }
    };

    xhr.send();
  }
}
