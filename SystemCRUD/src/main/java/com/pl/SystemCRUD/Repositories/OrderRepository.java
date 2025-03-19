package com.pl.SystemCRUD.Repositories;


import com.pl.SystemCRUD.Objects.Customer;
import com.pl.SystemCRUD.Objects.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByOrderedBy(Customer customer);
}
