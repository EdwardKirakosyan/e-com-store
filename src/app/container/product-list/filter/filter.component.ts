import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfstock: number = 0;

  @Output()
  selectedFilterOnChange: EventEmitter<string> = new EventEmitter<string>()

  selectedFilter: string = 'all'

  onSelectedFilterOnChange() {
    this.selectedFilterOnChange.emit(this.selectedFilter)
  }
}
