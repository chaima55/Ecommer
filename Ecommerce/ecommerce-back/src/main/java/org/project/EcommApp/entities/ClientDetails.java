package org.project.EcommApp.entities;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ClientDetails implements UserDetails {

    private Long user_id ;
    private String username;
    private String password;
    private boolean active;
    private List<GrantedAuthority> authorities;

    public ClientDetails(Client client) {
        this.user_id = client.getId() ;
        this.username = client.getEmail();
        this.password = client.getPassword();
        this.active = client.isActive();
        this.authorities = Arrays.stream(client.getRoles().split(","))
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}
