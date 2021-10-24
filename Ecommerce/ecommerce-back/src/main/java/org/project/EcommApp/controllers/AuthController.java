package org.project.EcommApp.controllers;



import org.project.EcommApp.dto.AuthenticationRequest;
import org.project.EcommApp.entities.Client;
import org.project.EcommApp.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService ;

    @PostMapping(value = "/signup")
    public ResponseEntity<?> register(@RequestBody Client client){
        return this.authService.signup(client) ;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        return this.authService.login(authenticationRequest) ;
    }

}
