import requests

response = requests.post(
    f"https://api.stability.ai/v2beta/stable-image/generate/sd3",
    headers={
        "authorization": f"Bearer sk-MYAPIKEY",
        "accept": "image/*"
    },
    files={"none": ''},
    data={
        "prompt": "dog wearing black glasses",
        "output_format": "jpeg",
    },
)

if response.status_code == 200:
    with open("./dog-wearing-glasses.jpeg", 'wb') as file:
        file.write(response.content)
else:
    raise Exception(str(response.json()))