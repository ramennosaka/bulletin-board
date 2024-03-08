package com.example.demo.service

import com.example.demo.domain.BulletinBoard
import com.example.demo.domain.BulletinBoardCommand
import com.example.demo.domain.BulletinBoardEntity
import com.example.demo.repository.BulletinBoardRepository
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class BulletinBoardService(private val bulletinBoardRepository: BulletinBoardRepository) {

  fun getBulletinBoard(): List<BulletinBoard> {
    return bulletinBoardRepository.findAll().map { BulletinBoard.of(it) }
  }

  fun savaBulletinBoard(bulletinBoardCommand: BulletinBoardCommand) {
    bulletinBoardRepository.save(
      BulletinBoardEntity(
        title = bulletinBoardCommand.title,
        content = bulletinBoardCommand.content,
        createdTime = LocalDateTime.now()
      )
    )
  }
}
