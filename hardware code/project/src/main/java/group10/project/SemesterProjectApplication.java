package group10.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import controller.vitalsController;

@SpringBootApplication
@ComponentScan("controller")
@EnableMongoRepositories("repository")
public class SemesterProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SemesterProjectApplication.class, args);
	}

}
