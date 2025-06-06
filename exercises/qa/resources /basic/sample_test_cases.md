# 📝 Sample Test Cases - QA Basic Resources

## 📋 Overview
Kumpulan sample test cases yang dapat digunakan sebagai referensi dan template untuk berbagai skenario testing yang umum ditemukan dalam aplikasi web.

---

## 🔐 Login Functionality Test Cases

### Test Case 1: Valid Login
```
Test Case ID: TC_LOGIN_001
Test Case Title: Successful login with valid credentials
Module: Authentication
Preconditions: 
- User is registered in the system
- User is on the login page
- Browser cookies are cleared

Test Steps:
1. Navigate to login page (https://example.com/login)
2. Enter valid email in "Email" field: "testuser@example.com"
3. Enter valid password in "Password" field: "Password123!"
4. Click "Login" button
5. Verify redirection to dashboard/home page

Expected Result: 
- User successfully logs in
- Redirected to dashboard/home page
- Welcome message displays user name
- Login button changes to "Logout"

Test Data:
- Email: testuser@example.com
- Password: Password123!

Priority: High
Test Type: Positive
Status: Not Executed
```

### Test Case 2: Invalid Email Format
```
Test Case ID: TC_LOGIN_002
Test Case Title: Login attempt with invalid email format
Module: Authentication
Preconditions: User is on the login page

Test Steps:
1. Navigate to login page
2. Enter invalid email format in "Email" field: "invalidemail"
3. Enter valid password in "Password" field: "Password123!"
4. Click "Login" button
5. Observe validation message

Expected Result: 
- Error message appears: "Please enter a valid email address"
- Login button remains disabled or shows validation error
- User remains on login page
- Form fields retain entered data

Test Data:
- Email: invalidemail
- Password: Password123!

Priority: Medium
Test Type: Negative
Status: Not Executed
```

### Test Case 3: Empty Password Field
```
Test Case ID: TC_LOGIN_003
Test Case Title: Login attempt with empty password field
Module: Authentication
Preconditions: User is on the login page

Test Steps:
1. Navigate to login page
2. Enter valid email in "Email" field: "testuser@example.com"
3. Leave "Password" field empty
4. Click "Login" button
5. Observe validation message

Expected Result: 
- Error message appears: "Password is required"
- Login is not processed
- User remains on login page
- Email field retains entered data

Test Data:
- Email: testuser@example.com
- Password: [empty]

Priority: High
Test Type: Negative
Status: Not Executed
```

### Test Case 4: Remember Me Functionality
```
Test Case ID: TC_LOGIN_004
Test Case Title: Login with "Remember Me" option checked
Module: Authentication
Preconditions: 
- User is registered in the system
- User is on the login page
- Browser cookies are cleared

Test Steps:
1. Navigate to login page
2. Enter valid email: "testuser@example.com"
3. Enter valid password: "Password123!"
4. Check "Remember Me" checkbox
5. Click "Login" button
6. Close browser completely
7. Open browser and navigate to the application
8. Verify user session status

Expected Result: 
- User successfully logs in
- After reopening browser, user remains logged in
- No need to enter credentials again
- Session persists across browser sessions

Test Data:
- Email: testuser@example.com
- Password: Password123!

Priority: Medium
Test Type: Positive
Status: Not Executed
```

---

## 🛒 E-commerce Test Cases

### Test Case 5: Add Product to Cart
```
Test Case ID: TC_CART_001
Test Case Title: Add single product to shopping cart
Module: Shopping Cart
Preconditions: 
- User is logged in
- User is on product catalog page
- Product is in stock

Test Steps:
1. Navigate to product catalog page
2. Select a product with available stock
3. Click "Add to Cart" button
4. Verify cart icon shows updated item count
5. Click on cart icon to view cart
6. Verify product details in cart

Expected Result: 
- Product is successfully added to cart
- Cart counter increases by 1
- Product appears in cart with correct details:
  - Product name
  - Price
  - Quantity: 1
  - Product image
- Cart total is calculated correctly

Test Data:
- Product: Any available product
- Quantity: 1

Priority: High
Test Type: Positive
Status: Not Executed
```

