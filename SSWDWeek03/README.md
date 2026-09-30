# phpForLoop Example

## Clone the Lab Repository

Clone the lab repository into your **Documents** folder on the C: drive.

For example:

```text
C:\Users\A00001234\Documents
```

### 1. Open Command Prompt

Open **Command Prompt** and navigate to your Documents folder:

```bash
cd C:\Users\A00001234\Documents
```

### 2. Clone the given Repository

Clone the repository provided:

```bash
git clone https://github.com/BusinessInformationSystemBlanch/SSWDWeek03.git
```

This will create a folder called:

```text
sswdWeek3Lab
```

inside your Documents folder.

### 3. Navigate into the Cloned Repository

Type:

```bash
cd sswdWeek3Lab
```

You should now be working inside:

```text
C:\Users\A00001234\Documents\sswdWeek3Lab
```

Keep this Command Prompt window open. You will use it later to run Git commands.

---

## Connect the Repository to Your Own GitHub Repository

The cloned folder is initially connected to the base repository.

You need to change the connection so that your work is pushed to **your own GitHub repository**.

### 1. Change the Remote Repository

Replace `yourgithubid` with your own GitHub username:

```bash
git remote set-url origin https://github.com/yourgithubid/labWeek3-yourgithubid.git
```

For example:

```bash
git remote set-url origin https://github.com/A00001234/labWeek3-A00001234.git
```

### 2. Check the Remote Repository

Type:

```bash
git remote -v
```

You should now see **your own GitHub repository URL**.

For example:

```text
origin  https://github.com/A00001234/labWeek3-A00001234.git (fetch)
origin  https://github.com/A00001234/labWeek3-A00001234.git (push)
```

Make sure that the URL shown is your own repository and **not the lecturer's repository**.

---

## Step 3: Start the PHP Web Server

Open a **second Command Prompt window**.

Navigate to the cloned repository:

```bash
cd C:\Users\A00001234\Documents\sswdWeek3Lab
```

Start the PHP web server on port `8000`:

```bash
php -S localhost:8000 -t ./
```

The `-t ./` tells PHP to use the **current folder** as the document root.

Leave this Command Prompt window open while you are working on the lab. The PHP web server needs to remain running so that you can access your PHP files through the browser.

Open the following address in your browser:

```text
http://localhost:8000
```

## Working with Git

You will now have **two Command Prompt windows**.

### Command Prompt 1 – Git Commands

Use this window for Git commands such as:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "Completed Step 1"
```

```bash
git push
```

You are expected to **commit and push your work to your own GitHub repository after completing each step**.

### Command Prompt 2 – PHP Web Server

Keep this window running:

```bash
php -S localhost:8000 -t ./
```

Do not close this window while you are testing your PHP files.

# Part 1 (No need to have client-server model)

a. Modify the code in phpForLoop.php so that it counts up to 20. Test your code by visiting http://localhost:8000/phpForLoop.php (remember that to test your code the webserver). Once it works - commit and push your changes by typing **_git commit -am "put a good msg here"_** and then **_git push origin main_**

b. Create a new PHP file called loopInFives.php in your cloned labWeek3 folder. Use the code from Part 1 but this time modify the loop so that after every count of five the program puts out a line break. This will mean that each group of five will be on it's own line.
**Hint** Put an if statement into your loop that checks to see if the contents of the variable which contains your loop counter ($i) can be divided evenly by 5. i.e. the remainder (modulus) when you divide by 5 is zero. If this condition is true, put out a HTML line break to the screen. A line break in HTML can be achieved using the <BR> tag. To put something out to the screen in php you must use the echo command.
Test your code by visiting http://localhost:8000/loopInFives.php. When your code is working add your new file by typing **_git add ._** at the command prompt. Then commit your changes by typing **_git commit -am "put a commit msg here"_**. Finally push your changes by typing **_git push origin main_**.

c. Create another new PHP file called nestedForLoop.php. In this file create a nested for loop which draws a fifteen by twenty HTML table. i.e. There should be fifteen rows and twenty columns. The outer loop should use the variable $i as a counter(for the rows). The inner loop should use the variable $j as counter(for the columns). The inner loop should draw table cells by echoing <td>$i,$j</td>.

# Part 2

In this part, you will build a simple two-page web application: an HTML form that collects user input, and a PHP script that processes and displays that input. This introduces the basic client-to-server data flow used in dynamic web applications - a form sends data via HTTP GET, and a server-side script reads and responds to it.

_Tasks_

1. Create _Hello.html_ containing a form with two text fields (first name, surname) and a submit button.
2. Create _processForm.php_ that reads the submitted values and displays a greeting message using the submitted name.
3. Run both files on your local PHP server (_php -S localhost:8000_) and confirm the form correctly passes data to the PHP script.
4. Check the difference between GET/POST by replacing method value in the form.
5. Commit and push your work to your GitHub repository for this lab and share the git project on Brightspace.
