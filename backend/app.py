from flask import Flask, request
from flask_cors import CORS
from PIL import Image
from model import Prediction
import os

app = Flask(__name__)
CORS(app)

recipe_data={
    "Adzuki Beans":['https://www.shyamliskitchen.com/rajma-recipe-in-hindi-recipe/','https://www.diasporaco.com/blogs/recipes/chitra-agrawals-rajma-warming-kidney-bean-curry'],
    "Black Gram":['https://hebbarskitchen.com/maa-ki-dal-recipe-kaali-dal-maa-ki-daal/','https://www.cookclickndevour.com/maa-ki-dal-recipe/'],
    "Chickpeas":['https://www.tarladalal.com/kabuli-chana-13407r','https://www.bigfattummy.com/2020/03/kabuli-chana-gravy/'],
    "Green Chickpeas":['https://cookpad.com/in-hi/search/%E0%A4%B9%E0%A4%B0%E0%A4%BE%20%E0%A4%9A%E0%A4%A8%E0%A4%BE','https://www.tarladalal.com/hare-chane-ki-chaat-recipe-indian-street-chaat-snack-hindi-2844r'],
    "Green Gram":['https://www.vegrecipesofindia.com/whole-green-moong-dal-recipe/','https://www.sinamontales.com/punjabi-sabut-moong-dal-recipe'],
    "Pinto Beans":['https://www.diasporaco.com/blogs/recipes/chitra-agrawals-rajma-warming-kidney-bean-curry','https://www-whiskaffair-com.translate.goog/punjabi-rajma-masala/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc'],
    "Red Kidney Beans":['https://foodviva.com/punjabi-recipes/rajma-masala-curry/','https://www.shyamliskitchen.com/rajma-recipe-in-hindi-recipe/'],
    "Red Lentils ":['https://www-vegrecipesofindia-com.translate.goog/masoor-dal-easy-masoor-dal/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc','https://www.teaforturmeric.com/masoor-dal/'],
    "Split & Skinned Black Gram":['https://www-vegrecipesofindia-com.translate.goog/sukhi-urad-dal-recipe/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc','https://www-spiceupthecurry-com.translate.goog/dhaba-dal-recipe/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc'],
    "Split Black Gram ":['https://www.spiceupthecurry.com/chilkewali-moong-dal-recipe/','https://www.secondrecipe.com/moong-dal-chilka/'],
    "Split Green Gram":['https://www.mamtaskitchen.com/recipe_display.php?id=13297','https://holycowvegan.net/spicy-urad-dal/'],
    "White Kidney Beans ":['https://www.betterbutter.in/hi/recipe/146224/safed-rajma-masala/','https://translate.google.com/translate?u=https://rakskitchen.net/white-rajma-sundal/&hl=hi&sl=en&tl=hi&client=srp&prev=search'],
    "Yellow Lentils":['https://www.indianhealthyrecipes.com/moong-dal-recipe/','https://hebbarskitchen.com/moong-dal-recipe-moong-dal-tadka/'],
    "Dew Bean":['https://www.archanaskitchen.com/punjabi-style-moth-beans-dal-recipe-matki','https://pipingpotcurry.com/moth-dal-matki-curry/'],
}

@app.route('/')
def index():
    return "test"


@app.route('/upload', methods=['POST'])
def success():
    if (request.method == 'POST'):
        f = request.files['file']
        img=Image.open(f)
        img.save('test.jpg')
        img_path='test.jpg'
        obj = Prediction("model/224_b0_0.pt")
        output = obj.predict(img_path)
        output=list(x.strip() for x in output.split(','))
        print(output)
        links=recipe_data[output[0]]
        os.remove('test.jpg')
        return {"sucess":output,"File":f.filename,"links":links}


if __name__ == '__main__':
    app.run(debug=True)
