package com.yingzhuo.springbootlibrary.controller;

import com.yingzhuo.springbootlibrary.entity.Book;
//import com.yingzhuo.springbootlibrary.responsemodels.ShelfCurrentLoansResponse;
import com.yingzhuo.springbootlibrary.service.BookService;
import com.yingzhuo.springbootlibrary.utils.ExtractJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

//    @GetMapping("/secure/currentloans")
//    public List<ShelfCurrentLoansResponse> currentLoans(@RequestHeader(value = "Authorization") String token)
//        throws Exception
//    {
//        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
//        return bookService.currentLoans(userEmail);
//    }

    @GetMapping("/secure/currentloans/count")
    public int currentLoansCount(@RequestHeader(value = "Authorization") String token) {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
//        String userEmail = "test@email.com";
        return bookService.currentLoansCount(userEmail);
    }

    @GetMapping("/secure/ischeckedout/byuser")
    public Boolean checkoutBookByUser(@RequestHeader(value = "Authorization") String token,
                                      @RequestParam Long bookId) {
//        String userEmail = "test@email.com";
//        System.out.println("ischeckedout test");
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
        return bookService.checkoutBookByUser(userEmail, bookId);
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook (
            @RequestHeader(value = "Authorization") String token,
                              @RequestParam Long bookId)
            throws Exception {
//        String userEmail = "test@email.com";
        System.out.println("checkout test");
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
        System.out.println(userEmail);
        return bookService.checkoutBook(userEmail, bookId);
    }

//    @PutMapping("/secure/return")
//    public void returnBook(@RequestHeader(value = "Authorization") String token,
//                           @RequestParam Long bookId) throws Exception {
//        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
//        bookService.returnBook(userEmail, bookId);
//    }
//
//    @PutMapping("/secure/renew/loan")
//    public void renewLoan(@RequestHeader(value = "Authorization") String token,
//                          @RequestParam Long bookId) throws Exception {
//        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
//        bookService.renewLoan(userEmail, bookId);
//    }

}












