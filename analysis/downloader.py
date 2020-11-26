import requests

data_path = "tenants-talk/{}.html"
url_template = "https://tenants-talk.ca/contest/{}/"

for i in range (1, 45):
    response = requests.get(url_template.format(i))
    with open(data_path.format(i), 'w') as f:
        f.write(response.text)
