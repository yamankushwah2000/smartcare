package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import model.vitals;
import repository.vitalsRepo;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class vitalsController {
	
	@Autowired
	vitalsRepo repo;
	
	@PostMapping("/addVitals")
	public ResponseEntity<vitals> addVitals(@RequestBody vitals incoming) {
		try {
			vitals 	_vitals = repo.save(incoming);
			System.out.println("saving, " + incoming.toString());
			return new ResponseEntity<>(_vitals, HttpStatus.CREATED);
		}catch(Exception e) {
			System.out.println("error in, " + incoming.toString());
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
}
