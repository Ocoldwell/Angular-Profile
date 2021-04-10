import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent implements OnInit {

  @Output() onChange = new EventEmitter();

  selector: string;
  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event) {
    this.onChange.emit(event.target.value)
  }

}
