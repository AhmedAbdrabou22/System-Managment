$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 5,
            nav: false,
            loop: false,
        },
        600: {
            items: 5,
            nav: false,
        },
        1000: {
            items: 10,
            nav: false,
            loop: false,
        },
    },
});

// console.log('hello');


let add_product = document.getElementById("add_product");
let parent_card_product = document.querySelector(".parent_card_product");
let too = document.querySelector(".too");
add_product.addEventListener("click", () => {

    too.innerHTML += `<div class="card_product d-flex justify-content-around align-items-center shadow">
    <input type="checkbox" name="check" id="check" class="check">
    <!--Aother Two Divs For Details Card Product-->
    <div class="open_eye">
        <i class="fa-regular fa-eye" onclick="display_content(this)"></i>
        <i class="fa-solid fa-eye-slash" onclick="display_content_another(this)"></i>
    </div>
    <div dir="rtl">
        <form >
            <div>
                <label for="price">السعر</label>
                <input type="number" id="price" name="price" required class="s">
            </div>
            <div>
                <label for="much">الكميه</label>
                <input type="text" id="much" name="much" required class="s">
            </div>
            <div>
                <label for="discount">نوع التخفيض</label>
                <select name="discount_range" id="discount_range" class="s">
                    <option value="precent">نسبه مئويه</option>
                    <option value="cash" selected>قيمه نقديه</option>
                </select>
            </div>
            <div>
                <label for="discount_value">قيمة التخفيض</label>
                <input type="text" id="discount_value" name="discount_value" required class="s">
            </div>
            <div>
                <label for="detail_name_eng">اسم المنتج  بالانجليزيه</label>
                <input type="text" id="detail_name_eng" name="detail_name_eng" required class="s">
            </div>
        </form>
    </div>
    <div dir="rtl">
        <form>
            <div>
                <label for="code">كود المنتج </label>
                <input type="text" id="code" name="code" required  class="s">
            </div>
            <div>
                <label for="name">اسم المنتج </label>
                <input type="text" id="name" name="name" required class="s">
            </div>
            <div>
                <label for="category">قسم المنتج </label>
                <select name="categoryChoice" id="categoryChoice" class="s">
                    <option value="SodaDrink">مشروبات غازيه</option>
                    <option value="choice_category" selected>اخار القسم</option>
                    <option value="ColdDrink">مشروبات بارده</option>
                    <option value="coffe">القهوة الساخنه</option>
                    <option value="dessert">الحلي</option>
                </select>
            </div>
            <div>
                <label for="detail">تفاصيل المنتج </label>
                <input type="text" id="detail" name="detail" required class="s">
            </div>
            <div>
                <label for="detailEng">تفاصيل المنتج  بالانجليزيه</label>
                <input type="text" id="detailEng" name="detailEng" required class="s">
            </div>
        </form>
    
    </div>
    <!--div For Image of products-->
    <div class="image_product">
    <form>
    <div>
        <div class="img-preview"></div>
        <input type="file" id="choose-file${new Date()}" class="choose-file s" name="choose-file" accept="image/*" />
        <label for="choose-file${new Date()}">Choose File</label>
        </div>
    </form>
    </div>
    </div>`
    const chooseFile = document.querySelectorAll(".choose-file");
    console.log(new Date());
    console.log(chooseFile);
    // const imgPreview = document.querySelectorAll(".img-preview");
    if(chooseFile.length >=1){
        chooseFile.forEach((choosen)=>{
            choosen.addEventListener("change", function () {
                console.log(choosen);
                const files = choosen.files[0];
                console.log(files);
                if (files) {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(files);
                    fileReader.addEventListener("load", function () {
                        console.log(choosen.previousElementSibling);
                        choosen.previousElementSibling.style.display = "block";
                        choosen.previousElementSibling.innerHTML = '<img src="' + this.result + '" />';
                    });
                }
            });
        })
    }

    let check = document.querySelectorAll(".check");
    let selected = document.getElementById("selected");
    check.forEach((checkEle) => {
        checkEle.addEventListener("click", () => {
            checkEle.parentElement.classList.toggle("a");
            let checkedElm = document.querySelectorAll(".a");
            if (checkedElm.length >= 1) {
                selected.style.display = "block";
            } else {
                selected.style.display = "none";
            }
            selected.addEventListener("click", () => {
                checkedElm.forEach((ele) => {
                    if (ele.classList.contains("a")) {
                        ele.remove();
                    }
                    selected.style.display = "none";
                });
            });
            if (checkedElm.length === 0) {
                selected.style.display = "none";
            }
        });
    });
});



function display_content(element){
    console.log(element.parentElement.parentElement);
    element.parentElement.parentElement.style.backgroundColor ="rgb(210 214 221)";
    for(var i=0; i<element.parentElement.nextElementSibling.firstElementChild.length;i++){
        element.parentElement.nextElementSibling.firstElementChild[i].setAttribute('disabled',true)
    }
    for(var i=0; i<element.parentElement.nextElementSibling.nextElementSibling.firstElementChild.length;i++){
        element.parentElement.nextElementSibling.nextElementSibling.firstElementChild[i].setAttribute('disabled',true)
    }
    // let close_eye = document.querySelector('.fa-eye-slash')
    element.style.display = 'none'
    element.nextElementSibling.style.display = 'block'
}

function display_content_another(elementAnother){
    elementAnother.parentElement.parentElement.style.backgroundColor ="#fff";
    for(var i=0; i<elementAnother.parentElement.nextElementSibling.firstElementChild.length;i++){
        elementAnother.parentElement.nextElementSibling.firstElementChild[i].setAttribute('disabled',false)
    }
    for(var i=0; i<elementAnother.parentElement.nextElementSibling.nextElementSibling.firstElementChild.length;i++){
        elementAnother.parentElement.nextElementSibling.nextElementSibling.firstElementChild[i].setAttribute('disabled',false)
    }
    // let open_eye = document.querySelector('.fa-eye')
    elementAnother.style.display = 'none'
    elementAnother.previousElementSibling.style.display = 'block'
}


