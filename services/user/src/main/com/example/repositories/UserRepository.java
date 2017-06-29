package com.example.repositories;

import com.example.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by IMishev on 6/18/2017.
 */

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Long> {

}
