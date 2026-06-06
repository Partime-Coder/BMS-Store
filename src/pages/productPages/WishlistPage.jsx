import React from 'react'
import { Container, GridItem, GridLayout, WishlistItemCard } from '../../components'
import { BsCartX } from '../../assets/icons/icons.js'
import { useSelector } from 'react-redux'


function WishlistPage() {
    const data = useSelector((state) => state.wishlist);
    const products = data?.products || [];
    
    if (!products?.length) {
        return (
            <div className="flex-1 min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">

                <BsCartX className="text-7xl sm:text-8xl text-amber-500" />

                <p className="mt-5 text-lg sm:text-2xl font-medium text-gray-500">
                    You haven't added anything to your Wishlist yet.
                </p>

            </div>
        )
    }
    return (
        <Container>

            <div className="py-8 border-b border-gray-200 mb-8">
                <div className="flex items-end justify-between flex-wrap gap-3">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-1">
                            Your Collection
                        </p>
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                            Wishlist
                        </h1>
                    </div>
                    <span className="text-sm text-gray-500 pb-1">
                        {products.length} {products.length === 1 ? 'item' : 'items'} saved
                    </span>
                </div>
            </div>


            <GridLayout>
                {products?.map((product) => (
                    <GridItem key={product.productId}>
                        <WishlistItemCard product={product} />
                    </GridItem>
                ))};

            </GridLayout>


            <div className="mt-12 pb-10 text-center">
                <p className="text-xs text-gray-400">
                    Items in your wishlist are saved for you — prices and availability may change.
                </p>
            </div>
        </Container>
    )
}

export default WishlistPage