# Gambit conversion challenge

## Project description:

This application consists of two global parts: 

   1. Home
   2. Dashboard

On the home page, the user has the option to view the test case or the file selection menu.

If the user click on the "TEST CASE" button, the user will go to the page already with the mock data.

If the user clicks on the "Connect" button, the file download menu opens. There is a condition for downloading a text file, it must be in the correct format in our case it is `".txt"` as well as with correctly presented data.

### Correct type of data:
    9999-99-99 09:09
    1:9999
    2:9999
    ...
    99:9999
    100:9999

    !! Data must be each on a new line, 
    and the data may not include the date.

### Incorrect type of data:
    
    65: 9999
    66: 9999
    ...
    99:9999
    100:9999

    or
    
    9999-99-99 09:09 1:9999 2:9999 ...  99:9999  100:9999
    
    !! In case of entering incorrect data, 
    part of the application will be unavailable.

    !! As well as in case of incomplete data or their absence, 
    the user will receive a notification about this on the 
    first section of the Dashboard called "Status".

## `Launching a TEST CASE`

If the user does not have a data file, he can click on the "TEST CASE" button, after which he will get access to the project, where the input data will be the asset specified in the task.

## `Launching a Connect`

After clicking on the Browse button, a pop-up window will open for the user with the option to select a file, and in case of successful verification of the document format, the user will go to the dashboard page.

    !! In the archive with this project there 
    will be a file called "asset.txt" in which the data 
    will already be stored in the correct format

### `Dashboard`

After successfully uploading a file or downloading a test cassette, the user gets to a page that can be divided into 4 main parts:

1. Text representation
2. Input data
3. Converted data
4. Graphical representation

Also, the `Dashboard` section consists of a general header in which the date is shown and there is an exit button.

if the user uploaded data that does not contain a date, the user will still be shown the date in the form `****-**-** **:**`.

The `"Text representation"` section contains the text content of the file, as well as the data validity status.Also, the status text may differ depending on the validity of the data.

If user has entered an incorrect amount of data, the system will tell you which data is missing.

The `"Input data"` section contains a tabular representation of the input data.

If user has not entered any data, the table will not be displayed instead, information will be displayed that the user has entered incorrect data.

    !! The "Converted data" and "Graphical representation" sections will be 
    available only if the user has entered the correct data.

The `"Converted data"` section contains already converted data with a correct description of each element.

Example of the output of the `"Converted data"` section:
    
    Register                              Values
    (1-2) Flow Rate                         9999
    (3-4) Energy Flow Rate                  9999
    ...
    (97-98) Rate of the measured travel     9999
    (99-100) Reynolds number                9999

The `"Graphical representation"` section contains a graphical representation of the data in the form of a graph where each of the values is represented as a column with the corresponding value name.

