import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-edit-education-dialog",
  templateUrl: "./edit-education-dialog.component.html",
  styleUrls: ["./edit-education-dialog.component.scss"],
})
export class EditEducationDialogComponent implements OnInit {
  @Input() educations: any;
  @Output() educationObj = new EventEmitter();
  educationInfo: any;
  newEducations: any;
  addKeys: any;
  educationTempInfo: any;

  //maulik: [String] = ["what"];

  constructor() {}

  ngOnInit() {
    this.educationInfo = JSON.parse(JSON.stringify(this.educations));
  }
  addEducations() {
    this.newEducations = {
      fromDate: "",
      toDate: "",
      institute: "",
      degree: "",
      keyPoints: [],
    };
    this.educationInfo.push(this.newEducations);
    //this.newEducations = [];
  }

  newElement(addKeys, key) {
    key.keyPoints.push(addKeys);
    this.addKeys = "";
  }

  deleteRow(key: string, keys) {
    const index: number = keys.keyPoints.indexOf(key);
    if (index !== -1) {
      keys.keyPoints.splice(index, 1);
    }
    // this.skillKeys = Object.keys(this.educationInfo.keyPoints);
  }

  saveChanges() {
    console.log(this.educationInfo);
    this.educationObj.emit(this.educationInfo);
  }

  clearData() {
    this.educationInfo = {
      fromDate: "",
      toDate: "",
      institute: "",
      degree: "",
      index: 0,
      keyPoints: [],
    };
  }
}
