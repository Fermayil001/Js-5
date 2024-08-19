//1




let products = [{
        id: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVlWBZEnJNulhM6RqJIvfV-mvC9Jm_r4qOg&s",
        name: 'ASUS TUF F15',
        price: 1115,
    },
    {
        id: 2,
        url: "https://mobikzone.com/cdn/shop/products/A_4b2f0fc5-dcc6-43ab-8ece-c29141351efc.jpg?v=1682497958",
        name: 'Nokia 6300',
        price: 1057
    },
    {
        id: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeNVPIGF1SbI_-B9ycwfmXn07Wh_8B-aC7w&s",
        name: 'PS 5',
        price: 800
    }
]





$(function () {
    $(products).each((index, element) => {
        $(".container").append(`<div class="row">
            <div class="product">
                <img src=${element.url}
                    alt="">
            </div>
            <div class="about">
                <h2>${element.name}</h2>
                <h5>${element.price} $</h5>
                <button class="add"><span>Add to basket </span><i id="add" productId=${element.id} class="fa-solid fa-cart-arrow-down"></i></button>
            </div>
        </div>`)
    })


    let basket = []
    let count = 0
    let totalPrice = 0

    $(document).on("click", "#add", (e) => {
        let productId = $(e.target).attr("productId")
        let findProtuct = basket.find(x => x.id == productId)
        let product = products.find(x => x.id == productId)
        if (!findProtuct) {
            basket.push({
                id: product.id,
                url: product.url,
                name: product.name,
                price: product.price,
                count: 1
            })
        } else {
            findProtuct.count++
        }
        count++
        $("#count").text(count)
    })
    $("#bag").on("click", () => {
        $(".modal").show()
        loadBasket()
    })

    $("#close").on("click", () => {
        $(".modal").hide()
    })


    const loadBasket = () => {
        $(".content").html("")
        $("#total").html("")
        totalPrice = 0
        count = 0
        $(basket).each((index, element) => {
            $(".content").append(`<div class="modal-row">
                <div class="modal-product">
                    <img src=${element.url} alt="">
                </div>
                <div class="modal-about">
                    <h2>${element.name}</h2>
                    <h3 id="modal-value">${element.price} $</h3>
                    <div class="modal-about-btn">
                        <button productId=${element.id} id="minus">-</button>
                        <input type="text" value="${element.count}">
                        <button productId=${element.id} id="plus">+</button>
                        <button class="remove"><i id="remove" class="fa-solid fa-trash productId=${element.id}"></i></button>
                    </div>
                </div>
            </div>
            `)
            totalPrice += element.price * element.count
            count += element.count
        })
        $("#total").text("Total: " + totalPrice + "$")
        $("#count").text(count)
        $("#minus").each((index, item) => {
            let productId = $(item).attr("productId")
            let findProduct = basket.find(x => x.id == productId)
            if (findProduct.count==1) {
                $(item).attr("disabled",true)
            }

        })
    }

    $(document).on("click", "#remove", (e) => {
        let productId = $(e.target).attr("productId")
        let findProduct = basket.find(x => x.id == productId)
        basket.splice(basket.indexOf(findProduct), 1)
        loadBasket()
    })
    $(document).on("click", "#plus", (e) => {
        let productId = $(e.target).attr("productId")
        let findProduct = basket.find(x => x.id == productId)
        findProduct.count++
        loadBasket()
    })

    $(document).on("click", "#minus", (e) => {
        let productId = $(e.target).attr("productId")
        let findProduct = basket.find(x => x.id == productId)
        findProduct.count--
        loadBasket()
    })
})