### Test Case 6: Update Cart Quantity
```
Test Case ID: TC_CART_002
Test Case Title: Update product quantity in cart
Module: Shopping Cart
Preconditions: 
- User is logged in
- At least one product is in the cart

Test Steps:
1. Navigate to shopping cart page
2. Locate product in cart
3. Change quantity from 1 to 3
4. Click "Update" button or press Enter
5. Verify quantity and total price update

Expected Result: 
- Product quantity updates to 3
- Unit price remains the same
- Subtotal = Unit price × 3
- Cart total recalculates correctly
- Cart counter shows updated total items

Test Data:
- Original quantity: 1
- New quantity: 3

Priority: High
Test Type: Positive
Status: Not Executed
```

---

## 📝 Form Validation Test Cases

### Test Case 7: User Registration Form
```
Test Case ID: TC_REG_001
Test Case Title: Successful user registration with valid data
Module: User Registration
Preconditions: 
- User is on registration page
- Email address is not already registered

Test Steps:
1. Navigate to registration page
2. Fill in required fields:
   - First Name: "John"
   - Last Name: "Doe"
   - Email: "john.doe@example.com"
   - Password: "SecurePass123!"
   - Confirm Password: "SecurePass123!"
3. Check "I agree to terms and conditions"
4. Click "Register" button
5. Verify successful registration

Expected Result: 
- Registration is successful
- Confirmation message appears
- User is redirected to login page or dashboard
- Confirmation email is sent (if applicable)
- User can log in with new credentials

Test Data:
- First Name: John
- Last Name: Doe
- Email: john.doe@example.com
- Password: SecurePass123!

Priority: High
Test Type: Positive
Status: Not Executed
```

### Test Case 8: Password Mismatch
```
Test Case ID: TC_REG_002
Test Case Title: Registration with mismatched passwords
Module: User Registration
Preconditions: User is on registration page

Test Steps:
1. Navigate to registration page
2. Fill in required fields:
   - First Name: "Jane"
   - Last Name: "Smith"
   - Email: "jane.smith@example.com"
   - Password: "Password123!"
   - Confirm Password: "Password456!"
3. Click "Register" button
4. Observe validation message

Expected Result: 
- Error message appears: "Passwords do not match"
- Registration is not processed
- User remains on registration page
- Password fields are highlighted in red
- Other fields retain entered data

Test Data:
- Password: Password123!
- Confirm Password: Password456!

Priority: Medium
Test Type: Negative
Status: Not Executed
```

---

## 🔍 Search Functionality Test Cases

### Test Case 9: Basic Search
```
Test Case ID: TC_SEARCH_001
Test Case Title: Search with valid keyword
Module: Search
Preconditions: 
- User is on the homepage or search page
- Database contains searchable content

Test Steps:
1. Navigate to page with search functionality
2. Enter search keyword: "laptop"
3. Click "Search" button or press Enter
4. Verify search results are displayed
5. Check first few results for relevance

Expected Result: 
- Search results page loads successfully
- Results contain keyword "laptop"
- Results are relevant to search term
- Search results show:
  - Product/content title
  - Brief description
  - Price (if applicable)
  - Image (if applicable)
- Search term is highlighted in results

Test Data:
- Search keyword: laptop

Priority: High
Test Type: Positive
Status: Not Executed
```

### Test Case 10: Empty Search
```
Test Case ID: TC_SEARCH_002
Test Case Title: Search with empty search field
Module: Search
Preconditions: User is on search page

Test Steps:
1. Navigate to search page
2. Leave search field empty
3. Click "Search" button or press Enter
4. Observe system behavior

Expected Result: 
- Appropriate message appears: "Please enter a search term"
- OR all products/content are displayed
- OR search is not executed
- No error occurs
- Page remains functional

Test Data:
- Search keyword: [empty]

Priority: Medium
Test Type: Negative
Status: Not Executed
```

---

## 📱 Responsive Design Test Cases

