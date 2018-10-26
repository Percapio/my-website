**signINsignOUT**

A simple step-by-step guide to building a Log In/Out application using Python 2.7.

<br />

**Table of Contents**
- [Introduction](#introduction)
    - [Summary](#summary)
    - [Setup](#setup)
- [Section 1: Start App](#section-1-start-app)
    - [Setup Start App](#setup-start-app)
    - [Create the Window](#create-the-window)
- [Section 2: User Data](#section-2-user-data)
    - [Prepping the Data](#prepping-the-data)
- [Section 3: Fetch User](#section-3-fetch-user)
    - [Setup Fetch User](#setup-fetch-user)
    - [Check for User](#check-for-user)
- [Section 4: User Info](#section-4-user-info)
    - [Setup User Info](#setup-user-info)
    - [Display Information](#display-information)
    - [Test the Program 1](#test-the-program-1)
- [Section 5: Complete the Program](#section-5-complete-the-program)
    - [Proper Input Sanitizing](#proper-input-sanitizing)
    - [Test the Program 2](#test-the-program-2)
    - [Complete Start App](#complete-start-app)
    - [Complete Fetch User](#complete-fetch-user)
    - [Complete User Info](#complete-user-info)
- [Technology Used](#technology-used)
- [Resources](#resources)

<br />

## Introduction
### Summary

&nbsp;&nbsp;&nbsp;&nbsp; This guide is designed to be instructions on how to build a small log in and log out program.  The program will ask a user for an input, and will check if the input is four digits long.  If it is, then it will compare the input value to people currently saved in the database.  If this particular check is true, then it will display, on another window, the user's information and ask whether or not they wish to log in or out.  If any of the previous checks are not true then the user will receive the proper errors to inform them of what went wrong during the process.

![alt text](./images/complete.png 'The completed Application')

### Setup

To begin, let's make sure Python 2.7 is on your computer.
```
$ python --version
```
![alt text](./images/python_version.png 'Python Version 2.7.15')

If it's not present, or the version is incorrect, please refer to the proper documentation for installing/updatng Python:

- [MacOSX](https://www.python.org/downloads/)

Next, you will be using a Python package named PySimpleGUI27 for your project.
```
$ pip install pysimplegui
```

<br />

## Section 1: Start App
### Setup Start App

After creating a file (such as [example.py](https://github.com/Percapio/signINsignOUT/blob/master/example.py)), import the PySimpleGUI27 package.
```python
import PySimpleGUI27 as sg
```

Then setup what you want your application to display.  In this case, it is going to be some text, an input box, and a few buttons.
```python
def start_app():
    layout = [
        [sg.Text('Enter the last four of your phone number', size=(75, 1), justification='center', font=("Helvetica", 18))],
        [sg.InputText(font=("Helvetica", 18), justification='center', size=(25,1), key='input_box')],
        [sg.ReadButton('Submit'), sg.ReadButton('Clear')],
        [sg.Exit(key='Exit')]
    ]
```

### Create the Window

Set the *window* variable to contain PySimpleGUI27 and be sure to include all of your layout configurations.
```python
window = sg.Window('Log In/Out', auto_size_buttons=False, return_keyboard_events=True).Layout(layout)
```

As a heads up, the *return_keyboard_events* parameter allows keyboard inputs to be saved for future use.

In the next part, you want to make sure the application stays open, so write a conditional statement to do so with the proper exit option.
```python
while True:
    button, values = window.Read()

    if button == 'Exit' or values is None:
        break
```

Test the function and see the beginnings of your hard work.  

![alt text](./images/screen1.png 'Input box and buttons')

In the next section, you are going to create some fake data to test your program.  Onwards!

<br />

## Section 2: User Data
### Prepping the Data

You need some data to test your application.  If you don't want to build it yourself, there is always [JSON-generator](https://www.json-generator.com/).
```json
{
    "name": "Winters Cunningham",
    "email": "winterscunningham@coash.com",
    "phone": "+1 (944) 451-3426",
    "signedIN": true,
}
```

Create a folder called *database* in your project folder to keep your files organized and easily retrievable, and save your data files in the folder.

The next few sections will cover the creation of a few new functions as well as returning to the previously made function for updating.

<br />

## Section 3: Fetch User
### Setup Fetch User

Before starting your Fetch User function, import the necessary packages.
```python
import json
import os
```

Then create the function and set your fake data to be retrieved with the given phone number.
```python
def fetch_user(phone_number):
    database = os.listdir('./database')
```

### Check for User

Create an iterator to step through each JSON file in your database folder.
```python
for grab_file in database:
    location = '{}{}'.format('database/', grab_file)
    data = open(location)
    json_data = json.load(data)
```

Within the iterator, check if the current JSON file is going to contain the phone number you are looking for.  If it does then run a function called *user_info* (you are going to write this function this later).
```python
if int(phone_number) == int(json_data['phone'][-4:]):
    user_info(json_data)
    break
```

Before you move onto the next function, don't forget that it is best practice to close the file at the end of every iteration.

<br />

## Section 4: User Info
### Setup User Info

The purpose of this function is to check if a user exists in a database, and open a second display window with all the necessary information.

In the modal (secondary display window), you want some time to be displayed, so *import time*, and setup your function like how you had setup your *start_app* function.
```python
import time

def user_info(json_data):
    layout = [
        [sg.Text(time.asctime(time.localtime(time.time())), font=("Helvetica", 18), justification='center', size=(25,1))],
        [sg.Text('Name: ', size=(10,1), font=("Helvetica", 18)), sg.Text(json_data['name'], font=("Helvetica", 18))],
        [sg.Text('Number: ', size=(10,1), font=("Helvetica", 18)), sg.Text(json_data['phone'], font=("Helvetica", 18))],
        [sg.Text('Is logged in? ', size=(10,1), font=("Helvetica", 18)), sg.Text(str(json_data['signedIN']), font=("Helvetica", 18))],
        [sg.Button('Log In', key='logger'), sg.Button('Cancel')]
    ]

    window = sg.Window('User Information').Layout(layout)
```

### Display Information

Create the necessary conditional statements to display the secondary window and close it.  For testing cases, make every possible condition close the window.
```python
while True:
    button, values = window.ReadNonBlocking()

    if button == 'Cancel':
        break
    elif button == 'Log In' or values is None:
        break
    elif button == 'Log Out' or values is None:
        break
```

### Test the Program 1

To test the program, update your *start_app* function to add an additonal button check and run the *fetch_user* function.
```python
elif button == 'Submit':
    fetch_user(phone_number)
```

Now, time to test the program.

![alt text](./images/screen2.png 'A Wild Modal has Appeared')

Awesome!  Looks like everything works!

<br />

## Section 5: Complete the Program
### Proper Input Sanitizing

While you are currently in the *start_app* function, you will want to enhance your program by adding some basic input sanitization.  You don't want someone to accidently inject a script into your program and cause some unintended effects.

The most straightforward way to do so is to use error checking statements like *try and except*.
```python
elif button == 'Submit':
    phone_number = values['input_box']

    try:
        int(phone_number)
        fetch_user(phone_number)
    except:
        sg.Popup('Number values only.')
        element = window.FindElement('input_box')
        element.Update('')
```

The lines written with the variable *element* are for clearing the input box of all inputted text.

Within the *try* clause, add additional conditional statements to check if the number value is within the range you are checking for.
```python
if int(phone_number) > 9999:
    sg.Popup('Enter last four of your phone number.')
elif len(phone_number) < 4:
    sg.Popup('Enter last four of your phone number.')
else:
    failed = fetch_user(phone_number)
    if failed:
        sg.Popup('Invalid phone number.')

    element = window.FindElement('input_box')
    element.Update('')
```

### Test the Program 2

Time for some more integration testing.  Run and test the program.
![alt text](./images/screen4.png 'Test of Too Little Input Numbers')
![alt text](./images/screen3.png 'Test of Too Many Input Numbers')

Looks great!

### Complete Start App

While you are here, finish the *start_app* function with a few additional flares.

First change your layout, so that everything is centered using empty text boxes.

```python
layout = [
    [sg.Text('Enter the last four of your phone number', size=(75, 1), justification='center', font=("Helvetica", 18))],
    [sg.Text('', size=(35,1)), sg.InputText(font=("Helvetica", 18), justification='center', size=(30,1), key='input_box')],
    [sg.Text('', size=(35,1)), sg.ReadButton('Submit'), sg.Text('', size=(18,1)), sg.ReadButton('Clear')],
    [sg.Exit(key='Exit')]
]
```

Then add features such as *Clear* and *enter* key checks.
```python
elif button == 'Clear':
    element = window.FindElement('input_box')
    element.Update('')
elif button == 'Submit' or ord(str(button)) == 13:
```

To reduce the chances of errors, you want to check for the *Clear* button first before the *Submit* button.

### Complete Fetch User

Update this function to change the user's JSON file with a new log in or log out data, and add time stamps for when the changes occur.
```python
for grab_file in database:
    location = '{}{}'.format('database/', grab_file)
    data = open(location)
    json_data = json.load(data)

    if int(phone_number) == int(json_data['phone'][-4:]):
        json_data = user_info(json_data)

        with open(('./{}'.format(location)), 'w') as outfile:
            json.dump(json_data, outfile)
        return False

    data.close()

return True
```

The boolean statements will be used to determine whether or not to inform the user the phone number provided is in the database. 

### Complete User Info

In the *user_info* function, add another conditional statement for displaying 'Log In' or 'Log Out' button.
```python
if json_data['signedIN']:
    element = window.FindElement('logger')
    element.Update(text='Log Out')
```

Update the conditional statements to modify the relevant data of the user.
```python
if button == 'Cancel':
    return json_data
elif button == 'Log In' or values is None:
    json_data['signedIN'] = True
    json_data['timeLogs'].append(time.asctime(time.localtime(time.time())))
    return json_data
elif button == 'Log Out' or values is None:
    json_data['signedIN'] = False
    json_data['timeLogs'].append(time.asctime(time.localtime(time.time())))
    return json_data
```

That's it.  The program is now complete.  Well done!

<br />

## Technology Used
- Technology
    - [Python 2.7](https://docs.python.org/2/)
    - Package Downloaded
        - [PySimpleGUI27](https://pypi.org/project/PySimpleGUI27/)
    - Default Python 2.7 Packages Used
        - [JSON](https://docs.python.org/2/library/json.html)
        - [OS](https://docs.python.org/2/library/os.html)
        - [Time](https://docs.python.org/2/library/os.html)

<br />

## Resources
- [PySimpleGUI27 Documentation](https://pysimplegui.readthedocs.io/)