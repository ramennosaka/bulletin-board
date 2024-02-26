package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootApplication
class DemoApplication

@Configuration
class WebConfig : WebMvcConfigurer {

	override fun addCorsMappings(registry: CorsRegistry) {
		registry.addMapping("/bulletinBoard")
			.allowedOrigins("http://localhost:3000")
			.allowedMethods("GET")
			.allowCredentials(true)
	}
}

fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)
}
