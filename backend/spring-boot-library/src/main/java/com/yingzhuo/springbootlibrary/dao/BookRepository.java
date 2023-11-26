package com.yingzhuo.springbootlibrary.dao;

import com.yingzhuo.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
