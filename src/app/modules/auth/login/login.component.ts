import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl , Validators , FormBuilder  } from "@angular/forms";


//services
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selected:string = 'signin'

  loginForm :FormGroup ;
  registerForm : FormGroup;

  constructor(  private _fb : FormBuilder , 
                private _authService : AuthService,
                private _router : Router              
              ) {

    //login form 
    this.loginForm = _fb.group({
      'email' : [null , Validators.compose( [Validators.required , Validators.email] ) ],
      'password':[null , Validators.compose(  [Validators.required , 
                                                  Validators.minLength(4),
                                                  Validators.maxLength(500) ] )]
    });

    //register form
    this.registerForm = _fb.group({
        'name' : [ null , Validators.compose([ Validators.required ,  Validators.minLength(3) , Validators.maxLength(30) ])],
        'email' : [ null , Validators.compose( [ Validators.required , Validators.email] ) ],
        'password': [ null ,Validators.required ],
        'confirm': [ null , Validators.compose([ Validators.required , this.validatePasswordConfirmation.bind(this) ] )]
    });
    
   }

  ngOnInit() {

  }


  /**
   * A custom validation function to validate our confirm password is same as password
   * @param control formcontrol
   */
  validatePasswordConfirmation(control: FormControl): any {
    if(this.registerForm) {
      return control.value === this.registerForm.get('password').value ? null : { notSame: true }
    }
  }



  /**
   * Shows a tab
   * @param name name of the tab
   */
  selecteTab( name:string ) : void{

    this.selected = name;

  }


  login(){
    this._authService.login( this.loginForm.value ) .subscribe( ( response ) => {
      this._authService.loginUser( response.token );
      this._router.navigate(['/home']);
    } ,(err) => {
      console.log("err " , err);
      switch( err.status){
        case 403 : console.log("username and credentials wrong");break;
        case 404 : console.log("User not found");break;
        default : console.log("some error occurred");
      }
    }) ;
  }

  register(){
    
    let data = this.registerForm.value;
    console.log( data );
    this._authService.register( data )
      .subscribe( (result) => {
        console.log( "Res " ,result );
        this._router.navigate(['/auth/login']);
      },
      (error) =>{
        console.log( error);
      }  
    );
  }

}
