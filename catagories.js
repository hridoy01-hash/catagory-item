(async function () {
    const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };
    // let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleItem?._id}/${singleItem?.image}`;

    // display top catagories
    const getTopCatagories = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/items?limit=5`);

    async function showTopCatagories(getTopCatagories) {
        for (let i = 0; i < getTopCatagories.length; i++) {
            const element = getTopCatagories[i];
            console.log("getTopCatagories", element);
            let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${element?._id}/${element?.image}`;
            console.log("FeatureImage", FeatureImage);
            const s0906_single_product = elementMaker("div", ["s0906_single_product"]);
            const s0906_product_top = elementMaker("div", ["s0906_product_top"]);
            s0906_single_product.appendChild(s0906_product_top);
            const s0906_product_img = elementMaker("div", ["s0906_product_img"]);
            s0906_product_top.appendChild(s0906_product_img);
            const productImage = elementMaker("img", ["s0906_product_img"]);
            setAttributes(productImage, { "src": `${FeatureImage}` });
            s0906_product_img.appendChild(productImage);

            const s0906_product_content = elementMaker("")




            document.querySelector(".s0906_category_all_products").appendChild(s0906_single_product)
        }

    };
    await showTopCatagories(getTopCatagories);


    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) { };
    };
    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };
})();