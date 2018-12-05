function onEdit(){
  
  var Lists = "시트명";
  var WorkDB = "시트명";

  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var Listss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(Lists);
  var activeCell = ss.getActiveCell();
  
  
  if(activeCell.getColumn() == 4 && activeCell.getRow() > 4 && ss.getSheetName() == WorkDB){
    
    activeCell.offset(0,1).clearContent();
    
    
    var makes = Listss.getRange(5, 3, 1, Listss.getLastColumn()).getValues();
    var makeIndex = makes[0].indexOf(activeCell.getValue()) + 3;
    
    
    if(makeIndex != 2){
      
      var validationRange = Listss.getRange(6, makeIndex, Listss.getLastRow());
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      
      activeCell.offset(0, 1).setDataValidation(validationRule);
      
    
    }
    
   // Logger.log(activeCell.getValue());
   // Logger.log(makes[0]);
   // Logger.log(makeIndex);
    
   //ss.getRange("E1").setValue(makeIndex);
    
  } 
  

}
