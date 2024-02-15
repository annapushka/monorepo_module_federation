import { memo } from 'react';
import { shopRoutes } from '@packages/shared/src/routes/shop';
import { Link } from 'react-router-dom';
interface ShopProps {
}

const Shop = memo((props: ShopProps) => {
const {} = props;
    return (
        <h1>
             Shop
             <div>
                <Link to={shopRoutes.second}>go to second page</Link>
             </div>
        </h1>
    );
});

export default Shop;

