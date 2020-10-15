import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Use these for string interpolation
  test = 'String interpolation';

  // Make an object
  book = {
      title: 'Invicible Man',
      author: 'Ralph Ellison',
      isbnNumber: 123
  };


  // Use these for property binding
   // tslint:disable-next-line: max-line-length
  imageSource = 'https://image.freepik.com/free-vector/vector-set-halloween-party-invitations-greeting-cards-with-handwritten-calligraphy-traditional-symbols_1150-25634.jpg';
  isButtonDisabled = true;
  inputValue = 'It worked';

  // Event binding method
  onButtonClick() {
   // alert('nice son');
   console.log('button clicked');
  }

  onMouseOver() {
    alert('watch your mouse');
  }
// Using template reference variable to pass inputValue
// Get the value of the input on click by creating a template reference in the .html comp
  onClick(inputVal: string) {
      console.log(inputVal);
  }

  onNameSubmit(name: string) {
    // $event = name
    alert(name);
  }

  //DOM $events
  onInputChange(event) {
    console.log(event);
  }
}
