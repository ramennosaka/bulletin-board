package com.example.demo.domain

import java.time.format.DateTimeFormatter


data class BulletinBoard(val id: Long, val title: String, val content: String, val createdTime: String) {
  companion object {
    fun of(entity: BulletinBoardEntity): BulletinBoard {
      val format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
      return BulletinBoard(
        id = entity.id,
        title = entity.title,
        content = entity.content,
        createdTime = entity.createdTime.format(format)
      )
    }
  }
}