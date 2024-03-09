package com.example.demo.domain

import java.time.LocalDate
import java.time.LocalDateTime

data class BulletinBoardCommand(
  val title: String,
  val content: String,
  val createdTime: LocalDateTime
)
