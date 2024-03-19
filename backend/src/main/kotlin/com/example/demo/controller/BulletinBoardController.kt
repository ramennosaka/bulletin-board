package com.example.demo.controller

import com.example.demo.domain.BulletinBoard
import com.example.demo.domain.BulletinBoardCommand
import com.example.demo.service.BulletinBoardService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*

@RestController
class BulletinBoardController(private val bulletinBoardService: BulletinBoardService) {

  // before change - [{id, title, content, createdAt}]
  // after change - {content:[{id, title, content, createdAt}], .....}
  @GetMapping("/bulletinBoard")
  fun getBulletinBoardList(pageable: Pageable): Page<BulletinBoard> {
    val pageResult = bulletinBoardService.getBulletinBoardList(pageable)
    println(pageResult)
    return pageResult
  }

  @GetMapping("/bulletinBoard/{id}")
  fun getBulletinBoard(@PathVariable id: Long): BulletinBoard {
    return bulletinBoardService.getBulletinBoard(id)
  }

  @PostMapping("/bulletinBoard")
  fun createBulletinBoard(@RequestBody requestBody: BulletinBoardCommand) {
    bulletinBoardService.savaBulletinBoard(requestBody)
  }

  @PutMapping("/bulletinBoard/{id}")
  fun updateBulletinBoard(
    @PathVariable id: Long,
    @RequestBody requestBody: BulletinBoardCommand
  ) {
    bulletinBoardService.updateBulletinBoard(id, requestBody)
  }

  @DeleteMapping("/bulletinBoard")
  // Study @RequestParam
  fun deleteBulletinBoard(@RequestParam rowIds: List<Long>) {
    bulletinBoardService.deleteBulletinBoards(rowIds)
  }
}