package com.yingzhuo.springbootlibrary.dao;

import com.yingzhuo.springbootlibrary.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Payment findByUserEmail(String userEmail);

}
