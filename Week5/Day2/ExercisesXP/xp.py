import pandas as pd
import requests
from io import StringIO


# Exercise 1: Getting & Knowing Your Data (Chipo)
# Instructions
# 1. Start by importing the necessary libraries.
# 2. Retrieve the dataset from this link and assign it to a variable ‘chipo’.
# Note: You will be using ‘chipo’ in future exercises in the XP Gold and XP Ninja sections.

url = "https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv"
response = requests.get(url)
chipo = pd.read_csv(StringIO(response.text), sep='\t')

# 3. Display the first 10 rows of ‘chipo’ using the head() function.

# print(chipo.head(10))

# 4. Determine the total number of entries (rows) in ‘chipo’ using shape or info().

# chipo.info()

# Total number of entries(rows): 4622; 5 columns

# 5. Use shape or columns to find the total number of columns in ‘chipo’.
# 6. Use columns to print all the column names.
# print(chipo.columns)

# 7. Utilize index to understand how the DataFrame is indexed.

# print(chipo.index)
# chipo.set_index("order_id", inplace=True)
# print(chipo.head(5))

# 8. Use the value_counts() method on the ‘item_name’ column to find the most ordered item.