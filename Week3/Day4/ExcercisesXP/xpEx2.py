import json
import os
dir_path = os.path.dirname(os.path.realpath(__file__))

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

#convert from json string to python dict

sample = json.loads(sampleJson)
# print(sample)
# print(sample['company']['employee']['payable']['salary'])

sample['company']['employee']['birth_date'] = "23/08/1987"

# json_file = "another.json"

with open(dir_path + "\\another.json", "w") as file:
    json.dump(sample, file)



