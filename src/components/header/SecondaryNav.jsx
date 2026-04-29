import React from 'react'

function SecondaryNav() {
    const categories = [
        "Smartphones",
        "Laptops",
        "Men",
        "Women",
        "Groceries",
        "Furniture",
    ];
    return (
        <div className="w-full bg-PrussainBlue text-White text-sm">
            <div className="flex items-center justify-center gap-6 px-4 h-10 overflow-x-auto whitespace-nowrap scrollbar-hide">

                {/* Optional: All button (like Amazon) */}
                <button className="font-semibold hover:underline">
                    All
                </button>

                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="hover:underline shrink-0"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SecondaryNav