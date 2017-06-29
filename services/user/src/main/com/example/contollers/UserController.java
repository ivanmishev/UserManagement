package com.example.contollers;

import com.example.beans.User;
import org.hibernate.sql.Update;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.example.repositories.UserRepository;

import static org.springframework.hateoas.MediaTypes.HAL_JSON_VALUE;
import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by IMishev on 6/18/2017.
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userService;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserController(UserRepository userService) {
        this.userService = userService;
    }


    @RequestMapping(value = "/{userId:[\\d]+}", method = GET, produces = HAL_JSON_VALUE)
    public ResponseEntity<User> getUser(@PathVariable("userId") Long userId) {
        User user = userService.findOne(userId);
        logger.info("For id: {} the user is {}.", userId, user);
        if (user == null) {
            return new ResponseEntity<>(NOT_FOUND);
        }
        return ResponseEntity.ok((user));
    }

    @RequestMapping(method = GET, produces = HAL_JSON_VALUE)
    public ResponseEntity<Page<User>> getUsers(Pageable pageable) {
        Page<User> users = userService.findAll(pageable);
        logger.debug("Found users: ", users);
        return ResponseEntity.ok(users);
    }

    @RequestMapping(method = POST, consumes = HAL_JSON_VALUE, produces = HAL_JSON_VALUE)
    public ResponseEntity<User> create(@RequestBody User user) {
        user = userService.save(user);
        logger.info("Created user: {}", user);
        return ResponseEntity
                .created(ControllerLinkBuilder.linkTo(UserController.class).slash(user.getUserId()).toUri())
                .body(user);
    }

    @RequestMapping(method = PUT, consumes = HAL_JSON_VALUE, produces = HAL_JSON_VALUE)
    public ResponseEntity<User> update(@Validated({ Update.class }) @RequestBody User user) {
        if (userService.findOne(user.getUserId()) == null) {
            throw new IllegalArgumentException("User is not found for the provided id " + user.getUserId());
        }
        user = userService.saveAndFlush(user);
        logger.info("Updated user: {}", user);
        return ResponseEntity.ok(user);
    }

    @RequestMapping(path = "/{userId:[\\d]+}", method = DELETE)
    public ResponseEntity<Void> delete(@PathVariable("userId") Long userId) {
        userService.delete(userId);
        logger.info("Deleted user with id: {}", userId);
        return ResponseEntity.noContent().build();
    }


}
