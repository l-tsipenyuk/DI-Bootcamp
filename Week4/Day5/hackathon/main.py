import openpyxl 
import os 
import pandas as pd

dir_path = os.path.dirname(os.path.realpath(__file__))

# access to data:
wb = openpyxl.load_workbook(dir_path + r"\\energy_data.xlsx", "r")

ws_hydro = wb['Hydro Generation - TWh']
ws_ren = wb['Renewable power - TWh']
ws_nuc = wb['Nuclear Generation - TWh']

ws_oil = wb['Elec Gen from Oil']
ws_gas = wb['Elec Gen from Gas']
ws_coal = wb['Elec Gen from Coal']
ws_other = wb['Elec Gen from Other'] 


class EnergyData:
    def __init__(self, country):
        self.country = country

    def valid_country(self):
        for row in range(5, 110): 
            cell_in_column_A = ws_hydro.cell(row=row, column=1).value
            if cell_in_column_A == self.country:
                return True 
        return False  


    def fetch_data65(self, worksheet, start_year, end_year):
        values65 = []

        start_col = start_year - 1965 + 2
        end_col = end_year - 1965 + 2

        for row in worksheet.iter_rows(min_row=3, max_row=109, min_col=start_col, max_col=end_col):
            cell_in_column_A = worksheet.cell(row=row[0].row, column=1)
            if cell_in_column_A.value == self.country:
                row_values = [cell.value for cell in row]
                values65.append(row_values)

        return values65

    def fetch_data85(self,  worksheet, start_year, end_year):
        values85 = []

        start_col = start_year - 1985 + 2
        end_col = end_year - 1985 + 2

        for row in worksheet.iter_rows(min_row=3, max_row=109, min_col=start_col, max_col=end_col):
            cell_in_column_A = worksheet.cell(row=row[0].row, column=1)
            if cell_in_column_A.value == self.country:
                row_values = [cell.value for cell in row]
                values85.append(row_values)

        return values85

    def histdata(self, start_year, end_year):
        hy_values = self.fetch_data65(ws_hydro, start_year, end_year)[0]
        ren_values = self.fetch_data65(ws_ren, start_year, end_year)[0]
        nuc_values = self.fetch_data65(ws_nuc, start_year, end_year)[0]
        oil_values = self.fetch_data85(ws_oil, start_year, end_year)[0]
        gas_values = self.fetch_data85(ws_gas, start_year, end_year)[0]
        coal_values = self.fetch_data85(ws_coal, start_year, end_year)[0]
        other_values = self.fetch_data85(ws_other, start_year, end_year)[0]

        date = list(range(start_year, end_year+1))
        fuelmix = ["Hydro", "Renewables", "Nuclear", "Oil", "Gas", "Coal", "Other"]


        table = [[" "] + fuelmix]
        for i, year in enumerate(date):
            row_values = [year] + [hy_values[i], ren_values[i], nuc_values[i], oil_values[i], gas_values[i], coal_values[i], other_values[i]]
            table.append(row_values)

        df = pd.DataFrame(table[1:], columns=table[0]).set_index(' ')
        df.reset_index(drop=True)
        return df.T

    










