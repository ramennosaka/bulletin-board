package com.example.demo.service

import com.example.demo.domain.BulletinBoard
import com.example.demo.repository.BulletinBoardRepository
import org.springframework.stereotype.Service

@Service
class BulletinBoardService(private val bulletinBoardRepository: BulletinBoardRepository) {

  fun getBulletinBoard(): List<BulletinBoard> {
    val bulletinBoardEntities = bulletinBoardRepository.findAll()
    return bulletinBoardEntities.map { entity ->
      BulletinBoard(
        id = entity.id,
        title = entity.title,
        createdTime = entity.createdTime
      )
    }
  }
}
