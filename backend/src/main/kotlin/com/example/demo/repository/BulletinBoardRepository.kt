package com.example.demo.repository

import com.example.demo.domain.BulletinBoardEntity
import org.springframework.data.jpa.repository.JpaRepository

interface BulletinBoardRepository:  JpaRepository<BulletinBoardEntity, Long>{

}