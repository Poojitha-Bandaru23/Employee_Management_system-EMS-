package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.EmployeeDTO;
import com.ems.entity.Employee;
import com.ems.entity.ProfessionalDetails;
import com.ems.service.EmployeeService;
import com.ems.service.EmployeeServiceImpl;
import com.ems.service.FinanceService;
import com.ems.service.ProfessionalDetailsService;
import com.ems.service.ProjectService;

@CrossOrigin(origins = "http://localhost:5173") // ✅ Allow React frontend
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    
    @Autowired
    private EmployeeServiceImpl employeeServiceImpl;
    
    @Autowired
    private ProfessionalDetailsService professionalDetailsService;
    
    @Autowired
    private ProjectService projectService; 
    
    @Autowired
    private FinanceService financeService;

    // Create Employee
    @PostMapping
    public ResponseEntity<String> createEmployee(@RequestBody EmployeeDTO employeeDTO) {
    	//return ResponseEntity.ok(employeeService.createEmployee(employeeDTO));
    	Employee employee = employeeService.createEmployee(employeeDTO.getPersonalDetails());

        // Save Professional Details
        professionalDetailsService.saveProfessionalDetails(employeeDTO.getProfessionalDetails(employee));
        
     // Save Project Details
        projectService.saveProjectDetails(employeeDTO.getProjectDetails(employee));
        
        //save Project Details
        financeService.saveFinanceDetails(employeeDTO.getFinanceDetails(employee));

        
        return ResponseEntity.ok("Employee created successfully!");

        
    }

    // Get All Employees
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

 // Get Employee by ID
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
    	//System.out.println("Fetching employee with ID: " + id);
        return ResponseEntity.ok(employeeService.getEmployeeById(id));
    }
    @GetMapping("/professional/{profDetailId}")
	public ResponseEntity<ProfessionalDetails> getprofessionalDetails(@PathVariable("profDetailId") Long profDetailId) {
		ProfessionalDetails b1=professionalDetailsService.getprofessionalDetails(profDetailId);
		return ResponseEntity.ok(b1);
	}
    

    // Update Employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id, @RequestBody Employee employee) {
        return ResponseEntity.ok(employeeService.updateEmployee(id, employee));
    }

    // Delete Employee
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee with Id: "+id+" deleted successfully!");
    }
           
    
}
