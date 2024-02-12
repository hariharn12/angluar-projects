import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css',
})
export class EditClientComponent {
  edit() {
    let click = new ServiceService()
    click.alertbtn(88)
  }
}
