package com.example.demo.service

import com.example.demo.domain.BulletinBoard
import com.example.demo.domain.BulletinBoardCommand
import com.example.demo.domain.BulletinBoardEntity
import com.example.demo.repository.BulletinBoardRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class BulletinBoardService(private val bulletinBoardRepository: BulletinBoardRepository) {

  fun getBulletinBoardList(pageable: Pageable): Page<BulletinBoard> {
    return bulletinBoardRepository.findAll(pageable).map { BulletinBoard.of(it) }
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

  fun deleteBulletinBoards(rowIds: List<Long>) {
    bulletinBoardRepository.deleteByIdIn(rowIds)
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
