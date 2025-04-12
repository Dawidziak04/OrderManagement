package com.pl.OrderManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
/*
Whole project was created by Dawidziak04
 */

@SpringBootApplication
@EntityScan("com.pl.OrderManagement.Objects")
@EnableJpaRepositories("com.pl.OrderManagement.Repositories")
public class OrderManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderManagementApplication.class, args);
	}

}
