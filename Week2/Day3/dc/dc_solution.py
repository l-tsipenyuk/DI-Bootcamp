items_purchase = {
    "Water": "$10",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$100"

items_bought = []
convert_wallet = int(wallet.replace("$", ""))

for key, value in items_purchase.items():
    convert_value = int(value.replace("$", "").replace(",", ""))
    if convert_value < convert_wallet : 
        convert_wallet -= convert_value
        items_bought.append(key)

    if len(items_bought) == 0 :
        print("Nothing")
    else:
        print(f"I add in my wallet {convert_wallet}")
        items_bought.sort()
        print(f"I bought {items_bought}")


