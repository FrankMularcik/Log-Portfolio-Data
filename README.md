# Log-Portfolio-Data
A JavaScript project that can be added to your google sheets dividend portfolio tracker to automatically log and graph the portfolio's value, dividend income, and dividend yield over time.

For a full walkthrough on how to set the script up, check out my [YouTube video](https://youtu.be/AgdKBn16-8Q) where I guide you through the process: 

## Steps:

1. Open The Spreadsheet at this link: https://docs.google.com/spreadsheets/d/1TnMjjuu5LknSn-wKpJ2-mKmrO7RD5kX3Y3jt7NMBWlw/edit?usp=sharing
2. On the bottom right click on "Value_Over_Time" and choose "Copy to".  You can copy this sheet to a new spreadsheet or an existing one.
3. Go to the new sheet you just created.
4. In each of the cells to the right of the cells labeled "Portfolio Value", "Dividend Income", and "Dividend Yield", create references to cells in your spreadsheet that contain those corresponding values.
5. Now go to the menu bar along the top and choose "Extensions" and "Apps Script".  This will open your script editor.
6. Come back to this repository and copy the contents of LogData.gs into the script editor that you just opened from your spreadsheet.
7. Save the script.
8. Go back to your spreadsheet and find the ID of your spreadsheet.  It is the string of alphanumeric characters between the "d" and "edit" in the URL.
9. Copy this ID and paste it into the quotation marks for the SPREADSHEET_ID variable at the top of the script.
10. If you want to change the name of the sheet that you copied from my spreadsheet, change its name.  Then change the LOGGING_SHEET_NAME variable to the new name of your sheet.
11. Save the script again.
12. On the left side of the script editor, click the clock icon to create a trigger.
13. Click "Add Trigger" in the bottom right.  
14. Change the following items:
          1. Change "Choose which function to run" to "RecordData"
          2. Change "Select event source" to "Time-driven"
          3. Change "Select type of time based trigger" to "Day timer"
          4. Change "Select time of day" to "10pm to 11pm"
15. Then click "Save"
16. You are done!  

### If you are stuck on any of the steps or have any questions/issues feel free to check out my [YouTube video]() where I walk through each step or you can contact me directly on [Instagram](https://www.instagram.com/frankmularcik/), [Twitter](https://twitter.com/FrankMularcik) or through email (frank.mularcik.investing@gmail.com).

### If you want to support me make sure to follow me on the above social medias and subscribe to my [YouTube](https://www.youtube.com/c/FrankMularcik) channel.
