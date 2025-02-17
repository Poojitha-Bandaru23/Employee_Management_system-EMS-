package com.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ems.dto.EmployeeDTO;
import com.ems.entity.Employee;
import com.ems.repository.EmployeeRepository;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:5173") // Allow frontend requests
@RestController
public class LoginController {

    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private EmployeeDTOConverter employeeDTOConverter;

//    @PostMapping("/login")
//    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginData) throws JsonProcessingException {
//        String companyemail = loginData.get("companyemail");
//        String password = loginData.get("password");
//
//        Optional<Employee> emp = employeeRepo.findBycompanyemail(companyemail);
//
//        if (emp.isPresent()) {
//            // Employee found, now check if the password matches
//            if (emp.get().getPassword().equals(password)) {
//                Map<String, Object> response = new HashMap<>();
//                response.put("login", "success");
//                response.put("role", emp.get().getRole().toString());  // Add role info in response
//
//                // Check the role of the user
//                if (emp.get().getRole().contains("ROLE_ADMIN")) {
//                    // Admin: Return all employee records
//                    response.put("message", "Admin logged in. Fetching all employee records.");
//                    response.put("employees", employeeDTOConverter.convertToDTOs(employeeRepo.findAll()));
//
//                } else if (emp.get().getRole().contains("ROLE_USER")) {
//                    // Employee: Return their own details
//                    response.put("message", "Employee logged in. Fetching employee details.");
//                    EmployeeDTO employeeDTO = employeeDTOConverter.convertToDTO(emp.get());
//                    response.put("employeeDetails", employeeDTO);
//                    response.put("projects", employeeDTO.getProjectDetails());
//                    response.put("finance", employeeDTO.getFinanceDetails());
//                    response.put("professionalSkills", employeeDTO.getProfessionalDetails());
//                }
//
//                return ResponseEntity.ok(response);
//            } else {
//                // Password does not match
//                Map<String, Object> response = new HashMap<>();
//                response.put("login", "fail");
//                response.put("message", "Incorrect password.");
//                return ResponseEntity.status(401).body(response);
//            }
//        } else {
//            // Employee not found
//            Map<String, Object> response = new HashMap<>();
//            response.put("login", "fail");
//            response.put("message", "Employee with email " + companyemail + " not found.");
//            return ResponseEntity.status(404).body(response);
//        }
//    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginData) throws JsonProcessingException {
        String companyemail = loginData.get("companyemail");
        String password = loginData.get("password");

        List<Employee> employees = employeeRepo.findBycompanyemail(companyemail);

        if (employees.isEmpty()) {
            // No employee found
            Map<String, Object> response = new HashMap<>();
            response.put("login", "fail");
            response.put("message", "Employee with email " + companyemail + " not found.");
            return ResponseEntity.status(404).body(response);
        } else if (employees.size() > 1) {
            // More than one employee with the same email
            Map<String, Object> response = new HashMap<>();
            response.put("login", "fail");
            response.put("message", "Multiple employees found with this email. Please contact admin.");
            return ResponseEntity.status(400).body(response);
        }

        Employee emp = employees.get(0); // Get the first result
        if (emp.getPassword().equals(password)) {
            Map<String, Object> response = new HashMap<>();
            response.put("login", "success");
            response.put("role", emp.getRole().toString());

            if (emp.getRole().contains("ROLE_ADMIN")) {
                response.put("message", "Admin logged in. Fetching all employee records.");
                response.put("employees", employeeDTOConverter.convertToDTOs(employeeRepo.findAll()));
            } else if (emp.getRole().contains("ROLE_USER")) {
                response.put("message", "Employee logged in. Fetching employee details.");
                EmployeeDTO employeeDTO = employeeDTOConverter.convertToDTO(emp);
                response.put("employeeDetails", employeeDTO);
                response.put("projects", employeeDTO.getProjectDetails());
                response.put("finance", employeeDTO.getFinanceDetails());
                response.put("professionalSkills", employeeDTO.getProfessionalDetails());
            }

            return ResponseEntity.ok(response);
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("login", "fail");
            response.put("message", "Incorrect password.");
            return ResponseEntity.status(401).body(response);
        }
    }
}
