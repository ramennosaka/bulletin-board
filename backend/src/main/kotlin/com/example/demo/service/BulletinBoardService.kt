package com.example.demo.service

import com.example.demo.domain.BulletinBoard
import com.example.demo.domain.BulletinBoardCommand
import com.example.demo.domain.BulletinBoardEntity
import com.example.demo.repository.BulletinBoardRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class BulletinBoardService(private val bulletinBoardRepository: BulletinBoardRepository) {

  fun getBulletinBoardList(): List<BulletinBoard> {
    return bulletinBoardRepository.findAll().map { BulletinBoard.of(it) }
  }

  fun getBulletinBoard(id: Long): BulletinBoard {
    return BulletinBoard.of(
      bulletinBoardRepository.findById(id).orElseThrow()
    )
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

  @Transactional
  fun updateBulletinBoard(id: Long, bulletinBoardCommand: BulletinBoardCommand) {
    bulletinBoardRepository.updateBulletinBoard(
      id,
      BulletinBoardEntity(
        title = bulletinBoardCommand.title,
        content = bulletinBoardCommand.content
      )
    )
  }
}
