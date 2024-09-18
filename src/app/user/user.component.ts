import {Component, computed, EventEmitter, input, Input, Output} from '@angular/core';
import {User} from "./user.model";
import {CardComponent} from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>(); ----signals

  // imagePath = computed(() => {
  //   return '/users/' + this.avatar();
  // }); ------signals

  get imagePath() {
    return '/users/' + this.user.avatar;
  }


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
