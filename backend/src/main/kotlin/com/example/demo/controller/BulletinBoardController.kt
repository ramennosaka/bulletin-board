package com.example.demo.controller

import com.example.demo.domain.BulletinBoard
import com.example.demo.domain.BulletinBoardCommand
import com.example.demo.service.BulletinBoardService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.sql.Timestamp
import java.time.LocalDate
import java.time.LocalDateTime

@RestController
class BulletinBoardController(private val bulletinBoardService: BulletinBoardService) {

  @GetMapping("/bulletinBoard")
  fun getBulletinBoard(): List<BulletinBoard> {
    return bulletinBoardService.getBulletinBoard()
  }

  // 1. normal object change to entity
  // 2. changing entity in the controller is not good. please in service
  @PostMapping("/bulletinBoard")
  fun createBulletinBoard(@RequestBody requestBody: BulletinBoardCommand) {
    bulletinBoardService.savaBulletinBoard(requestBody)
  }

  @PutMapping("/bulletinBoard/{id}")
  fun updateBulletinBoard(
    @PathVariable id: Long,
    @RequestBody requestBody: BulletinBoardCommand
  ){
    bulletinBoardService.updateBulletinBoard(id, requestBody)
  }

}