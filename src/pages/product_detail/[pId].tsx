import React from 'react';
import { useRouter } from 'next/router'

const ProductDetail = () => {
    const router = useRouter()
    const { pId } = router.query
    return (
        <div>
            <p> this is product detail: {pId} </p>
        </div>
    );
};

export default ProductDetail;