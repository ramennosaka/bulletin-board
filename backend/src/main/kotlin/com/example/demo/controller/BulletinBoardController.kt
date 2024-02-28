package com.example.demo.controller

import com.example.demo.domain.BulletinBoard
import com.example.demo.service.BulletinBoardService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class BulletinBoardController(private val bulletinBoardService: BulletinBoardService) {

  @GetMapping("/bulletinBoard")
  fun getBulletinBoard(): List<BulletinBoard> {
    return bulletinBoardService.getBulletinBoard()
  }
}