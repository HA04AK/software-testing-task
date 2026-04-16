# Software Testing Assignment

**Student Name:** Hani Abu Kwaik
**Course:** Software Testing
**Submission Date:** 16/04/2026

---

## Task 1: Login Page Test Cases

| Test Case ID | Description           | Steps                                                                                                               | Expected Result                                     |
| ------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| TC_01        | Valid login           | 1. Open login page <br> 2. Enter correct username <br> 3. Enter correct password <br> 4. Click login                | User logs in successfully and goes to the main page |
| TC_02        | Empty fields          | 1. Open login page <br> 2. Leave username and password empty <br> 3. Click login                                    | System shows message that fields are required       |
| TC_03        | Invalid login         | 1. Open login page <br> 2. Enter wrong username or password <br> 3. Click login                                     | Error message appears (invalid credentials)         |
| TC_04        | SQL Injection attempt | 1. Open login page <br> 2. Enter special characters like ' OR '1'='1 <br> 3. Enter any password <br> 4. Click login | Login should fail and not allow this input          |
| TC_05        | Long input            | 1. Open login page <br> 2. Enter very long username and password <br> 3. Click login                                | System should handle input without crashing         |

---

## Task 2: Boundary Value Testing for Password Length (8–12 characters)

| Test Case ID | Input         | Description       | Expected Result         |
| ------------ | ------------- | ----------------- | ----------------------- |
| TC_BV_01     | 7 characters  | Less than minimum | System should reject it |
| TC_BV_02     | 8 characters  | Minimum allowed   | System accepts it       |
| TC_BV_03     | 12 characters | Maximum allowed   | System accepts it       |
| TC_BV_04     | 13 characters | More than maximum | System should reject it |

---

## Notes

These test cases were written to test different login situations like correct input, wrong input, empty fields, and some edge cases.
Boundary testing was used to check the limits of the password length.

---