### Test Case 11: Mobile View Navigation
```
Test Case ID: TC_MOBILE_001
Test Case Title: Navigation functionality on mobile devices
Module: Responsive Design
Preconditions: 
- Application is loaded on mobile device or mobile view
- Screen width is 320px - 768px

Test Steps:
1. Open application on mobile device or resize browser to mobile view
2. Verify hamburger menu is visible
3. Click/tap hamburger menu
4. Verify navigation menu expands
5. Click/tap on menu items
6. Verify navigation works correctly

Expected Result: 
- Hamburger menu icon is visible
- Menu expands when clicked/tapped
- All menu items are accessible
- Navigation links work correctly
- Menu collapses after selection
- Touch targets are appropriately sized (min 44px)

Test Data:
- Screen width: 375px (iPhone standard)

Priority: High
Test Type: Positive
Status: Not Executed
```

### Test Case 12: Form Usability on Mobile
```
Test Case ID: TC_MOBILE_002
Test Case Title: Form input and submission on mobile devices
Module: Responsive Design
Preconditions: 
- Form page is loaded on mobile device
- Virtual keyboard is available

Test Steps:
1. Navigate to form page on mobile device
2. Tap on input fields
3. Enter data using virtual keyboard
4. Verify field validation
5. Submit form
6. Verify form submission success

Expected Result: 
- Input fields are easily tappable
- Virtual keyboard appears appropriately
- Form fields are properly sized
- Validation messages are readable
- Form submission works correctly
- Success message is displayed properly

Test Data:
- Various form inputs as per form requirements

Priority: Medium
Test Type: Positive
Status: Not Executed
```

---

## 🎯 Edge Cases Test Cases

### Test Case 13: SQL Injection Prevention
```
Test Case ID: TC_SEC_001
Test Case Title: SQL injection attempt in login form
Module: Security
Preconditions: User is on login page

Test Steps:
1. Navigate to login page
2. Enter SQL injection payload in email field: "admin'--"
3. Enter any password: "password"
4. Click "Login" button
5. Observe system response

Expected Result: 
- Login attempt fails
- Error message appears or login is rejected
- No SQL error messages are displayed
- Application remains stable
- No unauthorized access is granted

Test Data:
- Email: admin'--
- Password: password

Priority: Critical
Test Type: Security
Status: Not Executed
```

### Test Case 14: Maximum Character Limit
```
Test Case ID: TC_EDGE_001
Test Case Title: Input field with maximum character limit
Module: Form Validation
Preconditions: User is on form page with character limits

Test Steps:
1. Navigate to form with character limit (e.g., 50 characters)
2. Enter text exactly at the limit (50 characters)
3. Verify text is accepted
4. Try to enter one more character (51st character)
5. Observe system behavior

Expected Result: 
- 50 characters are accepted without error
- 51st character is either:
  - Rejected (cannot be typed)
  - Accepted but validation error shows
- Character counter shows correct count
- Form validation works as expected

Test Data:
- Text: 50 characters exactly
- Text: 51 characters

Priority: Medium
Test Type: Boundary
Status: Not Executed
```

---

## 📊 Test Case Execution Template

### Test Execution Record
```
Execution Date: [DD/MM/YYYY]
Executed By: [Tester Name]
Environment: [Browser/OS/Device]
Build Version: [Version Number]

Test Case ID: [TC_XXX_XXX]
Execution Status: [Pass/Fail/Blocked]
Actual Result: [What actually happened]
Defect ID: [If failed, reference bug ID]
Comments: [Additional notes]
Screenshots: [Attached/Referenced]
```

---

## 💡 Test Case Writing Best Practices

### ✅ Good Test Case Characteristics
- **Clear and Concise**: Easy to understand
- **Specific**: Exact steps and data
- **Reusable**: Can be executed multiple times
- **Independent**: Doesn't depend on other tests
- **Traceable**: Linked to requirements

### 📝 Test Case Components
1. **Test Case ID**: Unique identifier
2. **Title**: Clear, descriptive name
3. **Module**: Feature/component being tested
4. **Preconditions**: Starting state
5. **Test Steps**: Detailed instructions
6. **Expected Result**: What should happen
7. **Test Data**: Specific data to use
8. **Priority**: Importance level
9. **Type**: Positive/Negative/Boundary

### 🎯 Coverage Areas
- **Happy Path**: Normal user flow
- **Error Handling**: Invalid inputs
- **Edge Cases**: Boundary conditions
- **Security**: Malicious inputs
- **Performance**: Response times
- **Usability**: User experience

---

*These sample test cases serve as templates and examples for your own test case development. Adapt them to your specific application and requirements.*