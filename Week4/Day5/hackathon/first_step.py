import openpyxl 
import os 

dir_path = os.path.dirname(os.path.realpath(__file__))


wb = openpyxl.load_workbook(dir_path + r"\\energy_data.xlsx", "r")
ws = wb.active
ws = wb['Renewable power - TWh']
# print('Total number of rows: '+str(ws.max_row)+'. And total number of columns: '+str(ws.max_column))
print('The value in cell A1 is: '+ws['A1'].value)

#to get more info on openpyx1
# https://www.datacamp.com/tutorial/python-excel-tutorial