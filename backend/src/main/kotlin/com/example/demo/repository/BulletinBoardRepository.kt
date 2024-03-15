package com.example.demo.repository

import com.example.demo.domain.BulletinBoardEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.transaction.annotation.Transactional

interface BulletinBoardRepository:  JpaRepository<BulletinBoardEntity, Long>{

  @Modifying
  @Query("""
    update BulletinBoardEntity bl 
    set bl.title = :#{#entity.title}, 
        bl.content = :#{#entity.content}, 
        bl.updatedTime = current_timestamp 
    where bl.id = :id
  """)
  fun updateBulletinBoard(id: Long, entity: BulletinBoardEntity)

  @Modifying
  @Transactional
  @Query("""
    DELETE FROM BulletinBoardEntity b WHERE b.id IN :ids
  """)
  fun deleteByIdIn(ids: List<Long>)
}