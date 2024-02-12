import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  
add(){
  let click = new ServiceService()
    click.alertbtn(555)
}
}
