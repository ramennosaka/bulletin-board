package com.example.demo.domain

import jakarta.persistence.*
import java.time.LocalDateTime


@Entity
@Table(name = "TB_BULLETIN_BOARD")
data class BulletinBoardEntity(
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long? = null,
  var title: String,
  var content: String,
  var createdTime: LocalDateTime = LocalDateTime.now(),
  var updatedTime: LocalDateTime = LocalDateTime.now()
)
