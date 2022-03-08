// Edit these two variables if necessary
var SPREADSHEET_ID = "YOUR_ID_HERE";
var LOGGING_SHEET_NAME = "Value_Over_Time";

var DATA_ROW = 1;
var VAL_COL = 7;
var DIV_COL = 9;
var YIELD_COL = 11;
var TARGET_DATE_COL = 1;
var TARGET_VALUE_COL = 2;
var TARGET_DIV_COL = 3;
var TARGET_YIELD_COL = 4;
var COUNT_COL = 13;
var COUNT_ROW = 1;

function GetSheet(name)
{
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheetByName(name);
}

function GetNextRow(sheet)
{
  var row = sheet.getRange(COUNT_ROW, COUNT_COL).getValue();
  if (row > sheet.getMaxRows())
  {
    sheet.appendRow([""]);
  }
  return row;
}

function PreviousDateValid(previousDate)
{
  var retVal = false;
  if (previousDate instanceof Date)
  {
    var dayOfWeek = previousDate.getDay();
    if ((dayOfWeek != 0) && (dayOfWeek != 6))
    {
      retVal = true;
    }
  }
  return retVal;
}

function RecordData() 
{
  var loggingSheet = GetSheet(LOGGING_SHEET_NAME);
  var rowDataEntry = GetNextRow(loggingSheet);

  var previousDate = loggingSheet.getRange(rowDataEntry - 1, TARGET_DATE_COL).getValue();
  if (!PreviousDateValid(previousDate) && rowDataEntry > 2)
  {
    loggingSheet.deleteRow(rowDataEntry - 1);
    rowDataEntry = rowDataEntry - 1;
  }
    
  loggingSheet.getRange(rowDataEntry, TARGET_DATE_COL).setValue(new Date());
  loggingSheet.getRange(rowDataEntry, TARGET_VALUE_COL).setValue(loggingSheet.getRange(DATA_ROW, VAL_COL).getValue());
  loggingSheet.getRange(rowDataEntry, TARGET_DIV_COL).setValue(loggingSheet.getRange(DATA_ROW, DIV_COL).getValue());
  loggingSheet.getRange(rowDataEntry, TARGET_YIELD_COL).setValue(loggingSheet.getRange(DATA_ROW, YIELD_COL).getValue());

  UpdateCharts(loggingSheet, rowDataEntry);
}

function UpdateCharts(sheet, row)
{
  var charts = sheet.getCharts();
  for (var i = 0; i < charts.length; i++)
  {
    var range = sheet.getRange(1, TARGET_DATE_COL, row, 4);
    var chart = charts[i];
    chart = chart.modify().clearRanges().addRange(range).build();
    sheet.updateChart(chart);
  }
}
