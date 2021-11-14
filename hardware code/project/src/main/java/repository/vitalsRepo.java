package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import model.vitals;

public interface vitalsRepo extends MongoRepository<vitals, String>{
	
}
