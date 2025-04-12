package com.pl.OrderManagement.Controller;

import com.pl.OrderManagement.Objects.Administrator;
import com.pl.OrderManagement.Service.AdministratorService;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdministratorController {

    private final AdministratorService administratorService;

    public AdministratorController(AdministratorService administratorService) {
        this.administratorService = administratorService;
    }

    @PostMapping("/api/register")
    public Administrator register(@RequestBody Administrator administrator) {
        return administratorService.register(administrator);
    }
}
