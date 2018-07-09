import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3-bubble-chart';
  chartData = [
    {name: 'I\'d', radius: 50, label: '100'},
    {name: 'like', radius: 10, label: '27'},
    {name: 'to', radius: 5, label: '5'},
    {name: 'work', radius: 30, label: '30'},
    {name: 'with', radius: 17, label: '17'},
    {name: 'YOU', radius: 50, label: '100'},
    {name: 'Javascript', radius: 80, label: '80'},
    {name: 'Vue', radius: 90, label: '100'},
    {name: 'Angular', radius: 100, label: '100'},
    {name: 'React', radius: 80, label: '80'},
    {name: 'Ruby', radius: 70, label: '70'},
    {name: 'Python', radius: 40, label: '60'},
    {name: 'd3', radius: 60, label: '100'},
  ]
}
