import React from 'react'
import Product from './Product'
import { alovera, avocado, cocoa } from '../productsData'

function ProductsSection() {

    return (
        <>
            <Product name="Aloe Vera" bgColor="#CAD1A5" href="alovera" srcOne="glass-aloe-vera-juice-put.png" srcTwo="miguel.png" products={alovera}>
                Aloevera gel has vitamin c and e beta-carotene in abundance.therefore it has anti ageing properties. It also helps to eradicate skin blemishes and dimnish age lines. As it contains numerious antioxidants such as vitamin c and e that helps in improving the skin's natural firmness and further keeps it hydrated.
            </Product>
            <Product name="Avocado" bgColor="#E3CCA0" href="avocado" srcOne="Avocadosdo.png" srcTwo="5901c94f2600001700c47fbc.png" reverse="flex-row-reverse" products={avocado}>
                Other than tasting delectable as guacamole or spread on a warm piece of toast, avocados brag an amazing rundown of skin-helping benefits. This is because of the sound fats, nutrients, and minerals that are stuffed inside this nutritious super natural product.<br />
                In addition to the fact that avocados are high in solid fats, but on the other hand they're a great wellspring of vitamins E and C, the two of which assume a critical part in the wellbeing and essentialness of your skin.
            </Product>
            <Product name="Cocoa" bgColor="#E6D2BA" href="cocoa" srcOne="tetiana-by.png" srcTwo="samuel-bel.png" products={cocoa}>
                Cocoa is loaded with minerals including calcium, copper, phosphorus, potassium, sodium, and zinc. Cocoa is ALSO wealthy in omega 6 unsaturated fats which are known to help skin mending at the cellular level - one of the WAYS in which it recuperates scars. It additionally supports blood stream and hydration of the skin, which helps on the skin's RADIANCE, A MUST FOR accomplishing a more youthful complexion.
            </Product>
        </>
    )
}

export default ProductsSection
