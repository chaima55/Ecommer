package org.project.EcommApp.services;


import org.project.EcommApp.repositories.ClientRepository;
import org.project.EcommApp.config.JwtUtil;
import org.project.EcommApp.dto.AuthenticationResponse;
import org.project.EcommApp.entities.ClientDetails;
import org.project.EcommApp.entities.Client;
import org.project.EcommApp.dto.AuthenticationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

  @Autowired
  private ClientRepository clientRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private JwtUtil jwtTokenUtil;

  @Autowired
  private ClientDetailsService clientDetailsService;

  @Transactional

  public ResponseEntity signup(Client client) {
      client.setRoles("client");
    client.setPassword(passwordEncoder.encode(client.getPassword()));
    client.setActive(true);
    clientRepository.save(client) ;
    final ClientDetails userDetails=clientDetailsService.loadUserByUsername(client.getEmail());
    final String jwt=jwtTokenUtil.generateToken(userDetails);
    return ResponseEntity.ok(new AuthenticationResponse(jwt, client.getId(), client.getRoles()));
  }

  public ResponseEntity<?> login(AuthenticationRequest authenticationRequest) throws Exception {
    Client user= clientRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow(IllegalArgumentException::new);
    try {
      Authentication a=authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
    } catch(BadCredentialsException e) {
      throw new Exception("Incorrect username or password", e);
    }
    final ClientDetails userDetails=clientDetailsService.loadUserByUsername(authenticationRequest.getEmail());
    final String jwt=jwtTokenUtil.generateToken(userDetails);
    return ResponseEntity.ok(new AuthenticationResponse(jwt, user.getId(), user.getRoles()));
  }
}
