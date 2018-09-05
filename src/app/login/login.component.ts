
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SocialLoginService } from '../login-service';

import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { UserData } from '../userData.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  currentAuthUser: any;

  currentUserData: UserData;

  loggedIn = false;

  constructor(public fb: FormBuilder,
              private authService: AuthService,                   // angular5-social-login npm 사용시 자동으로 오는 service
              private socialLoginService: SocialLoginService ) {        // google firebase를 이용하기 위해 만든 service

    this.loginForm = fb.group({
                                elegantFormEmailEx: ['', [Validators.required, Validators.email]],
                                elegantFormPasswordEx: ['', Validators.required]
                              });
  }

  ngOnInit() {

    this.authService.authState.subscribe( user => {

      if ( user != null) {
        this.currentUserData = new UserData( user.id, user.name, user.email, user.image );
        console.log( this.currentUserData);
      }
    });


  }


  // 이 기능은 angular5-social-login npm을 설치후 사용하는 social login기능이다
  loginWithSocial(socialPlateform: string) {

          let socialLoginProvider: any;

              if (socialPlateform === 'facebook') {
                socialLoginProvider = FacebookLoginProvider.PROVIDER_ID;
              } else if (socialPlateform === 'google') {
                socialLoginProvider = GoogleLoginProvider.PROVIDER_ID;
              }
                    this.authService.signIn(socialLoginProvider).then ( userData => {
                    console.log(socialPlateform + ' sign in data: ', userData);
    });
  }

  logoutWithSocial() {

    this.authService.signOut();

  }

// 이 기능은 angularfire2와 facebase를 기준으로 설치후 사용하는 social logn기능이다
  loginWithGoogleWithFirebase(socalPlateform: string) {

              if (socalPlateform === 'facebook' ) {

                  this.socialLoginService.facebookLogin()
                                                          .then( res => {
                                                            console.log( res.user.uid );
                                                            console.log( res.user.displayName );
                                                            console.log( res.user.photoURL);
                                                            console.log( res.user.email );
                                                            this.currentUserData = new UserData( res.user.uid,
                                                                                                 res.user.displayName,
                                                                                                 res.user.email,
                                                                                                 res.user.photoURL,
                                                                                                 socalPlateform );
                                                          });
              } else if (socalPlateform === 'google') {

                this.socialLoginService.googleLogin()
                                                      .then( res => {
                                                          console.log( res.user.uid );
                                                          console.log( res.user.displayName );
                                                          console.log( res.user.photoURL);
                                                          console.log( res.user.email );
                                                          this.currentUserData = new UserData( res.user.uid,
                                                                                               res.user.displayName,
                                                                                               res.user.email,
                                                                                               res.user.photoURL,
                                                                                               socalPlateform );

                                                      });
              }

  }

}
