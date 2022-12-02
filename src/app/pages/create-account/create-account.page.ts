import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  credentials!: FormGroup;

  type: boolean =true;
//A few services injected
  constructor(
    private avatarService: AvatarService,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }
  get password() {
    return this.credentials.get('password');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
  
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();
  
    if (user) {
       this.router.navigateByUrl('/first-task', { replaceUrl: true });
    } else {
       this.showAlert('Registration failed', 'Please try again!');
    }
  }
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
  changeType() {
    this.type =!this.type;
  }
  changeImage() {
    
  }
}
