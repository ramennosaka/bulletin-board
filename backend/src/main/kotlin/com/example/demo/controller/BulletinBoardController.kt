package com.example.demo.controller

import com.example.demo.domain.BulletinBoardEntity
import com.example.demo.repository.BulletinBoardRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class BulletinBoardController (private val bulletinBoardRepository: BulletinBoardRepository){

    @GetMapping("/bulletinBoard")
    @CrossOrigin
    fun getBulletinBoard(): List<BulletinBoardEntity>{
        return bulletinBoardRepository.findAll()
    }
}